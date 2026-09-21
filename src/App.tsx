import React, { useState, useCallback } from 'react';
import { useTravelStorage } from './hooks/useTravelStorage';
import { WorldMap } from './components/WorldMap';
import { CountryListPanel } from './components/CountryListPanel';
import { RegionalModal } from './components/RegionalModal';
import { COUNTRIES } from './data/countries';
import { Country } from './types';
import {
  Globe2,
  Menu,
  MapPin
} from 'lucide-react';

export default function App() {
  const {
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
    totalVisitedCountries,
    totalVisitedSubdivisions
  } = useTravelStorage();

  const [activeRegionalCountry, setActiveRegionalCountry] = useState<Country | null>(null);
  const [isMobilePanelOpen, setIsMobilePanelOpen] = useState(false);
  const [focusedCountryId, setFocusedCountryId] = useState<string | null>(null);

  const handleOpenRegionalModal = useCallback((country: Country) => {
    setActiveRegionalCountry(country);
  }, []);

  const handleCloseRegionalModal = useCallback(() => {
    setActiveRegionalCountry(null);
  }, []);

  const handleFocusCountry = useCallback((countryId: string) => {
    setFocusedCountryId(countryId);
    // On mobile, close drawer so map is visible
    setIsMobilePanelOpen(false);
  }, []);

  const handleToggleProjection = useCallback(() => {
    setProjection(storageData.projection === 'naturalEarth' ? 'mercator' : 'naturalEarth');
  }, [storageData.projection, setProjection]);

  return (
    <div className="flex flex-col h-screen w-screen bg-slate-950 text-slate-100 overflow-hidden" dir="rtl">
      {/* Top Application Bar */}
      <header
        id="app-header"
        className="h-14 sm:h-16 px-3 sm:px-5 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between z-20 backdrop-blur-md shrink-0"
      >
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-gradient-to-tr from-cyan-500/20 to-blue-500/20 text-cyan-400 border border-cyan-500/30 shadow-inner">
            <Globe2 className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-base sm:text-lg font-bold text-white tracking-tight">
                מפת המסעות שלי
              </h1>
            </div>
            <p className="text-[11px] text-slate-400 hidden xs:block">
              תיעוד מדינות, חופים ומחוזות שבהם ביקרת בעולם
            </p>
          </div>
        </div>

        {/* Header Right Actions */}
        <div className="flex items-center gap-2">
          {/* Visited Counter Badge */}
          <div
            id="visited-stats-badge"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-xs shadow-inner"
          >
            <div
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ backgroundColor: storageData.highlightColor }}
            />
            <span className="text-slate-400">ביקרת:</span>
            <span className="font-bold text-white">
              {totalVisitedCountries} <span className="text-slate-500">/ {COUNTRIES.length}</span>
            </span>
          </div>

          {/* Mobile Drawer Toggle */}
          <button
            id="mobile-drawer-toggle-btn"
            onClick={() => setIsMobilePanelOpen(!isMobilePanelOpen)}
            className="p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-xl transition-colors md:hidden border border-slate-800 cursor-pointer"
            aria-label="פתח רשימת מדינות"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Main Content Area: Map Canvas + Sidebar */}
      <div className="relative flex-1 flex overflow-hidden">
        {/* Interactive World Map */}
        <main className="flex-1 relative h-full w-full bg-slate-950 overflow-hidden">
          <WorldMap
            visitedCountrySet={visitedCountrySet}
            visitedSubdivisionSet={visitedSubdivisionSet}
            isCountryVisited={isCountryVisited}
            isSubdivisionVisited={isSubdivisionVisited}
            toggleCountry={toggleCountry}
            toggleSubdivision={toggleSubdivision}
            onOpenRegionalModal={handleOpenRegionalModal}
            highlightColor={storageData.highlightColor}
            oceanColor={storageData.oceanColor || '#080c14'}
            onSelectOceanColor={setOceanColor}
            projectionType={storageData.projection || 'naturalEarth'}
            onToggleProjection={handleToggleProjection}
            focusedCountryId={focusedCountryId}
          />
        </main>

        {/* Sidebar / Drawer with Search, Filters, and List */}
        <CountryListPanel
          visitedCountrySet={visitedCountrySet}
          visitedSubdivisionSet={visitedSubdivisionSet}
          getCountryVisitedStatus={getCountryVisitedStatus}
          toggleCountry={toggleCountry}
          onOpenRegionalModal={handleOpenRegionalModal}
          onFocusCountry={handleFocusCountry}
          highlightColor={storageData.highlightColor}
          onSelectHighlightColor={setHighlightColor}
          oceanColor={storageData.oceanColor || '#080c14'}
          onSelectOceanColor={setOceanColor}
          onResetAll={resetAll}
          onExportData={exportData}
          onImportData={importData}
          isOpen={isMobilePanelOpen}
          onCloseMobile={() => setIsMobilePanelOpen(false)}
        />
      </div>

      {/* Regional Modal for Big Countries (USA, Canada, Australia) */}
      {activeRegionalCountry && (
        <RegionalModal
          country={activeRegionalCountry}
          isOpen={Boolean(activeRegionalCountry)}
          onClose={handleCloseRegionalModal}
          visitedSubdivisionSet={visitedSubdivisionSet}
          toggleSubdivision={toggleSubdivision}
          toggleRegionGroup={toggleRegionGroup}
          toggleCountry={toggleCountry}
          highlightColor={storageData.highlightColor}
        />
      )}
    </div>
  );
}
