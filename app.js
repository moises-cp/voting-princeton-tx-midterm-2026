(function () {
  const guide = window.GUIDE;
  const raceList = document.getElementById('raceList');
  const searchInput = document.getElementById('searchInput');
  const contestedOnly = document.getElementById('contestedOnly');
  const resultCount = document.getElementById('resultCount');
  const emptyState = document.getElementById('emptyState');
  const filters = [...document.querySelectorAll('.filter')];
  let activeFilter = 'All';
  const reviewedKey = 'princeton-voter-guide-reviewed-v1';
  let reviewed = new Set(JSON.parse(localStorage.getItem(reviewedKey) || '[]'));

  const esc = (value) => String(value || '').replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
  const source = key => guide.sources[key];
  const scopeMatches = (race) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Judicial') return race.scope.includes('Judicial');
    if (activeFilter === 'Statewide') return race.scope === 'Statewide';
    return race.scope === activeFilter;
  };

  function initials(name) {
    return name.replace(/'[^']*'/g, '').split(/\s+/).filter(Boolean).slice(0, 2).map(n => n[0]).join('').toUpperCase();
  }

  function candidateCard(candidate, raceSources) {
    const site = candidate.website
      ? `<a class="link-button" href="${esc(candidate.website)}" target="_blank" rel="noreferrer">Official campaign site ↗</a>`
      : `<span class="missing-site">No verified official campaign site</span>`;
    const priorities = candidate.priorities.length
      ? `<ul>${candidate.priorities.map(p => `<li>${esc(p)}</li>`).join('')}</ul>`
      : `<p class="not-found">No additional candidate-specific proposals were located in the reviewed sources.</p>`;
    const extraLinks = candidate.links.map(link => `<a href="${esc(link.url)}" target="_blank" rel="noreferrer">${esc(link.label)} ↗</a>`).join('');
    const evidence = raceSources.map(key => source(key)).filter(Boolean).slice(0, 3).map(s => `<a href="${esc(s.url)}" target="_blank" rel="noreferrer">${esc(s.label)} <small>${esc(s.date)}</small></a>`).join('');

    return `<article class="candidate-card">
      <div class="candidate-head">
        <span class="initials" aria-hidden="true">${esc(initials(candidate.name))}</span>
        <div><h4>${esc(candidate.name)}</h4><p class="party">${esc(candidate.party)}</p></div>
      </div>
      <div class="candidate-section"><h5>Background</h5><p>${esc(candidate.background)}</p></div>
      <div class="candidate-section"><h5>Why this candidate says they are running</h5><p>${esc(candidate.why)}</p></div>
      <div class="candidate-section"><h5>Published priorities or approach</h5>${priorities}</div>
      ${candidate.note ? `<p class="evidence-note">${esc(candidate.note)}</p>` : ''}
      <div class="candidate-links">${site}${extraLinks}</div>
      <div class="evidence-links"><span>Evidence</span>${evidence}</div>
    </article>`;
  }

  function raceCard(race, index) {
    const unopposed = race.candidates.length === 1;
    const candidateNames = race.candidates.map(c => c.name).join(' · ');
    const sourceLinks = race.sources.map(key => source(key)).filter(Boolean).map(s => `<a href="${esc(s.url)}" target="_blank" rel="noreferrer">${esc(s.label)} <small>${esc(s.date)}</small></a>`).join('');
    const searchText = [race.title, race.scope, race.jurisdiction, race.duty, race.compare, ...race.candidates.flatMap(c => [c.name, c.party, c.background, c.why, ...c.priorities])].join(' ').toLowerCase();

    return `<details class="race-card" data-id="${esc(race.id)}" data-scope="${esc(race.scope)}" data-unopposed="${unopposed}" data-search="${esc(searchText)}" ${index < 2 ? 'open' : ''}>
      <summary>
        <div class="race-number">${String(index + 1).padStart(2, '0')}</div>
        <div class="race-summary-main">
          <div class="race-tags"><span>${esc(race.scope)}</span><span>${esc(race.jurisdiction)}</span>${unopposed ? '<span class="unopposed">Unopposed</span>' : ''}</div>
          <h3>${esc(race.title)}</h3>
          <p>${esc(candidateNames)}</p>
        </div>
        <span class="chevron" aria-hidden="true">+</span>
      </summary>
      <div class="race-body">
        <div class="office-explainer"><div><span>Term</span><strong>${esc(race.term)}</strong></div><div><span>What this office does</span><p>${esc(race.duty)}</p></div></div>
        <div class="comparison"><span>Comparison in one view</span><p>${esc(race.compare)}</p></div>
        <div class="candidate-grid">${race.candidates.map(c => candidateCard(c, race.sources)).join('')}</div>
        <div class="race-footer"><div><span>Race sources</span>${sourceLinks}</div><label><input type="checkbox" class="review-check" data-id="${esc(race.id)}" ${reviewed.has(race.id) ? 'checked' : ''}> Mark this race reviewed</label></div>
      </div>
    </details>`;
  }

  function render() {
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
    resultCount.textContent = `Showing ${shown} of ${guide.races.length} races`;
    emptyState.hidden = shown !== 0;
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
    document.getElementById('progressText').textContent = `${count} of ${guide.races.length} reviewed`;
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
  document.getElementById('expandAll').addEventListener('click', () => document.querySelectorAll('.race-card:not([hidden])').forEach(d => d.open = true));
  document.getElementById('collapseAll').addEventListener('click', () => document.querySelectorAll('.race-card').forEach(d => d.open = false));
  document.getElementById('clearProgress').addEventListener('click', () => {
    reviewed.clear(); localStorage.removeItem(reviewedKey); document.querySelectorAll('.review-check').forEach(b => b.checked = false); updateProgress();
  });
  window.addEventListener('beforeprint', () => document.querySelectorAll('.race-card').forEach(d => d.open = true));

  document.getElementById('sourceLibrary').innerHTML = Object.values(guide.sources).map((s, i) => `<a href="${esc(s.url)}" target="_blank" rel="noreferrer"><span>${String(i + 1).padStart(2, '0')}</span><div><strong>${esc(s.label)}</strong><small>${esc(s.date)}</small></div></a>`).join('');
  render();
})();
