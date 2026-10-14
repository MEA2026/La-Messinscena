import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { ViewMode, Domain, EraKey, SceneNode } from './types';
import { NODES, LINKS } from './data/miseEnSceneData';
import { Header } from './components/Header';
import { FilterBar } from './components/FilterBar';
import { NetworkView } from './components/NetworkView';
import { TimelineView } from './components/TimelineView';
import { AtlasView } from './components/AtlasView';
import { AnatomyView } from './components/AnatomyView';
import { GlossaryView } from './components/GlossaryView';
import { DetailModal } from './components/DetailModal';
import { GuideModal } from './components/GuideModal';

export default function App() {
  // Navigation & View state
  const [currentView, setCurrentView] = useState<ViewMode>('network');
  const [selectedNode, setSelectedNode] = useState<SceneNode | null>(null);
  const [isGuideOpen, setIsGuideOpen] = useState<boolean>(false);

  // Search & Filtering state
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedDomain, setSelectedDomain] = useState<Domain | 'all'>('all');
  const [selectedEra, setSelectedEra] = useState<EraKey | 'all'>('all');

  // Bookmarked node IDs persisted in localStorage
  const [savedNodeIds, setSavedNodeIds] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem('messinscena_bookmarks');
      return stored ? JSON.parse(stored) : ['scatola_ottica', 'welles_profondita', 'strehler_piccolo'];
    } catch {
      return ['scatola_ottica', 'welles_profondita', 'strehler_piccolo'];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('messinscena_bookmarks', JSON.stringify(savedNodeIds));
    } catch {
      // ignore storage errors
    }
  }, [savedNodeIds]);

  const handleToggleBookmark = useCallback((id: string) => {
    setSavedNodeIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  }, []);

  // Filter nodes according to search and dropdown criteria
  const filteredNodes = useMemo(() => {
    return NODES.filter((node) => {
      // Domain filter
      if (selectedDomain !== 'all') {
        if (selectedDomain === 'teatro' && node.domain !== 'teatro' && node.domain !== 'ibrido') return false;
        if (selectedDomain === 'cinema' && node.domain !== 'cinema' && node.domain !== 'ibrido') return false;
        if (selectedDomain === 'ibrido' && node.domain !== 'ibrido') return false;
      }

      // Era filter
      if (selectedEra !== 'all' && node.era !== selectedEra) {
        return false;
      }

      // Text Search
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchesLabel = node.label.toLowerCase().includes(query);
        const matchesSubtitle = node.subtitle.toLowerCase().includes(query);
        const matchesLocation = node.location.toLowerCase().includes(query);
        const matchesShort = node.shortDescription.toLowerCase().includes(query);
        const matchesWorks = node.keyWorks.some((w) => w.title.toLowerCase().includes(query));
        
        if (!matchesLabel && !matchesSubtitle && !matchesLocation && !matchesShort && !matchesWorks) {
          return false;
        }
      }

      return true;
    });
  }, [searchQuery, selectedDomain, selectedEra]);

  const hasActiveFilters = searchQuery.trim() !== '' || selectedDomain !== 'all' || selectedEra !== 'all';

  const handleResetFilters = useCallback(() => {
    setSearchQuery('');
    setSelectedDomain('all');
    setSelectedEra('all');
  }, []);

  const handleNavigateToNode = useCallback((targetNodeId: string) => {
    const target = NODES.find((n) => n.id === targetNodeId);
    if (target) {
      setSelectedNode(target);
    }
  }, []);

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 flex flex-col font-sans selection:bg-amber-800 selection:text-amber-100">
      
      {/* 3-Zone Top Bar Navigation */}
      <Header
        currentView={currentView}
        onViewChange={setCurrentView}
        onOpenGuide={() => setIsGuideOpen(true)}
        savedCount={savedNodeIds.length}
      />

      {/* Global Filter Bar (applicable across views) */}
      <FilterBar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedDomain={selectedDomain}
        onDomainChange={setSelectedDomain}
        selectedEra={selectedEra}
        onEraChange={setSelectedEra}
        visibleCount={filteredNodes.length}
        totalCount={NODES.length}
        onResetFilters={handleResetFilters}
        hasActiveFilters={hasActiveFilters}
      />

      {/* Main Content View Switcher */}
      <main className="flex-1 flex flex-col">
        {currentView === 'network' && (
          <NetworkView
            nodes={filteredNodes}
            allNodes={NODES}
            links={LINKS}
            onSelectNode={setSelectedNode}
            selectedNodeId={selectedNode?.id}
          />
        )}

        {currentView === 'timeline' && (
          <TimelineView
            nodes={filteredNodes}
            onSelectNode={setSelectedNode}
          />
        )}

        {currentView === 'atlas' && (
          <AtlasView
            nodes={filteredNodes}
            onSelectNode={setSelectedNode}
          />
        )}

        {currentView === 'anatomy' && (
          <AnatomyView />
        )}

        {currentView === 'glossary' && (
          <GlossaryView
            nodes={filteredNodes}
            onSelectNode={setSelectedNode}
            savedNodeIds={savedNodeIds}
            onToggleBookmark={handleToggleBookmark}
          />
        )}
      </main>

      {/* Detailed Study Sheet / Monograph Modal */}
      <DetailModal
        node={selectedNode}
        onClose={() => setSelectedNode(null)}
        onNavigateToNode={handleNavigateToNode}
        allNodes={NODES}
        isBookmarked={selectedNode ? savedNodeIds.includes(selectedNode.id) : false}
        onToggleBookmark={handleToggleBookmark}
      />

      {/* Theoretical and Historical Guide Modal */}
      <GuideModal
        isOpen={isGuideOpen}
        onClose={() => setIsGuideOpen(false)}
      />
    </div>
  );
}
