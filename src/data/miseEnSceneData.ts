import { SceneNode, NodeLink, EraDefinition, GeographicRegion, AnatomyPlate } from '../types';

export const ERAS: EraDefinition[] = [
  {
    key: 'antichita_barocco',
    label: 'Dalle Origini al Barocco',
    timeframe: 'V sec. a.C. — 1830',
    startYear: -500,
    endYear: 1830,
    summary: 'Dall\'orchestra circolare del teatro greco alla codificazione della scena prospettica all\'italiana: lo spazio teatrale come tempio civico e poi come meravigliosa macchina d\'illusione visiva.',
    color: '#d97706' // amber-600
  },
  {
    key: 'nascita_regia',
    label: 'Nascita della Regia Moderna',
    timeframe: '1870 — 1905',
    startYear: 1870,
    endYear: 1905,
    summary: 'La transizione epocale dall\'egemonia del "grande attore" alla figura unificante del regista (metteur en scène). Il Duca di Meiningen, il Théâtre-Libre di Antoine e l\'invenzione della "quarta parete".',
    color: '#b45309' // amber-700
  },
  {
    key: 'avanguardie_muto',
    label: 'Avanguardie & Cinema Muto',
    timeframe: '1905 — 1930',
    startYear: 1905,
    endYear: 1930,
    summary: 'Simbolismo, Espressionismo tedesco e Costruttivismo sovietico reinventano lo spazio. Al contempo il cinema si emancipa dal "teatro filmato" attraverso Griffith, Wiene, Murnau ed Ejzenštejn.',
    color: '#0284c7' // sky-600
  },
  {
    key: 'classicismo_realismo',
    label: 'Classicismo & Neorealismo',
    timeframe: '1930 — 1955',
    startYear: 1930,
    endYear: 1955,
    summary: 'Il consolidamento dello studio system e del découpage classico a Hollywood convive con lo shock del Teatro Epico di Brecht, l\'utopia di Artaud e l\'uscita dei neorealisti sui marciapiedi d\'Italia.',
    color: '#10b981' // emerald-500
  },
  {
    key: 'modernita_onde',
    label: 'Modernità & Nuove Onde',
    timeframe: '1955 — 1980',
    startYear: 1955,
    endYear: 1980,
    summary: 'La regia teatrale diventa istituzione critica (Strehler, Piccolo Teatro; Grotowski e il teatro povero). Nel cinema esplodono la Nouvelle Vague di Godard, Truffaut e il rigore scultoreo di Tarkovskij e Kubrick.',
    color: '#8b5cf6' // violet-500
  },
  {
    key: 'contemporaneo',
    label: 'Contemporaneo & Ibridazioni',
    timeframe: '1980 — Presente',
    startYear: 1980,
    endYear: 2026,
    summary: 'Il superamento del testo a favore dell\'immagine: teatro post-drammatico, Robert Wilson, Luca Ronconi, Peter Brook. Il cinema dialoga con lo spazio virtuale, l\'iperrealismo digitale e il fuori-scena multimediale.',
    color: '#ec4899' // pink-500
  }
];

export const REGIONS: GeographicRegion[] = [
  {
    id: 'francia',
    name: 'Francia',
    flagName: 'FR',
    continent: 'Europa',
    theatreLegacy: 'Patria etimologica del termine "mise en scène". Dalla Comédie-Française al Théâtre-Libre naturalista di André Antoine, fino al Cartel des Quatre e alla ricerca corporea di Jacques Copeau.',
    cinemaLegacy: 'Dai trucchi illusionistici teatrali di Georges Méliès e il realismo poetico di Jean Renoir alla rivoluzione copernicana dei Cahiers du Cinéma e della Nouvelle Vague di Godard e Truffaut.',
    keyInnovations: ['Invenzione del concetto moderno di mise en scène', 'Quarta parete rigorosamente opaca', 'Jump cut e decostruzione del découpage'],
    prominentCentres: ['Parigi (Théâtre-Libre, Comédie-Française)', 'Cahiers du Cinéma', 'Studio Boulogne', 'Valenciennes'],
    nodeIds: ['teatro_medievale_misteri', 'antoine', 'quarta_parete', 'melies', 'renoir_spazio', 'godard_nouvelle_vague']
  },
  {
    id: 'germania',
    name: 'Germania & Mitteleuropa',
    flagName: 'DE',
    continent: 'Europa',
    theatreLegacy: 'La culla della regia moderna con la compagnia dei Sassonia-Meiningen. La Gesamtkunstwerk wagneriana a Bayreuth, il Kammerspiel di Max Reinhardt e il Teatro Epico politico di Bertolt Brecht.',
    cinemaLegacy: 'L\'Espressionismo cinematografico con le sue scenografie allucinate (Il gabinetto del dottor Caligari) e la mobilità dinamica della cinepresa ("Kamera entfesselt") con Murnau e Lang.',
    keyInnovations: ['Regia corale organica e abolizione del "primo attore"', 'Illuminazione chiaroscurale psicologica', 'Verfremdungseffekt (Straniamento)'],
    prominentCentres: ['Berlino (Berliner Ensemble, Deutsches Theater)', 'Meiningen', 'Studi UFA di Babelsberg'],
    nodeIds: ['meiningen', 'brecht_straniamento', 'caligari_espressionismo', 'murnau_kamera']
  },
  {
    id: 'russia',
    name: 'Russia & Unione Sovietica',
    flagName: 'RU',
    continent: 'Eurasia',
    theatreLegacy: 'L\'epicentro mondiale della teoria dell\'attore e della messinscena. La fondazione del Teatro d\'Arte di Mosca (MChAT) di Stanislavskij e Nemirovič-Dančenko, e la rottura costruttivista di Mejerchol\'d.',
    cinemaLegacy: 'La teoria del montaggio come scontro dialectico con Ejzenštejn, Kulešov e Pudovkin, sfociata poi nella contemplazione metafisica del piano-sequenza di Andrej Tarkovskij.',
    keyInnovations: ['Il Metodo delle azioni fisiche e memoria emotiva', 'La Biomeccanica teatrale', 'Il Montaggio delle attrazioni', 'Scolpire il tempo nel piano sequenza'],
    prominentCentres: ['Mosca (MChAT, Teatro Mejerchol\'d)', 'Pietroburgo/Leningrado', 'Studi Mosfil\'m'],
    nodeIds: ['stanislavskij', 'mejerchold_biomeccanica', 'ejzenstejn_montaggio', 'tarkovskij_tempo']
  },
  {
    id: 'italia',
    name: 'Italia & Mondo Classico',
    flagName: 'IT/GR',
    continent: 'Europa',
    theatreLegacy: 'Dall\'eredità della cavea greca e della scaenae frons romana, alla nascita della prospettiva rinascimentale e della "scena all\'italiana" (Palladio, Serlio, Sabbioneta), fino alla Commedia dell\'Arte, al Piccolo Teatro di Strehler e allo spazio esploso di Ronconi.',
    cinemaLegacy: 'Il Neorealismo (Visconti, Rossellini, De Sica) che porta la cinepresa nelle macerie del dopoguerra, fondendo il rigore della tragedia classica con la luce del reale.',
    keyInnovations: ['Scatola prospettica a punto di fuga centrale', 'Scaenae frons e cavea monumentale', 'Uso delle location reali e coro popolare nel Neorealismo', 'Regia critica del Piccolo Teatro'],
    prominentCentres: ['Vicenza (Teatro Olimpico)', 'Roma (Teatro di Marcello, Cinecittà)', 'Milano (Piccolo Teatro)', 'Epidauro / Siracusa'],
    nodeIds: ['teatro_greco_romano', 'scatola_ottica', 'strehler_piccolo', 'visconti_neorealismo', 'ronconi_spazio']
  },
  {
    id: 'usa',
    name: 'Stati Uniti',
    flagName: 'US',
    continent: 'Nord America',
    theatreLegacy: 'L\'importazione e rielaborazione del metodo Stanislavskij tramite il Group Theatre di Lee Strasberg e Harold Clurman nell\'Actor\'s Studio, fondamento dell\'acting contemporaneo americano.',
    cinemaLegacy: 'La grammatica del montaggio analitico (Griffith), la codificazione dello Studio System e la rivoluzione visiva della profondità di campo di Orson Welles e Gregg Toland.',
    keyInnovations: ['Découpage classico invisibile e regola dei 180°', 'Profondità di campo totale (Deep Focus)', 'Il Metodo dell\'Actor\'s Studio'],
    prominentCentres: ['Hollywood (Studio System)', 'New York (Broadway, Actor\'s Studio)'],
    nodeIds: ['griffith', 'welles_profondita', 'decoupage_classico']
  },
  {
    id: 'regno_unito',
    name: 'Regno Unito',
    flagName: 'GB',
    continent: 'Europa',
    theatreLegacy: 'Lo spazio elisabettiano del Globe: scena nuda agita dalla parola poetica. All\'inizio del Novecento, Edward Gordon Craig ridisegna radicalmente l\'idea di scena astratta e supermarionetta.',
    cinemaLegacy: 'La lezione shakespeariana di Laurence Olivier e il teatro cinematografico universale di Peter Brook, che teorizza lo "spazio vuoto".',
    keyInnovations: ['Lo Spazio Vuoto e la parola scenica', 'La Supermarionetta di Gordon Craig', 'Integrazione tra tragedia classica e linguaggio visivo filmico'],
    prominentCentres: ['Londra (Globe Theatre, National Theatre)', 'Royal Shakespeare Company'],
    nodeIds: ['craig_supermarionetta', 'spazio_vuoto_brook']
  },
  {
    id: 'giappone',
    name: 'Giappone',
    flagName: 'JP',
    continent: 'Asia',
    theatreLegacy: 'I millenari codici spaziali del teatro Nō (il ponte Hashigakari, la maschera) e del Kabuki (l\'hanamichi che taglia la platea, il palcoscenico girevole mawari-butai).',
    cinemaLegacy: 'La geometria zen e l\'inquadratura ad altezza tatami di Yasujiro Ozu; la grandiosità della composizione scenografica e meteorologica di Akira Kurosawa.',
    keyInnovations: ['Passerella che penetra nel pubblico (Hanamichi)', 'Inquadratura fissa a livello tatami (basso punto di vista)', 'Composizione geometrica multidirezionale'],
    prominentCentres: ['Kyoto', 'Tokyo (Kabuki-za)'],
    nodeIds: ['scena_giapponese_ozu']
  },
  {
    id: 'svizzera_scandinavia',
    name: 'Svizzera & Scandinavia',
    flagName: 'CH/SE',
    continent: 'Europa',
    theatreLegacy: 'Adolphe Appia rivoluziona per sempre la scena sostituendo i fondali dipinti con volumi architettonici praticabili e luce mobile scultorea. Ibsen e Strindberg inventano il dramma da camera interiore.',
    cinemaLegacy: 'Victor Sjöström e Ingmar Bergman: la trasposizione dell\'angoscia strindberghiana nella luce boreale e nel primo piano psicologico implacabile.',
    keyInnovations: ['La luce attiva e scultorea contro la tela dipinta', 'Piani praticabili tridimensionali e scale ritmiche', 'Il primo piano come paesaggio dell\'anima'],
    prominentCentres: ['Ginevra', 'Hellerau', 'Stoccolma (Dramaten)', 'Fårö'],
    nodeIds: ['appia_luce', 'bergman_primo_piano']
  }
];

