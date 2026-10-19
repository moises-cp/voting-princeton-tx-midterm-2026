(function () {
  const guide = window.GUIDE;
  const { t, localizeRace, localizeSource, scopeLabel } = window.I18N;
  const raceList = document.getElementById('raceList');
  const searchInput = document.getElementById('searchInput');
  const contestedOnly = document.getElementById('contestedOnly');
  const resultCount = document.getElementById('resultCount');
  const emptyState = document.getElementById('emptyState');
  const toggleAll = document.getElementById('toggleAll');
  const filters = [...document.querySelectorAll('.filter')];
  let activeFilter = 'All';
  let openIds = new Set(guide.races.slice(0, 2).map(r => r.id));
  const reviewedKey = 'princeton-voter-guide-reviewed-v1';
  let reviewed = new Set(JSON.parse(localStorage.getItem(reviewedKey) || '[]'));

  const esc = (value) => String(value || '').replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
  const source = key => guide.sources[key] && localizeSource(key, guide.sources[key]);
  const scopeMatches = (race) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Judicial') return race.scope.includes('Judicial');
    if (activeFilter === 'Statewide') return race.scope === 'Statewide';
    if (activeFilter === 'City') return race.scope === 'City' || race.scope === 'School';
    return race.scope === activeFilter;
  };

  function initials(name) {
    return name.replace(/'[^']*'/g, '').split(/\s+/).filter(Boolean).slice(0, 2).map(n => n[0]).join('').toUpperCase();
  }

  function candidateCard(candidate, raceSources) {
    const site = candidate.website
      ? `<a class="link-button" href="${esc(candidate.website)}" target="_blank" rel="noreferrer">${t('officialSite')}</a>`
      : `<span class="missing-site">${t('noSite')}</span>`;
    const priorities = candidate.priorities.length
      ? `<ul>${candidate.priorities.map(p => `<li>${esc(p)}</li>`).join('')}</ul>`
      : `<p class="not-found">${t('noProposals')}</p>`;
    const extraLinks = candidate.links.map(link => `<a href="${esc(link.url)}" target="_blank" rel="noreferrer">${esc(link.label)} ↗</a>`).join('');
    const evidence = raceSources.map(key => source(key)).filter(Boolean).slice(0, 3).map(s => `<a href="${esc(s.url)}" target="_blank" rel="noreferrer">${esc(s.label)} <small>${esc(s.date)}</small></a>`).join('');

    return `<article class="candidate-card">
      <div class="candidate-head">
        <span class="initials" aria-hidden="true">${esc(initials(candidate.name))}</span>
        <div><h4>${esc(candidate.name)}</h4><p class="party">${esc(candidate.party)}</p></div>
      </div>
      <div class="candidate-section"><h5>${t('background')}</h5><p>${esc(candidate.background)}</p></div>
      <div class="candidate-section"><h5>${t('why')}</h5><p>${esc(candidate.why)}</p></div>
      <div class="candidate-section"><h5>${t('priorities')}</h5>${priorities}</div>
      ${candidate.note ? `<p class="evidence-note">${esc(candidate.note)}</p>` : ''}
      <div class="candidate-links">${site}${extraLinks}</div>
      <div class="evidence-links"><span>${t('evidence')}</span>${evidence}</div>
    </article>`;
  }

  function measureBody(measure) {
    return `<div class="measure-grid">
        <div><span>${t('funds')}</span><ul>${measure.funds.map(f => `<li>${esc(f)}</li>`).join('')}</ul></div>
        <div><span>${t('tax')}</span><p>${esc(measure.taxNote)}</p></div>
      </div>
      <div class="vote-meaning"><div><span>${t('voteFor')}</span><p>${esc(measure.forMeans)}</p></div><div><span>${t('voteAgainst')}</span><p>${esc(measure.againstMeans)}</p></div></div>`;
  }

  function raceCard(englishRace, index) {
    const race = localizeRace(englishRace);
    const unopposed = race.candidates.length === 1;
    const candidateNames = race.measure ? t('propositionSummary') : race.candidates.map(c => c.name).join(' · ');
    const sourceLinks = race.sources.map(key => source(key)).filter(Boolean).map(s => `<a href="${esc(s.url)}" target="_blank" rel="noreferrer">${esc(s.label)} <small>${esc(s.date)}</small></a>`).join('');
    const measureText = race.measure ? [...race.measure.funds, race.measure.taxNote] : [];
    // Search matches both languages so a query works whichever language the visitor types in.
    const searchText = [englishRace.title, englishRace.duty, ...englishRace.candidates.flatMap(c => [c.background, c.why, ...c.priorities]), race.title, race.scope, race.jurisdiction, race.duty, race.area, ...measureText, ...race.candidates.flatMap(c => [c.name, c.party, c.background, c.why, ...c.priorities])].join(' ').toLowerCase();
    const details = race.measure
      ? measureBody(race.measure)
      : `<div class="candidate-grid">${race.candidates.map(c => candidateCard(c, race.sources)).join('')}</div>`;

    return `<details class="race-card" data-id="${esc(race.id)}" data-scope="${esc(race.scope)}" data-unopposed="${unopposed}" data-search="${esc(searchText)}" ${openIds.has(race.id) ? 'open' : ''}>
      <summary>
        <div class="race-number">${String(index + 1).padStart(2, '0')}</div>
        <div class="race-summary-main">
          <div class="race-tags"><span>${esc(scopeLabel(race.scope))}</span><span>${esc(race.jurisdiction)}</span>${unopposed ? `<span class="unopposed">${t('unopposed')}</span>` : ''}${race.area ? `<span class="area-tag">${t('dependsOnAddress')}</span>` : ''}</div>
          <h3>${esc(race.title)}</h3>
          <p>${esc(candidateNames)}</p>
        </div>
        <span class="chevron" aria-hidden="true">+</span>
      </summary>
      <div class="race-body">
        <div class="office-explainer"><div><span>${race.measure ? t('type') : t('term')}</span><strong>${esc(race.term)}</strong></div><div><span>${race.measure ? t('authorizes') : t('duty')}</span><p>${esc(race.duty)}</p></div></div>
        ${race.area ? `<div class="area-note"><span>${t('whoGets')}</span><p>${esc(race.area)}</p></div>` : ''}
        ${details}
        <div class="race-footer"><div><span>${t('raceSources')}</span>${sourceLinks}</div><label><input type="checkbox" class="review-check" data-id="${esc(race.id)}" ${reviewed.has(race.id) ? 'checked' : ''}> ${t('markReviewed')}</label></div>
      </div>
    </details>`;
  }

  function renderStats() {
    const races = guide.races;
    const contests = races.filter(r => !r.measure);
    const candidates = contests.reduce((sum, r) => sum + r.candidates.length, 0);
    const unopposedCount = contests.filter(r => r.candidates.length === 1).length;
    const measureCount = races.length - contests.length;
    document.querySelectorAll('[data-stat="total"]').forEach(el => el.textContent = races.length);
    document.getElementById('statHeading').textContent = t('statHeading', { contests: contests.length, props: measureCount, candidates });
    document.getElementById('statNote').textContent = t('statNote', { unopposed: unopposedCount });
  }

  function render() {
    renderStats();
    raceList.innerHTML = guide.races.map(raceCard).join('');
    wireReviewChecks();
    applyFilters();
    updateProgress();
  }

  function applyFilters() {
    const query = searchInput.value.trim().toLowerCase();
    let shown = 0;
    document.querySelectorAll('.race-card').forEach(card => {
      const race = guide.races.find(r => r.id === card.dataset.id);
      const visible = scopeMatches(race) && (!contestedOnly.checked || card.dataset.unopposed === 'false') && (!query || card.dataset.search.includes(query));
      card.hidden = !visible;
      if (visible) shown += 1;
    });
    resultCount.textContent = t('showing', { shown, total: guide.races.length });
    emptyState.hidden = shown !== 0;
    syncToggleAll();
  }

  function allVisibleOpen() {
    const visible = [...document.querySelectorAll('.race-card:not([hidden])')];
    return visible.length > 0 && visible.every(d => d.open);
  }

  function syncToggleAll() {
    toggleAll.textContent = allVisibleOpen() ? t('collapseAll') : t('expandAll');
  }

  function wireReviewChecks() {
    document.querySelectorAll('.review-check').forEach(box => box.addEventListener('change', () => {
      box.checked ? reviewed.add(box.dataset.id) : reviewed.delete(box.dataset.id);
      localStorage.setItem(reviewedKey, JSON.stringify([...reviewed]));
      updateProgress();
    }));
  }

  function updateProgress() {
    const count = reviewed.size;
    document.getElementById('progressText').textContent = t('reviewed', { count, total: guide.races.length });
    document.getElementById('progressBar').style.width = `${(count / guide.races.length) * 100}%`;
  }

  filters.forEach(button => button.addEventListener('click', () => {
    filters.forEach(b => b.classList.remove('active'));
    button.classList.add('active');
    activeFilter = button.dataset.filter;
    applyFilters();
  }));
  searchInput.addEventListener('input', applyFilters);
  contestedOnly.addEventListener('change', applyFilters);
  toggleAll.addEventListener('click', () => {
    const shouldExpand = !allVisibleOpen();
    document.querySelectorAll(shouldExpand ? '.race-card:not([hidden])' : '.race-card').forEach(d => d.open = shouldExpand);
    syncToggleAll();
  });
  // <details> toggle events don't bubble, so listen in the capture phase.
  raceList.addEventListener('toggle', syncToggleAll, true);
  document.getElementById('clearProgress').addEventListener('click', () => {
    reviewed.clear(); localStorage.removeItem(reviewedKey); document.querySelectorAll('.review-check').forEach(b => b.checked = false); updateProgress();
  });
  window.addEventListener('beforeprint', () => document.querySelectorAll('.race-card').forEach(d => d.open = true));

  function markEarlyVotingDays() {
    const now = new Date();
    const today = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
    document.querySelectorAll('.ev-schedule tbody tr').forEach(row => {
      const { start, end } = row.dataset;
      row.querySelectorAll('.today-badge').forEach(badge => badge.remove());
      row.classList.toggle('is-past', today > end);
      row.classList.toggle('is-today', today >= start && today <= end);
      if (today >= start && today <= end) {
        row.querySelector('th').insertAdjacentHTML('beforeend', ` <span class="today-badge">${t('openToday')}</span>`);
      }
    });
  }

  function renderSourceLibrary() {
    document.getElementById('sourceLibrary').innerHTML = Object.keys(guide.sources).map((key, i) => {
      const s = source(key);
      return `<a href="${esc(s.url)}" target="_blank" rel="noreferrer"><span>${String(i + 1).padStart(2, '0')}</span><div><strong>${esc(s.label)}</strong><small>${esc(s.date)}</small></div></a>`;
    }).join('');
  }

  // Re-render in the new language, keeping open cards, filters, and search as they were.
  window.I18N.onChange(() => {
    openIds = new Set([...document.querySelectorAll('.race-card[open]')].map(d => d.dataset.id));
    markEarlyVotingDays();
    renderSourceLibrary();
    render();
  });

  markEarlyVotingDays();
  renderSourceLibrary();
  render();
})();
