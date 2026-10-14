import React, { useState } from 'react';
import { ANATOMY_PLATES } from '../data/miseEnSceneData';
import { AnatomyPlate } from '../types';
import { Film, Eye, Sun, Sliders, Layers, Sparkles, CheckCircle2 } from 'lucide-react';

export const AnatomyView: React.FC = () => {
  const [selectedPlateId, setSelectedPlateId] = useState<string>(ANATOMY_PLATES[0].id);

  // Interactive controls for diagrams
  const [aspectRatio, setAspectRatio] = useState<'1.33' | '1.85' | '2.39'>('1.85');
  const [lightScheme, setLightScheme] = useState<{ key: boolean; fill: boolean; back: boolean }>({
    key: true,
    fill: true,
    back: true
  });
  const [cameraDistance, setCameraDistance] = useState<'total' | 'medium' | 'close_up'>('close_up');

  const currentPlate: AnatomyPlate = ANATOMY_PLATES.find((p) => p.id === selectedPlateId) || ANATOMY_PLATES[0];

  return (
    <div className="w-full bg-stone-950 text-stone-100 min-h-[calc(100vh-140px)] p-4 sm:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="border-b border-stone-800 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-amber-400 font-semibold mb-1">
              <Film className="w-3.5 h-3.5" />
              <span>Tavole Iconografiche & Anatomia della Scena</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-stone-100">
              I Sei Pilastri della Messinscena a Confronto
            </h2>
            <p className="text-sm text-stone-400 max-w-2xl mt-1">
              Analisi visuale e geometrica delle differenze ontologiche tra la rappresentazione sul palcoscenico e l'inquadratura cinematografica.
            </p>
          </div>
        </div>

        {/* Plate Selector Navigation */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3">
          {ANATOMY_PLATES.map((plate) => {
            const isSelected = plate.id === selectedPlateId;
            return (
              <button
                key={plate.id}
                onClick={() => setSelectedPlateId(plate.id)}
                className={`flex flex-col text-left p-3 rounded-lg border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-amber-400 text-stone-950 border-amber-300 font-medium shadow-lg'
                    : 'bg-stone-900/90 text-stone-300 border-stone-800 hover:border-stone-700 hover:text-white'
                }`}
              >
                <span className={`text-[11px] font-mono mb-1 ${isSelected ? 'text-stone-900 font-bold' : 'text-amber-400'}`}>
                  TAVOLA {plate.pillarNumber}
                </span>
                <span className="font-serif text-xs sm:text-sm font-semibold line-clamp-2">
                  {plate.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Plate Deep Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-stone-900/60 border border-stone-800 rounded-2xl p-6 sm:p-8 shadow-2xl">
          
          {/* Left Side: Synthesis, Comparative Analysis & Turning Point (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs text-amber-400 font-mono tracking-wider uppercase block mb-1">
                PILASTRO {currentPlate.pillarNumber} · ANALISI COMPARATA
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-stone-100">
                {currentPlate.title}
              </h3>
              <p className="text-sm sm:text-base text-stone-300 mt-3 leading-relaxed">
                {currentPlate.synthesis}
              </p>
            </div>

            {/* Side-by-Side Specific Differences */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              
              {/* Theatre Concepts */}
              <div className="bg-stone-950/70 border border-amber-900/40 rounded-xl p-4">
                <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500" />
                  <span>{currentPlate.theatreConcept}</span>
                </div>
                <ul className="space-y-2 mt-3">
                  {currentPlate.theatrePoints.map((pt, i) => (
                    <li key={i} className="text-xs text-stone-300 flex items-start gap-2 leading-relaxed">
                      <span className="text-amber-400 shrink-0 mt-0.5">•</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Cinema Concepts */}
              <div className="bg-stone-950/70 border border-sky-900/40 rounded-xl p-4">
                <div className="flex items-center gap-2 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-2">
                  <span className="w-2 h-2 rounded-full bg-sky-400" />
                  <span>{currentPlate.cinemaConcept}</span>
                </div>
                <ul className="space-y-2 mt-3">
                  {currentPlate.cinemaPoints.map((pt, i) => (
                    <li key={i} className="text-xs text-stone-300 flex items-start gap-2 leading-relaxed">
                      <span className="text-sky-400 shrink-0 mt-0.5">•</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Historical Turning Point */}
            <div className="bg-stone-950/80 border border-stone-800 rounded-xl p-4 flex items-start gap-3">
              <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-xs text-amber-400 font-semibold uppercase tracking-wider block mb-1">
                  Svolta Epocale
                </span>
                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                  {currentPlate.historicalTurningPoint}
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Interactive Visual Diagram (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-stone-950 border border-stone-800 rounded-xl p-5 shadow-inner">
            <div>
              <div className="flex items-center justify-between text-xs text-stone-400 border-b border-stone-800 pb-3 mb-4">
                <span className="font-semibold text-stone-200 flex items-center gap-1.5">
                  <Eye className="w-3.5 h-3.5 text-amber-400" />
                  Schema Tecnico Interattivo
                </span>
                <span className="text-[11px] font-mono">Tavola {currentPlate.pillarNumber}</span>
              </div>

              {/* Dynamic Diagram depending on Plate */}
              {currentPlate.diagramVariant === 'proscenium_vs_aspect' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-xs text-stone-400">Aspect Ratio:</span>
                    {(['1.33', '1.85', '2.39'] as const).map((ratio) => (
                      <button
                        key={ratio}
                        onClick={() => setAspectRatio(ratio)}
                        className={`px-2.5 py-1 text-xs rounded transition-colors cursor-pointer ${
                          aspectRatio === ratio
                            ? 'bg-amber-400 text-stone-950 font-bold'
                            : 'bg-stone-900 text-stone-400 hover:text-white'
                        }`}
                      >
                        {ratio === '1.33' ? '4:3 Classico' : ratio === '1.85' ? '1.85:1 Flat' : '2.39:1 Scope'}
                      </button>
                    ))}
                  </div>

                  {/* Visual framing simulation */}
                  <div className="h-48 w-full bg-stone-900 rounded-lg border border-stone-800 flex items-center justify-center relative overflow-hidden p-3">
                    {/* Theatrical Proscenium Frame (Outer Arch) */}
                    <div className="absolute inset-2 border-2 border-dashed border-amber-500/40 rounded flex items-start justify-center pt-1 pointer-events-none">
                      <span className="text-[9px] font-serif uppercase tracking-widest text-amber-400/80">
                        Boccascena Teatrale Fisso (Arco Prospettico)
                      </span>
                    </div>

                    {/* Dynamic Cinematic Aspect Box */}
                    <div
                      className="border-2 border-sky-400 bg-sky-950/40 rounded shadow-xl flex items-center justify-center transition-all duration-300 relative"
                      style={{
                        width: aspectRatio === '1.33' ? '60%' : aspectRatio === '1.85' ? '82%' : '96%',
                        height: aspectRatio === '1.33' ? '80%' : aspectRatio === '1.85' ? '65%' : '48%'
                      }}
                    >
                      <span className="text-xs font-mono text-sky-200 bg-stone-950/80 px-2 py-0.5 rounded">
                        Formato Filmico {aspectRatio}:1
                      </span>
                      {/* Actors mockup */}
                      <div className="absolute bottom-2 flex gap-4">
                        <div className="w-3 h-6 bg-amber-400 rounded-t-full" />
                        <div className="w-3 h-7 bg-amber-200 rounded-t-full" />
                      </div>
                    </div>
                  </div>
                  <p className="text-[11px] text-stone-400 text-center italic">
                    Il boccascena teatrale è fisso; l'aspect ratio cinematografico ritaglia la composizione orizzontale o verticale.
                  </p>
                </div>
              )}

              {currentPlate.diagramVariant === 'light_sculpture' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-center gap-2 flex-wrap">
                    <button
                      onClick={() => setLightScheme((prev) => ({ ...prev, key: !prev.key }))}
                      className={`px-2.5 py-1 text-xs rounded transition-colors cursor-pointer ${
                        lightScheme.key ? 'bg-amber-400 text-stone-950 font-bold' : 'bg-stone-900 text-stone-400'
                      }`}
                    >
                      Key Light (Luce Guida)
                    </button>
                    <button
                      onClick={() => setLightScheme((prev) => ({ ...prev, fill: !prev.fill }))}
                      className={`px-2.5 py-1 text-xs rounded transition-colors cursor-pointer ${
                        lightScheme.fill ? 'bg-amber-400 text-stone-950 font-bold' : 'bg-stone-900 text-stone-400'
                      }`}
                    >
                      Fill Light (Schiarita)
                    </button>
                    <button
                      onClick={() => setLightScheme((prev) => ({ ...prev, back: !prev.back }))}
                      className={`px-2.5 py-1 text-xs rounded transition-colors cursor-pointer ${
                        lightScheme.back ? 'bg-amber-400 text-stone-950 font-bold' : 'bg-stone-900 text-stone-400'
                      }`}
                    >
                      Backlight (Controluce)
                    </button>
                  </div>

                  <div className="h-48 w-full bg-stone-950 rounded-lg border border-stone-800 flex items-center justify-center relative overflow-hidden">
                    {/* Actor figure */}
                    <div
                      className="w-16 h-16 rounded-full transition-all duration-300 flex items-center justify-center relative border border-stone-700"
                      style={{
                        backgroundColor: '#1c1917',
                        boxShadow: `
                          ${lightScheme.key ? '-14px -14px 25px rgba(251, 191, 36, 0.7)' : 'none'},
                          ${lightScheme.fill ? '14px -6px 20px rgba(56, 189, 248, 0.35)' : 'none'},
                          ${lightScheme.back ? '0px 18px 25px rgba(255, 255, 255, 0.6)' : 'none'}
                        `
                      }}
                    >
                      <span className="text-[10px] font-mono text-stone-300">Attore</span>
                    </div>

                    {/* Virtual lights indicators */}
                    <div className="absolute top-3 left-4 text-[9px] text-amber-400 flex items-center gap-1">
                      <Sun className="w-3 h-3" />
                      <span>Key (45°)</span>
                    </div>
                    <div className="absolute top-3 right-4 text-[9px] text-sky-400 flex items-center gap-1">
                      <Sun className="w-3 h-3" />
                      <span>Fill (Schiarita)</span>
                    </div>
                    <div className="absolute bottom-3 text-[9px] text-stone-300 flex items-center gap-1">
                      <Sun className="w-3 h-3" />
                      <span>Backlight (Stacco silhouette)</span>
                    </div>
                  </div>
                  <p className="text-[11px] text-stone-400 text-center italic">
                    Accendi e spegni le tre luci per visualizzare la tridimensionalità della figura umana.
                  </p>
                </div>
              )}

              {currentPlate.diagramVariant === 'acting_scale' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-xs text-stone-400">Scala dei piani:</span>
                    {(['total', 'medium', 'close_up'] as const).map((scale) => (
                      <button
                        key={scale}
                        onClick={() => setCameraDistance(scale)}
                        className={`px-2.5 py-1 text-xs rounded transition-colors cursor-pointer ${
                          cameraDistance === scale
                            ? 'bg-amber-400 text-stone-950 font-bold'
                            : 'bg-stone-900 text-stone-400 hover:text-white'
                        }`}
                      >
                        {scale === 'total' ? 'Campo Totale (Teatro)' : scale === 'medium' ? 'Piano Medio' : 'Primo Piano (Dreyer)'}
                      </button>
                    ))}
                  </div>

                  <div className="h-48 w-full bg-stone-900 rounded-lg border border-stone-800 flex items-center justify-center relative overflow-hidden">
                    {cameraDistance === 'total' && (
                      <div className="text-center space-y-2">
                        <div className="w-6 h-12 bg-amber-400 mx-auto rounded-t-full shadow-md" />
                        <span className="text-[10px] text-stone-400 block font-mono">
                          Distanza spettatore: 15-30 metri. Il gesto deve essere amplificato.
                        </span>
                      </div>
                    )}

                    {cameraDistance === 'medium' && (
                      <div className="text-center space-y-2">
                        <div className="w-14 h-20 bg-amber-400 mx-auto rounded-t-xl shadow-lg" />
                        <span className="text-[10px] text-stone-400 block font-mono">
                          Distanza conversazione: 3-5 metri. Dialogo e relazione fisica.
                        </span>
                      </div>
                    )}

                    {cameraDistance === 'close_up' && (
                      <div className="text-center space-y-2">
                        <div className="w-28 h-28 bg-gradient-to-b from-amber-200 to-amber-500 mx-auto rounded-full shadow-2xl flex items-center justify-center border-2 border-stone-950">
                          <span className="text-xs font-serif font-bold text-stone-950">Volto / Occhi</span>
                        </div>
                        <span className="text-[10px] text-sky-400 block font-mono">
                          Distanza microscopica: 50 cm. Ogni battito di ciglia è drammaturgia.
                        </span>
                      </div>
                    )}
                  </div>
                  <p className="text-[11px] text-stone-400 text-center italic">
                    Il primo piano ha donato al cinema la capacità di scandagliare l'interiorità invisibile dal loggione teatrale.
                  </p>
                </div>
              )}

              {/* Default fallback interactive display for other plates */}
              {['camera_movement', 'offscreen_space', 'time_duration'].includes(currentPlate.diagramVariant) && (
                <div className="space-y-4">
                  <div className="h-48 w-full bg-stone-900 rounded-lg border border-stone-800 flex flex-col items-center justify-center p-4 text-center">
                    <Layers className="w-8 h-8 text-amber-400 mb-2 opacity-80" />
                    <span className="text-xs font-serif font-semibold text-stone-200">
                      Principio di Articolazione Spaziale & Temporale
                    </span>
                    <span className="text-[11px] text-stone-400 mt-1 max-w-xs">
                      {currentPlate.diagramVariant === 'camera_movement' && 'La cinepresa attraversa lo spazio infrangendo l\'immobilità della sedia teatrale.'}
                      {currentPlate.diagramVariant === 'offscreen_space' && 'Il fuoricampo cinematografico continua a vivere nella mente dello spettatore.'}
                      {currentPlate.diagramVariant === 'time_duration' && 'Il montaggio cinematografico scolpisce la durata, contraendo e dilatando la percezione.'}
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Note */}
            <div className="pt-3 border-t border-stone-800/80 flex items-center justify-between text-xs text-stone-400">
              <span className="flex items-center gap-1.5 text-amber-300 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Principio fondamentale dell'arte scenica</span>
              </span>
              <span className="font-mono text-[11px]">Tavola didattica</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