export const NODES: SceneNode[] = [
  {
    id: 'teatro_greco_romano',
    label: 'Il Teatro Greco & Romano',
    subtitle: 'L\'orchestra del coro, la maschera rituale e la scaenae frons monumentale',
    category: 'periodo',
    domain: 'teatro',
    era: 'antichita_barocco',
    yearStart: -500,
    yearEnd: 100,
    yearLabel: 'V sec. a.C. — I sec. d.C.',
    location: 'Grecia & Roma (Atene, Epidauro, Roma)',
    regionId: 'italia',
    shortDescription: 'L\'origine dello spazio scenico occidentale: l\'emiciclo gradinato a cielo aperto (theatron), l\'orchestra circolare del coro, la skené lignea e poi l\'imponente scaenae frons lapidea romana, animate dai primi congegni meccanici (mechané ed ekkyklema).',
    fullEssay: [
      'Nel V secolo a.C. ad Atene, in occasione delle Grandi Dionisie, si compie l\'invenzione della rappresentazione drammatica occidentale. Lo spazio teatrale greco sorge alle pendici dell\'Acropoli o sui declivi naturali delle colline (come lo straordinario Teatro di Epidauro di Policleto il Giovane), sfruttando l\'acustica perfetta e il paesaggio naturale come orizzonte cosmico e religioso.',
      'La configurazione originaria è rigidamente tripartita: il "theatron" (la cavea a gradoni dove siede la polis riunita, con valore civico e catartico), l\'"orchestra" (lo spazio circolare riservato al Coro danzante attorno all\'altare di Dioniso) e la "skené" (originariamente una semplice tenda o baracca di legno per il cambio dei costumi degli attori, che diventa poi il fondale architettonico dell\'azione). L\'attore recita con la "maschera", che amplifica simbolicamente i tratti somatici, fissa l\'ethos del personaggio e risuona come cassa armonica.',
      'La messinscena classica introduce già complesse macchine sceniche (mechanémata): la "mechané" (una vera e propria gru con carrucola che calava dall\'alto gli dei, dando origine all\'espressione "deus ex machina"), l\'"ekkyklema" (una piattaforma lignea a ruote che veniva spinta fuori dalle porte della skené per mostrare i cadaveri dei personaggi assassinati fuori scena) e i prismi triangolari rotanti ("periactoi") dipinti per mutare il luogo dell\'azione.',
      'Nel mondo romano (dal Teatro di Pompeo del 55 a.C. al Teatro di Marcello), la concezione spaziale subisce una profonda metamorfosi urbana: il teatro non è più addossato a una collina, ma è un edificio autonomo a tutto sesto in muratura. L\'orchestra si dimezza diventando semicircolare e la "scaenae frons" si innalza come una colossale facciata colonnata a più ordini con tre porte monumentali (regia, hospitalis sinistra e destra). Questo imponente apparato architettonico romano costituirà il modello diretto per la rinascita cinquecentesca del Teatro Olimpico di Palladio e per la nascita della scena all\'italiana.'
    ],
    keyWorks: [
      { title: 'Orestea di Eschilo', year: -458, note: 'Trilogia tragica con uso drammatico dell\'ekkyklema e dell\'arazzo purpureo fatale', type: 'spettacolo' },
      { title: 'Edipo Re di Sofocle', year: -429, note: 'Il vertice della composizione corale e dell\'agnizione tragica aristotelica', type: 'spettacolo' },
      { title: 'Teatro di Epidauro (Policleto il Giovane)', year: -340, note: 'Architettura semicircolare con acustica millimetrica perfetta', type: 'spettacolo' },
      { title: 'De Architectura di Vitruvio (Libro V)', year: -15, note: 'Trattato sulle proporzioni armoniche del teatro greco e romano', type: 'trattato' }
    ],
    famousQuote: {
      text: 'La tragedia è imitazione di un\'azione seria, compiuta e avente una certa grandezza, per mezzo della pietà e del terrore operante la catarsi di siffatti affetti.',
      author: 'Aristotele',
      source: 'Poetica, VI'
    },
    iconographicDetail: {
      title: 'Dall\'Emiciclo Aperto alla Scaenae Frons',
      subtitle: 'L\'orchestra circolare greca e la facciata colonnata romana',
      diagramType: 'proscenium_grid',
      explanation: 'Confronto tra la struttura greca (cavea aperta, orchestra per il coro civico e visuale sul paesaggio) e la struttura romana (edificio autonomo chiuso, orchestra semicircolare e scaenae frons monumentale a tre porte).',
      visualElements: [
        { label: 'Orchestra circolare e Coro', description: 'Lo spazio della collettività che commenta e reagisce alle colpe dell\'eroe tragico' },
        { label: 'Mechané ed Ekkyklema', description: 'I primi congegni scenotecnici per le apparizioni celesti e la rivelazione dei delitti invisibili' },
        { label: 'Scaenae Frons colonnata romana', description: 'La facciata architettonica fissa a tre varchi che anticipa l\'arcoscenico rinascimentale' }
      ],
      comparativeNote: 'Il coro tragico che circonda l\'azione rivivrà nella composizione delle folle dei Meininger e nei pescatori de La terra trema di Luchino Visconti.'
    },
    connections: [
      { targetId: 'teatro_medievale_misteri', relation: 'Dalla sacralità civica pagana al dramma liturgico cristiano' },
      { targetId: 'scatola_ottica', relation: 'La scaenae frons vitruviana riscoperta da Palladio e Scamozzi nel Rinascimento' },
      { targetId: 'visconti_neorealismo', relation: 'Visconti rievoca la solennità scultorea della tragedia greca antica' }
    ],
    x: 40,
    y: 80
  },
  {
    id: 'teatro_medievale_misteri',
    label: 'Il Teatro Medievale & i Misteri',
    subtitle: 'I luoghi deputati (mansiones), la scena simultanea e i pageant itineranti',
    category: 'periodo',
    domain: 'teatro',
    era: 'antichita_barocco',
    yearStart: 950,
    yearEnd: 1550,
    yearLabel: 'X — XVI sec.',
    location: 'Europa (Francia, Inghilterra, Fiandre, Italia)',
    regionId: 'francia',
    shortDescription: 'Dal dramma liturgico nelle cattedrali ("Quem quaeritis?") alle monumentali rappresentazioni cittadine all\'aperto: i Misteri, le Passioni e le Sacre Rappresentazioni. La messinscena simultanea nei "luoghi deputati" (mansiones), dal Paradiso alla Bocca dell\'Inferno.',
    fullEssay: [
      'Dopo la disgregazione dell\'Impero Romano e la condanna ecclesiastica degli spettacoli gladiatori e mimi pagani, il teatro rinasce per paradosso storico nel cuore stesso della liturgia cristiana altomedievale. Attorno al X secolo, nel mattutino di Pasqua, nasce il celebre tropo "Quem quaeritis?" (Chi cercate nel sepolcro?), dove i chierici cantano presso l\'altare impersonando l\'Angelo e le pie donne.',
      'Presto la rappresentazione esce dalle navate della chiesa per riversarsi sui sagrati, nelle piazze del mercato e lungo le vie cittadine, coinvolgendo intere corporazioni di artigiani (le gilde o confraternite). Nascono così i generi monumentali del teatro medievale: i "Misteri" (Mystères, basati sulla storia sacra dalla Creazione al Giudizio Universale), i "Miracoli" (vite di santi e della Vergine) e le "Moralità" allegoriche.',
      'La concezione spaziale del teatro medievale è rivoluzionaria e radicalmente antitetica sia alla scatola prospettica rinascimentale sia al boccascena all\'italiana: è la "scena a luoghi deputati" o "scena simultanea" (mansiones o sedes). Sullo stesso palcoscenico orizzontale o nello spazio aperto della piazza, coesistono fianco a fianco dieci o dodici piccoli padiglioni aperti: a sinistra il Paradiso (splendente di luce, dorature e cori angelici), al centro Nazareth, Gerusalemme, la casa di Pilato, il Tempio, e all\'estrema destra l\'Inferno, configurato come una gigantesca "Bocca dell\'Inferno" dentata che sputa fumo, fiamme e diavoli con zolfo e fuochi pirotecnici.',
      'Lo spettatore medievale non ha una visione a punto di fuga unico: abbraccia con un solo sguardo l\'intero cosmo morale e teologico, oppure – come nei cicli inglesi di York, Chester e Wakefield – assiste al passaggio dei "Pageants": carri a due piani tirati da cavalli che si fermano a ogni crocicchio della città per recitare un singolo episodio. Questa simultaneità spaziale e polifonica verrà riscoperta nel Novecento dalle avanguardie, dal montaggio cinematografico e dalle regie polifoniche di Luca Ronconi.'
    ],
    keyWorks: [
      { title: 'Quem quaeritis? (Tropo di San Gallo)', year: 950, note: 'Il germe liturgico pasquale che rigenera la forma drammatica europea', type: 'spettacolo' },
      { title: 'Il Mistero della Passione (Arnoul Gréban)', year: 1450, note: 'Monumento teatrale di 34.000 versi recitato da centinaia di cittadini a Parigi', type: 'spettacolo' },
      { title: 'La Passione di Valenciennes (Hubert Cailleau)', year: 1547, note: 'Celebre allestimento con dieci mansiones simultanee allineate', type: 'spettacolo' },
      { title: 'I Cicli dei Pageants di York e Chester', year: 1400, note: 'Teatro itinerante su carri mobili a due piani tra le vie della città', type: 'spettacolo' }
    ],
    famousQuote: {
      text: 'Il cielo splende sopra di noi e l\'inferno arde ai nostri piedi: in mezzo, sulla piazza della città, gli uomini recitano il mistero della loro salvezza.',
      author: 'Cronaca della Passione di Mons',
      source: 'Mons, 1501'
    },
    iconographicDetail: {
      title: 'La Scena Simultanea delle Mansiones',
      subtitle: 'Il Paradiso a oriente, la Terra al centro e la Bocca dell\'Inferno a occidente',
      diagramType: 'stage_layout',
      explanation: 'Allineamento orizzontale dei luoghi deputati privi di quinte chiuse: il pubblico vede contemporaneamente la Gerusalemme celeste e le fauci del Leviatano che sputano fiamme e zolfo.',
      visualElements: [
        { label: 'Il Paradiso sopraelevato luminoso', description: 'Padiglione dipinto d\'azzurro e oro con cori angelici e sfere celesti semoventi' },
        { label: 'I Luoghi Deputati terreni', description: 'Edicole aperte per Nazareth, il Tempio di Salomone e il Pretorio' },
        { label: 'La Bocca dell\'Inferno (Hellmouth)', description: 'Fauci di mostro meccanizzate con fumo reale, botole e diavoli acrobati' }
      ],
      comparativeNote: 'La coesistenza simultanea di più luoghi nello stesso campo visivo anticipa il découpage a schermi multipli e la messinscena itinerante di Ronconi.'
    },
    connections: [
      { targetId: 'teatro_greco_romano', relation: 'Eredita la vocazione comunitaria e festiva della cittadinanza riunita' },
      { targetId: 'scatola_ottica', relation: 'La prospettiva rinascimentale comprimerà le mansiones disperse dentro un unico quadro' },
      { targetId: 'ronconi_spazio', relation: 'Ronconi risuscita la simultaneità dei luoghi deputati nell\'Orlando Furioso' },
      { targetId: 'melies', relation: 'Méliès riprende l\'iconografia pirotecnica delle bocche dell\'inferno e delle apparizioni' }
    ],
    x: 60,
    y: 280
  },
  {
    id: 'scatola_ottica',
    label: 'La Scatola Scenica all\'Italiana',
    subtitle: 'La nascita della prospettiva dipinta e del palcoscenico a cornice',
    category: 'concetto',
    domain: 'teatro',
    era: 'antichita_barocco',
    yearStart: 1545,
    yearEnd: 1800,
    yearLabel: 'XVI — XVIII sec.',
    location: 'Italia (Vicenza, Sabbioneta, Parma, Venezia)',
    regionId: 'italia',
    shortDescription: 'La codificazione dello spazio scenico rinascimentale e barocco: arcoscenico, punto di fuga centrale gerarchico e separazione netta tra platea e illusione teatrale.',
    fullEssay: [
      'Nel corso del Cinquecento italiano, con la riscoperta di Vitruvio e i trattati di Sebastiano Serlio (1545), l\'architettura teatrale subisce una rivoluzione geometrica irreversibile. Il palcoscenico non è più la pedana neutra medievale o l\'orchestra circolare a cielo aperto dei greci, ma una "scatola prospettica" inclinata verso la platea.',
      'L\'invenzione dell\'arcoscenico (o boccascena) incornicia l\'azione drammatica come un quadro vivente. Le quinte laterali e i fondali dipinti in fuga prospettica creano l\'illusione della tridimensionalità, calcolata per un punto di vista ideale: il palco centrale del Principe o del Sovrano.',
      'Questa architettura stabilisce le basi visive di ciò che più tardi l\'Ottocento chiamerà "quarta parete": lo spettatore guarda dal buio verso una finestra illuminata da candele e lumi a olio, ammirando una macchina scenica che nasconde le proprie corde, argani e botole dietro le quinte.',
      'La scatola all\'italiana dominerà i teatri d\'opera e di prosa di tutta Europa per quasi quattro secoli, fino a quando la luce elettrica e i maestri della regia moderna ne denunceranno l\'illusione bidimensionale.'
    ],
    keyWorks: [
      { title: 'Il secondo libro di Prospettiva (Sebastiano Serlio)', year: 1545, note: 'Codificazione delle tre scene tipiche: Comica, Tragica e Satirica', type: 'trattato' },
      { title: 'Teatro Olimpico di Vicenza (Andrea Palladio e Vincenzo Scamozzi)', year: 1585, note: 'Primo teatro stabile coperto con prospettive lignee fisse', type: 'spettacolo' },
      { title: 'Teatro Farnese di Parma (G.B. Aleotti)', year: 1618, note: 'Introduzione del primo arcoscenico moderno con quinte mobili scorrevoli', type: 'spettacolo' }
    ],
    famousQuote: {
      text: 'La scena deve parere una città vivente, dove le strade s\'incontrano ad un punto di vista che inganni gli occhi di chi guarda.',
      author: 'Sebastiano Serlio',
      source: 'Trattato sopra le scene, 1545'
    },
    iconographicDetail: {
      title: 'Geometria della Scena all\'Italiana',
      subtitle: 'La fuga prospettica centrale e l\'arcoscenico barocco',
      diagramType: 'proscenium_grid',
      explanation: 'La griglia prospettica calcola le dimensioni degli elementi scenici in base alla distanza dall\'asse visivo centrale, con piano inclinato (pendenza 5%) per amplificare la profondità fittizia.',
      visualElements: [
        { label: 'Boccascena (Arco di proscenio)', description: 'Cornice architettonica che isola l\'universo diegetico dallo spazio reale del pubblico' },
        { label: 'Quinte prospettiche sfalsate', description: 'Pannelli di tela dipinta disposti a intervalli regolari verso il punto di fuga' },
        { label: 'Piano inclinato (Rake)', description: 'Palcoscenico rialzato sul fondo per dare respiro ottico ai fondali' }
      ],
      comparativeNote: 'Anticipa la finestra dell\'inquadratura cinematografica: il cinema eredita l\'idea di una finestra sul mondo visibile, ma la renderà mobile.'
    },
    connections: [
      { targetId: 'quarta_parete', relation: 'Origine architettonica dell\'illusione frontale' },
      { targetId: 'melies', relation: 'Méliès filma la cinepresa fissa davanti al proscenio teatrale' },
      { targetId: 'appia_luce', relation: 'Appia distrugge la tela dipinta prospettica sostituendola con volumi' }
    ],
    x: 180,
    y: 180
  },
  {
    id: 'meiningen',
    label: 'I Meininger & Duca Giorgio II',
    subtitle: '1874: La nascita del lavoro d\'insieme e della regia scientifica',
    category: 'autore',
    domain: 'teatro',
    era: 'nascita_regia',
    yearStart: 1874,
    yearEnd: 1890,
    yearLabel: '1874 — 1890',
    location: 'Germania (Sassonia-Meiningen, Berlino)',
    regionId: 'germania',
    shortDescription: 'La compagnia ducale dei Meininger fonda la regia moderna: abolizione dei capricci del primattore, rigore filologico nei costumi, scene praticabili e folla polifonica.',
    fullEssay: [
      'Nel maggio del 1874 debutta a Berlino la compagnia del duca Giorgio II di Sassonia-Meiningen. È l\'evento che la storiografia europea riconosce all\'unanimità come l\'atto di nascita della regia moderna.',
      'Fino a quel momento il teatro ottocentesco era dominato dal "mattatore": il primo attore sceglieva la posizione centrale sul palco, recitava direttamente verso la platea e ignorava i compagni di scena. Fondali generici venivano riutilizzati per qualsiasi dramma e le comparse restavano immobili ai lati.',
      'Giorgio II, coadiuvato dal direttore Ludwig Chronegk e dall\'attrice Ellen Franz, rivoluziona ogni parametro: impone mesi di prove minuziose, vieta all\'attore di guardare il pubblico, disegna personalmente bozzetti scenografici basati su ricerche archivistiche rigorose e introduce piattaforme a diversi livelli altimetrici (gradini, colline, ponti praticabili).',
      'Ma la conquista più sconvolgente sono le scene di massa: la folla non è più una comparsa apatica, ma un organismo drammatico suddiviso in piccoli gruppi autonomi, ciascuno guidato da un attore esperto, che reagisce con ritmi polifonici. Questa orchestrazione della folla influenzerà direttamente il primo cinema muto e registi come Griffith ed Ejzenštejn.'
    ],
    keyWorks: [
      { title: 'Giulio Cesare di Shakespeare', year: 1874, note: 'L\'orazione funebre di Antonio con la folla romana polifonica sconvolge la critica europea', type: 'spettacolo' },
      { title: 'Guglielmo Tell di Schiller', year: 1879, note: 'Uso magistrale di dislivelli rocciosi praticabili e costumi d\'epoca autentici', type: 'spettacolo' }
    ],
    famousQuote: {
      text: 'Non tollererò mai che un attore si piazzi al centro della ribalta per farsi applaudire. L\'attore è solo una corda dell\'intero strumento drammatico.',
      author: 'Giorgio II, Duca di Sassonia-Meiningen'
    },
    iconographicDetail: {
      title: 'Disposizione Asimmetrica Meininger',
      subtitle: 'Rottura della simmetria e livelli altimetrici praticabili',
      diagramType: 'stage_layout',
      explanation: 'Sostituzione del piano liscio con scalinate, collinette e blocchi praticabili. I personaggi non stanno mai in fila indiana orizzontale, ma formano triangoli dinamici.',
      visualElements: [
        { label: 'Piani sfalsati verticali', description: 'Pedane a quote diverse per creare profondità e gerarchia visiva organica' },
        { label: 'Raggruppamenti asimmetrici', description: 'Gruppi di comparse sparpagliati a cuneo per simulare la casualità della vita reale' },
        { label: 'Spalle al pubblico', description: 'Gli attori dialogano voltando le spalle alla sala, rafforzando l\'illusione di realtà' }
      ],
      comparativeNote: 'Il dinamismo delle masse dei Meininger anticipa la composizione delle folle nei kolossal cinematografici di Griffith (Intolerance) ed Ejzenštejn (Ottobre).'
    },
    connections: [
      { targetId: 'antoine', relation: 'Antoine assiste ai Meininger a Bruxelles e ne ricava il metodo' },
      { targetId: 'stanislavskij', relation: 'Stanislavskij resta folgorato dalla tournée del 1890 a Mosca' },
      { targetId: 'quarta_parete', relation: 'Applicazione pratica del divieto di interloquire con la sala' }
    ],
    x: 280,
    y: 220
  },
  {
    id: 'quarta_parete',
    label: 'Il Concetto di "Quarta Parete"',
    subtitle: 'Dalla teoria di Diderot alla membrana inviolabile del Naturalismo',
    category: 'concetto',
    domain: 'ibrido',
    era: 'nascita_regia',
    yearStart: 1880,
    yearEnd: 1960,
    yearLabel: 'Teorizzata 1758 / Pratica 1887',
    location: 'Francia / Europa',
    regionId: 'francia',
    shortDescription: 'La parete immaginaria che separa attori e pubblico: la scena come spazio autonomo che finge di non essere osservato, e il tabù cinematografico dello "sguardo in macchina".',
    fullEssay: [
      'Teorizzata inizialmente dall\'illuminista Denis Diderot nel "Discorso sulla poesia drammatica" (1758) («Immaginate sulla ribalta un grande muro che vi separi dalla platea: recitate come se il sipario non si alzasse»), la quarta parete diventa dogma operativo soltanto col Naturalismo di André Antoine.',
      'Nel teatro naturalista, la quarta parete non è una metafora vaga: Antoine disponeva i mobili della scenografia lungo la ribalta con le spalle rivolte al pubblico (es. un camino, una credenza, una sedia), costringendo gli attori a muoversi nello spazio senza mai posare a favore della vista degli spettatori. Lo spettatore diventa un voyeur che spia dal buco della serratura.',
      'Quando nasce il cinema, la quarta parete viene incorporata geneticamente nel montaggio classico hollywoodiano: gli attori non devono MAI guardare dentro l\'obiettivo della cinepresa, pena la distruzione immediata dell\'illusione narrativa diegetica.',
      'Soltanto le avanguardie, Bertolt Brecht a teatro (col Verfremdungseffekt) e poi la Nouvelle Vague al cinema (Godard che fa parlare Belmondo dritto al pubblico in "À bout de souffle"), infrangeranno consapevolmente questa parete per ridestare la coscienza critica dello spettatore.'
    ],
    keyWorks: [
      { title: 'De la poésie dramatique (Denis Diderot)', year: 1758, note: 'Prima formulazione teorica del muro immaginario', type: 'trattato' },
      { title: 'I Macellai / Jacques Damour (André Antoine)', year: 1888, note: 'Mezzene di bue appese in scena e attori voltati di spalle', type: 'spettacolo' },
      { title: 'Fino all\'ultimo respiro (Jean-Luc Godard)', year: 1960, note: 'Michel Poiccard insulta lo spettatore fissando la cinepresa', type: 'film' }
    ],
    famousQuote: {
      text: 'Quando siete a teatro, dimenticate che vi sono spettatori. Pensate solo che una parete invisibile chiuda la scena dal lato della platea.',
      author: 'André Antoine',
      source: 'Mes Souvenirs sur le Théâtre-Libre, 1890'
    },
    iconographicDetail: {
      title: 'Topologia della Quarta Parete',
      subtitle: 'La soglia voyeuristica tra finzione e spettatore',
      diagramType: 'stage_layout',
      explanation: 'La quarta parete chiude il cubo scenico. Gli attori abitano le tre pareti reali (fondale e quinte laterali) e proiettano la loro energia verso l\'interno, trasformando il pubblico in testimone invisibile.',
      visualElements: [
        { label: 'Parete invisibile di boccascena', description: 'Confine psicologico insormontabile per l\'attore diegetico' },
        { label: 'Mobili di schiena', description: 'Elementi scenici collocati sulla ribalta per sbarrare il contatto frontale' },
        { label: 'Sguardo in macchina (cinema)', description: 'L\'equivalente proibito nel découpage classico, arma rivoluzionaria della modernità' }
      ],
      comparativeNote: 'Nel cinema la quarta parete coincide fisicamente con la lente dell\'obiettivo: l\'inquadratura racchiude uno spazio apparentemente autosufficiente.'
    },
    connections: [
      { targetId: 'antoine', relation: 'Antoine concretizza la teoria sul palco del Théâtre-Libre' },
      { targetId: 'brecht_straniamento', relation: 'Brecht abbatte la quarta parete per svegliare la coscienza politica' },
      { targetId: 'godard_nouvelle_vague', relation: 'Godard demolisce la quarta parete filmica con lo sguardo in macchina' }
    ],
    x: 320,
    y: 80
  },
  {
    id: 'antoine',
    label: 'André Antoine & Théâtre-Libre',
    subtitle: '1887: Il trionfo del Naturalismo integrale e la verità dei corpi',
    category: 'autore',
    domain: 'teatro',
    era: 'nascita_regia',
    yearStart: 1887,
    yearEnd: 1906,
    yearLabel: '1887 — 1906',
    location: 'Francia (Parigi)',
    regionId: 'francia',
    shortDescription: 'Impiegato della compagnia del gas a Parigi, fonda il Théâtre-Libre: bandisce la dizione enfatica, porta veri quarti di manzo in scena e codifica la "mise en scène" come arte sovrana.',
    fullEssay: [
      'André Antoine è la figura cardine attraverso cui la parola francese "mise en scène" si emancipa dal gergo pratico dei suggeritori teatrali per divenire un atto estetico e drammaturgico supremo.',
      'Fondando nel 1887 il Théâtre-Libre in un modesto passaggio parigino, Antoine dichiara guerra aperta alla retorica polverosa della Comédie-Française. Ispirato dal naturalismo di Émile Zola, Antoine sostiene che l\'ambiente fisico determina il comportamento dei personaggi: non si può recitare un dramma di contadini o di operai in salotti dorati di cartapesta.',
      'Per la celebre messinscena di "Les Bouchers" (I Macellai, 1888), Antoine appende sulla scena veri quarti di manzo sanguinanti acquistati alle Halles di Parigi. L\'odore di carne cruda e le mosche invadono la sala: la materia reale fa irruzione nella finzione artistica.',
      'Inoltre, costringe gli attori a parlare con il tono sommesso della vita quotidiana, a voltare le spalle al pubblico, a mangiare davvero a tavola senza curarsi di essere uditi in ogni angolo. Antoine dirà poi: «È l\'ambiente che crea l\'azione, non il contrario». Negli anni Dieci si dedicherà anche al cinema muto, girando film in ambienti naturali con contadini autentici.'
    ],
    keyWorks: [
      { title: 'Jacques Damour (Émile Zola / Léon Hennique)', year: 1887, note: 'Manifesto pratico del Théâtre-Libre: recitazione spoglia e verità d\'ambiente', type: 'spettacolo' },
      { title: 'I Macellai (Fernand Icres)', year: 1888, note: 'Carne vera sul palco: rottura con l\'illusione pittorica borghese', type: 'spettacolo' },
      { title: 'La terra (Émile Zola / André Antoine)', year: 1921, note: 'Film muto di Antoine girato nella campagna reale con luce naturale', type: 'film' }
    ],
    famousQuote: {
      text: 'Bisogna costruire prima l\'ambiente con le sue quattro pareti, collocarvi i mobili e gli oggetti senza pensare al pubblico; poi si deciderà quale parete togliere per far guardare gli spettatori.',
      author: 'André Antoine'
    },
    iconographicDetail: {
      title: 'L\'Ambiente Deterministico di Antoine',
      subtitle: 'Oggetti reali, luce motivata e rifiuto dell\'enfasi',
      diagramType: 'stage_layout',
      explanation: 'La scena viene costruita prima come un\'abitazione vera a 4 pareti; solo al termine delle prove viene rimossa una parete per consentire la vista del pubblico.',
      visualElements: [
        { label: 'Pareti chiuse con porte e finestre praticabili', description: 'Eliminazione delle tele svolazzanti: porte che sbattono davvero con serrature' },
        { label: 'Illuminazione motivata', description: 'Fonti di luce giustificate dalla diegesi (lampade a petrolio, camini) senza ribalta frontale uniforme' },
        { label: 'Oggetti d\'uso quotidiano logorati', description: 'Nessun oggetto finto: stoviglie vere, cibo consumato in scena' }
      ],
      comparativeNote: 'Il naturalismo di Antoine prepara la via al cinema documentario e al Neorealismo: l\'abbandono della scenografia finta verso il mondo reale.'
    },
    connections: [
      { targetId: 'meiningen', relation: 'Eredita l\'organicità d\'insieme superando l\'estetismo ducale' },
      { targetId: 'stanislavskij', relation: 'Stanislavskij visita il Théâtre-Libre trovandovi conferma alle sue intuizioni' },
      { targetId: 'quarta_parete', relation: 'Invenzione del metodo delle quattro pareti prima di toglierne una' }
    ],
    x: 440,
    y: 200
  },
  {
    id: 'stanislavskij',
    label: 'Konstantin Stanislavskij & MChAT',
    subtitle: '1898: Il Teatro d\'Arte di Mosca e la vita interiore del personaggio',
    category: 'autore',
    domain: 'teatro',
    era: 'nascita_regia',
    yearStart: 1898,
    yearEnd: 1938,
    yearLabel: '1898 — 1938',
    location: 'Russia (Mosca)',
    regionId: 'russia',
    shortDescription: 'Cofonda con Nemirovič-Dančenko il Teatro d\'Arte di Mosca. Crea il "Sistema": reviviscenza psicologica (pereživanie), sottotesto, atmosfera scenica e realismo interiore cechoviano.',
    fullEssay: [
      'Il 22 giugno 1897, in un ristorante moscovita (lo Slavjanskij Bazar), Konstantin Stanislavskij e Vladimir Nemirovič-Dančenko discutono per 18 ore ininterrotte: nasce il progetto del Teatro d\'Arte di Mosca (MChAT), destinato a riformare l\'intera storia della recitazione e della messinscena mondiale.',
      'Stanislavskij comprende che la riforma esteriore (scenografie accurate, costumi d\'epoca) è vana se l\'attore continua a recitare in modo enfatico e meccanico (il cosiddetto "mestiere"). Nasce così il "Sistema Stanislavskij", basato sul concetto di "pereživanie" (reviviscenza): l\'attore deve vivere realmente le emozioni del personaggio attraverso il "magico se", la memoria emotiva, le circostanze date e la scomposizione del testo in compiti e sottotesto.',
      'L\'incontro provvidenziale con Anton Čechov produce capolavori assoluti: "Il gabbiano" (1898), "Zio Vanja", "Tre sorelle", "Il giardino dei ciliegi". La messinscena di Stanislavskij inventa l\'"atmosfera scenica": i silenzi parlanti, le pause cariche di tensione, i rumori fuori campo (il frinire dei grilli, il vento, il rintocco lontano di una campana) che avvolgono lo spazio in una rete emotiva invisibile.',
      'Il Sistema approderà negli Stati Uniti negli anni Trenta, dove Lee Strasberg lo trasformerà nel celebre "Metodo" dell\'Actor\'s Studio, fucina di divi cinematografici come Marlon Brando, James Dean e Al Pacino.'
    ],
    keyWorks: [
      { title: 'Il gabbiano (Anton Čechov)', year: 1898, note: 'Trionfo storico al MChAT che salva la carriera di Čechov e fonda la nuova regia d\'atmosfera', type: 'spettacolo' },
      { title: 'Il lavoro dell\'attore su se stesso', year: 1938, note: 'Trattato monumentale sulle tecniche interiori di recitazione e verità scenica', type: 'trattato' }
    ],
    famousQuote: {
      text: 'Non amate voi stessi nell\'arte, ma amate l\'arte in voi stessi. Sul palco non si deve sembrare, si deve essere.',
      author: 'Konstantin Stanislavskij'
    },
    iconographicDetail: {
      title: 'L\'Atmosfera e il Cerchio di Attenzione',
      subtitle: 'Concentrazione psicologica e paesaggio sonoro scenico',
      diagramType: 'acting_dynamic',
      explanation: 'Stanislavskij teorizza il cerchio di attenzione (piccolo, medio, grande) per proteggere l\'attore dall\'angoscia della platea, fondendo spazio visivo e suoni fuoricampo.',
      visualElements: [
        { label: 'Piccolo cerchio di attenzione', description: 'L\'attore si concentra solo su di sé e su un oggetto vicino (es. una tazza, una lettera)' },
        { label: 'Sottotesto e silenzi carichi', description: 'Lo spazio scenico è animato da ciò che i personaggi NON dicono a parole' },
        { label: 'Paesaggio acustico integrato', description: 'Rumori d\'ambiente (carrozze lontane, pioggia, orologio a pendolo) che dilatano la stanza' }
      ],
      comparativeNote: 'La recitazione di Stanislavskij è il fondamento della moderna interpretazione cinematografica: la cinepresa cattura il battito di ciglia e il respiro invisibile dal loggione.'
    },
    connections: [
      { targetId: 'meiningen', relation: 'Stanislavskij fu folgorato dalla disciplina della tournée dei Meininger' },
      { targetId: 'mejerchold_biomeccanica', relation: 'Mejerchol\'d fu suo allievo ma ne rovesciò radicalmente l\'approccio psicologico' },
      { targetId: 'decoupage_classico', relation: 'Il Metodo stanislavskiano diventa il motore espressivo del cinema americano' }
    ],
    x: 620,
    y: 180
  },
  {
    id: 'appia_luce',
    label: 'Adolphe Appia & Luce Ritmica',
    subtitle: '1899: Lo spazio scultoreo e la luce come materia vivente',
    category: 'autore',
    domain: 'teatro',
    era: 'avanguardie_muto',
    yearStart: 1899,
    yearEnd: 1928,
    yearLabel: '1899 — 1928',
    location: 'Svizzera / Germania (Ginevra, Hellerau)',
    regionId: 'svizzera_scandinavia',
    shortDescription: 'Teorico svizzero che distrugge la tela dipinta bidimensionale: crea "spazi ritmici" tridimensionali (scale, pilastri nudi) e trasforma la luce da semplice visibilità a scultura drammatica.',
    fullEssay: [
      'Nessun teorico ha trasformato la visualità scenica quanto il ginevrino Adolphe Appia. Partendo dall\'analisi dei drammi musicali di Richard Wagner, Appia individua una clamorosa contraddizione estetica nel teatro ottocentesco: l\'attore è un corpo tridimensionale vivo che proietta ombre reali, ma si muove davanti a fondali di tela dipinta bidimensionali con ombre finte.',
      'Nel suo celebre saggio "La musica e la messinscena" (1899), Appia lancia la sua rivoluzione: abbattere per sempre i fondali dipinti! Al loro posto introduce "spazi ritmici": costruzioni geometriche pure, pedane, scalinate, volumi prismatici nudi e monocromi.',
      'Ma l\'arma suprema di Appia è la LUCE. Distingue rigorosamente tra "luce diffusa" (la banale illuminazione generale che rende visibile il palco) e "luce attiva o plastica" (i fasci orientabili di proiettori che scolpiscono i corpi, creano chiaroscuri violenti e modulano lo spazio nel tempo come fa la partitura musicale).',
      'La visione di Appia, concretizzata nell\'istituto d\'arte di Hellerau con Émile Jaques-Dalcroze (1912), anticipa di colpo la fotografia cinematografica d\'autore, l\'Espressionismo e l\'architettura scenica del Bauhaus.'
    ],
    keyWorks: [
      { title: 'La musica e la messinscena (La Musique et la mise en scène)', year: 1899, note: 'Il manifesto che abolisce i fondali dipinti a favore della luce plastica e dello spazio ritmico', type: 'trattato' },
      { title: 'Orfeo ed Euridice di Gluck a Hellerau', year: 1912, note: 'Spazio architettonico ritmico illuminato da centinaia di lampade celate dietro tele di telaio', type: 'spettacolo' }
    ],
    famousQuote: {
      text: 'La luce è per lo spazio ciò che la musica è per il tempo: l\'elemento che dà vita, ritmo e anima alle cose inanimate.',
      author: 'Adolphe Appia'
    },
    iconographicDetail: {
      title: 'Il Fascio Plastico di Appia',
      subtitle: 'Volumi geometrici puri e luce scultorea radente',
      diagramType: 'lighting_scheme',
      explanation: 'Sostituzione dell\'illuminazione diffusa con proiettori focalizzati laterali e zenitali che modellano scalinate e corpi con ombre nette e volumi plastici.',
      visualElements: [
        { label: 'Spazio ritmico geometrico', description: 'Prismi, gradoni e colonne neutre prive di decorazioni realistiche' },
        { label: 'Luce attiva orientabile', description: 'Tagli di luce che delimitano zone d\'ombra misteriosa e rivelano la forma muscolare' },
        { label: 'Rifiuto del colore pittorico', description: 'Monocromia grigia che prende colore esclusivamente tramite i filtri luminosi' }
      ],
      comparativeNote: 'I principi di Appia sulla luce attiva diventano il vocabolario fondamentale della fotografia cinematografica noir ed espressionista (Wiene, Lang, Toland).'
    },
    connections: [
      { targetId: 'craig_supermarionetta', relation: 'Condivide con Gordon Craig la rivoluzione anti-illusionistica' },
      { targetId: 'caligari_espressionismo', relation: 'La drammatizzazione della luce passa dal teatro al cinema espressionista' },
      { targetId: 'scatola_ottica', relation: 'Appia demolisce definitivamente la scatola prospettica barocca a teli' }
    ],
    x: 180,
    y: 350
  },
  {
    id: 'craig_supermarionetta',
    label: 'Edward Gordon Craig & la Supermarionetta',
    subtitle: '1905: Lo scenografo-regista sovrano e il rifiuto del realismo',
    category: 'autore',
    domain: 'teatro',
    era: 'avanguardie_muto',
    yearStart: 1905,
    yearEnd: 1930,
    yearLabel: '1905 — 1930',
    location: 'Regno Unito / Italia (Firenze)',
    regionId: 'regno_unito',
    shortDescription: 'Visionario inglese: teorizza il regista demiurgo assoluto ("Artist of the Theatre"), inventa gli "screens" mobili cinetici e propone di sostituire l\'attore instabile con l\'Übermarionette.',
    fullEssay: [
      'Figlio della grande attrice Ellen Terry, Edward Gordon Craig porta la ribellione contro il teatro commerciale borghese alle sue estreme conseguenze metafisiche. Nel saggio-manifesto "L\'arte del teatro" (1905), Craig dichiara che il teatro non è né la recitazione dell\'attore né il testo del poeta, ma un\'arte autonoma sintetica fatta di Movimento, Suono e Linea.',
      'Craig vede nell\'attore in carne ed ossa il punto debole del teatro: l\'attore è schiavo delle proprie emozioni contingenti, del vaniloquio e dell\'applauso. Da qui la provocazione teorica dell\'"Übermarionette" (la Supermarionetta): un essere nobile, ieratico, privo di egoismo biologico, capace di incarnare la geometria pura e il mistero spirituale.',
      'Sul piano scenografico Craig inventa gli "screens": grandi paraventi monocromi mobili su rotelle che possono essere configurati in infiniti modi durante lo spettacolo, trasformando la scenografia da sfondo immobile a corpo cinetico vivente.',
      'Nel 1912 Craig realizza con Stanislavskij al MChAT di Mosca uno storico "Amleto" con paraventi dorati alti dieci metri, scontro monumentale tra la ricerca simbolista craighiana e il realismo psicologico russo.'
    ],
    keyWorks: [
      { title: 'L\'arte del teatro (The Art of the Theatre)', year: 1905, note: 'Manifesto del regista come artista totale sovrano e della supermarionetta', type: 'trattato' },
      { title: 'Amleto di Shakespeare al MChAT', year: 1912, note: 'La leggendaria collaborazione con Stanislavskij usando screens dorati monumentali', type: 'spettacolo' }
    ],
    famousQuote: {
      text: 'L\'attore deve andarsene e al suo posto deve entrare la Supermarionetta: solo allora il teatro cesserà di essere imitazione volgare per farsi arte pura.',
      author: 'Edward Gordon Craig',
      source: 'L\'Attore e l\'Über-marionette, 1908'
    },
    iconographicDetail: {
      title: 'Gli Screens Cinetici di Craig',
      subtitle: 'Pareti monocrome mobili e verticalità monumentale',
      diagramType: 'stage_layout',
      explanation: 'Pannelli pieghevoli semoventi ad altezza monumentale che modificano continuamente la volumetria dello spazio tramite cerniere e carrucole.',
      visualElements: [
        { label: 'Verticalità schiacciante', description: 'Altezze sproporzionate che ridimensionano l\'uomo a figura tragica solitaria' },
        { label: 'Scenografia cinetica', description: 'Lo spazio non è fisso: i paraventi si muovono e "respirano" a vista d\'occhio' },
        { label: 'Monocromia grigia/dorata', description: 'Superfici uniformi che reagiscono radicalmente all\'angolo d\'incidenza della luce' }
      ],
      comparativeNote: 'La scenografia architettonica di Craig ispira direttamente le megalopoli del cinema muto, da Metropolis di Fritz Lang a Blade Runner.'
    },
    connections: [
      { targetId: 'appia_luce', relation: 'Intesa spirituale sulla liberazione dello spazio dal decorativismo' },
      { targetId: 'stanislavskij', relation: 'Confronto/scontro leggendario nell\'Amleto del MChAT del 1912' },
      { targetId: 'caligari_espressionismo', relation: 'La distorsione monumentale dello spazio anticipa la scenografia espressionista' }
    ],
    x: 340,
    y: 360
  },
  {
    id: 'melies',
    label: 'Georges Méliès & l\'Illusione Filmica',
    subtitle: '1896: La trasposizione del teatro di trucchi sulla pellicola',
    category: 'autore',
    domain: 'cinema',
    era: 'avanguardie_muto',
    yearStart: 1896,
    yearEnd: 1913,
    yearLabel: '1896 — 1913',
    location: 'Francia (Montreuil, Parigi)',
    regionId: 'francia',
    shortDescription: 'Prestigiatore e direttore del Théâtre Robert-Houdin, Méliès inventa gli effetti speciali cinematografici filmando come da una platea teatrale: mascherini, arresto di manovella e fondali dipinti.',
    fullEssay: [
      'Mentre i fratelli Lumière concepivano il cinematografo come strumento documentario scientifico per "riprodurre la vita così com\'è", Georges Méliès, prestigiatore e proprietario del Théâtre Robert-Houdin a Parigi, comprende subito la vocazione teatrale e fantastica del nuovo mezzo.',
      'Nel 1897 costruisce a Montreuil il primo studio cinematografico d\'Europa: una gigantesca serra di vetro con palcoscenico e botole, progettata esattamente come un teatro all\'italiana.',
      'La messinscena di Méliès è il vertice della fusione tra tradizione scenica e trucco filmico: la cinepresa è piazzata immobile al centro, esattamente all\'altezza degli occhi di uno spettatore seduto in ottava fila di platea («il miglior posto del teatro»). Gli attori entrano ed escono dalle quinte laterali e si inchinano verso l\'obiettivo.',
      'Tuttavia, Méliès scopre per caso l\'"arresto di manovella" (stop trick): interrompendo la ripresa, modificando un elemento e riprendendo a girare, fa apparire e sparire persone, rimpicciolisce teste e crea metamorfosi. Nasce la messinscena dell\'irreale, capostipite del cinema fantastico, di fantascienza e degli effetti visivi.'
    ],
    keyWorks: [
      { title: 'Viaggio nella Luna (Le Voyage dans la Lune)', year: 1902, note: 'Capolavoro assoluto con la celebre astronave conficcata nell\'occhio della Luna', type: 'film' },
      { title: 'L\'uomo dalla testa di caucciù (L\'homme à la tête de caoutchouc)', year: 1901, note: 'Primo carrello della storia del cinema per ingrandire la testa sul mascherino', type: 'film' }
    ],
    famousQuote: {
      text: 'Il mio studio a Montreuil era insieme un laboratorio di pittura, un teatro di magia e una fabbrica di sogni ad occhi aperti.',
      author: 'Georges Méliès'
    },
    iconographicDetail: {
      title: 'L\'Inquadratura-Platea di Méliès',
      subtitle: 'La cinepresa immobile di fronte al proscenio dipinto',
      diagramType: 'framing_lens',
      explanation: 'Campo medio fisso a 1.33:1 frontale, perfettamente allineato con il centro del palcoscenico a vetri di Montreuil, con fondali dipinti a chiaroscuro forzato.',
      visualElements: [
        { label: 'Cinepresa come occhio di platea', description: 'Nessun movimento di macchina: l\'inquadratura coincide con il boccascena teatrale' },
        { label: 'Fondali dipinti trompe-l\'œil', description: 'Tele scenografiche dipinte in gradazioni di grigio per essere lette dal bianco e nero ortocromatico' },
        { label: 'Trucchi in macchina (Stop-motion e sovrimpressioni)', description: 'Arresto di manovella per far sparire personaggi ed elementi scenici' }
      ],
      comparativeNote: 'Rappresenta il momento in cui il cinema prende la forma esatta del teatro, prima che Griffith introduca la scomposizione dello spazio in piani ravvicinati.'
    },
    connections: [
      { targetId: 'scatola_ottica', relation: 'Méliès mutua intatta l\'architettura della scatola prospettica teatrale' },
      { targetId: 'griffith', relation: 'Griffith romperà l\'inquadratura teatrale fissa inventando il montaggio analitico' }
    ],
    x: 480,
    y: 340
  },
  {
    id: 'griffith',
    label: 'D.W. Griffith & la Frattura della Scena',
    subtitle: '1915: Il montaggio analitico e l\'emancipazione dal teatro filmato',
    category: 'autore',
    domain: 'cinema',
    era: 'avanguardie_muto',
    yearStart: 1908,
    yearEnd: 1919,
    yearLabel: '1908 — 1919',
    location: 'Stati Uniti (New York, California)',
    regionId: 'usa',
    shortDescription: 'Regista americano che emancipa il cinema dal teatro: spezza l\'inquadratura unica introducendo primo piano psicologico, raccordo sull\'asse, montaggio alternato e carrello dinamico.',
    fullEssay: [
      'Se Méliès ha portato il teatro dentro il cinema, David Wark Griffith è l\'uomo che ha reciso il cordone ombelicale tra i due linguaggi, inventando la grammatica del cinema moderno.',
      'Nei primi film della Biograph (1908-1913) e poi nei colossi "Nascita di una nazione" (1915) e "Intolerance" (1916), Griffith infrange il tabù della distanza teatrale fissa. I produttori gli gridavano: «Il pubblico paga per vedere l\'attore per intero, non solo la testa!»; Griffith risponde che la messinscena filmica non è la platea, ma il pensiero stesso dello spettatore.',
      'Scomponendo la scena in montaggio analitico (campo lungo per localizzare l\'ambiente, piano medio per le relazioni, primo piano per l\'intimità psicologica, dettaglio per l\'indizio narrativo), Griffith distrugge la continuità spaziale teatrale.',
      'Inoltre con il "montaggio alternato" (cross-cutting) inventa il salvataggio all\'ultimo secondo: mentre a teatro possiamo assistere solo a ciò che accade contemporaneamente nello stesso palco, al cinema la messinscena può far convergere verso lo spettatore due azioni che accadono a chilometri di distanza.'
    ],
    keyWorks: [
      { title: 'Nascita di una nazione (The Birth of a Nation)', year: 1915, note: 'Monumento del découpage classico e della composizione epica di masse', type: 'film' },
      { title: 'Intolerance', year: 1916, note: 'Quattro epoche storiche montate in crescendo drammatico con carrelli vertiginosi', type: 'film' }
    ],
    famousQuote: {
      text: 'Il mio compito è farvi vedere: non semplicemente mostrarvi una scena teatrale, ma farvi entrare dentro il battito del cuore dei personaggi.',
      author: 'David Wark Griffith'
    },
    iconographicDetail: {
      title: 'La Scomposizione Analitica di Griffith',
      subtitle: 'Dal quadro teatrale unico alla sequenza frammentata',
      diagramType: 'editing_flow',
      explanation: 'Sostituzione dell\'inquadratura d\'insieme fissa con la gerarchia: Master Shot -> Campo Medio -> Primo Piano -> Dettaglio, ricomposti dal montaggio continuo.',
      visualElements: [
        { label: 'Master Shot (Campo totale stabilizzatore)', description: 'Fissa la geografia e le posizioni spaziali dei personaggi' },
        { label: 'Primo piano emozionale (Close-Up)', description: 'Isola l\'espressione degli occhi, impossibile da vedere a teatro dall\'ultima fila' },
        { label: 'Montaggio alternato (Parallel cut)', description: 'Tensione simultanea tra due spazi diegetici distanti' }
      ],
      comparativeNote: 'Mentre a teatro l\'occhio dello spettatore decide dove guardare, nel cinema griffithiano è il regista che guida forzatamente lo sguardo del pubblico.'
    },
    connections: [
      { targetId: 'melies', relation: 'Distrugge la tirannia dell\'inquadratura frontale unica di Méliès' },
      { targetId: 'decoupage_classico', relation: 'Fonda le regole formali che diventeranno il découpage classico' },
      { targetId: 'ejzenstejn_montaggio', relation: 'Ejzenštejn studierà Griffith per sviluppare il montaggio dialettico sovietico' }
    ],
    x: 640,
    y: 350
  },
  {
    id: 'caligari_espressionismo',
    label: 'L\'Espressionismo Tedesco & Caligari',
    subtitle: '1920: La scenografia allucinata e lo spazio come stato mentale',
    category: 'movimento',
    domain: 'cinema',
    era: 'avanguardie_muto',
    yearStart: 1920,
    yearEnd: 1926,
    yearLabel: '1920 — 1926',
    location: 'Germania (Berlino, studi UFA)',
    regionId: 'germania',
    shortDescription: 'Con "Il gabinetto del dottor Caligari" di Robert Wiene, la messinscena diventa pittura allucinata: tele sghembe con ombre nere dipinte sul pavimento, angoli acuti e recitazione isterica.',
    fullEssay: [
      'All\'indomani del trauma della Prima Guerra Mondiale e della Repubblica di Weimar, il cinema tedesco produce la più violenta trasfigurazione visiva della storia: l\'Espressionismo.',
      'Nel film manifesto "Il gabinetto del dottor Caligari" (1920) diretto da Robert Wiene, con le scenografie ideate dai pittori del gruppo "Der Sturm" (Hermann Warm, Walter Reimann, Walter Röhrig), lo spazio cessa per sempre di essere mimetico o realistico. Sulle pareti e sui pavimenti dello studio vengono dipinte ombre nere aguzze, porte storte, finestre a trapezio, camini contorti.',
      'Lo slogan dei pittori era: «Il film deve essere un disegno reso vivo». La luce non è più un fascio naturale ma un tratto d\'inchiostro; la prospettiva è violentemente deformata per rispecchiare la mente delirante e paranoica del protagonista.',
      'Gli attori (Werner Krauss, Conrad Veidt) non adottano la recitazione naturale ma movenze a scatti, occhi spalancati, pose scultoree rigide che si fondono con i triangoli scenografici. La messinscena espressionista dimostra che l\'ambiente cinematografico non è una cornice neutra, ma la proiezione esteriore dell\'inconscio.'
    ],
    keyWorks: [
      { title: 'Il gabinetto del dottor Caligari (Robert Wiene)', year: 1920, note: 'Manifesto supremo: scenografia dipinta distorta e recitazione geometrizzata', type: 'film' },
      { title: 'Metropolis (Fritz Lang)', year: 1927, note: 'L\'espressionismo applicato alla città monumentale e alle geometrie di massa', type: 'film' }
    ],
    famousQuote: {
      text: 'Le immagini cinematografiche devono diventare grafica vivente. L\'architettura del set deve esprimere il terrore che abita nell\'animo umano.',
      author: 'Hermann Warm, scenografo di Caligari'
    },
    iconographicDetail: {
      title: 'Geometria Fratturata Espressionista',
      subtitle: 'Linee oblique, ombre dipinte e prospettiva anti-euclidea',
      diagramType: 'stage_layout',
      explanation: 'Angoli aperti e acuti, tetti sghembi che incombono sui personaggi. Le ombre sono fisicamente dipinte con vernice nera sui pavimenti e sui muri dello studio.',
      visualElements: [
        { label: 'Ombre dipinte a contrasto assoluto', description: 'Nessuna sfumatura morbida: lame nere e luce bianca artificiale inchiodata' },
        { label: 'Porte a trapezio e muri inclinati', description: 'Rottura sistematica delle linee rette orizzontali e verticali' },
        { label: 'Attore integrato come linea geometrica', description: 'Corpo dell\'attore che prolunga le linee della scenografia con braccia tese' }
      ],
      comparativeNote: 'Eredita le teorie di Appia e Craig sulla drammatizzazione dello spazio, ma le converte in angoscia psicologica premonitrice del nazismo (Kracauer).'
    },
    connections: [
      { targetId: 'appia_luce', relation: 'Radice concettuale della luce chiaroscurale drammatica' },
      { targetId: 'craig_supermarionetta', relation: 'La recitazione di Cesare (Conrad Veidt) come воплощение della supermarionetta' },
      { targetId: 'murnau_kamera', relation: 'Murnau supererà la scenografia dipinta muovendo la cinepresa nello spazio reale' }
    ],
    x: 420,
    y: 490
  },
  {
    id: 'mejerchold_biomeccanica',
    label: 'Mejerchol\'d & la Biomeccanica',
    subtitle: '1920: Il costruttivismo scenico e il corpo dell\'attore come macchina',
    category: 'autore',
    domain: 'teatro',
    era: 'avanguardie_muto',
    yearStart: 1920,
    yearEnd: 1938,
    yearLabel: '1920 — 1938',
    location: 'Russia / URSS (Mosca)',
    regionId: 'russia',
    shortDescription: 'Allievo ribelle di Stanislavskij: rifiuta il realismo borghese a favore della "teatralità teatrale", inventa la Biomeccanica per l\'attore-acrobata e collabora con scenografi costruttivisti come Popova.',
    fullEssay: [
      'Vsevolod Mejerchol\'d rappresenta la più radicale rivoluzione avanguardistica del teatro del Novecento. Formatosi al MChAT con Stanislavskij, se ne distacca ben presto: per Mejerchol\'d il teatro non deve nascondere la propria finzione con l\'illusione naturalistica, ma deve esaltare la propria "teatralità teatrale".',
      'Nel fervore della Rivoluzione d\'Ottobre e del costruttivismo sovietico, Mejerchol\'d formula la "Biomeccanica": un sistema di allenamento fisico rigoroso basato sull\'efficienza tayloristica del lavoro, sulla coordinazione ritmica, sull\'acrobazia e sul riflesso motorio. La formula celebre è: «N = A1 + A2» (dove N è l\'attore, A1 il costruttore-mente e A2 l\'esecutore-corpo). L\'emozione non nasce dall\'introspezione psicologica, ma dal movimento fisico nello spazio.',
      'Sul piano scenografico, con artiste come Ljubov\' Popova e Varvara Stepanova, elimina qualsiasi fondale o sipario: il palcoscenico è dominato da costruzioni in legno e ferro praticabili (scivoli, ruote dentate, scale, mulini a vento, travi a vista). Gli attori indossano la "prozodežda" (tuta da lavoro operaia neutra).',
      'Il suo allievo prediletto, Sergej Ejzenštejn, trasferirà i principi della biomeccanica e dello scontro cinetico direttamente nel montaggio cinematografico sovietico.'
    ],
    keyWorks: [
      { title: 'Il magnifico cornuto (Fernand Crommelynck)', year: 1922, note: 'Scenografia costruttivista di Popova con ruote giranti e scivoli usati dagli attori', type: 'spettacolo' },
      { title: 'Il revisore di Gogol\'', year: 1926, note: 'Capolavoro assoluto della regia russa: 15 quadri mobili su carrelli semoventi', type: 'spettacolo' }
    ],
    famousQuote: {
      text: 'Se l\'attore impara a dominare le leggi della meccanica del proprio corpo, egli saprà suscitare nello spettatore qualsiasi riflesso emotivo.',
      author: 'Vsevolod Mejerchol\'d'
    },
    iconographicDetail: {
      title: 'Scenografia Costruttivista di Popova',
      subtitle: 'Pedane cinetiche, scivoli e telai metallici a vista',
      diagramType: 'stage_layout',
      explanation: 'Nessun sipario, pareti o fondali: una macchina teatrale tridimensionale di travi, ruote girevoli e scivoli dove l\'attore si muove come operaio acrobata.',
      visualElements: [
        { label: 'Macchina scenica praticabile', description: 'Scale, ponti e scivoli che obbligano l\'attore a un moto biomeccanico continuo' },
        { label: 'Ruote cinetiche rotanti', description: 'Meccanismi che girano a velocità variabili a seconda del ritmo dell\'azione drammatica' },
        { label: 'Prozodežda (Tuta da lavoro)', description: 'Costumi blu/grigi privi di sfarzo storico che enfatizzano le linee anatomiche' }
      ],
      comparativeNote: 'La biomeccanica influenza direttamente il cinema d\'avanguardia sovietico e l\'animazione meccanica (Buster Keaton, Charlie Chaplin in Tempi moderni).'
    },
    connections: [
      { targetId: 'stanislavskij', relation: 'Opposizione dialettica totale: movimento esterno vs psicologia interna' },
      { targetId: 'ejzenstejn_montaggio', relation: 'Ejzenštejn fu allievo di Mejerchol\'d e traspose la biomeccanica nel cinema' },
      { targetId: 'brecht_straniamento', relation: 'Influenza decisiva sul teatro politico e antinaturalista di Brecht' }
    ],
    x: 620,
    y: 490
  },
  {
    id: 'murnau_kamera',
    label: 'F.W. Murnau & la Cinepresa Dinamica',
    subtitle: '1924: L\'Entfesselte Kamera e lo spazio cinematografico continuo',
    category: 'autore',
    domain: 'cinema',
    era: 'avanguardie_muto',
    yearStart: 1922,
    yearEnd: 1927,
    yearLabel: '1922 — 1927',
    location: 'Germania / USA (Berlino, Hollywood)',
    regionId: 'germania',
    shortDescription: 'Regista di "Nosferatu" e "L\'ultima risata": con il direttore della fotografia Karl Freund inventa la "cinepresa scatenata", liberando la macchina da presa da qualsiasi vincolo statico.',
    fullEssay: [
      'Friedrich Wilhelm Murnau è universalmente considerato uno dei massimi architetti visivi della storia del cinema. Mentre i suoi colleghi espressionisti costringevano gli attori dentro scenografie dipinte artificiali, Murnau cerca la poesia dello spazio reale trasfigurato dalla luce e dal movimento.',
      'Con "Nosferatu il vampiro" (1922), esce dagli studi per girare nei borghi baltici e tra i boschi dei Carpazi: l\'ombra allungata del vampiro che sale le scale o il profilo della nave fantasma creano un\'iconografia eterna senza bisogno di tele sghembe.',
      'Ma il capolavoro assoluto della messinscena dinamica è "L\'ultima risata" (Der letzte Mann, 1924). Insieme all\'operatore Karl Freund, Murnau inventa la "Entfesselte Kamera" (la cinepresa scatenata): la macchina da presa viene imbracata sul petto dell\'operatore, montata su biciclette, sospesa a cavi volanti sopra il traffico di Berlino o fissata a carrelli che entrano nelle porte a vetri.',
      'La cinepresa scivola, vola e si ubriaca insieme al vecchio portiere d\'albergo interpretato da Emil Jannings. Per la prima volta nella storia, la messinscena non è più un punto fisso che osserva l\'evento, ma è l\'evento stesso che viene vissuto dall\'interno dello spazio filmico continuo.'
    ],
    keyWorks: [
      { title: 'Nosferatu il vampiro (Nosferatu, eine Symphonie des Grauens)', year: 1922, note: 'L\'orrore generato dall\'ombra e dalla natura reale trasfigurata', type: 'film' },
      { title: 'L\'ultima risata (Der letzte Mann)', year: 1924, note: 'Trionfo della cinepresa scatenata: racconto visivo puro senza una sola didascalia', type: 'film' },
      { title: 'Aurora (Sunrise: A Song of Two Humans)', year: 1927, note: 'Il vertice del cinema muto mondiale: carrelli fluidi nella palude notturna', type: 'film' }
    ],
    famousQuote: {
      text: 'Il cinema ideale è quello in cui la macchina da presa è libera come l\'occhio umano: fluisce attraverso le stanze, sale in cielo e rivela l\'invisibile.',
      author: 'F.W. Murnau'
    },
    iconographicDetail: {
      title: 'L\'Entfesselte Kamera di Freund & Murnau',
      subtitle: 'La cinepresa mobile che attraversa la soglia scenica',
      diagramType: 'camera_movement',
      explanation: 'Svincolamento del treppiede: cineprese imbracate a spalla, su carrelli a rotaia e gru che penetrano nelle porte girevoli dell\'hotel, rendendo lo spazio fluido.',
      visualElements: [
        { label: 'Attraversamento continuo delle soglie', description: 'La cinepresa supera porte, finestre e scale senza stacchi di montaggio' },
        { label: 'Soggettiva ottica ed emozionale', description: 'La cinepresa barcolla e perde fuoco quando il personaggio si ubriaca' },
        { label: 'Luce chiaroscurale atmosferica', description: 'Fari a specchio posizionati per creare nebbia luminosa e riflessi sul selciato bagnato' }
      ],
      comparativeNote: 'Supera definitivamente l\'impostazione teatrale: l\'inquadratura non è più un contenitore dello spazio ma uno sguardo mobile immersivo.'
    },
    connections: [
      { targetId: 'caligari_espressionismo', relation: 'Evolve il chiaroscuro espressionista dalla pittura statica alla fluidità ottica' },
      { targetId: 'renoir_spazio', relation: 'Ispiratore diretto dei carrelli fluidi e del piano sequenza di Jean Renoir' },
      { targetId: 'welles_profondita', relation: 'Welles considererà Sunrise di Murnau il più grande manuale di regia cinematografica' }
    ],
    x: 260,
    y: 520
  },
  {
    id: 'ejzenstejn_montaggio',
    label: 'Sergej Ejzenštejn & le Attrazioni',
    subtitle: '1925: Dalla scena d\'avanguardia al montaggio delle collisioni',
    category: 'autore',
    domain: 'cinema',
    era: 'avanguardie_muto',
    yearStart: 1923,
    yearEnd: 1948,
    yearLabel: '1923 — 1948',
    location: 'URSS (Mosca, Odessa)',
    regionId: 'russia',
    shortDescription: 'Regista teorico monumentale: allievo di Mejerchol\'d al Proletkul\'t teatrale, trasferisce il "Montaggio delle attrazioni" al cinema creando lo scontro dialettico visivo di "La corazzata Potëmkin".',
    fullEssay: [
      'Nessun autore incarna la transizione dal teatro al cinema con la lucidità teorica di Sergej Michajlovič Ejzenštejn. Iniziata la carriera come scenografo e regista nel teatro operaio del Proletkul\'t sotto la guida di Mejerchol\'d, Ejzenštejn pubblica nel 1923 il saggio fondamentale "Il montaggio delle attrazioni".',
      'Per attrazione teatrale intende «qualsiasi elemento aggressivo dello spettacolo che sottoponga lo spettatore a un\'azione sensoriale o psicologica calcolata per produrre scosse emotive». Nello spettacolo "Anche il più saggio ci casca" trasforma il teatro in circo, piazza funamboli sopra la testa del pubblico e inserisce un breve sketch cinematografico.',
      'Ma presto Mejerchol\'d e la cornice teatrale gli vanno stretti: nel 1924 gira "Sciopero" e nel 1925 il capolavoro assoluto "La corazzata Potëmkin". Al cinema Ejzenštejn formula la teoria del montaggio intellettuale e dialettico: l\'inquadratura non è un mattone da accostare dolcemente a un altro (come nel cinema americano), ma una cellula che deve COLLIDERE con la successiva.',
      'Nella celebre sequenza della scalinata di Odessa, il montaggio comprime ed estende il tempo psicologico: i soldati scendono a ritmo metrico spietato, la carrozzella della madre morta precipita tra i gradini, i leoni di pietra si alzano per effetto di stacco. La messinscena è l\'esplosione delle forme al servizio della coscienza rivoluzionaria.'
    ],
    keyWorks: [
      { title: 'Il montaggio delle attrazioni (saggio su Lef)', year: 1923, note: 'Manifesto del teatro d\'assalto sensoriale prima del passaggio al cinema', type: 'trattato' },
      { title: 'La corazzata Potëmkin (Bronenosec Potëmkin)', year: 1925, note: 'La scalinata di Odessa: pietra miliare del montaggio drammatico mondiale', type: 'film' },
      { title: 'Ivan il Terribile (Ivan Groznyj)', year: 1944, note: 'Ritorno alla ieraticità teatrale: costumi scultorei, ombre giganti e colore espressionista', type: 'film' }
    ],
    famousQuote: {
      text: 'Il montaggio non è unire pezzi pacifici: il montaggio è uno scontro! Dalla collisione di due fattori visivi scaturisce il concetto intellettuale.',
      author: 'Sergej M. Ejzenštejn'
    },
    iconographicDetail: {
      title: 'La Collisione Dialettica delle Attrazioni',
      subtitle: 'Scontro ritmico di vettori, volumi e tempi',
      diagramType: 'editing_flow',
      explanation: 'Accostamento di inquadrature a contrasto: diagonale discendente (i soldati) contro diagonale ascendente (le vittime); primo piano urlante contro campo lungo della scalinata.',
      visualElements: [
        { label: 'Vettori visivi contrapposti', description: 'Linee di forza in collisione: orizzontale vs verticale, luce vs ombra' },
        { label: 'Dilatazione del tempo reale', description: 'La discesa della carrozzella dura tre volte il tempo fisico reale' },
        { label: 'Metonimia dell\'oggetto choc', description: 'Il pince-nez del medico che pende dalle sartie insanguinate' }
      ],
      comparativeNote: 'Ejzenštejn rovescia l\'idea di messinscena: mentre per Bazin la regia è rispetto della continuità dello spazio, per Ejzenštejn la regia è frammentazione e ricomposizione autorale.'
    },
    connections: [
      { targetId: 'mejerchold_biomeccanica', relation: 'Mejerchol\'d fu il suo maestro fondamentale: dalla biomeccanica al montaggio' },
      { targetId: 'griffith', relation: 'Studia analiticamente il montaggio di Intolerance per superarne la concezione lineare' },
      { targetId: 'welles_profondita', relation: 'Polo dialettico opposto: montaggio sovrano vs piano sequenza baziniano' }
    ],
    x: 800,
    y: 460
  },
  {
    id: 'brecht_straniamento',
    label: 'Bertolt Brecht & il Teatro Epico',
    subtitle: '1928: Il Verfremdungseffekt e la distruzione dell\'illusione borghese',
    category: 'autore',
    domain: 'teatro',
    era: 'classicismo_realismo',
    yearStart: 1928,
    yearEnd: 1956,
    yearLabel: '1928 — 1956',
    location: 'Germania (Berlino, Berliner Ensemble)',
    regionId: 'germania',
    shortDescription: 'Crea il Teatro Epico: rifiuta la catarsi aristotelica e l\'immedesimazione passiva. Usa cartelli con titoli di scena, canzoni (song), luci bianche scoperte e attori che "mostrano" il personaggio anziché incarnarlo.',
    fullEssay: [
      'Bertolt Brecht compie la più lucida operazione politica e teorica della storia teatrale del Novecento, teorizzando e praticando il "Teatro Epico" in contrapposizione al millenario "Teatro Drammatico" di ascendenza aristotelica.',
      'Per Brecht, il teatro borghese tradizionale è un "teatro dell\'illusione" (e della droga emotiva): seduce lo spettatore inducendolo a immedesimarsi sentimentalmente nei protagonisti, lasciandolo poi pacificato con la catarsi finale. Lo spettatore esce da teatro commosso, ma convinto che il mondo sia immutabile e che le tragedie umane siano opera del fato.',
      'Brecht ribalta questa logica introducendo il "Verfremdungseffekt" (effetto di straniamento): mostrare le cose più note e familiari sotto una luce insolita, così da destare lo stupore e il giudizio critico dello spettatore. «Non dire: è naturale! Ma chiediti: perché avviene questo?».',
      'Sul piano della messinscena, Brecht smonta sistematicamente la quarta parete: niente luci d\'atmosfera o penombre seducenti, ma riflettori bianchi montati a vista in piena sala; cartelli proiettati che anticipano l\'esito della scena («Affinché lo spettatore non si chieda come finirà, ma COME si comportano gli uomini»); musiche e canzoni (Kurt Weill) che spezzano l\'azione; l\'attore deve citare il personaggio in terza persona, mantenendo una distanza critica.'
    ],
    keyWorks: [
      { title: 'L\'opera da tre soldi (Die Dreigroschenoper)', year: 1928, note: 'Trionfo epocale: canzoni cabaret, cartelli satirici e orchestra sul palco', type: 'spettacolo' },
      { title: 'Madre Courage e i suoi figli (Mutter Courage und ihre Kinder)', year: 1941, note: 'La carretta della Courage sul palcoscenico girevole: icona della guerra mercificata', type: 'spettacolo' },
      { title: 'Breviario di estetica teatrale (Kleines Organon für das Theater)', year: 1948, note: 'Il capolavoro teorico del teatro politico dell\'era scientifica', type: 'trattato' }
    ],
    famousQuote: {
      text: 'Lo scopo dello straniamento è togliere alla vicenda quel carattere di naturalezza e ovvietà che rende lo spettatore inerte di fronte alla storia.',
      author: 'Bertolt Brecht',
      source: 'Breviario di estetica teatrale, 1948'
    },
    iconographicDetail: {
      title: 'Dispositivo Scenico dello Straniamento',
      subtitle: 'Riflettori a vista, mezze tende e cartelli didattici',
      diagramType: 'stage_layout',
      explanation: 'Nessun trucco magico celato: lampade visibili alla platea, mezza tenda brechtiana su cavo d\'acciaio che non tocca il soffitto e cartelli con scritte proiettate.',
      visualElements: [
        { label: 'Proiettori e macchinari a giorno', description: 'Le fonti di luce bianca non sono nascoste nelle quinte ma mostrate al pubblico' },
        { label: 'Mezza tenda (Brecht-Gardine)', description: 'Telo grigio tirato a mano a mezza altezza che smaschera il cambio di scena' },
        { label: 'Cartelli e proiezioni di testo', description: 'Schermi che riassumono l\'argomento della scena prima che essa inizi' }
      ],
      comparativeNote: 'Lo straniamento brechtiano migra direttamente nel cinema moderno di Jean-Luc Godard, Rainer Werner Fassbinder e Lars von Trier (Dogville).'
    },
    connections: [
      { targetId: 'quarta_parete', relation: 'Brecht abbatte con precisione chirurgica l\'illusione della quarta parete' },
      { targetId: 'godard_nouvelle_vague', relation: 'Godard adotta i cartelli e lo straniamento recitativo in tutto il suo cinema' },
      { targetId: 'strehler_piccolo', relation: 'Strehler sarà uno dei più grandi interpreti registici di Brecht in Europa' }
    ],
    x: 480,
    y: 620
  },
  {
    id: 'artaud_crudelta',
    label: 'Antonin Artaud & la Crudeltà',
    subtitle: '1938: Il Teatro e il suo Doppio e l\'annientamento della parola',
    category: 'autore',
    domain: 'teatro',
    era: 'classicismo_realismo',
    yearStart: 1931,
    yearEnd: 1948,
    yearLabel: '1931 — 1948',
    location: 'Francia (Parigi)',
    regionId: 'francia',
    shortDescription: 'Profeta visionario: rigetta il teatro psicologico fondato sul testo d\'autore. Ispirato dal teatro balinese, teorizza il "Teatro della Crudeltà": rituale sciamanico, suono lacerante e carne viva.',
    fullEssay: [
      'Poeta, attore cinematografico (fu il monaco Massieu nella "Passione di Giovanna d\'Arco" di Dreyer) e teorico, Antonin Artaud pubblica nel 1938 la raccolta di saggi più incendiaria del Novecento: "Il teatro e il suo doppio".',
      'Artaud muove un atto d\'accusa feroce contro la civiltà occidentale e il suo teatro: una forma d\'arte decaduta, imbalsamata nel culto del testo letterario e nei problemi psicologici borghesi («il teatro delle chiacchiere da salotto»). Folgorato all\'Esposizione Coloniale di Parigi del 1931 dalle danze sacre del teatro balinese, Artaud scopre un teatro in cui la parola non è testo dialogato, ma geroglifico corporeo, danza ipnotica e vibrazione sonora.',
      'Formula così il "Teatro della Crudeltà", dove crudeltà non significa sadismo sanguinoso, ma rigore metafisico implacabile, sottomissione alla necessità vitale, smascheramento delle pulsioni primordiali come durante un\'epidemia di peste: «Il teatro, come la peste, è una crisi che si risolve con la morte o con la guarigione».',
      'Sul piano dello spazio, Artaud abolisce la separazione tra sala e scena: il pubblico deve trovarsi al centro della sala su sedie girevoli, mentre l\'azione si scatena sui quattro muri perimetrali, sopra passerelle e gallerie, aggredito da luci abbaglianti e suoni d\'intensità insopportabile. La sua utopia influenzerà il Living Theatre, Grotowski e Peter Brook.'
    ],
    keyWorks: [
      { title: 'Il teatro e il suo doppio (Le Théâtre et son Double)', year: 1938, note: 'Raccolta profetica di manifesti e lettere che reinventa la nozione stessa di teatro', type: 'trattato' },
      { title: 'I Cenci (Les Cenci)', year: 1935, note: 'Unica messinscena artaudiana con onde Martenot e suoni metallici registrati', type: 'spettacolo' }
    ],
    famousQuote: {
      text: 'Non possiamo continuare a prostituire l\'idea di teatro col solo teatro delle parole. Bisogna fare del teatro un rituale in cui i corpi degli attori siano come vittime al rogo che fanno cenni attraverso le fiamme.',
      author: 'Antonin Artaud'
    },
    iconographicDetail: {
      title: 'Spazio Immersivo Totale di Artaud',
      subtitle: 'Il pubblico al centro, l\'azione alle pareti e sui ballatoi',
      diagramType: 'stage_layout',
      explanation: 'Abolizione del proscenio: il pubblico siede al centro su poltrone orientabili; l\'azione teatrale esplode lungo i quattro angoli e sui ballatoi sopraelevati.',
      visualElements: [
        { label: 'Pubblico al centro dello spazio', description: 'Nessuna platea protetta: gli spettatori sono immersi nel vortice rituale' },
        { label: 'Azione perimetrale su gallerie', description: 'Attori che si muovono lungo i muri e sopra le teste del pubblico' },
        { label: 'Suono fisico aggredente', description: 'Uso di strumenti metallici arcaici e frequenze che colpiscono il plesso solare' }
      ],
      comparativeNote: 'Anticipa le installazioni di arte contemporanea, il teatro d\'avanguardia degli anni Sessanta (Living Theatre) e il sound design cinematografico immersivo.'
    },
    connections: [
      { targetId: 'quarta_parete', relation: 'Distrugge la quarta parete inglobando fisicamente lo spettatore nel rituale' },
      { targetId: 'spazio_vuoto_brook', relation: 'Peter Brook metterà in scena il Marat/Sade ispirandosi direttamente ad Artaud' }
    ],
    x: 320,
    y: 650
  },
  {
    id: 'renoir_spazio',
    label: 'Jean Renoir & la Profondità Naturale',
    subtitle: '1939: La regola del gioco e lo spazio democratico continuo',
    category: 'autore',
    domain: 'cinema',
    era: 'classicismo_realismo',
    yearStart: 1935,
    yearEnd: 1945,
    yearLabel: '1935 — 1945',
    location: 'Francia (Parigi, Sologne)',
    regionId: 'francia',
    shortDescription: 'Figlio del pittore impressionista Pierre-Auguste: caposcuola del cinema che non fraziona lo spazio. Con "La regola del gioco" usa ottiche corte, piani sequenza e profondità per far coesistere più azioni.',
    fullEssay: [
      'Jean Renoir è l\'autore cinematografico che André Bazin ha consacrato come padre della modernità dello sguardo. Mentre il cinema classico hollywoodiano degli anni Trenta imponeva il découpage analitico (stacco ogni 5-8 secondi per isolare chi parla), Renoir rifiuta di fare a pezzi la realtà.',
      'Nei capolavori francesi "La grande illusione" (1937) e soprattutto "La regola del gioco" (La Règle du jeu, 1939), Renoir concepisce la messinscena come un fiume continuo. I personaggi entrano ed escono dalle porte, si inseguono nei corridoi del castello di La Chesnaye, passano dal primo piano allo sfondo con una fluidità miracolosa.',
      'Renoir adotta lenti a focale corta (28mm e 35mm) e diaframmi chiusi per mantenere a fuoco simultaneamente l\'azione in primo piano e ciò che accade dietro. Non c\'è gerarchia autoritaria: lo spettatore è libero di guardare i servi che conversano in cucina o i nobili che flirtano in salotto.',
      'La cinepresa di Renoir, manovrata con carrelli eleganti e panoramiche agili, sembra non sapere cosa accadrà un attimo dopo, dando all\'inquadratura la freschezza e l\'imprevedibilità della vita stessa. È la nascita della "messinscena in profondità".'
    ],
    keyWorks: [
      { title: 'La grande illusione (La Grande Illusion)', year: 1937, note: 'Panoramiche continue che legano prigionieri francesi e comandante tedesco senza stacchi', type: 'film' },
      { title: 'La regola del gioco (La Règle du jeu)', year: 1939, note: 'Il vertice del piano sequenza corale e della profondità di campo pre-bellica', type: 'film' }
    ],
    famousQuote: {
      text: 'Più vado avanti nel mio mestiere, più mi accorgo che la sola cosa che conta è lasciare che gli attori vivano liberamente nello spazio, senza imprigionarli nel mirino.',
      author: 'Jean Renoir'
    },
    iconographicDetail: {
      title: 'La Profondità Corale di Renoir',
      subtitle: 'Composizione su più piani e scorrimento laterale continuo',
      diagramType: 'framing_lens',
      explanation: 'Focale corta con profondità di campo estesa: primo piano (primo livello drammatico), piano medio (secondo livello) e sfondo visibile aperto verso altre stanze.',
      visualElements: [
        { label: 'Porte comunicanti e fughe di stanze', description: 'Lo sguardo penetra attraverso le infilate di porte del castello' },
        { label: 'Polifonia dell\'azione', description: 'I personaggi in secondo piano non sono comparse morte ma portatori di un\'azione parallela' },
        { label: 'Panoramica a ricollocare (Re-framing)', description: 'La cinepresa accarezza i personaggi muovendosi solo per assecondare i loro spostamenti' }
      ],
      comparativeNote: 'Ponte fondamentale tra la tradizione francese della mise en scène teatrale e la rivoluzione del piano sequenza baziniano di Orson Welles.'
    },
    connections: [
      { targetId: 'murnau_kamera', relation: 'Eredita la mobilità fluida dello spazio da Murnau' },
      { targetId: 'welles_profondita', relation: 'Prepara la via al Deep Focus di Quarto Potere' },
      { targetId: 'godard_nouvelle_vague', relation: 'Renoir sarà il padre spirituale venerato da tutti gli autori della Nouvelle Vague' }
    ],
    x: 640,
    y: 630
  },
  {
    id: 'welles_profondita',
    label: 'Orson Welles & Deep Focus',
    subtitle: '1941: Quarto Potere e la rivoluzione del grandangolo estremo',
    category: 'autore',
    domain: 'cinema',
    era: 'classicismo_realismo',
    yearStart: 1941,
    yearEnd: 1970,
    yearLabel: '1941 — 1970',
    location: 'USA / Europa (Hollywood)',
    regionId: 'usa',
    shortDescription: 'Genio venticinquenne proveniente dal Mercury Theatre: sconvolge Hollywood con "Quarto Potere". Insieme a Gregg Toland inventa il Deep Focus totale, i soffitti visibili e le angolazioni dal basso.',
    fullEssay: [
      'Quando il venticinquenne Orson Welles arriva a Hollywood nel 1940, forte dei trionfi teatrali con il Mercury Theatre (il celebre "Giulio Cesare" antifascista in camicie nere e la trasmissione radiofonica della "Guerra dei Mondi"), non rispetta alcuna convenzione dello Studio System: «Hollywood è il più bel trenino elettrico che un bambino possa desiderare».',
      'Nel capolavoro "Quarto Potere" (Citizen Kane, 1941), insieme allo straordinario direttore della fotografia Gregg Toland, Welles riscrisse le leggi della messinscena cinematografica. Toland utilizza lenti grandangolari spinte (24mm), diaframmi chiusissimi a f/16 e la nuova pellicola ultrasensibile Kodak Super-XX: il risultato è il "Deep Focus" (profondità di campo totale), dove il bicchiere in primissimo piano e il personaggio a quaranta metri sul fondo sono simultaneamente nitidissimi.',
      'Per la prima volta nel cinema commerciale si vedono i SOFFITTI delle stanze: Welles fa scavare buche nel pavimento degli studi per piazzare la cinepresa a filo terra, inquadrando i personaggi con angolazioni dal basso verso l\'alto che li trasformano in colossi monumentali schiacciati dalla loro stessa solitudine morale.',
      'Il teorico André Bazin scriverà che Welles ha restituito allo spettatore la sua libertà intellettuale: non è più il montaggio che ti impone dove guardare, ma è la complessità plastica dell\'inquadratura che ti invita a esplorarla.'
    ],
    keyWorks: [
      { title: 'Quarto Potere (Citizen Kane)', year: 1941, note: 'L\'opera che ha rifondato il linguaggio visivo del cinema moderno', type: 'film' },
      { title: 'L\'orgoglio dei Amberson (The Magnificent Ambersons)', year: 1942, note: 'Il vertice del piano sequenza virtuosistico nella dimora vittoriana', type: 'film' },
      { title: 'L\'infernale Quinlan (Touch of Evil)', year: 1958, note: 'Il più celebre piano sequenza d\'apertura della storia: tre minuti col timer della bomba', type: 'film' }
    ],
    famousQuote: {
      text: 'Provenivo dal teatro e non sapevo cosa non si potesse fare al cinema. Chiedevo semplicemente: perché non si può mettere a fuoco sia il veleno sul comodino sia la porta sul fondo? E abbiamo trovato il modo.',
      author: 'Orson Welles'
    },
    iconographicDetail: {
      title: 'Anatomia del Deep Focus Welliano',
      subtitle: 'Grandangolo spinto, soffitti bassi e angolazione dal basso',
      diagramType: 'framing_lens',
      explanation: 'Ottica grandangolare, diaframma f/16 e doppia esposizione ottica: il bicchiere col veleno in primo piano a 30 cm dall\'obiettivo e la porta a 15 metri sono entrambi a fuoco.',
      visualElements: [
        { label: 'Soffitti in tessuto trasparente', description: 'Permettono ai fari dall\'alto di illuminare tenendo l\'inquadratura dal basso' },
        { label: 'Planimetria su tre strati narrativi', description: 'Livello 1: il veleno/il bicchiere; Livello 2: Kane che entra; Livello 3: la porta' },
        { label: 'Grandangolo distorcente', description: 'Esagera le distanze tra le persone, isolandole visivamente nello stesso fotogramma' }
      ],
      comparativeNote: 'Welles porta nel cinema la tridimensionalità volumetrica che Craig e Appia avevano cercato a teatro, superando la bidimensionalità del montaggio analitico.'
    },
    connections: [
      { targetId: 'renoir_spazio', relation: 'Welles sviluppa ed esaspera formalmente la profondità di campo di Renoir' },
      { targetId: 'ejzenstejn_montaggio', relation: 'Rottura con la scuola sovietica: Bazin definisce Welles l\'antitesi di Ejzenštejn' },
      { targetId: 'tarkovskij_tempo', relation: 'Pioniere del piano sequenza che ispirerà la cinematografia d\'autore successiva' }
    ],
    x: 780,
    y: 630
  },
  {
    id: 'visconti_neorealismo',
    label: 'Luchino Visconti & il Neorealismo',
    subtitle: '1945: La terra trema e la fusione sublime tra lirismo e verità',
    category: 'autore',
    domain: 'ibrido',
    era: 'classicismo_realismo',
    yearStart: 1943,
    yearEnd: 1976,
    yearLabel: '1943 — 1976',
    location: 'Italia (Roma, Aci Trezza, Milano)',
    regionId: 'italia',
    shortDescription: 'Regista titanico sia di opera lirica e prosa (con Rina Morelli e Paolo Stoppa) sia di capolavori del cinema: con "La terra trema" usa pescatori siciliani autentici con la compostezza di una tragedia greca.',
    fullEssay: [
      'Nessun maestro ha incarnato la fecondazione reciproca tra messinscena teatrale e regia cinematografica quanto Luchino Visconti. Aristocratico milanese, allievo di Jean Renoir a Parigi, Visconti è l\'uomo che apre la stagione del Neorealismo con "Ossessione" (1943) e al contempo reinventa la regia teatrale italiana nel dopoguerra.',
      'Nel capolavoro neorealista "La terra trema" (1948), liberamente tratto dai "Malavoglia" di Verga e girato ad Aci Trezza senza teatri di posa, Visconti utilizza esclusivamente pescatori locali che parlano nel loro dialetto strettissimo. Ma a differenza della spontaneità documentaria di Rossellini, la messinscena viscontiana è di una solennità rigorosa, quasi musicale: le donne con gli scialli neri sugli scogli sembrano un coro di Eschilo.',
      'Nel teatro di prosa, Visconti impone per la prima volta in Italia mesi di prove serrate, abolisce il suggeritore, ordina arredi d\'epoca autentici (cassetti pieni di biancheria vera anche se non verranno aperti) e dirige attori leggendari come Vittorio Gassman, Marcello Mastroianni e Rina Morelli.',
      'Nel melodramma lirico alla Scala con Maria Callas ("La Traviata", 1955), Visconti compie il miracolo inverso: toglie alla lirica il ridicolo delle pose convenzionali per iniettarvi il realismo psicologico feroce del cinema.'
    ],
    keyWorks: [
      { title: 'La terra trema', year: 1948, note: 'Monumento del cinema neorealista: pescatori veri e composizione scultorea da tragedia antica', type: 'film' },
      { title: 'La locandiera di Goldoni', year: 1952, note: 'Spettacolo teatrale epocale: pulizia dai cascami farseschi e realismo sociale settecentesco', type: 'spettacolo' },
      { title: 'Il Gattopardo', year: 1963, note: 'La scena del ballo di 45 minuti: il vertice della messinscena storica mondiale', type: 'film' }
    ],
    famousQuote: {
      text: 'Ciò che mi appassiona è l\'uomo: l\'uomo vivo, il suo peso, la sua carne, il suo respiro, sia che si muova tra le quinte della Scala o sugli scogli di Sicilia.',
      author: 'Luchino Visconti'
    },
    iconographicDetail: {
      title: 'Composizione Scultoreo-Melodrammatica',
      subtitle: 'Rigore operistico tra le mura e le pietre reali',
      diagramType: 'stage_layout',
      explanation: 'Fusione di ambiente documentario veritiero (luce naturale, case scrostate) e disposizione coreografica dei corpi con ritmo plastico e cadenze da coro greco.',
      visualElements: [
        { label: 'Figure nere stagliate sul mare', description: 'Le donne di Aci Trezza immobili sugli scogli in attesa delle barche' },
        { label: 'Arredi autentici vissuti', description: 'Oggetti carichi di polvere e storia familiare, mai cartapesta da trovarobe' },
        { label: 'Movimento d\'insieme polifonico', description: 'I gruppi si muovono con la precisione di una partitura operistica' }
      ],
      comparativeNote: 'Punto di perfetta osmosi tra la precisione della regia teatrale e la libertà d\'aria aperta del Neorealismo cinematografico.'
    },
    connections: [
      { targetId: 'renoir_spazio', relation: 'Fu assistente di regia di Renoir sul set di Una gita in campagna' },
      { targetId: 'strehler_piccolo', relation: 'Fondatore con Strehler della nuova regia critica nel teatro italiano' },
      { targetId: 'antoine', relation: 'Condivide con Antoine la passione per l\'arredo vero e il disprezzo per la cartapesta' }
    ],
    x: 940,
    y: 620
  },
  {
    id: 'strehler_piccolo',
    label: 'Giorgio Strehler & il Piccolo Teatro',
    subtitle: '1947: Il teatro d\'arte per tutti e la regia critica poetica',
    category: 'autore',
    domain: 'teatro',
    era: 'modernita_onde',
    yearStart: 1947,
    yearEnd: 1997,
    yearLabel: '1947 — 1997',
    location: 'Italia (Milano, Piccolo Teatro)',
    regionId: 'italia',
    shortDescription: 'Fonda nel 1947 con Paolo Grassi il primo teatro stabile pubblico italiano: il Piccolo di Milano. Sintetizza la precisione scenica di Brecht, l\'umanesimo di Goldoni e la magia visiva di Shakespeare con Luciano Damiani ed Ezio Frigerio.',
    fullEssay: [
      'Il 14 maggio 1947, tra le rovine di Milano appena uscita dalla guerra e dal fascismo, Giorgio Strehler e Paolo Grassi fondano in via Rovello il Piccolo Teatro: il primo teatro pubblico stabile d\'Italia. Il motto è una dichiarazione di civiltà: «Un teatro d\'arte per tutti», non più privilegio mondano per élite aristocratiche, ma servizio pubblico necessario come l\'acquedotto, le scuole o gli ospedali.',
      'Strehler diventa il più grande regista del teatro italiano del secondo Novecento. La sua forza sta nella "regia critica": leggere i testi classici (Shakespeare, Goldoni, Cechov, Pirandello, Brecht) liberandoli dalle incrostazioni della tradizione accademica per farli dialogare col presente.',
      'Il suo capolavoro eterno è l\'"Arlecchino servitore di due padroni" di Goldoni (con Marcello Moretti e poi Ferruccio Soleri), che reinventa la Commedia dell\'Arte facendola viaggiare in tutto il mondo per oltre cinquant\'anni con una pedana di legno nuda, due candele e un fondale di iuta.',
      'Insieme a scenografi leggendari come Luciano Damiani ed Ezio Frigerio, Strehler crea immagini di una bellezza struggente: il mare di seta grigia ne "La tempesta", i velari bianchi ne "Il giardino dei ciliegi", il palcoscenico inclinato e la luce dorata ne "I giganti della montagna". La sua messinscena è rigore etico che si fa poesia della luce.'
    ],
    keyWorks: [
      { title: 'Arlecchino servitore di due padroni (Goldoni)', year: 1947, note: 'Rinascita della Commedia dell\'Arte: pedana spoglia, maschera di cuoio e fisicità pura', type: 'spettacolo' },
      { title: 'L\'opera da tre soldi (Brecht)', year: 1956, note: 'Allestimento leggendario lodato dallo stesso Brecht poco prima di morire', type: 'spettacolo' },
      { title: 'La tempesta di Shakespeare', year: 1978, note: 'Il mare di tessuto mosso a vista e Ariel che vola sospeso su cavi invisibili', type: 'spettacolo' }
    ],
    famousQuote: {
      text: 'Il teatro è una zattera di speranza che naviga in mezzo alle bufere della storia: noi mostriamo la finzione della scena affinché gli uomini comprendano la verità della vita.',
      author: 'Giorgio Strehler'
    },
    iconographicDetail: {
      title: 'La Scena Poetica Damiani-Strehler',
      subtitle: 'Pedana nuda, velari candidi e luce calda laterale',
      diagramType: 'stage_layout',
      explanation: 'Abolizione del sipario pesante di velluto: siparietto mobile di tela grezza, luce che lambisce il legno del palco e rivela i segni del tempo sulle assi.',
      visualElements: [
        { label: 'La pedana di legno sopraelevata', description: 'La pedana dei comici dell\'arte montata dentro il palcoscenico contemporaneo' },
        { label: 'Luce radente dorata', description: 'Fari bassi che proiettano ombre lunghe ed esaltano la texture dei tessuti poveri' },
        { label: 'Svelamento dell\'artificio poetico', description: 'I macchinisti e i cambi a vista non distruggono la commozione, ma la sublimano' }
      ],
      comparativeNote: 'Strehler dimostra che la lezione antinaturalista di Brecht non esclude la commozione poetica, influenzando il modo in cui il cinema storico ricostruisce il passato.'
    },
    connections: [
      { targetId: 'brecht_straniamento', relation: 'Interprete supremo di Brecht, premiato dall\'amicizia e stima del drammaturgo' },
      { targetId: 'visconti_neorealismo', relation: 'Compagni d\'armi nella fondazione della moderna regia d\'arte in Italia' },
      { targetId: 'scatola_ottica', relation: 'Reinterpreta la tradizione scenica all\'italiana liberandola dalla polvere' }
    ],
    x: 480,
    y: 770
  },
  {
    id: 'godard_nouvelle_vague',
    label: 'Jean-Luc Godard & la Nouvelle Vague',
    subtitle: '1960: Il Jump Cut e la destrutturazione del découpage classico',
    category: 'autore',
    domain: 'cinema',
    era: 'modernita_onde',
    yearStart: 1959,
    yearEnd: 1980,
    yearLabel: '1959 — 1980',
    location: 'Francia (Parigi)',
    regionId: 'francia',
    shortDescription: 'Critico dei "Cahiers du Cinéma": gira "Fino all\'ultimo respiro" con cinepresa a mano Caméflex, carrelli improvvisati su sedie a rotelle, jump cut violenti e sguardi diretti in macchina.',
    fullEssay: [
      'Nel 1959 esplode a Parigi la Nouvelle Vague, il movimento più influente della seconda metà del Novecento. Giovani critici dei "Cahiers du Cinéma" (Godard, Truffaut, Rohmer, Rivette, Chabrol), cresciuti alla Cinémathèque di Henri Langlois, proclamano la "politica degli autori": il regista non è un illustratore salariato di sceneggiature altrui, ma l\'autore unico che scrive il film con la cinepresa come uno scrittore con la penna ("caméra-stylo").',
      'Nel 1960 Jean-Luc Godard debutta con "Fino all\'ultimo respiro" (À bout de souffle) e fa saltare in aria cinquant\'anni di convenzioni accademiche. Niente teatri di posa, niente trucco pesante, niente scenografie ricostruite: gira lungo gli Champs-Élysées con una cinepresa a spalla Caméflex caricata con pellicola fotografica Ilford giuntata a mano, spinta dall\'operatore Raoul Coutard su una sedia a rotelle.',
      'Ma il gesto sovversivo supremo è il "Jump cut" (falso raccordo): taglia fotogrammi all\'interno della stessa inquadratura, facendo sobbalzare i personaggi nel tempo senza cambiare angolazione. Rifiuta la fluidità invisibile hollywoodiana per ricordare continuamente allo spettatore che sta guardando un FILM.',
      'Godard fa guardare Jean-Paul Belmondo dritto nell\'obiettivo per parlare con la platea («Se non vi piacciono il mare, la montagna o la città... andate a farvi fottere!»). È l\'equivalente cinematografico del Verfremdungseffekt brechtiano: la messinscena della modernità.'
    ],
    keyWorks: [
      { title: 'Fino all\'ultimo respiro (À bout de souffle)', year: 1960, note: 'Manifesto della Nouvelle Vague: jump cut, cinepresa a mano e Parigi viva', type: 'film' },
      { title: 'Questa è la mia vita (Vivre sa vie)', year: 1962, note: 'Dodici quadri brechtiani con Anna Karina e riprese di schiena nei bistrot', type: 'film' },
      { title: 'Il disprezzo (Le Mépris)', year: 1963, note: 'Riflessione titanica sulla morte del cinema a Villa Malaparte a Capri', type: 'film' }
    ],
    famousQuote: {
      text: 'Il cinema non è un\'arte che filma la vita: il cinema è ciò che c\'è tra la vita e l\'arte. La fotografia è verità, e il cinema è verità ventiquattro volte al secondo.',
      author: 'Jean-Luc Godard'
    },
    iconographicDetail: {
      title: 'La Decostruzione del Jump Cut',
      subtitle: 'Stacco sull\'asse, raccordi sbagliati e cinepresa in spalla',
      diagramType: 'editing_flow',
      explanation: 'Violazione sistematica del découpage classico: rimozione arbitraria di fotogrammi nella stessa inquadratura per creare un salto temporale scattante.',
      visualElements: [
        { label: 'Jump cut interno', description: 'Il personaggio salta in avanti di alcuni secondi senza stacco d\'angolatura' },
        { label: 'Sguardo in macchina provocatorio', description: 'L\'attore fissa l\'occhio dell\'obiettivo distruggendo la quarta parete' },
        { label: 'Luce naturale senza fari di riempimento', description: 'Rifiuto dell\'illuminazione classica a tre punti: la luce è quella del cielo parigino' }
      ],
      comparativeNote: 'Godard applica al cinema la rottura che Brecht aveva operato a teatro: svelare i trucchi della messinscena affinché lo spettatore resti sveglio e critico.'
    },
    connections: [
      { targetId: 'quarta_parete', relation: 'Demolisce lo schermo protettivo della quarta parete filmica' },
      { targetId: 'brecht_straniamento', relation: 'Trasposizione cinematografica diretta dei principi brechtiani' },
      { targetId: 'decoupage_classico', relation: 'Rifiuto radicale delle regole di trasparenza dello studio system' }
    ],
    x: 640,
    y: 780
  },
  {
    id: 'tarkovskij_tempo',
    label: 'Andrej Tarkovskij & Scolpire il Tempo',
    subtitle: '1975: Il piano sequenza metafisico e gli elementi primordiali',
    category: 'autore',
    domain: 'cinema',
    era: 'modernita_onde',
    yearStart: 1966,
    yearEnd: 1986,
    yearLabel: '1966 — 1986',
    location: 'URSS / Italia / Svezia (Mosca, Bagno Vignoni)',
    regionId: 'russia',
    shortDescription: 'Il più grande poeta visivo del cinema sovietico: teorizza il cinema come "scolpire il tempo". Rifiuta il montaggio a collisione di Ejzenštejn; usa lunghissimi piani sequenza, acqua stagnante, fuoco e pioggia interiore.',
    fullEssay: [
      'Andrej Tarkovskij rappresenta la vetta spirituale e filosofica della messinscena cinematografica. Nel suo trattato fondamentale "Scolpire il tempo" (1985), Tarkovskij si oppone apertamente alla tradizione del montaggio sovietico di Ejzenštejn: per lui il montaggio non deve essere una collisione intellettuale di concetti astratti, perché il cinema nasce dalla cattura del flusso del tempo reale all\'interno dell\'inquadratura.',
      'Come uno scultore toglie il marmo superfluo per far emergere la figura, così il regista cinematografico toglie i secondi inutili dal blocco temporale per rivelare il ritmo interiore dell\'esistenza. I suoi piani sequenza, lentissimi e maestosi, durano anche diversi minuti senza uno stacco.',
      'Nei capolavori "Andrej Rublëv" (1966), "Solaris" (1972), "Lo specchio" (Zerkalo, 1975) e "Stalker" (1979), la scenografia è costituita dagli elementi naturali primordiali: l\'acqua che scorre su erbe sommerse, la nebbia, il fuoco crepitante, il fango, la terra bagnata dalla pioggia che cade all\'interno di stanze abbandonate.',
      'In "Nostalghia" (1983), girato in Italia con Tonino Guerra, realizza uno dei piani sequenza più vertiginosi della storia: l\'attore Oleg Jankovskij attraversa la vasca termale vuota di Bagno Vignoni tenendo in mano una candela accesa per nove minuti ininterrotti. La messinscena diventa preghiera e rito liturgico.'
    ],
    keyWorks: [
      { title: 'Andrej Rublëv', year: 1966, note: 'Affresco epico sulla Russia medievale e la fusione della campana di bronzo', type: 'film' },
      { title: 'Lo specchio (Zerkalo)', year: 1975, note: 'Il capolavoro della memoria poetica: il vento che piega il campo di segale', type: 'film' },
      { title: 'Stalker', year: 1979, note: 'Il viaggio nella "Zona" proibita: la natura che si riappropria delle rovine industriali', type: 'film' }
    ],
    famousQuote: {
      text: 'Il cinema è la sola arte capace di fissare il tempo e di conservarlo in una forma tangibile: fare un film significa scolpire il tempo.',
      author: 'Andrej Tarkovskij',
      source: 'Scolpire il tempo, 1985'
    },
    iconographicDetail: {
      title: 'Il Piano Sequenza Elementale di Tarkovskij',
      subtitle: 'Carrello lentissimo a pelo d\'acqua e materia viva',
      diagramType: 'camera_movement',
      explanation: 'Cinepresa che avanza con lentezza ipnotica a filo pavimento o su specchi d\'acqua melmosa, rivelando monete, siringhe e icone sommerse sotto il flusso del tempo.',
      visualElements: [
        { label: 'La presenza costante dell\'acqua', description: 'Gocciolii, pozzanghere e pioggia interna che uniscono l\'architettura alla natura' },
        { label: 'Carrello in avanti lentissimo', description: 'Movimento di macchina inavvertibile che dilata la percezione psicologica dello spettatore' },
        { label: 'Inquadratura contemplativa dilatata', description: 'La durata del piano supera la mera funzione informativa per farsi meditazione' }
      ],
      comparativeNote: 'Erede della concezione baziniana della durata, Tarkovskij porta il piano sequenza oltre il realismo sociale verso la pura metafisica visuale.'
    },
    connections: [
      { targetId: 'ejzenstejn_montaggio', relation: 'Rifiuto radicale del montaggio concettuale a favore del tempo continuo' },
      { targetId: 'welles_profondita', relation: 'Evoluzione mistica e poetica del piano sequenza welliano' },
      { targetId: 'bergman_primo_piano', relation: 'Bergman dichiarò: Tarkovskij è colui che si muove con naturalezza nelle stanze dei sogni' }
    ],
    x: 820,
    y: 780
  },
  {
    id: 'wilson_teatro_immagine',
    label: 'Robert Wilson & il Teatro dell\'Immagine',
    subtitle: '1976: Einstein on the Beach e l\'architettura della luce pura',
    category: 'autore',
    domain: 'teatro',
    era: 'contemporaneo',
    yearStart: 1976,
    yearEnd: 2026,
    yearLabel: '1976 — Presente',
    location: 'USA / Europa (New York, Parigi, Watermill)',
    regionId: 'usa',
    shortDescription: 'Caposcuola del teatro post-drammatico e visuale: crea "opere per gli occhi". Movimento rallentato (slow-motion), sagome scultoree controluce, fasci al neon e precisione cronometrica millimetrica.',
    fullEssay: [
      'Architetto, scenografo, pittore e regista texano, Robert Wilson ha rivoluzionato il teatro mondiale della seconda metà del Novecento depurandolo completamente dalla tirannia della trama letteraria e dell\'introspezione psicologica. Il suo teatro è stato definito "Teatro dell\'Immagine" o "Architettura del Tempo".',
      'Nel 1976, con l\'opera lirica epocale "Einstein on the Beach", creata insieme al compositore minimalista Philip Glass, Wilson crea uno spettacolo di quasi cinque ore senza intervallo in cui non accade nulla nel senso convenzionale della trama: fasci orizzontali di neon blu, attori che si muovono al rallentatore millimetrico, locomotive di luce che attraversano il palco, numeri e sillabe cantati in loop ipnotici.',
      'Per Wilson, la luce non è un supporto per vedere gli attori: «La luce è il primo attore del palcoscenico; senza la luce lo spazio non esiste». Dedica fino a tre settimane solo a puntare i proiettori prima ancora che gli attori salgano sul palco. I suoi fondali azzurri e bianchi, retroilluminati con gradazioni perfette, trasformano i corpi degli interpreti in silhouette e statue viventi.',
      'Wilson scompone il tempo: un attore può impiegare dieci minuti per attraversare il palcoscenico muovendo un braccio di pochi centimetri al secondo. Questa precisione raggelata restituisce al teatro la sacralità e la forza visiva di un tempio egizio o di una partitura di danza astratta.'
    ],
    keyWorks: [
      { title: 'Einstein on the Beach (con Philip Glass)', year: 1976, note: 'L\'opera lirica monumento del teatro visivo contemporaneo', type: 'spettacolo' },
      { title: 'The Black Rider (con Tom Waits e William S. Burroughs)', year: 1990, note: 'Espressionismo cabaret con trucco bianco da maschera e pupille di luce', type: 'spettacolo' },
      { title: 'L\'ultimo nastro di Krapp di Samuel Beckett', year: 2009, note: 'Wilson solo sul palco sotto un temporale sonoro con trucco da clown tragico', type: 'spettacolo' }
    ],
    famousQuote: {
      text: 'La maggior parte dei registi lavora con l\'orecchio e dimentica l\'occhio. Ma l\'occhio è più veloce dell\'orecchio: l\'occhio coglie la forma in un centesimo di secondo.',
      author: 'Robert Wilson'
    },
    iconographicDetail: {
      title: 'L\'Orizzonte Cromolitico di Wilson',
      subtitle: 'Silhouette in controluce, neon freddo e slow-motion',
      diagramType: 'lighting_scheme',
      explanation: 'Fondale retroilluminato con ciclorama luminoso a gradiente perfetto; l\'attore è illuminato in controluce da fari sagomatori, ridotto a sagoma geometrica pura.',
      visualElements: [
        { label: 'Ciclorama retroilluminato orizzontale', description: 'Sfumature di blu cobalto, indaco e bianco purissimo' },
        { label: 'Attore sagomato (Silhouette grafica)', description: 'I contorni del corpo sono nitidi come inchiostro tipografico' },
        { label: 'Linea orizzontale di neon geometrico', description: 'Tubazioni luminose sospese che tagliano lo spazio teatrale come un laser' }
      ],
      comparativeNote: 'Incarna la convergenza finale tra scenografia di Appia/Craig, minimalismo americano e visual design cinematografico ad altissima definizione.'
    },
    connections: [
      { targetId: 'appia_luce', relation: 'Erede diretto dell\'utopia di Appia sulla luce come partitura visiva autonoma' },
      { targetId: 'craig_supermarionetta', relation: 'Gli attori di Wilson agiscono con la precisione ieratica della Supermarionetta' },
      { targetId: 'kubrick_simmetria', relation: 'Condivide con Kubrick l\'ossessione geometrica e la simmetria assoluta' }
    ],
    x: 320,
    y: 890
  },
  {
    id: 'kubrick_simmetria',
    label: 'Stanley Kubrick & la Simmetria Cosmica',
    subtitle: '1968: La prospettiva a un punto centrale e la luce naturale estrema',
    category: 'autore',
    domain: 'cinema',
    era: 'modernita_onde',
    yearStart: 1968,
    yearEnd: 1999,
    yearLabel: '1968 — 1999',
    location: 'Regno Unito / USA (Hertfordshire, Londra)',
    regionId: 'usa',
    shortDescription: 'Regista visionario e maniaco della perfezione tecnica: inventa l\'inquadratura prospettica con punto di fuga rigorosamente al centro ("One-Point Perspective") e usa lenti f/0.7 della NASA a lume di candela per Barry Lyndon.',
    fullEssay: [
      'Stanley Kubrick è forse il più implacabile geometra della messinscena cinematografica. Fotografo precoce per la rivista "Look", Kubrick concepisce l\'inquadratura non come una finestra casuale sulla realtà, ma come un universo chiuso, controllato al millimetro in ogni coordinata prospettica, cromatica e luminosa.',
      'La firma stilistica inconfondibile di Kubrick è la "One-Point Perspective" (prospettiva a punto unico centrale): la cinepresa è posizionata esattamente al centro dello spazio, con le linee di fuga dei corridoi, dei labirinti o delle astronavi che convergono implacabilmente nel baricentro esatto dell\'inquadratura. Questo schema geometrico, presente nei corridoi dell\'Overlook Hotel in "Shining" (1980) o nella Discovery One di "2001: Odissea nello spazio" (1968), genera un senso di predestinazione agghiacciante e ipnotica.',
      'In "Barry Lyndon" (1975) compie un\'impresa ritenuta impossibile: per ricostruire l\'atmosfera del Settecento senza falsi fari cinematografici, fa adattare alla cinepresa Mitchell BNC degli obiettivi Zeiss f/0.7 progettati per la NASA per fotografare il lato oscuro della Luna. Gira scene notturne illuminate esclusivamente da candele vere, trasformando ogni inquadratura in un dipinto di Hogarth, Reynolds o Chardin che respira.',
      'Inoltre, con "Shining", Kubrick è tra i primissimi registi a utilizzare la neonata Steadicam di Garrett Brown, facendola sfrecciare a pochi centimetri dal pavimento dietro il triciclo del piccolo Danny: la cinepresa diventa un fantasma che pattina nell\'aria.'
    ],
    keyWorks: [
      { title: '2001: Odissea nello spazio (2001: A Space Odyssey)', year: 1968, note: 'La centrifuge spaziale da 750.000 dollari e la purezza della composizione galattica', type: 'film' },
      { title: 'Barry Lyndon', year: 1975, note: 'La luce a sole candele con lenti Zeiss f/0.7 della NASA: il trionfo della pittura filmica', type: 'film' },
      { title: 'Shining (The Shining)', year: 1980, note: 'Il trionfo della Steadicam a pelo di moquette e la prospettiva centrale angosciante', type: 'film' }
    ],
    famousQuote: {
      text: 'Se una cosa può essere scritta o pensata, può essere filmata. Un film deve essere una progressione di stati d\'animo e sentimenti, non una serie di chiacchiere letterarie.',
      author: 'Stanley Kubrick'
    },
    iconographicDetail: {
      title: 'La Prospettiva Centrale a Punto Singolo',
      subtitle: 'Simmetria rigorosa, grandangolo e convergenza al centro',
      diagramType: 'framing_lens',
      explanation: 'Posizionamento dell\'asse ottico al centro perfetto del piano: pareti laterali, soffitto e pavimento convergono verso il punto centrale della croce del mirino.',
      visualElements: [
        { label: 'Punto di fuga centrale assoluto', description: 'L\'occhio dello spettatore è risucchiato verso il centro esatto dell\'immagine' },
        { label: 'Simmetria bilaterale speculare', description: 'Gli elementi sui lati sinistro e destro si bilanciano con precisione geometrica' },
        { label: 'Luce interna motivata naturale', description: 'Illuminazione proveniente solo dalle fonti sceniche (lampadari d\'epoca, candele, pannelli dell\'astronave)' }
      ],
      comparativeNote: 'Kubrick unisce la prospettiva rinascimentale barocca della scatola scenica con la precisione tecnica scientifica dell\'obiettivo cinematografico.'
    },
    connections: [
      { targetId: 'scatola_ottica', relation: 'Kubrick riattualizza la prospettiva centrale dei maestri rinascimentali italiani' },
      { targetId: 'wilson_teatro_immagine', relation: 'Condivisione dell\'ossessione geometrica e del rigore compositivo formale' },
      { targetId: 'welles_profondita', relation: 'Uso del grandangolo per amplificare la monumentalità minacciosa dell\'architettura' }
    ],
    x: 520,
    y: 890
  },
  {
    id: 'ronconi_spazio',
    label: 'Luca Ronconi & lo Spazio Esploso',
    subtitle: '1969: L\'Orlando Furioso e il superamento della platea frontale',
    category: 'autore',
    domain: 'teatro',
    era: 'contemporaneo',
    yearStart: 1969,
    yearEnd: 2015,
    yearLabel: '1969 — 2015',
    location: 'Italia (Spoleto, Milano, Torino, Roma)',
    regionId: 'italia',
    shortDescription: 'Il più audace architetto dello spazio teatrale italiano: abbatte la poltrona di platea con l\'Orlando Furioso (1969), inventa la messinscena simultanea su carrelli semoventi tra il pubblico e sperimenta spazi industriali immensi come la fabbrica Lingotto.',
    fullEssay: [
      'Luca Ronconi ha incarnato la contestazione più spettacolare e strutturale dell\'architettura teatrale borghese nella seconda metà del Novecento. Formatosi come attore all\'Accademia d\'Arte Drammatica Silvio D\'Amico, comprende presto che lo spazio tradizionale (la scatola all\'italiana col pubblico seduto compostamente in poltrona) addormenta la vitalità del testo.',
      'Al Festival di Spoleto del 1969 presenta il leggendario "Orlando Furioso" (riscrittura del capolavoro dell\'Ariosto curata da Edoardo Sanguineti). Ronconi compie un gesto epocale: toglie qualsiasi sedia! Lo spettacolo si svolge in una chiesa sconsacrata e poi nelle piazze: gli attori recitano su carrelli semoventi di legno spinti da macchinisti tra la folla in piedi. Diverse scene avvengono CONTEMPORANEAMENTE in angoli diversi: lo spettatore deve camminare, voltarsi, scegliere cosa seguire, rischiando perfino di essere sfiorato dall\'ippogrifo.',
      'Questa simultaneità rompe per sempre il punto di vista unico rinascimentale e trasforma lo spettatore da voyeur passivo a montatore del proprio spettacolo personale, esattamente come accadrà più tardi con la navigazione ipertestuale e il montaggio cinematografico moderno.',
      'Negli anni Novanta e Duemila, al Piccolo Teatro di Milano e al Teatro Stabile di Torino, Ronconi colonizza spazi industriali monumentali (la fabbrica FIAT del Lingotto per "Gli ultimi giorni dell\'umanità" di Karl Kraus) e trasforma romanzi sterminati ("I Fratelli Karamazov", "Pasticciaccio" di Gadda, "Infinities") in macchine sceniche complesse fatte di scale mobili, container e specchi rotanti.'
    ],
    keyWorks: [
      { title: 'Orlando Furioso (Ariosto / Sanguineti)', year: 1969, note: 'La messinscena simultanea su carrelli tra il pubblico in piedi che sconvolge il teatro mondiale', type: 'spettacolo' },
      { title: 'Gli ultimi giorni dell\'umanità (Karl Kraus)', year: 1990, note: 'Allestimento per 60 attori nelle immense campate delle ex presse del Lingotto FIAT di Torino', type: 'spettacolo' },
      { title: 'Infinities (John Barrow)', year: 2002, note: 'Spettacolo itinerante sulla cosmologia e l\'infinito matematico ai Laboratori della Scala Bovisa', type: 'spettacolo' }
    ],
    famousQuote: {
      text: 'Non mi interessa lo spazio che contiene lo spettacolo: mi interessa che lo spettacolo crei il suo spazio. Il teatro all\'italiana è solo una delle forme possibili, e spesso la più pigra.',
      author: 'Luca Ronconi'
    },
    iconographicDetail: {
      title: 'La Simultaneità dei Carrelli Ronconiani',
      subtitle: 'Polifonia spaziale e spettatore-montatore errante',
      diagramType: 'stage_layout',
      explanation: 'Piazza o capannone industriale senza sedie: carrelli lignei mobili si spostano in mezzo alla folla, con azioni che accadono contemporaneamente in punti opposti.',
      visualElements: [
        { label: 'Pubblico mobile deambulante', description: 'Gli spettatori camminano liberamente scegliendo quale nucleo narrativo guardare' },
        { label: 'Carrelli su ruote semoventi', description: 'Piattaforme lignee con cavalli a dondolo, gabbie e mostri spinte a mano' },
        { label: 'Montaggio spaziale simultaneo', description: 'L\'esperienza drammatica non è lineare ma reticolare e polifonica' }
      ],
      comparativeNote: 'Ronconi porta a teatro il montaggio parallelo del cinema, ma lasciando allo spettatore la libertà di muovere la propria cinepresa biologica (il proprio corpo nello spazio).'
    },
    connections: [
      { targetId: 'scatola_ottica', relation: 'Demolizione deliberata della prospettiva centrale all\'italiana' },
      { targetId: 'artaud_crudelta', relation: 'Realizza la profezia di Artaud sull\'azione che avvolge il pubblico su tutti i lati' },
      { targetId: 'strehler_piccolo', relation: 'Succede a Strehler alla guida del Piccolo Teatro di Milano aprendolo alle sfide del nuovo millennio' }
    ],
    x: 720,
    y: 890
  },
  {
    id: 'spazio_vuoto_brook',
    label: 'Peter Brook & lo Spazio Vuoto',
    subtitle: '1968: Un uomo che attraversa la scena mentre qualcun altro lo osserva',
    category: 'autore',
    domain: 'ibrido',
    era: 'modernita_onde',
    yearStart: 1968,
    yearEnd: 2022,
    yearLabel: '1968 — 2022',
    location: 'Regno Unito / Francia (Londra, Parigi, Bouffes du Nord)',
    regionId: 'regno_unito',
    shortDescription: 'Regista universale tra teatro shakespeariano, opera, cinema e ricerca antropologica: nel saggio "Lo spazio vuoto" riduce il teatro all\'atto essenziale. Nel teatro semidistrutto delle Bouffes du Nord crea spettacoli mitici come il Mahābhārata.',
    fullEssay: [
      'Nessun uomo di teatro del Novecento ha posseduto la grazia chiarificatrice di Peter Brook. Regista a soli vent\'anni dei grandi drammi shakespeariani alla Royal Shakespeare Company con Laurence Olivier e John Gielgud, e al contempo raffinato regista cinematografico ("Moderato cantabile", "Il signore delle mosche", "Marat/Sade"), Brook pubblica nel 1968 il saggio teatrale più letto del pianeta: "Lo spazio vuoto" (The Empty Space).',
      'La prima frase è scolpita nella storia: «Posso prendere qualsiasi spazio vuoto e chiamarlo palcoscenico nudo. Un uomo attraversa questo spazio mentre un altro lo osserva, e questo è tutto ciò che serve affinché si crei un atto teatrale».',
      'Brook demolisce le categorie del "Teatro Mortale" (il teatro accademico pomposo e noioso) a favore del "Teatro Immediato". Nel 1970 sconvolge il mondo con il suo "Sogno di una notte di mezza estate": al posto della foresta fiabesca con elfi e alberi finti, ambienta la commedia dentro una scatola bianca asettica con trapezi da circo, scale a pioli e clown su trampoli.',
      'Negli anni Settanta fonda a Parigi il Centro Internazionale di Ricerca Teatrale (CIRT) con attori provenienti da Africa, Asia ed Europa, stabilendosi nel teatro fatiscente delle Bouffes du Nord: un luogo dalle pareti scrostate e bruciate dal tempo, dove un semplice tappeto di lana steso a terra e una ciotola d\'argilla bastano per narrare le nove ore dell\'epopea indiana del "Mahābhārata" (1985).'
    ],
    keyWorks: [
      { title: 'Lo spazio vuoto (The Empty Space)', year: 1968, note: 'Il libro manifesto della regia essenziale contemporanea', type: 'trattato' },
      { title: 'Sogno di una notte di mezza estate (Shakespeare)', year: 1970, note: 'La leggendaria scatola bianca con trapezi e piastre circensi', type: 'spettacolo' },
      { title: 'Mahābhārata', year: 1985, note: 'Nove ore di teatro totale alle Bouffes du Nord e nelle cave di Avignone con terra, fuoco e fiume vero', type: 'spettacolo' }
    ],
    famousQuote: {
      text: 'Non abbiamo bisogno di scenografie costose né di macchinari prodigiosi. Quando un attore parla con sincerità nel silenzio di uno spazio vuoto, l\'immaginazione del pubblico costruisce regni più splendidi di qualsiasi scenografo.',
      author: 'Peter Brook'
    },
    iconographicDetail: {
      title: 'La Scatola Bianca e il Tappeto Rituale',
      subtitle: 'Riduzione all\'osso: luce pura, parete scrostata e terra',
      diagramType: 'stage_layout',
      explanation: 'Eliminazione di ogni orpello illusionistico: spazio nudo delimitato da pareti bianche o dal rosso bruciato delle Bouffes du Nord; l\'azione vive di gesti essenziali e materiali primari (terra, ciotole d\'acqua, canne di bambù).',
      visualElements: [
        { label: 'Spazio nudo non mimetico', description: 'Nessun tentativo di fingere una foresta o un palazzo reale' },
        { label: 'Attrezzo scenico polivalente', description: 'Un bastone di legno diventa prima lancia, poi albero della nave, poi scettro regale' },
        { label: 'Luce calda condivisa con la sala', description: 'Spesso la luce resta accesa su pubblico e attori per mantenere la comunione' }
      ],
      comparativeNote: 'Brook unisce la lezione artaudiana del rito primigenio con la chiarezza brechtiana, influenzando tanto la scena contemporanea quanto il cinema minimalista.'
    },
    connections: [
      { targetId: 'artaud_crudelta', relation: 'Brook mette in scena il Marat/Sade come applicazione sublime del Teatro della Crudeltà' },
      { targetId: 'craig_supermarionetta', relation: 'Eredita da Craig il rigore della linea e la purezza del gesto' },
      { targetId: 'scatola_ottica', relation: 'Dichiara esaurita la scatola scenica barocca se ridotta a vuoto decorativismo' }
    ],
    x: 180,
    y: 770
  },
  {
    id: 'scena_giapponese_ozu',
    label: 'Geometria Orientale & Yasujiro Ozu',
    subtitle: '1953: La camera tatami, il vuoto del Nō e Viaggio a Tokyo',
    category: 'concetto',
    domain: 'ibrido',
    era: 'classicismo_realismo',
    yearStart: 1949,
    yearEnd: 1962,
    yearLabel: '1949 — 1962',
    location: 'Giappone (Kamakura, Tokyo)',
    regionId: 'giappone',
    shortDescription: 'L\'incontro tra le millenarie convenzioni sceniche giapponesi (il rigore dello spazio vuoto del Nō e le porte scorrevoli shōji) e la messinscena filmica più rigorosa della storia: la cinepresa fissa a 90 cm da terra (tatami shot) di Yasujiro Ozu.',
    fullEssay: [
      'Il cinema di Yasujiro Ozu rappresenta una delle sintesi più pure e affascinanti tra le forme spaziali della tradizione teatrale orientale e il linguaggio della macchina da presa cinematografica.',
      'Nello spazio scenico tradizionale giapponese (dal palcoscenico di legno di cipresso del Nō con il ponte hashigakari alle case tradizionali con pavimenti in stuoie di tatami e pareti scorrevoli shōji), lo spazio non è una scatola prospettica barocca che tende verso l\'infinito, ma un insieme di riquadri geometrici rettangolari basati sul concetto di "Ma" (lo spazio vuoto, l\'intervallo temporale tra due azioni, la pausa feconda).',
      'Ozu traduce questa millenaria filosofia scenica in una grammatica cinematografica rigidissima e irremovibile: in capolavori come "Tarda primavera" (1949) e "Viaggio a Tokyo" (Tokyo Monogatari, 1953), la cinepresa è rigorosamente immobile su un cavalletto bassissimo a circa 90 centimetri da terra, all\'altezza degli occhi di una persona inginocchiata sul tatami.',
      'Ozu rifiuta il carrello, le panoramiche e le lenti distorcenti: usa esclusivamente un obiettivo normale a 50mm che non inganna la prospettiva. I personaggi dialogano guardando quasi dritto verso l\'obiettivo, incorniciati dalla griglia perfetta delle porte scorrevoli. Tra una scena e l\'altra, Ozu inserisce i celebri "pillow shots" (inquadrature cuscinetto): un vaso di ceramica, un comignolo, un treno che passa, il vento che muove i panni stesi. È la messinscena dell\'impermanenza buddhista (mono no aware).'
    ],
    keyWorks: [
      { title: 'Tarda primavera (Banshun)', year: 1949, note: 'La celebre inquadratura del vaso di ceramica nella notte: silenzio e commozione pura', type: 'film' },
      { title: 'Viaggio a Tokyo (Tōkyō Monogatari)', year: 1953, note: 'Il capolavoro assoluto della composizione tatami e della solitudine generazionale', type: 'film' }
    ],
    famousQuote: {
      text: 'Non cerco mai l\'effetto drammatico vistoso. Voglio che la gente provi la vita senza che ci siano trucchi: le lacrime non devono cadere sullo schermo, ma nel cuore di chi guarda.',
      author: 'Yasujiro Ozu'
    },
    iconographicDetail: {
      title: 'Il Tatami Shot e la Griglia Shōji',
      subtitle: 'Altezza ottica a 90 cm, obiettivo 50mm e linee rette',
      diagramType: 'framing_lens',
      explanation: 'Asse ottico posizionato ad altezza tatami: il pavimento è orizzontale in primo piano e i montanti delle porte scorrevoli compongono quadri dentro quadri.',
      visualElements: [
        { label: 'Cavalletto basso a 90 cm', description: 'Angolazione ad altezza dello sguardo di chi siede in ginocchio sul tatami' },
        { label: 'Composizione a scatole cinesi (Frame in Frame)', description: 'I serramenti scorrevoli (fusuma e shōji) incorniciano le figure umane' },
        { label: 'Pillow shots (Nature morte di transizione)', description: 'Inquadrature prive di personaggi che lasciano respirare il tempo diegetico' }
      ],
      comparativeNote: 'Dimostra come una cultura teatrale non occidentale possa generare una messinscena cinematografica universale alternativa al modello hollywoodiano.'
    },
    connections: [
      { targetId: 'decoupage_classico', relation: 'Rifiuto delle regole canoniche di campo/controcampo hollywoodiane' },
      { targetId: 'tarkovskij_tempo', relation: 'Affinità poetica sulla contemplazione del tempo e degli oggetti inanimati' }
    ],
    x: 940,
    y: 350
  },
  {
    id: 'decoupage_classico',
    label: 'Il Découpage Classico Hollywoodiano',
    subtitle: '1930: La trasparenza del montaggio invisibile e la regola dei 180°',
    category: 'concetto',
    domain: 'cinema',
    era: 'classicismo_realismo',
    yearStart: 1930,
    yearEnd: 1955,
    yearLabel: '1930 — 1955',
    location: 'USA (Hollywood)',
    regionId: 'usa',
    shortDescription: 'Il sistema normativo dello Studio System hollywoodiano: la messinscena deve cancellare la propria presenza a favore della continuità narrativa fluida ("montaggio invisibile"), raccordi sul movimento e asse a 180° per non disorientare lo spettatore.',
    fullEssay: [
      'Tra gli anni Trenta e Cinquanta, con l\'avvento del sonoro e la concentrazione industriale delle "Big Five" a Hollywood (MGM, Paramount, Warner Bros., 20th Century Fox, RKO), si stabilizza il modello visivo più pervasivo del Novecento: il "Découpage Classico" (o cinema classico hollywoodiano).',
      'Il principio cardine di questa messinscena è la "trasparenza": lo spettatore non deve mai accorgersi dei tagli di montaggio, delle cineprese o dell\'artificio formale; deve sentirsi immerso nella storia come un testimone invisibile e privilegiato (l\'illusione della realtà).',
      'Per ottenere questa continuità fluida, Hollywood codifica un sistema ferreo di regole geometriche: 1) La "Regola dei 180 gradi": tra due personaggi che parlano si traccia una linea immaginaria che la cinepresa non deve MAI scavalcare, altrimenti gli sguardi non si incrocerebbero sullo schermo; 2) Raccordo sul movimento (match on action): il taglio avviene mentre l\'attore apre una porta o si siede, nascondendo lo stacco agli occhi dello spettatore; 3) Raccordo sullo sguardo (eyeline match) e campo/controcampo alternato.',
      'Questa rigida codifica spaziale ha dominato il cinema mondiale per decenni, prima che la Nouvelle Vague e la modernità ne denunciassero la finzione anestetizzante.'
    ],
    keyWorks: [
      { title: 'Casablanca (Michael Curtiz)', year: 1942, note: 'Il capolavoro assoluto del découpage trasparente e del campo/controcampo perfetto', type: 'film' },
      { title: 'La fiamma del peccato (Billy Wilder)', year: 1944, note: 'Precisione geometrica delle inquadrature nel noir classico', type: 'film' }
    ],
    famousQuote: {
      text: 'Un montaggio perfetto è quello di cui nessuno si accorge. Se il pubblico dice che un film ha una bellissima regia o un grande montaggio, vuol dire che la storia non ha funzionato.',
      author: 'Howard Hawks'
    },
    iconographicDetail: {
      title: 'La Geometria dei 180 Gradi',
      subtitle: 'Asse dell\'azione e coerenza degli sguardi contrapposti',
      diagramType: 'editing_flow',
      explanation: 'Una linea immaginaria unisce i due attori. Tutte le inquadrature (Campo totale, Primo piano A, Primo piano B) devono rimanere nello stesso semicerchio di 180° per garantire la corretta direzione degli sguardi.',
      visualElements: [
        { label: 'Linea immaginaria dell\'azione (180°)', description: 'Confine inviolabile per la posizione della cinepresa durante il dialogo' },
        { label: 'Campo e controcampo coerente', description: 'Attore A guarda verso destra, Attore B guarda verso sinistra' },
        { label: 'Raccordo sul movimento (Match cut)', description: 'Il cambio d\'inquadratura avviene durante il gesto per mascherare il taglio' }
      ],
      comparativeNote: 'Rappresenta l\'antitesi perfetta del teatro brechtiano e del cinema godardiano: laddove Brecht e Godard svelano il dispositivo, Hollywood lo rende invisibile.'
    },
    connections: [
      { targetId: 'griffith', relation: 'Codifica industriale e standardizzazione delle intuizioni originarie di Griffith' },
      { targetId: 'godard_nouvelle_vague', relation: 'Godard farà saltare in aria le regole dei 180° e del raccordo invisibile' },
      { targetId: 'welles_profondita', relation: 'Welles e Renoir aggirano il découpage frammentato usando il piano sequenza' }
    ],
    x: 780,
    y: 220
  },
  {
    id: 'bergman_primo_piano',
    label: 'Ingmar Bergman & l\'Anima sul Volto',
    subtitle: '1966: Persona e il primo piano come paesaggio teatrale interiore',
    category: 'autore',
    domain: 'ibrido',
    era: 'modernita_onde',
    yearStart: 1957,
    yearEnd: 1982,
    yearLabel: '1957 — 1982',
    location: 'Svezia (Stoccolma, Fårö)',
    regionId: 'svizzera_scandinavia',
    shortDescription: 'Regista titanico contemporaneamente del Teatro Reale Dramaten di Stoccolma (Ibsen, Strindberg, Shakespeare) e del cinema mondiale. Con il direttore Sven Nykvist porta il volto umano e il primo piano al massimo vertice della messinscena spirituale.',
    fullEssay: [
      'Ingmar Bergman è stato, per oltre quarant\'anni, il monarca assoluto sia della scena teatrale svedese (al Dramaten di Stoccolma mise in scena capolavori indimenticabili di Strindberg, Molière e Cechov) sia dell\'Olimpo cinematografico internazionale. Nessuno quanto lui ha compreso che il vero territorio della messinscena moderna è il volto umano.',
      'Insieme al maestro della luce Sven Nykvist, Bergman elimina le scenografie vistose: nei suoi film ("Il settimo sigillo", "Il posto delle fragole", "Sussurri e grida", "Fanny e Alexander"), l\'architettura drammatica è costruita dalle rughe, dalle labbra che tremano e dallo sguardo degli interpreti (Liv Ullmann, Bibi Andersson, Max von Sydow, Erland Josephson).',
      'Nel capolavoro modernista "Persona" (1966), la messinscena tocca il sublime e l\'astrazione: l\'attrice Elisabet Vogler si chiude in un mutismo ostinato durante una rappresentazione teatrale di Elettra. Ritiratasi sull\'isola desolata di Fårö con l\'infermiera Alma, i volti delle due donne vengono inquadrati in primissimi piani implacabili fino a fondersi visivamente in un unico volto mostruoso e magnetico.',
      'Bergman dimostra che il primo piano cinematografico non è una semplice tecnica d\'inquadratura, ma è la trasposizione radiografica del dramma da camera strindberghiano: la cinepresa penetra là dove nessun occhio di spettatore teatrale aveva mai potuto posarsi.'
    ],
    keyWorks: [
      { title: 'Il settimo sigillo (Det sjunde inseglet)', year: 1957, note: 'La partita a scacchi con la Morte sulla scogliera: iconografia medievale immortale', type: 'film' },
      { title: 'Persona', year: 1966, note: 'La fusione dei due volti di Liv Ullmann e Bibi Andersson: vetta dell\'introspezione psicologica', type: 'film' },
      { title: 'Fanny e Alexander', year: 1982, note: 'La celebrazione suprema della magia del teatrino di marionette d\'infanzia', type: 'film' }
    ],
    famousQuote: {
      text: 'Il volto umano è il soggetto più appassionante del cinema: avvicinarsi con l\'obiettivo fino a cogliere l\'invisibile vibrazione dell\'anima, questo è il miracolo.',
      author: 'Ingmar Bergman'
    },
    iconographicDetail: {
      title: 'Il Doppio Primo Piano Fuso di Persona',
      subtitle: 'Luce bianca boreale e fusione simmetrica dei volti',
      diagramType: 'framing_lens',
      explanation: 'Uso di luce morbida diffusa da riflettori bianchi svedesi (Sven Nykvist). I due volti sono affiancati con precisione millimetrica fino alla celebre metà e metà fusa in laboratorio.',
      visualElements: [
        { label: 'Primo piano estremo (Extreme Close-Up)', description: 'Esclusione completa dell\'ambiente circostante: il volto È l\'ambiente' },
        { label: 'Luce scandinava senza ombre dure', description: 'Illuminazione lattiginosa che cancella le imperfezioni e accentua la profondità degli occhi' },
        { label: 'Monologo a specchio', description: 'La stessa confessione ripetuta due volte: prima inquadrando chi parla, poi chi ascolta' }
      ],
      comparativeNote: 'Trasferisce sul grande schermo l\'intimità claustrofobica del teatro da camera di Strindberg, aprendo la strada al cinema della psiche.'
    },
    connections: [
      { targetId: 'stanislavskij', relation: 'Sviluppa l\'introspezione del sottotesto psicologico fino al microscopio filmico' },
      { targetId: 'tarkovskij_tempo', relation: 'Profonda stima reciproca con Tarkovskij sulla sacralità del cinema' }
    ],
    x: 180,
    y: 520
  }
];

