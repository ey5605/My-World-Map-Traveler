import React, { useEffect, useRef, useState, useMemo, useCallback } from 'react';
import * as d3Geo from 'd3-geo';
import * as d3Zoom from 'd3-zoom';
import * as d3Selection from 'd3-selection';
import 'd3-transition';
import { Country, Subdivision } from '../types';
import { COUNTRIES } from '../data/countries';
import { US_STATES, CA_PROVINCES, AU_STATES, EG_SUBDIVISIONS, OCEAN_THEMES, getOceanTheme } from '../data/subdivisions';
import {
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Compass,
  CheckCircle2,
  Circle,
  ChevronRight,
  Layers,
  Waves,
  Check
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface WorldMapProps {
  visitedCountrySet: Set<string>;
  visitedSubdivisionSet: Set<string>;
  isCountryVisited: (id: string) => boolean;
  isSubdivisionVisited: (id: string) => boolean;
  toggleCountry: (id: string) => void;
  toggleSubdivision: (subId: string, countryId: string) => void;
  onOpenRegionalModal: (country: Country) => void;
  highlightColor: string;
  oceanColor?: string;
  onSelectOceanColor?: (colorHex: string) => void;
  projectionType: 'naturalEarth' | 'mercator';
  onToggleProjection: () => void;
  focusedCountryId?: string | null;
}

interface HoveredFeature {
  id: string;
  nameHe: string;
  nameEn: string;
  flag?: string;
  isSubdivision: boolean;
  subdivisionNameHe?: string;
  subdivisionNameEn?: string;
  regionGroupNameHe?: string;
  parentCountryId?: string;
  parentCountryNameHe?: string;
  parentCountryNameEn?: string;
  isVisited: boolean;
  x: number;
  y: number;
}

export const WorldMap: React.FC<WorldMapProps> = ({
  visitedCountrySet,
  visitedSubdivisionSet,
  toggleCountry,
  toggleSubdivision,
  onOpenRegionalModal,
  highlightColor,
  oceanColor = '#080c14',
  onSelectOceanColor,
  projectionType,
  onToggleProjection,
  focusedCountryId
}) => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const gRef = useRef<SVGGElement | null>(null);
  const zoomBehaviorRef = useRef<d3Zoom.ZoomBehavior<SVGSVGElement, unknown> | null>(null);

  const [isLoading, setIsLoading] = useState(true);
  const [worldGeo, setWorldGeo] = useState<any>(null);
  const [usStatesGeo, setUsStatesGeo] = useState<any>(null);
  const [provincesGeo, setProvincesGeo] = useState<any>(null);

  const [hovered, setHovered] = useState<HoveredFeature | null>(null);
  const [currentZoom, setCurrentZoom] = useState(1);
  const [showOceanPicker, setShowOceanPicker] = useState(false);

  const oceanTheme = useMemo(() => getOceanTheme(oceanColor), [oceanColor]);

  // Map dimensions
  const width = 1000;
  const height = 540;

  // Load geojson data on mount
  useEffect(() => {
    let isMounted = true;
    const base = import.meta.env.BASE_URL || './';
    const cleanBase = base.endsWith('/') ? base : `${base}/`;

    Promise.all([
      fetch(`${cleanBase}data/world-countries.json`).then(r => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
      }),
      fetch(`${cleanBase}data/us-states.json`).then(r => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
      }),
      fetch(`${cleanBase}data/provinces.json`).then(r => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
      })
    ])
      .then(([world, us, prov]) => {
        if (isMounted) {
          setWorldGeo(world);
          setUsStatesGeo(us);
          setProvincesGeo(prov);
          setIsLoading(false);
        }
      })
      .catch(err => {
        console.error('Failed to load map data with base URL, attempting fallback:', err);
        // Fallback to relative path without prefix
        Promise.all([
          fetch('./data/world-countries.json').then(r => r.json()),
          fetch('./data/us-states.json').then(r => r.json()),
          fetch('./data/provinces.json').then(r => r.json())
        ])
          .then(([world, us, prov]) => {
            if (isMounted) {
              setWorldGeo(world);
              setUsStatesGeo(us);
              setProvincesGeo(prov);
              setIsLoading(false);
            }
          })
          .catch(fallbackErr => {
            console.error('Failed to load map data on fallback:', fallbackErr);
            if (isMounted) setIsLoading(false);
          });
      });

    return () => {
      isMounted = false;
    };
  }, []);

  // Set up projection & path generator
  const { projection, pathGenerator } = useMemo(() => {
    let proj: d3Geo.GeoProjection;
    if (projectionType === 'mercator') {
      proj = d3Geo.geoMercator()
        .scale(150)
        .translate([width / 2, height / 1.5]);
    } else {
      proj = d3Geo.geoNaturalEarth1()
        .scale(175)
        .translate([width / 2, height / 2]);
    }

    const path = d3Geo.geoPath().projection(proj);
    return { projection: proj, pathGenerator: path };
  }, [projectionType, width, height]);

  // Graticule grid lines
  const graticulePath = useMemo(() => {
    const graticule = d3Geo.geoGraticule10();
    return pathGenerator(graticule) || '';
  }, [pathGenerator]);

  // Lookups for quick metadata access
  const countryMap = useMemo(() => {
    const map = new Map<string, Country>();
    COUNTRIES.forEach(c => map.set(c.id, c));
    return map;
  }, []);

  const usStateMap = useMemo(() => {
    const map = new Map<string, Subdivision>();
    US_STATES.forEach(s => map.set(s.id, s));
    return map;
  }, []);

  const provinceMap = useMemo(() => {
    const map = new Map<string, Subdivision>();
    [...CA_PROVINCES, ...AU_STATES, ...EG_SUBDIVISIONS].forEach(s => map.set(s.id, s));
    return map;
  }, []);

  // Initialize D3 Zoom on the SVG
  useEffect(() => {
    if (!svgRef.current || !gRef.current) return;

    const svg = d3Selection.select(svgRef.current);
    const g = d3Selection.select(gRef.current);

    const zoom = d3Zoom.zoom<SVGSVGElement, unknown>()
      .scaleExtent([0.8, 25])
      .translateExtent([[-width * 0.5, -height * 0.5], [width * 1.5, height * 1.5]])
      .on('zoom', (event) => {
        g.attr('transform', event.transform.toString());
        setCurrentZoom(event.transform.k);
      });

    zoomBehaviorRef.current = zoom;
    svg.call(zoom);

    // Initial zoom state
    svg.call(zoom.transform, d3Zoom.zoomIdentity);

    return () => {
      svg.on('.zoom', null);
    };
  }, [isLoading, width, height]);

  // Pan to focused country if provided
  useEffect(() => {
    if (!focusedCountryId || !svgRef.current || !zoomBehaviorRef.current || !worldGeo) return;

    // Find country feature
    let targetFeature = worldGeo.features.find((f: any) => String(f.id) === focusedCountryId);

    if (targetFeature && pathGenerator) {
      const bounds = pathGenerator.bounds(targetFeature);
      const dx = bounds[1][0] - bounds[0][0];
      const dy = bounds[1][1] - bounds[0][1];
      const x = (bounds[0][0] + bounds[1][0]) / 2;
      const y = (bounds[0][1] + bounds[1][1]) / 2;
      const scale = Math.max(1, Math.min(10, 0.8 / Math.max(dx / width, dy / height)));
      const translate = [width / 2 - scale * x, height / 2 - scale * y];

      const svg = d3Selection.select(svgRef.current);
      svg.transition()
        .duration(800)
        .call(
          zoomBehaviorRef.current.transform,
          d3Zoom.zoomIdentity.translate(translate[0], translate[1]).scale(scale)
        );
    }
  }, [focusedCountryId, worldGeo, pathGenerator, width, height]);

  // Zoom controls
  const handleZoomIn = () => {
    if (!svgRef.current || !zoomBehaviorRef.current) return;
    d3Selection.select(svgRef.current).transition().duration(300).call(zoomBehaviorRef.current.scaleBy, 1.5);
  };

  const handleZoomOut = () => {
    if (!svgRef.current || !zoomBehaviorRef.current) return;
    d3Selection.select(svgRef.current).transition().duration(300).call(zoomBehaviorRef.current.scaleBy, 1 / 1.5);
  };

  const handleResetZoom = () => {
    if (!svgRef.current || !zoomBehaviorRef.current) return;
    d3Selection.select(svgRef.current).transition().duration(500).call(zoomBehaviorRef.current.transform, d3Zoom.zoomIdentity);
  };

  const handleFocusRegion = (xCenter: number, yCenter: number, scale: number) => {
    if (!svgRef.current || !zoomBehaviorRef.current) return;
    const translate = [width / 2 - scale * xCenter, height / 2 - scale * yCenter];
    d3Selection.select(svgRef.current)
      .transition()
      .duration(700)
      .call(
        zoomBehaviorRef.current.transform,
        d3Zoom.zoomIdentity.translate(translate[0], translate[1]).scale(scale)
      );
  };

  // Click on regular country
  const handleCountryClick = (countryId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const country = countryMap.get(countryId);
    if (!country) return;

    if (country.hasSubdivisions) {
      onOpenRegionalModal(country);
    } else {
      const wasVisited = visitedCountrySet.has(countryId);
      toggleCountry(countryId);
      if (!wasVisited) {
        confetti({
          particleCount: 30,
          spread: 50,
          origin: {
            x: e.clientX / window.innerWidth,
            y: e.clientY / window.innerHeight
          }
        });
      }
    }
  };

  // Click on US State or Province
  const handleSubdivisionClick = (subId: string, parentCountryId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const wasVisited = visitedSubdivisionSet.has(subId);
    toggleSubdivision(subId, parentCountryId);

    if (!wasVisited) {
      confetti({
        particleCount: 25,
        spread: 45,
        origin: {
          x: e.clientX / window.innerWidth,
          y: e.clientY / window.innerHeight
        }
      });
    }
  };

  // Feature hover handler
  const handleMouseMove = (featureInfo: Omit<HoveredFeature, 'x' | 'y'>, e: React.MouseEvent) => {
    const rect = svgRef.current?.getBoundingClientRect();
    if (!rect) return;
    setHovered({
      ...featureInfo,
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  return (
    <div
      id="world-map-container"
      className="relative w-full h-full min-h-[480px] overflow-hidden select-none touch-none flex flex-col justify-center items-center transition-colors duration-300"
      style={{ backgroundColor: oceanTheme.hex }}
    >
      {/* Ocean ambient overlay */}
      {oceanTheme.isLight ? (
        <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/60 via-transparent to-black/15" />
      ) : (
        <div className="absolute inset-0 pointer-events-none opacity-60 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900/40 via-transparent to-black/60" />
      )}

      {/* Loading Overlay */}
      {isLoading && (
        <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-slate-950/90 backdrop-blur-sm text-slate-300 gap-3">
          <div className="w-10 h-10 border-4 border-cyan-500/30 border-t-cyan-400 rounded-full animate-spin" />
          <span className="text-sm font-medium tracking-wide">טוען את מפת העולם והמחוזות...</span>
        </div>
      )}

      {/* SVG Map Canvas */}
      <svg
        ref={svgRef}
        id="world-map-svg"
        viewBox={`0 0 ${width} ${height}`}
        className="w-full h-full cursor-grab active:cursor-grabbing max-w-full"
        onMouseLeave={handleMouseLeave}
      >
        <defs>
          {/* Subtle glow filter for visited countries */}
          <filter id="visited-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="0" stdDeviation="2" floodColor={highlightColor} floodOpacity="0.55" />
          </filter>
        </defs>

        <g ref={gRef} id="map-zoom-group">
          {/* Ocean outline */}
          <rect
            x={-width}
            y={-height}
            width={width * 3}
            height={height * 3}
            fill={oceanTheme.hex}
            onClick={handleMouseLeave}
          />

          {/* Graticule lines (latitude & longitude) */}
          <path
            d={graticulePath}
            fill="none"
            stroke={oceanTheme.graticuleColor}
            strokeWidth="0.5"
            strokeDasharray="2 3"
            opacity={oceanTheme.graticuleOpacity}
            className="pointer-events-none"
          />

          {/* Base Countries (Except US, Canada, Australia which are drawn with subdivisions) */}
          {worldGeo &&
            worldGeo.features.map((feature: any, idx: number) => {
              let countryId = feature.id != null ? String(feature.id) : '';
              if (!countryId || countryId === 'undefined' || countryId === '-99') {
                const name = feature.properties?.name;
                if (name === 'Kosovo') countryId = '-99-kosovo';
                else if (name === 'N. Cyprus') countryId = '-99-n-cyprus';
                else if (name === 'Somaliland') countryId = '-99-somaliland';
                else if (name === 'Siachen Glacier') countryId = '-99-siachen';
                else if (name === 'Indian Ocean Ter.') countryId = '-99-iot';
                else countryId = `geo-feature-${idx}`;
              }

              // Skip USA, Canada, Australia, Egypt here as we render them via states/provinces/regions
              if (countryId === '840' || countryId === '124' || countryId === '036' || countryId === '818') {
                return null;
              }

              const country = countryMap.get(countryId);
              const isVisited = visitedCountrySet.has(countryId);
              const path = pathGenerator(feature);
              if (!path) return null;

              const isHovered = hovered?.id === countryId;

              return (
                <path
                  key={`country-${countryId}-${idx}`}
                  id={`country-path-${countryId}`}
                  d={path}
                  fill={isVisited ? highlightColor : isHovered ? oceanTheme.landHoverFill : oceanTheme.landFill}
                  stroke={isVisited ? highlightColor : isHovered ? oceanTheme.landHoverStroke : oceanTheme.landStroke}
                  strokeWidth={isHovered ? 1.5 : 0.6}
                  filter={isVisited ? 'url(#visited-glow)' : undefined}
                  className="transition-colors duration-150 cursor-pointer"
                  onClick={e => handleCountryClick(countryId, e)}
                  onMouseMove={e =>
                    handleMouseMove(
                      {
                        id: countryId,
                        nameHe: country?.nameHe || feature.properties?.name || 'מדינה',
                        nameEn: country?.nameEn || feature.properties?.name || '',
                        flag: country?.flag || '🌐',
                        isSubdivision: false,
                        isVisited
                      },
                      e
                    )
                  }
                  onMouseLeave={handleMouseLeave}
                />
              );
            })}

          {/* US States Subdivisions (High Resolution for USA) */}
          {usStatesGeo &&
            usStatesGeo.features.map((feature: any, idx: number) => {
              const subId = `US-${feature.id}`;
              const stateInfo = usStateMap.get(subId);
              const isVisited = visitedSubdivisionSet.has(subId);
              const path = pathGenerator(feature);
              if (!path) return null;

              const isHovered = hovered?.id === subId;

              return (
                <path
                  key={`us-state-${subId}-${idx}`}
                  id={`us-state-path-${subId}`}
                  d={path}
                  fill={isVisited ? highlightColor : isHovered ? oceanTheme.landHoverFill : oceanTheme.landFill}
                  stroke={isVisited ? highlightColor : isHovered ? '#94a3b8' : '#475569'}
                  strokeWidth={isHovered ? 1.4 : 0.6}
                  filter={isVisited ? 'url(#visited-glow)' : undefined}
                  className="transition-colors duration-150 cursor-pointer"
                  onClick={e => handleSubdivisionClick(subId, '840', e)}
                  onMouseMove={e =>
                    handleMouseMove(
                      {
                        id: subId,
                        nameHe: stateInfo ? `${stateInfo.nameHe} (${stateInfo.regionGroupNameHe})` : 'ארה״ב',
                        nameEn: stateInfo?.nameEn || 'US State',
                        flag: '🇺🇸',
                        isSubdivision: true,
                        subdivisionNameHe: stateInfo?.nameHe,
                        subdivisionNameEn: stateInfo?.nameEn,
                        regionGroupNameHe: stateInfo?.regionGroupNameHe,
                        parentCountryId: '840',
                        parentCountryNameHe: 'ארצות הברית',
                        parentCountryNameEn: 'United States',
                        isVisited
                      },
                      e
                    )
                  }
                  onMouseLeave={handleMouseLeave}
                />
              );
            })}

          {/* Canada & Australia Provinces / Territories */}
          {provincesGeo &&
            provincesGeo.features.map((feature: any, idx: number) => {
              const subId = feature.id;
              const country = feature.properties?.country;
              const parentCountryId = country === 'Canada' ? '124' : country === 'Australia' ? '036' : country === 'Egypt' ? '818' : null;
              if (!parentCountryId) return null;

              const provInfo = provinceMap.get(subId);
              const isVisited = visitedSubdivisionSet.has(subId);
              const path = pathGenerator(feature);
              if (!path) return null;

              const isHovered = hovered?.id === subId;
              const flag = parentCountryId === '124' ? '🇨🇦' : parentCountryId === '036' ? '🇦🇺' : '🇪🇬';
              const parentNameHe = parentCountryId === '124' ? 'קנדה' : parentCountryId === '036' ? 'אוסטרליה' : 'מצרים';
              const parentNameEn = parentCountryId === '124' ? 'Canada' : parentCountryId === '036' ? 'Australia' : 'Egypt';

              return (
                <path
                  key={`prov-${subId}-${idx}`}
                  id={`prov-path-${subId}`}
                  d={path}
                  fill={isVisited ? highlightColor : isHovered ? oceanTheme.landHoverFill : oceanTheme.landFill}
                  stroke={isVisited ? highlightColor : isHovered ? '#94a3b8' : '#475569'}
                  strokeWidth={isHovered ? 1.4 : 0.6}
                  filter={isVisited ? 'url(#visited-glow)' : undefined}
                  className="transition-colors duration-150 cursor-pointer"
                  onClick={e => handleSubdivisionClick(subId, parentCountryId, e)}
                  onMouseMove={e =>
                    handleMouseMove(
                      {
                        id: subId,
                        nameHe: provInfo?.nameHe || feature.properties.name,
                        nameEn: provInfo?.nameEn || feature.properties.name,
                        flag,
                        isSubdivision: true,
                        subdivisionNameHe: provInfo?.nameHe || feature.properties.name,
                        subdivisionNameEn: provInfo?.nameEn || feature.properties.name,
                        regionGroupNameHe: provInfo?.regionGroupNameHe,
                        parentCountryId,
                        parentCountryNameHe: parentNameHe,
                        parentCountryNameEn: parentNameEn,
                        isVisited
                      },
                      e
                    )
                  }
                  onMouseLeave={handleMouseLeave}
                />
              );
            })}
        </g>
      </svg>

      {/* Floating Hover Tooltip */}
      {hovered && (
        <div
          id="map-hover-tooltip"
          className="absolute z-40 pointer-events-none transform -translate-x-1/2 -translate-y-full mb-3 px-3 py-2 bg-slate-900/95 border border-slate-700/90 rounded-xl shadow-xl backdrop-blur-md text-slate-100 text-xs text-right whitespace-nowrap min-w-[150px] animate-in fade-in zoom-in-95 duration-100"
          style={{
            left: `${Math.min(Math.max(hovered.x, 80), width - 80)}px`,
            top: `${Math.max(hovered.y - 12, 40)}px`
          }}
          dir="rtl"
        >
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xl">{hovered.flag}</span>
            <div>
              <div className="font-bold text-sm text-white">
                {hovered.isSubdivision ? hovered.subdivisionNameHe : hovered.nameHe}
              </div>
              <div className="text-[10px] text-slate-400">
                {hovered.isSubdivision
                  ? `${hovered.subdivisionNameEn} • ${hovered.parentCountryNameHe}`
                  : hovered.nameEn}
              </div>
            </div>
          </div>

          {hovered.regionGroupNameHe && (
            <div className="text-[11px] text-cyan-300 font-medium pb-1">
              אזור: {hovered.regionGroupNameHe}
            </div>
          )}

          <div className="flex items-center justify-between gap-3 pt-1 border-t border-slate-800 text-[11px]">
            <span className="flex items-center gap-1 font-semibold">
              {hovered.isVisited ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span style={{ color: highlightColor }}>ביקרת כאן ✓</span>
                </>
              ) : (
                <>
                  <Circle className="w-3.5 h-3.5 text-slate-500" />
                  <span className="text-slate-400">טרם ביקרת</span>
                </>
              )}
            </span>
            <span className="text-[10px] text-slate-500">לחץ לסימון / פירוט</span>
          </div>
        </div>
      )}

      {/* Floating Map Zoom & Action Controls (Bottom-Right) */}
      <div
        id="map-floating-controls"
        className="absolute bottom-4 right-4 z-20 flex flex-col gap-1.5 bg-slate-900/90 border border-slate-800/90 rounded-2xl p-1.5 shadow-2xl backdrop-blur-md"
        dir="ltr"
      >
        <button
          id="zoom-in-btn"
          onClick={handleZoomIn}
          className="p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-xl transition-all cursor-pointer"
          title="זום פנימה (+)"
          aria-label="זום פנימה"
        >
          <ZoomIn className="w-5 h-5" />
        </button>

        <button
          id="zoom-out-btn"
          onClick={handleZoomOut}
          className="p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-xl transition-all cursor-pointer"
          title="זום החוצה (-)"
          aria-label="זום החוצה"
        >
          <ZoomOut className="w-5 h-5" />
        </button>

        <div className="h-px bg-slate-800 my-0.5" />

        <button
          id="reset-view-btn"
          onClick={handleResetZoom}
          className="p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-xl transition-all cursor-pointer"
          title="איפוס מפה למרכז"
          aria-label="איפוס מפה למרכז"
        >
          <RotateCcw className="w-5 h-5" />
        </button>

        <button
          id="toggle-projection-btn"
          onClick={onToggleProjection}
          className="p-2 text-slate-300 hover:text-cyan-400 hover:bg-slate-800 rounded-xl transition-all cursor-pointer"
          title={`החלף היטל מפה (נוכחי: ${projectionType === 'naturalEarth' ? 'גלובלי טבעי' : 'מרקטור'})`}
          aria-label="החלף היטל מפה"
        >
          <Compass className="w-5 h-5" />
        </button>

        <div className="h-px bg-slate-800 my-0.5" />

        <div className="relative">
          <button
            id="toggle-ocean-color-btn"
            onClick={() => setShowOceanPicker(!showOceanPicker)}
            className={`p-2 rounded-xl transition-all cursor-pointer ${
              showOceanPicker ? 'bg-cyan-500/20 text-cyan-400' : 'text-slate-300 hover:text-cyan-400 hover:bg-slate-800'
            }`}
            title="בחירת צבע רקע לים (אוקיינוס)"
            aria-label="בחירת צבע רקע לים"
          >
            <Waves className="w-5 h-5" />
          </button>

          {/* Floating Ocean Color Popover */}
          {showOceanPicker && (
            <div
              id="map-ocean-picker-popover"
              className="absolute bottom-0 right-full mr-3 bg-slate-900/95 border border-slate-700/90 rounded-2xl p-3 shadow-2xl backdrop-blur-md text-slate-100 text-xs min-w-[220px] animate-in fade-in zoom-in-95 duration-150 z-30"
              dir="rtl"
            >
              <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-slate-200 font-semibold">
                <span className="flex items-center gap-1.5">
                  <Waves className="w-3.5 h-3.5 text-cyan-400" />
                  צבע רקע לים:
                </span>
                <button
                  onClick={() => setShowOceanPicker(false)}
                  className="text-slate-400 hover:text-white p-0.5 rounded cursor-pointer"
                  title="סגור"
                >
                  ✕
                </button>
              </div>
              <div className="flex items-center justify-between gap-1.5 pt-2.5">
                {OCEAN_THEMES.map(theme => {
                  const isSelected = oceanColor.toLowerCase() === theme.hex.toLowerCase();
                  return (
                    <button
                      key={theme.id}
                      id={`map-ocean-theme-${theme.id}`}
                      onClick={() => onSelectOceanColor?.(theme.hex)}
                      className={`w-7 h-7 rounded-full border transition-all cursor-pointer flex items-center justify-center ${
                        isSelected
                          ? 'scale-110 ring-2 ring-cyan-400 ring-offset-2 ring-offset-slate-900 border-white'
                          : 'border-slate-700 opacity-75 hover:opacity-100 hover:scale-105'
                      }`}
                      style={{ backgroundColor: theme.hex }}
                      title={`${theme.nameHe} (${theme.nameEn})`}
                    >
                      {isSelected && (
                        <Check className={`w-3.5 h-3.5 stroke-[3] ${theme.isLight ? 'text-slate-900' : 'text-white'}`} />
                      )}
                    </button>
                  );
                })}
              </div>
              <div className="text-[11px] text-slate-400 text-center pt-2 font-medium">
                {oceanTheme.nameHe}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Quick Region Jump Pills (Top-Center / Left) */}
      <div
        id="quick-region-pills"
        className="absolute top-3 left-3 z-20 hidden sm:flex items-center gap-1.5 bg-slate-900/80 border border-slate-800/80 rounded-xl p-1 shadow-lg backdrop-blur-md text-xs"
        dir="rtl"
      >
        <span className="text-[11px] text-slate-400 px-2 flex items-center gap-1">
          <Layers className="w-3.5 h-3.5 text-cyan-400" />
          קפיצה מהירה:
        </span>
        <button
          onClick={() => handleFocusRegion(580, 260, 4.5)}
          className="px-2.5 py-1 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-200 transition-colors cursor-pointer"
        >
          🇮🇱 ישראל והאזור
        </button>
        <button
          onClick={() => handleFocusRegion(260, 220, 2.5)}
          className="px-2.5 py-1 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-200 transition-colors cursor-pointer"
        >
          🇺🇸 ארה״ב ומחוזות
        </button>
        <button
          onClick={() => handleFocusRegion(520, 190, 3)}
          className="px-2.5 py-1 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-200 transition-colors cursor-pointer"
        >
          🇪🇺 אירופה
        </button>
        <button
          onClick={handleResetZoom}
          className="px-2.5 py-1 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-200 transition-colors cursor-pointer"
        >
          🌍 כל העולם
        </button>
      </div>

      {/* Touch & Zoom Guidance Tip */}
      <div className="absolute bottom-3 left-3 z-10 pointer-events-none hidden md:flex items-center gap-2 text-[11px] text-slate-500 bg-slate-950/70 px-2.5 py-1 rounded-md border border-slate-900">
        <span>גלגל עכבר / צביטת אצבע לזום • גרירה לתנועה במפה • לחיצה לסימון ביקור</span>
      </div>
    </div>
  );
};
