// Language support: picks English or Spanish, translates the static page, and
// localizes race data from data.es.js. English stays in the HTML as the default.
(function () {
  const STORAGE_KEY = 'princeton-voter-guide-lang';
  const SUPPORTED = ['en', 'es'];

  const UI = {
    en: {
      docTitle: 'Princeton & Collin County 2026 Voter Guide',
      metaDescription: "Neutral, source-linked guide to the November 2026 ballot for Princeton, Texas, checked against Collin County's official sample ballot.",
      officialSite: 'Official campaign site ↗',
      noSite: 'No verified official campaign site',
      noProposals: 'No additional candidate-specific proposals were located in the reviewed sources.',
      background: 'Background',
      why: 'Why this candidate says they are running',
      priorities: 'Published priorities or approach',
      evidence: 'Evidence',
      funds: 'What it would fund',
      tax: 'Tax impact',
      voteFor: 'A vote FOR',
      voteAgainst: 'A vote AGAINST',
      propositionSummary: 'Ballot proposition · For or Against',
      unopposed: 'Unopposed',
      dependsOnAddress: 'Depends on your address',
      type: 'Type',
      term: 'Term',
      authorizes: 'What it authorizes',
      duty: 'What this office does',
      whoGets: 'Who gets this race',
      raceSources: 'Race sources',
      markReviewed: 'Mark this race reviewed',
      statHeading: '{contests} contests · {props} propositions · {candidates} candidates',
      statNote: 'Research checked through Oct. 18, 2026. {unopposed} contests have only one candidate.',
      showing: 'Showing {shown} of {total} ballot items',
      expandAll: 'Expand all',
      collapseAll: 'Collapse all',
      reviewed: '{count} of {total} reviewed',
      openToday: 'Open today',
    },
    es: {
      docTitle: 'Guía del votante 2026 de Princeton y el condado de Collin',
      metaDescription: 'Guía neutral y con fuentes sobre la boleta de noviembre de 2026 en Princeton, Texas, verificada con la boleta de muestra oficial del condado de Collin.',
      officialSite: 'Sitio oficial de campaña ↗',
      noSite: 'No se verificó un sitio oficial de campaña',
      noProposals: 'No se encontraron propuestas adicionales específicas del candidato en las fuentes revisadas.',
      background: 'Trayectoria',
      why: 'Por qué dice que se postula',
      priorities: 'Prioridades o enfoque publicados',
      evidence: 'Fuentes',
      funds: 'Qué financiaría',
      tax: 'Impacto en los impuestos',
      voteFor: 'Un voto A FAVOR',
      voteAgainst: 'Un voto EN CONTRA',
      propositionSummary: 'Proposición en la boleta · A favor o en contra',
      unopposed: 'Sin oponente',
      dependsOnAddress: 'Depende de su dirección',
      type: 'Tipo',
      term: 'Duración del cargo',
      authorizes: 'Qué autoriza',
      duty: 'Qué hace este cargo',
      whoGets: 'Quién vota en esta contienda',
      raceSources: 'Fuentes de esta contienda',
      markReviewed: 'Marcar esta contienda como revisada',
      statHeading: '{contests} contiendas · {props} proposiciones · {candidates} candidatos',
      statNote: 'Investigación verificada hasta el 18 de octubre de 2026. {unopposed} contiendas tienen un solo candidato.',
      showing: 'Mostrando {shown} de {total} elementos de la boleta',
      expandAll: 'Abrir todo',
      collapseAll: 'Cerrar todo',
      reviewed: '{count} de {total} revisadas',
      openToday: 'Abierto hoy',
    },
  };

  const SCOPE_ES = {
    'Statewide': 'Estatal',
    'Statewide Judicial': 'Judicial estatal',
    'Regional Judicial': 'Judicial regional',
    'Local Judicial': 'Judicial local',
    'District': 'Distrito',
    'County': 'Condado',
    'City': 'Ciudad',
    'School': 'Escolar',
    'Proposition': 'Proposición',
  };

  // Spanish for elements marked data-i18n="key" (innerHTML) and data-i18n-attr="attr:key".
  const PAGE_ES = {
    skipLink: 'Ir a las contiendas',
    heroEyebrow: 'ELECCIÓN GENERAL 2026 · GUÍA DE INVESTIGACIÓN',
    heroTitle: 'Conozca el cargo.<br><span>Compare a los candidatos.</span>',
    heroLede: 'Una guía políticamente neutral y con fuentes sobre la boleta de Princeton, Texas, verificada con la boleta de muestra oficial de todas las contiendas del condado de Collin.',
    heroExplore: 'Explore los <span data-stat="total">todos</span> elementos de la boleta',
    heroPdf: 'Abrir el PDF completo',
    pdfHref: 'texas-voter-guide-2026-es.pdf',
    scopeAria: 'Geografía de la boleta',
    scopeCity: 'Ciudad',
    scopeCounty: 'Condado',
    scopeUsHouse: 'Cámara de EE. UU.',
    scopeUsHouseVal: 'Distrito 3',
    scopeTxHouse: 'Cámara de Texas',
    scopeTxHouseVal: 'Distrito 67 u 89',
    scopeJp: 'Precinto de juez de paz',
    scopeJpVal: 'Mayormente Precinto 2',
    deadlineAria: 'Fechas de la elección',
    dlEarly: 'Votación anticipada',
    dlEarlyVal: '<a href="#early-voting">19-30 de oct.</a>',
    dlMail: 'Solicitud de boleta por correo recibida a más tardar',
    dlMailVal: '23 de oct.',
    dlDay: 'Día de las elecciones',
    dlDayVal: '3 de nov. · 7 a.m.-7 p.m.',
    evEyebrow: 'VOTACIÓN ANTICIPADA EN PRINCETON',
    evTitle: 'Vote temprano, del 19 al 30 de octubre.',
    evNote: 'El condado de Collin usa centros de votación para todo el condado: los votantes registrados en el condado de Collin pueden votar en cualquier centro del condado durante la votación anticipada y el Día de las elecciones (martes 3 de noviembre, 7 a.m.-7 p.m.). <a href="https://www.collincountytx.gov/elections/FAQ" target="_blank" rel="noreferrer">Preguntas frecuentes del condado ↗</a>',
    evCaption: 'Horario de votación anticipada en el Steven and Judy Deffibaugh Community Center',
    evDates: 'Fechas',
    evDays: 'Días',
    evHours: 'Horario',
    ev1Dates: '19-23 de oct.',
    evWeekdays: 'lun.-vie.',
    ev2Dates: '24 de oct.',
    evSaturday: 'Sábado',
    ev3Dates: '25 de oct.',
    evSunday: 'Domingo',
    ev4Dates: '26-30 de oct.',
    splitEyebrow: '¿ES ESTA MI BOLETA?',
    splitTitle: 'La mayoría de las contiendas son iguales en todo Princeton. Algunas dependen de su dirección.',
    splitIntro: 'Las contiendas marcadas <strong>Depende de su dirección</strong> aparecen solo en algunas boletas de Princeton. Su certificado de registro electoral (la tarjeta de votante) muestra su número de precinto electoral, y la búsqueda de boletas del condado muestra su boleta exacta.',
    sameTitle: 'En todas las boletas de Princeton',
    same1: 'Todas las contiendas estatales y la Corte de Apelaciones del 15.º Distrito',
    same2: 'Cámara de Representantes de EE. UU., Distrito 3 (todo Princeton)',
    same3: 'Corte de Apelaciones del 5.º Distrito, cargos de todo el condado y jueces del condado',
    same4: 'Proposiciones A-D del condado de Collin y Proposición A de Collin College',
    same5: 'Junta del Distrito de Tasación (avalúos), Lugares 1-3',
    variesTitle: 'Depende de su dirección',
    varies1: '<strong>Cámara de Texas:</strong> Distrito 67 o Distrito 89',
    varies2: '<strong>Juez de paz:</strong> Precinto 2 para la mayor parte de Princeton; Precinto 1 o 3 en las orillas',
    varies3: '<strong>Comisionado del condado:</strong> contienda del Precinto 2 solo al sur de la U.S. 380; la mayor parte de Princeton está en el Precinto 3, que no tiene contienda este año',
    varies4: '<strong>Concejo municipal:</strong> solo dentro de los límites de la ciudad de Princeton',
    varies5: '<strong>Consejo escolar:</strong> solo dentro de Princeton ISD',
    precinctCaption: 'Distritos de los precintos electorales del área de Princeton',
    pVotingPrecinct: 'Precinto electoral',
    pTxHouse: 'Cámara de Texas',
    pCommissioner: '¿Contienda de comisionado?',
    pJp: 'Juez de paz',
    pDist67: 'Distrito 67',
    pDist89: 'Distrito 89',
    pNo3: 'No (Precinto 3)',
    pYes2: 'Sí (Precinto 2)',
    pJp2: 'Precinto 2',
    pJp3: 'Precinto 3',
    splitFine: 'Basado en los <a href="https://www.collincountytx.gov/Government/Commissioners-Court/precincts" target="_blank" rel="noreferrer">mapas de precintos del condado de Collin ↗</a> (enero de 2024) y en los informes de distritos del Consejo Legislativo de Texas. Princeton ha crecido desde que se trazaron estos mapas, así que es posible que las zonas nuevas no aparezcan. Confirme con la <a href="https://apps2.collincountytx.gov/Elections2BallotAddressSearch" target="_blank" rel="noreferrer">búsqueda de boletas del condado ↗</a>. Este año no hay contienda para el Senado estatal en las boletas de Princeton: todo Princeton está en el Distrito 8 del Senado, que no tiene elección.',
    introEyebrow: 'CÓMO USAR ESTA GUÍA',
    introTitle: 'Empiece por lo que el cargo realmente puede hacer.',
    introBody: 'Abra cualquier contienda para ver las responsabilidades del cargo, la trayectoria de cada candidato, las razones que da para postularse y las fuentes enlazadas. La guía no resume ni compara a los candidatos por usted; cada tarjeta usa los mismos campos para que pueda compararlos lado a lado. Las prioridades de los candidatos se presentan como afirmaciones de los candidatos; los registros oficiales y los reportajes independientes se enlazan por separado.',
    introNotice: '<strong>Importante:</strong> Esta no es una boleta oficial y no recomienda candidatos ni posiciones sobre las proposiciones. Incluye todos los elementos de la boleta de muestra oficial del condado de Collin que aplican en Princeton, incluidas las proposiciones de bonos del condado y de Collin College. Algunas contiendas dependen de su dirección, y cada una está marcada "Depende de su dirección". Revise su boleta de muestra oficial para su precinto antes de votar.',
    methodEyebrow: 'MÉTODO EDITORIAL',
    methodTitle: 'Sin respuestas inventadas.',
    m1Title: 'Primero, la lista oficial',
    m1Body: 'Cada contienda, proposición y nombre de candidato se verificó con la boleta de muestra oficial de todas las contiendas del condado de Collin.',
    m2Title: 'Fuentes primarias',
    m2Body: 'Los sitios de campaña, biografías gubernamentales, registros y cuestionarios de candidatos se identifican como tales.',
    m3Title: 'Las lagunas quedan a la vista',
    m3Body: 'Cuando no se encontró un sitio web, entrevista o plataforma verificada del candidato, la guía lo indica.',
    m4Title: 'El mismo criterio para todos',
    m4Body: 'Cada candidato recibe los mismos campos, y los candidatos aparecen en el orden oficial de la boleta.',
    explorerEyebrow: 'SU BOLETA, ORGANIZADA',
    clearProgress: 'Borrar marcas de revisión',
    controlsAria: 'Filtrar contiendas',
    searchLabel: 'Buscar candidatos, cargos o temas',
    searchPlaceholder: 'Buscar nombres, cargos, temas',
    filterAria: 'Filtrar por nivel',
    fAll: 'Todas',
    fStatewide: 'Estatales',
    fDistrict: 'Distrito',
    fCounty: 'Condado',
    fCity: 'Ciudad y escuela',
    fJudicial: 'Judiciales',
    fProposition: 'Proposiciones',
    fContested: 'Solo con varios candidatos',
    emptyState: 'Ninguna contienda coincide con esos filtros. Pruebe una búsqueda más amplia.',
    officialEyebrow: 'ANTES DE VOTAR',
    officialTitle: 'Verifique la boleta final.',
    officialSource: 'Fuente oficial',
    official1: 'Boletas de muestra del condado de Collin',
    official2: 'Búsqueda de boleta por dirección del condado de Collin',
    official3: 'Secretaría de Estado de Texas',
    official4: 'Elecciones de la ciudad de Princeton',
    sourcesEyebrow: 'BIBLIOTECA DE FUENTES',
    sourcesTitle: 'Qué se revisó',
    sourcesBody: 'Cada tarjeta de contienda enlaza a sus fuentes más relevantes. Esta biblioteca reúne las fuentes recurrentes y sus fechas de revisión.',
    footerTitle: '<strong>Guía del votante 2026 de Princeton y el condado de Collin</strong>',
    footerBody: 'Herramienta de investigación independiente · Sin afiliación con ningún candidato, partido, oficina electoral u organización de noticias · Verificado el 18 de octubre de 2026',
  };

  function readSaved() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return SUPPORTED.includes(saved) ? saved : null;
    } catch (error) {
      return null;
    }
  }

  function detect() {
    const fromUrl = new URLSearchParams(location.search).get('lang');
    if (SUPPORTED.includes(fromUrl)) return fromUrl;
    const saved = readSaved();
    if (saved) return saved;
    const preferred = (navigator.languages && navigator.languages[0]) || navigator.language || 'en';
    return preferred.toLowerCase().startsWith('es') ? 'es' : 'en';
  }

  let lang = detect();
  const listeners = [];
  const originalHtml = new Map();
  const originalAttrs = new Map();

  function t(key, vars = {}) {
    const template = UI[lang][key] ?? UI.en[key] ?? key;
    return template.replace(/\{(\w+)\}/g, (_, name) => vars[name] ?? '');
  }

  function applyPage() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      if (!originalHtml.has(el)) originalHtml.set(el, el.innerHTML);
      const translated = lang === 'es' ? PAGE_ES[el.dataset.i18n] : undefined;
      el.innerHTML = translated ?? originalHtml.get(el);
    });
    document.querySelectorAll('[data-i18n-attr]').forEach(el => {
      el.dataset.i18nAttr.split(',').forEach(pair => {
        const [attr, key] = pair.split(':').map(part => part.trim());
        const id = `${attr}|${key}`;
        if (!originalAttrs.has(el)) originalAttrs.set(el, {});
        const originals = originalAttrs.get(el);
        if (!(id in originals)) originals[id] = el.getAttribute(attr);
        const translated = lang === 'es' ? PAGE_ES[key] : undefined;
        el.setAttribute(attr, translated ?? originals[id]);
      });
    });
    document.documentElement.lang = lang;
    document.title = t('docTitle');
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', t('metaDescription'));
    document.querySelectorAll('[data-lang]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.lang === lang)));
  }

  function setLang(next) {
    if (!SUPPORTED.includes(next) || next === lang) return;
    lang = next;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (error) {
      // Storage can be unavailable (private mode); the choice still applies to this visit.
    }
    applyPage();
    listeners.forEach(fn => fn(lang));
  }

  // Data translations: per-race overrides first, then shared phrases, then the English original.
  function phrase(text) {
    const phrases = (window.GUIDE_ES && window.GUIDE_ES.phrases) || {};
    return phrases[text] ?? text;
  }

  function localizeCandidate(candidate, overrides = {}) {
    return {
      ...candidate,
      party: overrides.party ?? phrase(candidate.party),
      background: overrides.background ?? phrase(candidate.background),
      why: overrides.why ?? phrase(candidate.why),
      priorities: overrides.priorities ?? candidate.priorities.map(phrase),
      note: overrides.note ?? phrase(candidate.note),
      links: candidate.links.map((link, i) => ({ ...link, label: (overrides.links && overrides.links[i]) ?? phrase(link.label) })),
    };
  }

  function localizeRace(race) {
    if (lang !== 'es') return race;
    const tr = (window.GUIDE_ES && window.GUIDE_ES.races[race.id]) || {};
    const pick = field => tr[field] ?? phrase(race[field]);
    const measure = race.measure && {
      ...race.measure,
      funds: (tr.measure && tr.measure.funds) ?? race.measure.funds.map(phrase),
      taxNote: (tr.measure && tr.measure.taxNote) ?? phrase(race.measure.taxNote),
      forMeans: (tr.measure && tr.measure.forMeans) ?? phrase(race.measure.forMeans),
      againstMeans: (tr.measure && tr.measure.againstMeans) ?? phrase(race.measure.againstMeans),
    };
    return {
      ...race,
      title: pick('title'),
      jurisdiction: pick('jurisdiction'),
      term: pick('term'),
      duty: pick('duty'),
      area: race.area && pick('area'),
      measure,
      candidates: race.candidates.map(c => localizeCandidate(c, tr.candidates && tr.candidates[c.name])),
    };
  }

  function localizeSource(key, source) {
    if (lang !== 'es') return source;
    const tr = (window.GUIDE_ES && window.GUIDE_ES.sources[key]) || {};
    return { ...source, label: tr.label ?? source.label, date: tr.date ?? source.date };
  }

  function scopeLabel(scope) {
    return lang === 'es' ? (SCOPE_ES[scope] ?? scope) : scope;
  }

  document.querySelectorAll('[data-lang]').forEach(button => button.addEventListener('click', () => setLang(button.dataset.lang)));
  applyPage();

  window.I18N = {
    get lang() { return lang; },
    t,
    setLang,
    onChange: fn => listeners.push(fn),
    localizeRace,
    localizeSource,
    scopeLabel,
    PAGE_ES,
  };
})();