export const LINKS: NodeLink[] = [
  { source: 'teatro_greco_romano', target: 'teatro_medievale_misteri', relation: 'Dalla sacralità civica pagana alla dramaturgia liturgica cristiana', type: 'direct_influence' },
  { source: 'teatro_greco_romano', target: 'scatola_ottica', relation: 'La scaenae frons vitruviana riscoperta da Palladio e Scamozzi', type: 'direct_influence' },
  { source: 'teatro_greco_romano', target: 'visconti_neorealismo', relation: 'Visconti rievoca la solennità scultorea della tragedia antica', type: 'filiation' },
  
  { source: 'teatro_medievale_misteri', target: 'scatola_ottica', relation: 'La prospettiva rinascimentale unifica le mansiones disperse', type: 'opposition_rupture' },
  { source: 'teatro_medievale_misteri', target: 'ronconi_spazio', relation: 'Ronconi risuscita la scena simultanea medievale nell\'Orlando Furioso', type: 'theatre_to_cinema' },
  { source: 'teatro_medievale_misteri', target: 'melies', relation: 'Méliès riprende la meraviglia popolare e le fiamme degli inferi', type: 'theatre_to_cinema' },

  { source: 'scatola_ottica', target: 'quarta_parete', relation: 'Origine prospettica dell\'illusione frontale', type: 'filiation' },
  { source: 'scatola_ottica', target: 'melies', relation: 'Méliès mutua l\'arcoscenico prospettico barocco', type: 'theatre_to_cinema' },
  { source: 'scatola_ottica', target: 'appia_luce', relation: 'Appia demolisce la tela prospettica dipinta', type: 'opposition_rupture' },
  { source: 'scatola_ottica', target: 'kubrick_simmetria', relation: 'Kubrick eredita la prospettiva rinascimentale centrale', type: 'theatre_to_cinema' },
  { source: 'scatola_ottica', target: 'ronconi_spazio', relation: 'Ronconi fa esplodere la scatola chiusa all\'italiana', type: 'opposition_rupture' },

  { source: 'meiningen', target: 'antoine', relation: 'Antoine adotta l\'organicità d\'insieme dei Meininger', type: 'direct_influence' },
  { source: 'meiningen', target: 'stanislavskij', relation: 'Stanislavskij resta folgorato dalla tournée del 1890', type: 'direct_influence' },
  { source: 'meiningen', target: 'quarta_parete', relation: 'Pratica rigorosa degli attori di spalle al pubblico', type: 'filiation' },
  { source: 'meiningen', target: 'griffith', relation: 'Composizione polifonica delle masse migrata nel cinema', type: 'theatre_to_cinema' },

  { source: 'antoine', target: 'quarta_parete', relation: 'Antoine applica la quarta parete montando mobili di schiena', type: 'filiation' },
  { source: 'antoine', target: 'stanislavskij', relation: 'Ispiratore del rigore d\'ambiente per il MChAT', type: 'direct_influence' },
  { source: 'antoine', target: 'visconti_neorealismo', relation: 'Passione comune per la verità materiale degli oggetti', type: 'filiation' },

  { source: 'stanislavskij', target: 'mejerchold_biomeccanica', relation: 'Mejerchol\'d allievo ribelle: dal vissuto interiore al moto esterno', type: 'opposition_rupture' },
  { source: 'stanislavskij', target: 'decoupage_classico', relation: 'Il Sistema nutre il Metodo di Hollywood e Actor\'s Studio', type: 'theatre_to_cinema' },
  { source: 'stanislavskij', target: 'bergman_primo_piano', relation: 'Evoluzione della tensione psicologica interiore', type: 'filiation' },

  { source: 'appia_luce', target: 'craig_supermarionetta', relation: 'Fratellanza simbolista: spazio plastico e anti-realismo', type: 'direct_influence' },
  { source: 'appia_luce', target: 'caligari_espressionismo', relation: 'La drammatizzazione scultorea della luce travasata nel film', type: 'theatre_to_cinema' },
  { source: 'appia_luce', target: 'wilson_teatro_immagine', relation: 'Wilson porta all\'apoteosi la luce come musica visiva', type: 'filiation' },

  { source: 'craig_supermarionetta', target: 'caligari_espressionismo', relation: 'La supermarionetta e la scenografia astratta influenzano Caligari', type: 'theatre_to_cinema' },
  { source: 'craig_supermarionetta', target: 'wilson_teatro_immagine', relation: 'L\'attore incorporeo ed esatto di Bob Wilson', type: 'filiation' },
  { source: 'craig_supermarionetta', target: 'spazio_vuoto_brook', relation: 'La pulizia essenziale dello spazio scenico', type: 'filiation' },

  { source: 'melies', target: 'griffith', relation: 'Griffith spezza la cinepresa fissa teatrale di Méliès', type: 'opposition_rupture' },

  { source: 'griffith', target: 'decoupage_classico', relation: 'Fonda le convenzioni grammaticali del cinema mondiale', type: 'filiation' },
  { source: 'griffith', target: 'ejzenstejn_montaggio', relation: 'Ejzenštejn studia Intolerance per teorizzare le collisioni', type: 'direct_influence' },

  { source: 'caligari_espressionismo', target: 'murnau_kamera', relation: 'Murnau evolve il chiaroscuro liberando la cinepresa', type: 'direct_influence' },

  { source: 'mejerchold_biomeccanica', target: 'ejzenstejn_montaggio', relation: 'Ejzenštejn trapianta la biomeccanica nel montaggio filmico', type: 'theatre_to_cinema' },
  { source: 'mejerchold_biomeccanica', target: 'brecht_straniamento', relation: 'Influenza fondamentale sul teatro antinaturalista di Brecht', type: 'direct_influence' },

  { source: 'murnau_kamera', target: 'renoir_spazio', relation: 'Ispiratore dei carrelli fluidi e della continuità', type: 'direct_influence' },
  { source: 'murnau_kamera', target: 'welles_profondita', relation: 'Welles considererà Murnau il massimo maestro della forma', type: 'direct_influence' },

  { source: 'ejzenstejn_montaggio', target: 'welles_profondita', relation: 'Antitesi estetica: scontro dialettico vs piano sequenza baziniano', type: 'opposition_rupture' },
  { source: 'ejzenstejn_montaggio', target: 'tarkovskij_tempo', relation: 'Tarkovskij rigetta il montaggio intellettuale a favore del tempo vivo', type: 'opposition_rupture' },

  { source: 'brecht_straniamento', target: 'godard_nouvelle_vague', relation: 'Godard applica lo straniamento brechtiano con jump cut e cartelli', type: 'theatre_to_cinema' },
  { source: 'brecht_straniamento', target: 'strehler_piccolo', relation: 'Strehler è l\'interprete poetico più celebrato di Brecht', type: 'direct_influence' },
  { source: 'brecht_straniamento', target: 'quarta_parete', relation: 'Abbattimento esplicito del muro dell\'illusione', type: 'opposition_rupture' },

  { source: 'artaud_crudelta', target: 'spazio_vuoto_brook', relation: 'Brook mette in scena il Marat/Sade artaudiano', type: 'direct_influence' },
  { source: 'artaud_crudelta', target: 'ronconi_spazio', relation: 'Ispirazione per l\'immersione fisica dello spettatore nell\'evento', type: 'direct_influence' },

  { source: 'renoir_spazio', target: 'welles_profondita', relation: 'Dalla profondità naturale di Renoir al Deep Focus estremo di Welles', type: 'direct_influence' },
  { source: 'renoir_spazio', target: 'visconti_neorealismo', relation: 'Visconti impara il respiro del cinema come assistente di Renoir', type: 'direct_influence' },
  { source: 'renoir_spazio', target: 'godard_nouvelle_vague', relation: 'Padre morale della Nouvelle Vague e della libertà scenica', type: 'direct_influence' },

  { source: 'welles_profondita', target: 'tarkovskij_tempo', relation: 'Sviluppo del piano sequenza e della durata interna', type: 'direct_influence' },
  { source: 'welles_profondita', target: 'kubrick_simmetria', relation: 'Uso del grandangolo estremo e della volumetria architettonica', type: 'direct_influence' },

  { source: 'visconti_neorealismo', target: 'strehler_piccolo', relation: 'Rinnovatori paralleli della scena teatrale e del cinema italiano', type: 'direct_influence' },

  { source: 'strehler_piccolo', target: 'ronconi_spazio', relation: 'Passaggio di testimone epocale alla guida del Piccolo Teatro', type: 'filiation' },

  { source: 'godard_nouvelle_vague', target: 'quarta_parete', relation: 'Lo sguardo in macchina abbatte la quarta parete filmica', type: 'opposition_rupture' },

  { source: 'tarkovskij_tempo', target: 'bergman_primo_piano', relation: 'Fratellanza poetica nel cinema dell\'invisibile e dello spirito', type: 'direct_influence' },

  { source: 'wilson_teatro_immagine', target: 'kubrick_simmetria', relation: 'Convergenza nella simmetria assoluta e nel rigore formale', type: 'direct_influence' },

  { source: 'decoupage_classico', target: 'scena_giapponese_ozu', relation: 'Ozu rifiuta la grammatica classica hollywoodiana dei 180°', type: 'opposition_rupture' }
];

