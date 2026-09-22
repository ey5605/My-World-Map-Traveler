import { useState, useEffect, useCallback, useMemo } from 'react';
import { VisitedStorageData } from '../types';
import { ALL_SUBDIVISIONS, REGION_GROUPS, HIGHLIGHT_THEMES, OCEAN_THEMES } from '../data/subdivisions';

const STORAGE_KEY = 'world_travel_tracker_v1';

const DEFAULT_DATA: VisitedStorageData = {
  visitedCountryIds: [],
  visitedSubdivisionIds: [],
  highlightColor: HIGHLIGHT_THEMES[0].hex,
  oceanColor: OCEAN_THEMES[2].hex,
  projection: 'naturalEarth',
  version: 1
};

export function useTravelStorage() {
  const [storageData, setStorageData] = useState<VisitedStorageData>(() => {
    try {
      const item = localStorage.getItem(STORAGE_KEY);
      if (item) {
        const parsed = JSON.parse(item);
        const subIds: string[] = Array.isArray(parsed.visitedSubdivisionIds) ? parsed.visitedSubdivisionIds : [];
        let countryIds: string[] = Array.isArray(parsed.visitedCountryIds) ? parsed.visitedCountryIds : [];

        // Ensure countries with subdivisions are only in countryIds if they actually have visited subdivisions
        const countriesWithSubs = ['840', '124', '036', '818', '643', '156', '076', '356', '826', '250', '380'];
        for (const cid of countriesWithSubs) {
          const subs = ALL_SUBDIVISIONS.filter(s => s.countryId === cid);
          const hasVisitedSub = subs.some(s => subIds.includes(s.id));
          if (countryIds.includes(cid) && !hasVisitedSub) {
            // If the country was marked visited prior to subdivision support, mark its subdivisions as visited
            subs.forEach(s => {
              if (!subIds.includes(s.id)) subIds.push(s.id);
            });
          } else if (!hasVisitedSub) {
            countryIds = countryIds.filter(id => id !== cid);
          } else if (!countryIds.includes(cid)) {
            countryIds.push(cid);
          }
        }

        return {
          ...DEFAULT_DATA,
          ...parsed,
          visitedCountryIds: countryIds,
          visitedSubdivisionIds: subIds
        };
      }
    } catch (e) {
      console.error('Failed to parse travel tracker storage', e);
    }
    return DEFAULT_DATA;
  });

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(storageData));
    } catch (e) {
      console.error('Failed to persist travel tracker data', e);
    }
  }, [storageData]);

  // Set of country IDs for O(1) lookup
  const visitedCountrySet = useMemo(() => {
    return new Set(storageData.visitedCountryIds);
  }, [storageData.visitedCountryIds]);

  // Set of subdivision IDs for O(1) lookup
  const visitedSubdivisionSet = useMemo(() => {
    return new Set(storageData.visitedSubdivisionIds);
  }, [storageData.visitedSubdivisionIds]);

  const isCountryVisited = useCallback((countryId: string) => {
    return visitedCountrySet.has(countryId);
  }, [visitedCountrySet]);

  const isSubdivisionVisited = useCallback((subdivisionId: string) => {
    return visitedSubdivisionSet.has(subdivisionId);
  }, [visitedSubdivisionSet]);

  // Check if country is fully or partially visited
  const getCountryVisitedStatus = useCallback((countryId: string): 'full' | 'partial' | 'none' => {
    const countrySubdivisions = ALL_SUBDIVISIONS.filter(s => s.countryId === countryId);
    if (countrySubdivisions.length === 0) {
      return visitedCountrySet.has(countryId) ? 'full' : 'none';
    }

    const visitedCount = countrySubdivisions.filter(s => visitedSubdivisionSet.has(s.id)).length;
    if (visitedCount === 0) {
      return 'none';
    }
    if (visitedCount === countrySubdivisions.length) {
      return 'full';
    }
    return 'partial';
  }, [visitedCountrySet, visitedSubdivisionSet]);

  // Toggle single country (or all subdivisions of a country)
  const toggleCountry = useCallback((countryId: string) => {
    setStorageData(prev => {
      const subs = ALL_SUBDIVISIONS.filter(s => s.countryId === countryId);
      if (subs.length > 0) {
        const subIds = subs.map(s => s.id);
        const allSubsVisited = subIds.every(id => prev.visitedSubdivisionIds.includes(id));
        let newSubIds = [...prev.visitedSubdivisionIds];
        let newCountryIds = [...prev.visitedCountryIds];

        if (allSubsVisited) {
          // Unmark all its subdivisions
          newSubIds = newSubIds.filter(id => !subIds.includes(id));
          newCountryIds = newCountryIds.filter(id => id !== countryId);
        } else {
          // Mark all its subdivisions
          const missing = subIds.filter(id => !newSubIds.includes(id));
          newSubIds.push(...missing);
          if (!newCountryIds.includes(countryId)) {
            newCountryIds.push(countryId);
          }
        }

        return {
          ...prev,
          visitedCountryIds: newCountryIds,
          visitedSubdivisionIds: newSubIds
        };
      }

      const exists = prev.visitedCountryIds.includes(countryId);
      const newCountryIds = exists
        ? prev.visitedCountryIds.filter(id => id !== countryId)
        : [...prev.visitedCountryIds, countryId];

      return {
        ...prev,
        visitedCountryIds: newCountryIds,
        visitedSubdivisionIds: prev.visitedSubdivisionIds
      };
    });
  }, []);

  // Toggle single subdivision (e.g. state or province)
  const toggleSubdivision = useCallback((subId: string, parentCountryId: string) => {
    setStorageData(prev => {
      const exists = prev.visitedSubdivisionIds.includes(subId);
      const newSubIds = exists
        ? prev.visitedSubdivisionIds.filter(id => id !== subId)
        : [...prev.visitedSubdivisionIds, subId];

      const parentSubs = ALL_SUBDIVISIONS.filter(s => s.countryId === parentCountryId);
      const anyRemaining = parentSubs.some(s => newSubIds.includes(s.id));

      let newCountryIds = [...prev.visitedCountryIds];
      if (anyRemaining) {
        if (!newCountryIds.includes(parentCountryId)) {
          newCountryIds.push(parentCountryId);
        }
      } else {
        newCountryIds = newCountryIds.filter(id => id !== parentCountryId);
      }

      return {
        ...prev,
        visitedCountryIds: newCountryIds,
        visitedSubdivisionIds: newSubIds
      };
    });
  }, []);

  // Toggle entire region group (e.g., US West Coast, East Coast, Alaska, Hawaii)
  const toggleRegionGroup = useCallback((regionGroupId: string) => {
    const group = REGION_GROUPS.find(g => g.id === regionGroupId);
    if (!group) return;

    setStorageData(prev => {
      const allActive = group.subdivisionIds.every(id => prev.visitedSubdivisionIds.includes(id));
      let newSubIds = [...prev.visitedSubdivisionIds];

      if (allActive) {
        // Unmark all in this region group
        newSubIds = newSubIds.filter(id => !group.subdivisionIds.includes(id));
      } else {
        // Mark all in this region group
        group.subdivisionIds.forEach(id => {
          if (!newSubIds.includes(id)) {
            newSubIds.push(id);
          }
        });
      }

      // Check parent country status
      const parentSubs = ALL_SUBDIVISIONS.filter(s => s.countryId === group.countryId);
      const anyActive = parentSubs.some(s => newSubIds.includes(s.id));
      let newCountryIds = [...prev.visitedCountryIds];
      if (anyActive) {
        if (!newCountryIds.includes(group.countryId)) {
          newCountryIds.push(group.countryId);
        }
      } else {
        newCountryIds = newCountryIds.filter(id => id !== group.countryId);
      }

      return {
        ...prev,
        visitedCountryIds: newCountryIds,
        visitedSubdivisionIds: newSubIds
      };
    });
  }, []);

  // Set custom standout highlight color
  const setHighlightColor = useCallback((colorHex: string) => {
    setStorageData(prev => ({
      ...prev,
      highlightColor: colorHex
    }));
  }, []);

  // Set ocean background color
  const setOceanColor = useCallback((colorHex: string) => {
    setStorageData(prev => ({
      ...prev,
      oceanColor: colorHex
    }));
  }, []);

  // Set map projection
  const setProjection = useCallback((proj: 'naturalEarth' | 'mercator') => {
    setStorageData(prev => ({
      ...prev,
      projection: proj
    }));
  }, []);

  // Clear all
  const resetAll = useCallback(() => {
    const freshData: VisitedStorageData = {
      visitedCountryIds: [],
      visitedSubdivisionIds: [],
      highlightColor: HIGHLIGHT_THEMES[0].hex,
      oceanColor: OCEAN_THEMES[2].hex,
      projection: 'naturalEarth',
      version: 1
    };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(freshData));
    } catch (e) {
      console.error('Failed to clear storage', e);
    }
    setStorageData(freshData);
  }, []);

  // Export JSON
  const exportData = useCallback(() => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(storageData, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `world-travel-tracker-${new Date().toISOString().split('T')[0]}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  }, [storageData]);

  // Import JSON
  const importData = useCallback((jsonString: string): boolean => {
    try {
      const parsed = JSON.parse(jsonString);
      if (Array.isArray(parsed.visitedCountryIds)) {
        setStorageData({
          ...DEFAULT_DATA,
          ...parsed,
          visitedCountryIds: parsed.visitedCountryIds,
          visitedSubdivisionIds: Array.isArray(parsed.visitedSubdivisionIds) ? parsed.visitedSubdivisionIds : []
        });
        return true;
      }
    } catch (e) {
      console.error('Import error', e);
    }
    return false;
  }, []);

  return {
    storageData,
    visitedCountrySet,
    visitedSubdivisionSet,
    isCountryVisited,
    isSubdivisionVisited,
    getCountryVisitedStatus,
    toggleCountry,
    toggleSubdivision,
    toggleRegionGroup,
    setHighlightColor,
    setOceanColor,
    setProjection,
    resetAll,
    exportData,
    importData,
    totalVisitedCountries: storageData.visitedCountryIds.length,
    totalVisitedSubdivisions: storageData.visitedSubdivisionIds.length
  };
}
