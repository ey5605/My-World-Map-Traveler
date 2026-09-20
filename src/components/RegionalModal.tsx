import React, { useState } from 'react';
import { Country, RegionGroup, Subdivision } from '../types';
import { REGION_GROUPS, US_STATES, CA_PROVINCES, AU_STATES } from '../data/subdivisions';
import { Check, ChevronDown, ChevronUp, MapPin, Search, Sparkles, X } from 'lucide-react';
import confetti from 'canvas-confetti';

interface RegionalModalProps {
  country: Country;
  isOpen: boolean;
  onClose: () => void;
  visitedSubdivisionSet: Set<string>;
  toggleSubdivision: (subId: string, countryId: string) => void;
  toggleRegionGroup: (groupId: string) => void;
  toggleCountry: (countryId: string) => void;
  highlightColor: string;
}

export const RegionalModal: React.FC<RegionalModalProps> = ({
  country,
  isOpen,
  onClose,
  visitedSubdivisionSet,
  toggleSubdivision,
  toggleRegionGroup,
  toggleCountry,
  highlightColor
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedRegions, setExpandedRegions] = useState<Record<string, boolean>>({
    us_west_coast: true,
    us_east_coast: true,
    us_alaska: true,
    us_hawaii: true
  });

  if (!isOpen) return null;

  // Get relevant subdivisions and region groups for this country
  let countrySubs: Subdivision[] = [];
  if (country.id === '840') {
    countrySubs = US_STATES;
  } else if (country.id === '124') {
    countrySubs = CA_PROVINCES;
  } else if (country.id === '036') {
    countrySubs = AU_STATES;
  }

  const countryRegionGroups: RegionGroup[] = REGION_GROUPS.filter(g => g.countryId === country.id);

  // Calculate statistics
  const visitedSubsCount = countrySubs.filter(s => visitedSubdivisionSet.has(s.id)).length;
  const isFullyVisited = countrySubs.length > 0 && visitedSubsCount === countrySubs.length;

  const toggleExpand = (groupId: string) => {
    setExpandedRegions(prev => ({
      ...prev,
      [groupId]: !prev[groupId]
    }));
  };

  const handleToggleRegion = (groupId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    toggleRegionGroup(groupId);
    confetti({
      particleCount: 25,
      spread: 40,
      origin: { y: 0.6 }
    });
  };

  const handleToggleAllCountry = () => {
    toggleCountry(country.id);
    if (!isFullyVisited) {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.5 }
      });
    }
  };

  // Filter groups or subdivisions if search query is present
  const query = searchQuery.trim().toLowerCase();
  const filteredGroups = countryRegionGroups.filter(g => {
    if (!query) return true;
    if (g.nameHe.toLowerCase().includes(query) || g.nameEn.toLowerCase().includes(query)) return true;
    // Check if any child matches
    return g.subdivisionIds.some(subId => {
      const sub = countrySubs.find(s => s.id === subId);
      return sub && (sub.nameHe.toLowerCase().includes(query) || sub.nameEn.toLowerCase().includes(query) || sub.code.toLowerCase().includes(query));
    });
  });

  return (
    <div
      id="regional-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="regional-modal-container"
        className="relative w-full max-w-2xl max-h-[90vh] flex flex-col bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden text-slate-100"
        onClick={e => e.stopPropagation()}
        dir="rtl"
      >
        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-slate-800 bg-slate-950/60 flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="text-3xl sm:text-4xl">{country.flag}</span>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {country.nameHe}
                </h2>
                <span className="text-xs text-slate-400 font-medium px-2 py-0.5 rounded bg-slate-800">
                  {country.nameEn}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-cyan-400 inline" />
                <span>
                  ביקרת ב-
                  <strong className="text-white mx-1">{visitedSubsCount}</strong>
                  מתוך {countrySubs.length} מחוזות / מדינות ({Math.round((visitedSubsCount / Math.max(1, countrySubs.length)) * 100)}%)
                </span>
              </p>
            </div>
          </div>

          <button
            id="close-regional-modal-btn"
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
            aria-label="סגור חלון"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Action Controls & Search */}
        <div className="p-3 sm:p-4 bg-slate-900/90 border-b border-slate-800/80 flex flex-wrap gap-2.5 items-center justify-between">
          <div className="relative flex-1 min-w-[200px]">
            <Search className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="חיפוש אזור או מדינה (לדוגמה: ניו יורק, אלסקה, קליפורניה)..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-3 pr-9 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs sm:text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
            />
          </div>

          <button
            id="toggle-entire-country-btn"
            onClick={handleToggleAllCountry}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
              isFullyVisited
                ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30 hover:bg-rose-500/30'
                : 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-500/30'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{isFullyVisited ? 'בטל את כל המדינה' : 'סמן את כל המדינה'}</span>
          </button>
        </div>

        {/* Region Groups & Subdivisions List */}
        <div className="flex-1 overflow-y-auto p-3 sm:p-5 space-y-3 custom-scrollbar">
          {filteredGroups.length === 0 ? (
            <div className="text-center py-10 text-slate-500 text-sm">
              לא נמצאו תוצאות עבור &quot;{searchQuery}&quot;
            </div>
          ) : (
            filteredGroups.map(group => {
              const groupSubs = countrySubs.filter(s => group.subdivisionIds.includes(s.id));
              const visitedInGroup = groupSubs.filter(s => visitedSubdivisionSet.has(s.id)).length;
              const isGroupAllVisited = groupSubs.length > 0 && visitedInGroup === groupSubs.length;
              const isGroupPartial = visitedInGroup > 0 && !isGroupAllVisited;
              const isExpanded = expandedRegions[group.id] || Boolean(query);

              return (
                <div
                  key={group.id}
                  id={`region-group-${group.id}`}
                  className="bg-slate-950/80 border border-slate-800/80 rounded-xl overflow-hidden transition-all duration-150 hover:border-slate-700"
                >
                  {/* Group Header Bar */}
                  <div
                    className="p-3 sm:p-3.5 flex items-center justify-between gap-3 cursor-pointer select-none bg-slate-900/50 hover:bg-slate-800/40 transition-colors"
                    onClick={() => toggleExpand(group.id)}
                  >
                    <div className="flex items-center gap-2.5 flex-1">
                      <span className="text-xl sm:text-2xl">{group.icon}</span>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-sm sm:text-base font-semibold text-slate-100">
                            {group.nameHe}
                          </h3>
                        </div>
                        <span className="text-xs text-slate-400">
                          {visitedInGroup} מתוך {groupSubs.length} מחוזות סומנו
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      {/* Quick Region Toggle Button */}
                      <button
                        id={`toggle-group-btn-${group.id}`}
                        onClick={e => handleToggleRegion(group.id, e)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                          isGroupAllVisited
                            ? 'text-black shadow-sm'
                            : isGroupPartial
                            ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                            : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700'
                        }`}
                        style={
                          isGroupAllVisited
                            ? { backgroundColor: highlightColor, color: '#000' }
                            : undefined
                        }
                      >
                        {isGroupAllVisited ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>סומן הכל</span>
                          </>
                        ) : isGroupPartial ? (
                          <span>השלם אזור ({visitedInGroup}/{groupSubs.length})</span>
                        ) : (
                          <span>סמן אזור</span>
                        )}
                      </button>

                      {/* Expand/Collapse Chevron */}
                      <button
                        className="p-1 text-slate-400 hover:text-slate-200"
                        aria-label="הרחב או צמצם אזור"
                      >
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  {/* Individual Subdivisions Chips */}
                  {isExpanded && (
                    <div className="p-3 border-t border-slate-800/80 bg-slate-950/40 grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {groupSubs.map(sub => {
                        const isVisited = visitedSubdivisionSet.has(sub.id);
                        return (
                          <button
                            key={sub.id}
                            id={`subdivision-item-${sub.id}`}
                            onClick={() => toggleSubdivision(sub.id, country.id)}
                            className={`flex items-center justify-between p-2.5 rounded-lg text-xs sm:text-sm text-right transition-all cursor-pointer border ${
                              isVisited
                                ? 'bg-slate-900 border-slate-700 shadow-sm'
                                : 'bg-slate-900/40 border-slate-800/60 text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'
                            }`}
                          >
                            <div className="flex items-center gap-2">
                              {sub.icon && <span>{sub.icon}</span>}
                              <div>
                                <div className="font-medium text-slate-200">
                                  {sub.nameHe}
                                </div>
                                <div className="text-[11px] text-slate-400">
                                  {sub.nameEn} ({sub.code})
                                </div>
                              </div>
                            </div>

                            <div
                              className={`w-5 h-5 rounded-md flex items-center justify-center border transition-all ${
                                isVisited
                                  ? 'border-transparent text-black'
                                  : 'border-slate-700 bg-slate-800'
                              }`}
                              style={isVisited ? { backgroundColor: highlightColor } : undefined}
                            >
                              {isVisited && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-3 sm:p-4 bg-slate-950/90 border-t border-slate-800 flex items-center justify-between">
          <span className="text-xs text-slate-400">
            השינויים נשמרים אוטומטית בזכרון המכשיר
          </span>
          <button
            id="done-regional-modal-btn"
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-colors cursor-pointer"
          >
            סיום וחזרה למפה
          </button>
        </div>
      </div>
    </div>
  );
};