export const ANATOMY_PLATES: AnatomyPlate[] = [
  {
    id: 'plate_1',
    pillarNumber: '01',
    title: 'La Cornice e lo Spazio',
    theatreConcept: 'La Scatola Prospettica e l\'Arcoscenico',
    cinemaConcept: 'L\'Aspect Ratio e il Mascherino',
    synthesis: 'Nel teatro all\'italiana lo spazio è un volume tridimensionale fisso racchiuso dall\'arcoscenico, con pendenza verso il punto di fuga del Principe. Nel cinema, lo spazio è un rettangolo ottico mobile (1.33:1, 1.85:1, 2.39:1 CinemaScope) che seleziona frammenti di mondo e li proietta sul piano bidimensionale.',
    theatrePoints: [
      'Punto di vista vincolato alla poltrona acquistata dallo spettatore in sala',
      'Profondità simulata tramite quinte sfalsate, pendenza del palco e fondali dipinti',
      'Confine architettonico permanente (arcoscenico, mantovana, ribalta)',
      'Possibilità di usare l\'altezza verticale (ballatoi, cieli, botole)'
    ],
    cinemaPoints: [
      'Punto di vista elastico e variabile a ogni stacco o movimento di macchina',
      'Formato ottico variabile: dal quadrato delle origini (1.33:1) al respiro panoramico anamorfico (2.39:1)',
      'L\'inquadratura non contiene lo spazio, ma lo ritaglia da un continuum infinito',
      'Libertà di passare dal micro-dettaglio dell\'occhio alla vastità del deserto'
    ],
    historicalTurningPoint: 'La rottura di D.W. Griffith (1915): il cinema abbandona l\'inquadratura fissa che imitava il boccascena teatrale di Méliès per costruire uno spazio sintetico con il montaggio.',
    diagramVariant: 'proscenium_vs_aspect'
  },
  {
    id: 'plate_2',
    pillarNumber: '02',
    title: 'La Luce: Visibilità vs Scultura Drammatica',
    theatreConcept: 'Dall\'Illuminazione Generale alla Luce Ritmica di Appia',
    cinemaConcept: 'Dalla Luce Naturale al Chiaroscuro e alle Tre Punti',
    synthesis: 'Fino alla fine dell\'Ottocento la luce a teatro serviva solo a "rendere visibili" attori e fondali tramite candele, gas e ribalta. Con Adolphe Appia e la luce elettrica, diventa materia scultorea che crea volumi e ritmi. Nel cinema, la luce passa dalle serre di vetro solari di Méliès al sistema a tre punti hollywoodiano (Key, Fill, Backlight) e all\'espressionismo noir.',
    theatrePoints: [
      'La luce diffusa della ribalta appiattiva i volumi e proiettava ombre innaturali dal basso',
      'Appia introduce la "luce attiva" laterale e zenitale che modella i corpi come sculture',
      'La luce teatrale interagisce in tempo reale con lo spazio reale tridimensionale',
      'Robert Wilson trasforma i fondali in ciclorami retroilluminati a neon e luce fredda'
    ],
    cinemaPoints: [
      'Le origini: riprese in esterni o in teatri di posa vetrati per sfruttare il sole zenitale',
      'Hollywood codifica l\'illuminazione a 3 punti: Luce Chiave (Key), Schiarita (Fill), Controluce (Backlight)',
      'L\'Espressionismo tedesco e il Film Noir usano ombre dure e contrasti assoluti (Low-Key Lighting)',
      'Stanley Kubrick in Barry Lyndon infrange le convenzioni usando solo candele vere con lenti f/0.7 della NASA'
    ],
    historicalTurningPoint: '1899: La pubblicazione de "La musica e la messinscena" di Adolphe Appia consacra la luce come principio costruttivo sovrano della regia contemporanea.',
    diagramVariant: 'light_sculpture'
  },
  {
    id: 'plate_3',
    pillarNumber: '03',
    title: 'Il Corpo dell\'Attore e la Scala Recitativa',
    theatreConcept: 'Dalla Declamazione al Metodo e alla Biomeccanica',
    cinemaConcept: 'Dal Gesto Ipertrofico Muto al Primo Piano Psicologico',
    synthesis: 'A teatro l\'attore deve proiettare voce e gesto fino all\'ultima fila del loggione; nel cinema, la cinepresa cattura il minimo spasmo della pupilla e il microfono registra il sospiro. La messinscena si muove tra stilizzazione acrobatica (Mejerchol\'d), verità emotiva (Stanislavskij, Actor\'s Studio) e sottrazione minimale.',
    theatrePoints: [
      'Recitazione ottocentesca codificata su pose enfatiche per essere visibili da lontano',
      'Stanislavskij rivoluziona l\'attore dall\'interno (memoria emotiva e reviviscenza)',
      'Mejerchol\'d inventa la Biomeccanica: corpo ginnico-acrobatico che agisce ritmicamente nello spazio',
      'Brecht impone lo straniamento: l\'attore mostra il personaggio con distacco critico senza immedesimarsi'
    ],
    cinemaPoints: [
      'Il cinema muto eredita la mimica teatrale esasperata per compensare la mancanza della parola',
      'Con l\'invenzione del primo piano (Griffith, Dreyer) il volto diventa il paesaggio drammatico supremo',
      'L\'Actor\'s Studio porta il metodo Stanislavskij al cinema: Marlon Brando e James Dean recitano con borbottii ed esitazioni',
      'Il cinema della modernità (Bresson, Ozu, Antonioni) teorizza l\'attore come "modello" neutro che non recita'
    ],
    historicalTurningPoint: '1928: "La passione di Giovanna d\'Arco" di Carl Theodor Dreyer: Renée Falconetti filmata in 600 primi piani senza trucco, pietra miliare dell\'anima messa a nudo.',
    diagramVariant: 'acting_scale'
  },
  {
    id: 'plate_4',
    pillarNumber: '04',
    title: 'Il Punto di Vista: Platea Fissa vs Sguardo Mobile',
    theatreConcept: 'La Poltrona Fissa e le Rotture Itineranti di Ronconi',
    cinemaConcept: 'La Cinepresa Scatenata, il Carrello e il Piano Sequenza',
    synthesis: 'La messinscena teatrale classica presuppone uno spettatore inchiodato al suo posto, che abbraccia l\'intero palco con lo sguardo panoramico naturale. Il cinema svincola l\'occhio: la cinepresa vola, penetra nelle stanze, scivola a filo d\'acqua e costringe il pubblico ad assumere il punto di vista del regista.',
    theatrePoints: [
      'La prospettiva barocca privilegiava un unico punto di vista: quello del Sovrano al centro',
      'Lo spettatore moderno sceglie liberamente dove puntare gli occhi all\'interno del quadro scenico',
      'Le avanguardie (Artaud, Ronconi) aboliscono la sedia: lo spettatore cammina tra le scene simultanee',
      'La fruizione dal vivo genera un\'energia comunitaria irripetibile'
    ],
    cinemaPoints: [
      'Murnau e Karl Freund inventano l\'"Entfesselte Kamera" (cinepresa scatenata su carrelli e corde)',
      'Orson Welles scava buche per piazzare la macchina da presa al livello delle scarpe dei personaggi',
      'Jean Renoir usa il piano sequenza fluido per legare i personaggi all\'ambiente senza tagli autoritari',
      'Garrett Brown inventa la Steadicam (Shining): l\'inquadratura fluttua come uno spirito invisibile'
    ],
    historicalTurningPoint: '1924: "L\'ultima risata" di F.W. Murnau dimostra al mondo che la cinepresa non è più uno spettatore teatrale, ma una coscienza dinamica semovente.',
    diagramVariant: 'camera_movement'
  },
  {
    id: 'plate_5',
    pillarNumber: '05',
    title: 'Lo Spazio Fuoricampo e la Quarta Parete',
    theatreConcept: 'Le Quinte, il Dietro le Quinte e la Voce Oltre il Muro',
    cinemaConcept: 'Lo Spazio Fuoricampo (Hors-Champ) e i Sei Segmenti',
    synthesis: 'Nel teatro, ciò che sta fuori dalla scena è il "retroscena" (quinte, camerini, graticcio): se un attore esce, esce temporaneamente dal mondo della finzione. Nel cinema, lo spazio fuoricampo (teorizzato da Noël Burch in sei segmenti) continua a esistere diegeticamente oltre i quattro bordi del quadro: basta uno sguardo o un rumore per renderlo presente.',
    theatrePoints: [
      'La quarta parete chiude idealmente la stanza davanti al pubblico',
      'I rumori fuori scena (campane, temporali, carrozze nei drammi di Cechov) evocano l\'esterno',
      'I cambi a vista del teatro epico brechtiano smascherano la finzione delle quinte',
      'L\'ingresso in scena dell\'attore è un passaggio magico dalla realtà del camerino alla luce del palco'
    ],
    cinemaPoints: [
      'Noël Burch identifica 6 aree di fuoricampo: destra, sinistra, alto, basso, dietro la scenografia e DIETRO la cinepresa',
      'Lo sguardo del personaggio verso un punto invisibile crea attesa e suspense (Hitchcock)',
      'Il suono acusmatico (suono di cui non vediamo la sorgente visiva) dilata lo spazio mentale',
      'Lo sguardo in macchina viola il sesto fuoricampo, chiamando in causa direttamente lo spettatore'
    ],
    historicalTurningPoint: '1954: "La finestra sul cortile" di Alfred Hitchcock: l\'intero film è una meditazione sullo spazio visibile della finestra vs il mistero inquietante del fuoricampo.',
    diagramVariant: 'offscreen_space'
  },
  {
    id: 'plate_6',
    pillarNumber: '06',
    title: 'Il Tempo: Durata Irripetibile vs Manipolazione del Montaggio',
    theatreConcept: 'Il Qui e Ora dal Vivo e la Dilatazione Post-Drammatica',
    cinemaConcept: 'L\'Ellissi, il Flashback e Scolpire il Tempo',
    synthesis: 'Il tempo del teatro è l\'"hic et nunc" (qui e ora): due ore sul palco corrispondono fisicamente a due ore biologiche vissute insieme da attori e pubblico. Il cinema è per definizione manipolazione temporale: può contrarre vent\'anni in uno stacco (l\'osso scagliato che diventa astronave in 2001) o dilatare tre secondi in dieci minuti di montaggio dialettico.',
    theatrePoints: [
      'Le tre unità aristoteliche (tempo, luogo, azione) imponevano la coincidenza tra tempo reale e drammatico',
      'La performance teatrale non è mai identica: muta a ogni replica a seconda del respiro della sala',
      'Il teatro contemporaneo (Bob Wilson) manipola il tempo tramite lo slow-motion biologico dell\'attore',
      'La durata condivisa genera una ritualità collettiva catartica o critica'
    ],
    cinemaPoints: [
      'Il montaggio crea ellissi vertiginose (flashforward, flashback) e rallentamenti estremi',
      'Ejzenštejn usa il montaggio a collisione per espandere il tempo della strage sulla scalinata di Odessa',
      'Andrej Tarkovskij teorizza "scolpire il tempo": il compito del regista è catturare il flusso della durata viva',
      'Il film è un documento eterno fissato per sempre su supporto chimico o digitale'
    ],
    historicalTurningPoint: '1968: "2001: Odissea nello spazio" di Stanley Kubrick: il match cut più celebre della storia del cinema salta quattro milioni di anni di evoluzione umana in un ventiquattresimo di secondo.',
    diagramVariant: 'time_duration'
  }
];
