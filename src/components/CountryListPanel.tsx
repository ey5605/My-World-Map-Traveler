import React, { useState, useMemo } from 'react';
import { Country } from '../types';
import { COUNTRIES, CONTINENTS } from '../data/countries';
import { HIGHLIGHT_THEMES, OCEAN_THEMES, getOceanTheme, US_STATES, CA_PROVINCES, AU_STATES } from '../data/subdivisions';
import {
  Search,
  Check,
  MapPin,
  Palette,
  Sparkles,
  Download,
  Upload,
  RotateCcw,
  Layers,
  ChevronLeft,
  SlidersHorizontal,
  X,
  AlertTriangle,
  Waves
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface CountryListPanelProps {
  visitedCountrySet: Set<string>;
  visitedSubdivisionSet: Set<string>;
  getCountryVisitedStatus: (countryId: string) => 'full' | 'partial' | 'none';
  toggleCountry: (countryId: string) => void;
  onOpenRegionalModal: (country: Country) => void;
  onFocusCountry: (countryId: string) => void;
  highlightColor: string;
  onSelectHighlightColor: (hex: string) => void;
  oceanColor?: string;
  onSelectOceanColor: (hex: string) => void;
  onResetAll: () => void;
  onExportData: () => void;
  onImportData: (json: string) => boolean;
  isOpen: boolean;
  onCloseMobile: () => void;
}

export const CountryListPanel: React.FC<CountryListPanelProps> = ({
  visitedCountrySet,
  visitedSubdivisionSet,
  getCountryVisitedStatus,
  toggleCountry,
  onOpenRegionalModal,
  onFocusCountry,
  highlightColor,
  onSelectHighlightColor,
  oceanColor = '#080c14',
  onSelectOceanColor,
  onResetAll,
  onExportData,
  onImportData,
  isOpen,
  onCloseMobile
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'visited' | 'unvisited'>('all');
  const [continentFilter, setContinentFilter] = useState<string>('all');
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [confirmReset, setConfirmReset] = useState(false);
  const [toastMessage, setToastMessage] = useState<{ text: string; type: 'success' | 'error' | 'info' } | null>(null);

  const showToast = (text: string, type: 'success' | 'error' | 'info' = 'success') => {
    setToastMessage({ text, type });
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  // Stats calculation
  const totalCountries = COUNTRIES.length;
  const visitedCount = visitedCountrySet.size;
  const percentage = Math.round((visitedCount / Math.max(1, totalCountries)) * 100);

  // Total subdivisions visited
  const totalVisitedSubs = visitedSubdivisionSet.size;

  // Filtered country list
  const filteredCountries = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return COUNTRIES.filter(country => {
      // Status filter
      const status = getCountryVisitedStatus(country.id);
      if (statusFilter === 'visited' && status === 'none') return false;
      if (statusFilter === 'unvisited' && status !== 'none') return false;

      // Continent filter
      if (continentFilter !== 'all') {
        if (continentFilter === 'אמריקה') {
          if (country.continent !== 'צפון אמריקה' && country.continent !== 'דרום אמריקה') {
            return false;
          }
        } else if (country.continent !== continentFilter) {
          return false;
        }
      }

      // Search query
      if (!query) return true;
      return (
        country.nameHe.toLowerCase().includes(query) ||
        country.nameEn.toLowerCase().includes(query) ||
        country.code2.toLowerCase().includes(query) ||
        country.code3.toLowerCase().includes(query)
      );
    });
  }, [searchQuery, statusFilter, continentFilter, getCountryVisitedStatus]);

  const handleCountryToggle = (country: Country, e: React.MouseEvent) => {
    e.stopPropagation();
    const wasVisited = visitedCountrySet.has(country.id);
    toggleCountry(country.id);

    if (!wasVisited) {
      confetti({
        particleCount: 25,
        spread: 45,
        origin: { y: 0.6 }
      });
    }
  };

  const handleImportFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      if (content) {
        const success = onImportData(content);
        if (success) {
          showToast('הנתונים יובאו בהצלחה!', 'success');
        } else {
          showToast('שגיאה ביבוא הקובץ. אנא ודא שהקובץ תקין.', 'error');
        }
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  return (
    <aside
      id="countries-panel"
      className={`fixed md:relative top-0 right-0 z-30 w-full sm:w-96 md:w-84 lg:w-96 h-full flex flex-col bg-slate-900 border-l border-slate-800 text-slate-100 shadow-2xl transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'
      }`}
      dir="rtl"
    >
      {/* In-app notification toast */}
      {toastMessage && (
        <div className={`px-4 py-2 text-xs font-medium flex items-center justify-between transition-all duration-200 shrink-0 ${
          toastMessage.type === 'error'
            ? 'bg-rose-900/90 text-rose-100 border-b border-rose-700'
            : toastMessage.type === 'info'
            ? 'bg-amber-900/90 text-amber-100 border-b border-amber-700'
            : 'bg-emerald-900/90 text-emerald-100 border-b border-emerald-700'
        }`}>
          <span>{toastMessage.text}</span>
          <button onClick={() => setToastMessage(null)} className="p-0.5 hover:bg-black/20 rounded cursor-pointer">
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Header & Stats */}
      <div className="p-4 border-b border-slate-800 bg-slate-950/70">
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-base font-bold text-white tracking-tight">
                יומן מסעות עולמי
              </h1>
              <span className="text-xs text-slate-400">מעקב מדינות ומחוזות</span>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <button
              id="toggle-palette-btn"
              onClick={() => setShowColorPicker(!showColorPicker)}
              className="p-2 text-slate-400 hover:text-cyan-400 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
              title="בחר צבע בולט למפה"
              aria-label="בחר צבע בולט למפה"
            >
              <Palette className="w-4 h-4" />
            </button>
            <button
              id="toggle-settings-btn"
              onClick={() => setShowSettings(!showSettings)}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
              title="הגדרות ושמירה"
              aria-label="הגדרות ושמירה"
            >
              <SlidersHorizontal className="w-4 h-4" />
            </button>
            <button
              onClick={onCloseMobile}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors md:hidden cursor-pointer"
              aria-label="סגור תפריט"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Highlight & Ocean Color Picker Flyout */}
        {showColorPicker && (
          <div className="mb-3 p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-3 animate-in fade-in duration-150">
            {/* Visited highlight color */}
            <div>
              <div className="text-xs text-slate-300 font-semibold flex items-center justify-between">
                <span>צבע הדגשה למקומות שביקרת:</span>
              </div>
              <div className="flex items-center gap-2 pt-1.5">
                {HIGHLIGHT_THEMES.map(theme => (
                  <button
                    key={theme.id}
                    onClick={() => onSelectHighlightColor(theme.hex)}
                    className={`w-7 h-7 rounded-full transition-transform cursor-pointer flex items-center justify-center ${
                      highlightColor === theme.hex
                        ? 'scale-110 ring-2 ring-white ring-offset-2 ring-offset-slate-900'
                        : 'opacity-70 hover:opacity-100 hover:scale-105'
                    }`}
                    style={{ backgroundColor: theme.hex }}
                    title={theme.nameHe}
                  >
                    {highlightColor === theme.hex && <Check className="w-3.5 h-3.5 text-black stroke-[3]" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Ocean / Sea background color */}
            <div className="pt-2.5 border-t border-slate-800/80">
              <div className="text-xs text-slate-300 font-semibold flex items-center justify-between mb-1.5">
                <span className="flex items-center gap-1.5">
                  <Waves className="w-3.5 h-3.5 text-cyan-400" />
                  צבע רקע לים ולאוקיינוסים:
                </span>
                <span className="text-[11px] text-slate-400 font-normal">{getOceanTheme(oceanColor).nameHe}</span>
              </div>
              <div className="flex items-center gap-2 pt-1">
                {OCEAN_THEMES.map(theme => {
                  const isSelected = oceanColor.toLowerCase() === theme.hex.toLowerCase();
                  return (
                    <button
                      key={theme.id}
                      id={`sidebar-ocean-${theme.id}`}
                      onClick={() => onSelectOceanColor(theme.hex)}
                      className={`w-7 h-7 rounded-full transition-transform cursor-pointer flex items-center justify-center border ${
                        isSelected
                          ? 'scale-110 ring-2 ring-cyan-400 ring-offset-2 ring-offset-slate-900 border-white'
                          : 'border-slate-700 opacity-70 hover:opacity-100 hover:scale-105'
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
            </div>
          </div>
        )}

        {/* Settings & Backup Flyout */}
        {showSettings && (
          <div className="mb-3 p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-2 animate-in fade-in duration-150 text-xs">
            <div className="font-semibold text-slate-200">גיבוי וניהול נתונים:</div>
            <div className="grid grid-cols-2 gap-2 pt-1">
              <button
                onClick={onExportData}
                className="px-2.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <Download className="w-3.5 h-3.5 text-cyan-400" />
                <span>ייצוא קובץ</span>
              </button>
              <label className="px-2.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg flex items-center justify-center gap-1.5 transition-colors cursor-pointer">
                <Upload className="w-3.5 h-3.5 text-cyan-400" />
                <span>ייבוא קובץ</span>
                <input
                  type="file"
                  accept=".json"
                  onChange={handleImportFile}
                  className="hidden"
                />
              </label>
            </div>
            {confirmReset ? (
              <div className="mt-2 p-2.5 bg-rose-950/70 border border-rose-500/50 rounded-lg space-y-2 text-xs animate-in fade-in duration-150">
                <div className="flex items-center gap-1.5 text-rose-200 font-medium">
                  <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0" />
                  <span>האם לאפס את כל המקומות שסומנו?</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      onResetAll();
                      setConfirmReset(false);
                      showToast('כל הסימונים אופסו בהצלחה', 'info');
                    }}
                    className="flex-1 py-1.5 px-2 bg-rose-600 hover:bg-rose-500 text-white font-semibold rounded-md transition-colors cursor-pointer flex items-center justify-center gap-1"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>כן, אפס הכל</span>
                  </button>
                  <button
                    onClick={() => setConfirmReset(false)}
                    className="py-1.5 px-3 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-md transition-colors cursor-pointer"
                  >
                    ביטול
                  </button>
                </div>
              </div>
            ) : (
              <button
                onClick={() => setConfirmReset(true)}
                className="w-full mt-2 px-2.5 py-1.5 bg-rose-500/15 hover:bg-rose-500/25 text-rose-300 border border-rose-500/30 rounded-lg flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>איפוס כל הסימונים</span>
              </button>
            )}
          </div>
        )}

        {/* Visited Progress Card */}
        <div className="bg-slate-950/80 border border-slate-800/80 rounded-xl p-3">
          <div className="flex items-center justify-between text-xs mb-1.5">
            <span className="text-slate-400">סה״כ מדינות בעולם:</span>
            <span className="font-bold text-white">
              <span className="text-cyan-400 text-sm">{visitedCount}</span> / {totalCountries} ({percentage}%)
            </span>
          </div>

          {/* Progress Bar */}
          <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden mb-2">
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{
                width: `${Math.max(percentage, visitedCount > 0 ? 3 : 0)}%`,
                backgroundColor: highlightColor
              }}
            />
          </div>

          <div className="flex items-center justify-between text-[11px] text-slate-400">
            <span>מחוזות ומדינות בארה״ב/קנדה/אוסטרליה:</span>
            <span className="text-slate-200 font-semibold">{totalVisitedSubs}</span>
          </div>
        </div>
      </div>

      {/* Filters & Search */}
      <div className="p-3 border-b border-slate-800 bg-slate-900/90 space-y-2.5">
        {/* Search input */}
        <div className="relative">
          <Search className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            id="country-search-input"
            type="text"
            placeholder="חיפוש מדינה (עברית, אנגלית או קוד)..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full pl-3 pr-9 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs sm:text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute left-2.5 top-1/2 -translate-y-1/2 p-1 text-slate-500 hover:text-slate-300"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Status Filter Tabs */}
        <div className="grid grid-cols-3 gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs">
          <button
            onClick={() => setStatusFilter('all')}
            className={`py-1.5 rounded-lg font-medium transition-all cursor-pointer ${
              statusFilter === 'all'
                ? 'bg-slate-800 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            הכל ({totalCountries})
          </button>
          <button
            onClick={() => setStatusFilter('visited')}
            className={`py-1.5 rounded-lg font-medium transition-all cursor-pointer ${
              statusFilter === 'visited'
                ? 'bg-slate-800 text-cyan-400 shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            ביקרתי ({visitedCount})
          </button>
          <button
            onClick={() => setStatusFilter('unvisited')}
            className={`py-1.5 rounded-lg font-medium transition-all cursor-pointer ${
              statusFilter === 'unvisited'
                ? 'bg-slate-800 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            טרם ביקרתי
          </button>
        </div>

        {/* Continent Filter Chips */}
        <div className="flex items-center gap-1 overflow-x-auto pb-1 custom-scrollbar text-[11px]">
          <button
            onClick={() => setContinentFilter('all')}
            className={`px-2.5 py-1 rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
              continentFilter === 'all'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-semibold'
                : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
            }`}
          >
            כל היבשות
          </button>
          {CONTINENTS.map((cont: { id: string; nameHe: string }) => (
            <button
              key={cont.id}
              onClick={() => setContinentFilter(cont.id)}
              className={`px-2.5 py-1 rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                continentFilter === cont.id
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-semibold'
                  : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              {cont.nameHe}
            </button>
          ))}
        </div>
      </div>

      {/* Countries Scrollable List */}
      <div
        id="countries-scroll-list"
        className="flex-1 overflow-y-auto p-2 space-y-1.5 custom-scrollbar"
      >
        {filteredCountries.length === 0 ? (
          <div className="text-center py-12 text-slate-500 text-xs sm:text-sm">
            לא נמצאו מדינות התואמות את החיפוש
          </div>
        ) : (
          filteredCountries.map(country => {
            const status = getCountryVisitedStatus(country.id);
            const isFull = status === 'full';
            const isPartial = status === 'partial';

            return (
              <div
                key={country.id}
                id={`country-list-item-${country.id}`}
                onClick={() => onFocusCountry(country.id)}
                className={`group p-2.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-2.5 ${
                  isFull
                    ? 'bg-slate-950/90 border-slate-700/80 shadow-sm'
                    : isPartial
                    ? 'bg-slate-950/70 border-amber-500/30'
                    : 'bg-slate-950/40 border-slate-800/60 hover:bg-slate-800/40 hover:border-slate-700'
                }`}
              >
                {/* Country Info */}
                <div className="flex items-center gap-2.5 flex-1 min-w-0">
                  <span className="text-2xl select-none">{country.flag}</span>
                  <div className="truncate">
                    <div className="font-semibold text-xs sm:text-sm text-slate-200 truncate group-hover:text-white flex items-center gap-1.5">
                      <span>{country.nameHe}</span>
                      {country.hasSubdivisions && (
                        <span className="text-[10px] text-cyan-400 px-1.5 py-0.5 rounded bg-cyan-950/80 border border-cyan-800/50">
                          מחוזות נפרדים
                        </span>
                      )}
                    </div>
                    <div className="text-[11px] text-slate-500 truncate">
                      {country.nameEn} • {country.code2}
                    </div>
                  </div>
                </div>

                {/* Actions: Regional Modal Button or Direct Checkbox */}
                <div className="flex items-center gap-1.5">
                  {country.hasSubdivisions ? (
                    <button
                      id={`open-subdivisions-btn-${country.id}`}
                      onClick={e => {
                        e.stopPropagation();
                        onOpenRegionalModal(country);
                      }}
                      className={`px-2.5 py-1 rounded-lg text-xs font-medium flex items-center gap-1 transition-all cursor-pointer ${
                        isFull
                          ? 'text-black font-bold'
                          : isPartial
                          ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                          : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700'
                      }`}
                      style={isFull ? { backgroundColor: highlightColor } : undefined}
                      title="פתח בחירת מחוזות ואזורים"
                    >
                      <Layers className="w-3.5 h-3.5" />
                      <span>{isFull ? 'מחוזות ✓' : isPartial ? 'חלקית' : 'מחוזות'}</span>
                    </button>
                  ) : (
                    <button
                      id={`toggle-country-btn-${country.id}`}
                      onClick={e => handleCountryToggle(country, e)}
                      className={`w-7 h-7 rounded-lg flex items-center justify-center border transition-all cursor-pointer ${
                        isFull
                          ? 'border-transparent text-black shadow-sm'
                          : 'border-slate-700 bg-slate-800/80 text-transparent hover:border-slate-500'
                      }`}
                      style={isFull ? { backgroundColor: highlightColor } : undefined}
                      aria-label={`סמן ביקור ב-${country.nameHe}`}
                    >
                      <Check className="w-4 h-4 stroke-[3]" />
                    </button>
                  )}
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Footer Info */}
      <div className="p-2.5 border-t border-slate-800/80 bg-slate-950/80 text-center text-[11px] text-slate-500">
        נשמר בזכרון המכשיר • ניתן ללחוץ על כל מדינה במפה או ברשימה
      </div>
    </aside>
  );
};
