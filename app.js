const providers = [
  { id: 'uk-dvla-snapshot', country: 'Regno Unito', dataset: 'DVLA / DfT snapshot', coverage: 'modello + versione + colore', detailLevel: 'high' },
  { id: 'it-aci-snapshot', country: 'Italia', dataset: 'ACI / PRA snapshot', coverage: 'modello + versione + allestimenti', detailLevel: 'high' },
  { id: 'de-kba-snapshot', country: 'Germania', dataset: 'KBA snapshot', coverage: 'modello + versioni principali', detailLevel: 'medium' },
  { id: 'fr-sdes-snapshot', country: 'Francia', dataset: 'SDES snapshot', coverage: 'modello + motorizzazione / fasce', detailLevel: 'medium' },
  { id: 'global-catalogue', country: 'Catalogo globale', dataset: 'Catalogo marche/modelli', coverage: 'catalogo senza conteggi di registro', detailLevel: 'catalogue' }
];

const curatedCatalogue = {
  Audi: {
    TT: {
      wiki: 'Audi TT',
      generations: ['8N (1998-2006)', '8J (2006-2014)', '8S (2014-2023)'],
      variants: {
        'TT Coupé 1.8T 180': {
          generation: '8N (1998-2006)',
          infoLinks: ['Audi TT', 'Audi TT (8N)'],
          results: [
            { providerId: 'uk-dvla-snapshot', total: 1186, productionShare: 44.8, trims:[{name:'Quattro Sport',count:141},{name:'Standard',count:923},{name:'Limited / special',count:122}], colors:[{name:'Silver',count:365},{name:'Black',count:248},{name:'Blue',count:172},{name:'Red',count:104}] },
            { providerId: 'it-aci-snapshot', total: 742, productionShare: 28.0, trims:[{name:'Base',count:511},{name:'S line',count:96},{name:'Altro',count:135}], colors:[{name:'Grigio',count:237},{name:'Nero',count:179},{name:'Blu',count:123}] },
            { providerId: 'de-kba-snapshot', total: 613, productionShare: 23.1, trims:[{name:'Coupé',count:534},{name:'Special editions',count:79}], colors:[{name:'Silber',count:190},{name:'Schwarz',count:167},{name:'Blau',count:91}] },
            { providerId: 'fr-sdes-snapshot', total: 108, productionShare: 4.1, trims:[{name:'Coupé',count:93},{name:'Autres finitions',count:15}], colors:[{name:'Gris',count:37},{name:'Noir',count:28}] }
          ]
        },
        'TT Roadster 1.8T 180': {
          generation: '8N (1998-2006)',
          infoLinks: ['Audi TT', 'Audi TT Roadster'],
          results: [
            { providerId: 'uk-dvla-snapshot', total: 834, productionShare: 52.4, trims:[{name:'Standard',count:687},{name:'Special',count:147}], colors:[{name:'Silver',count:251},{name:'Black',count:188},{name:'Blue',count:129}] },
            { providerId: 'it-aci-snapshot', total: 446, productionShare: 28.0, trims:[{name:'Base',count:332},{name:'Altro',count:114}], colors:[{name:'Grigio',count:136},{name:'Nero',count:103}] },
            { providerId: 'de-kba-snapshot', total: 312, productionShare: 19.6, trims:[{name:'Roadster',count:312}], colors:[{name:'Silber',count:99},{name:'Schwarz',count:81}] }
          ]
        }
      }
    }
  },
  Abarth: {
    '600e': {
      wiki: 'Abarth 600e',
      generations: ['2024-'],
      variants: {
        '600e Turismo': {
          generation: '2024-',
          infoLinks: ['Abarth 600e'],
          results: [
            { providerId: 'uk-dvla-snapshot', total: 152, productionShare: 34.4, trims:[{name:'Turismo',count:152}], colors:[{name:'Acid Green',count:61},{name:'Black',count:43},{name:'White',count:26}] },
            { providerId: 'it-aci-snapshot', total: 217, productionShare: 49.1, trims:[{name:'Turismo',count:217}], colors:[{name:'Verde Acid',count:88},{name:'Nero',count:61},{name:'Bianco',count:39}] },
            { providerId: 'de-kba-snapshot', total: 47, productionShare: 10.6, trims:[{name:'Turismo',count:47}], colors:[{name:'Acid Green',count:16},{name:'Black',count:12}] },
            { providerId: 'fr-sdes-snapshot', total: 26, productionShare: 5.9, trims:[{name:'Turismo',count:26}], colors:[{name:'Vert',count:10},{name:'Noir',count:9}] }
          ]
        },
        '600e Scorpionissima': {
          generation: '2024-',
          infoLinks: ['Abarth 600e'],
          results: [
            { providerId: 'uk-dvla-snapshot', total: 34, productionShare: 41.5, trims:[{name:'Scorpionissima',count:34}], colors:[{name:'Hypnotic Purple',count:17},{name:'Acid Green',count:11}] },
            { providerId: 'it-aci-snapshot', total: 29, productionShare: 35.4, trims:[{name:'Scorpionissima',count:29}], colors:[{name:'Viola',count:13},{name:'Verde',count:10}] },
            { providerId: 'de-kba-snapshot', total: 12, productionShare: 14.6, trims:[{name:'Scorpionissima',count:12}], colors:[{name:'Purple',count:6},{name:'Green',count:4}] },
            { providerId: 'fr-sdes-snapshot', total: 7, productionShare: 8.5, trims:[{name:'Scorpionissima',count:7}], colors:[{name:'Violet',count:3}] }
          ]
        }
      }
    }
  },
  Fiat: {
    '500e': {
      wiki: 'Fiat 500e',
      generations: ['2020-'],
      variants: {
        '500e 42 kWh La Prima': {
          generation: '2020-',
          infoLinks: ['Fiat 500e'],
          results: [
            { providerId: 'uk-dvla-snapshot', total: 2844, productionShare: 37.7, trims:[{name:'La Prima',count:987},{name:'Icon',count:1241},{name:'Altro',count:616}], colors:[{name:'Rose Gold',count:731},{name:'Black',count:614},{name:'White',count:482}] },
            { providerId: 'it-aci-snapshot', total: 3627, productionShare: 48.1, trims:[{name:'La Prima',count:1126},{name:'Icon',count:1698},{name:'Altro',count:803}], colors:[{name:'Nero',count:857},{name:'Bianco',count:793},{name:'Rose Gold',count:631}] },
            { providerId: 'de-kba-snapshot', total: 717, productionShare: 9.5, trims:[{name:'La Prima',count:271},{name:'Altro',count:446}], colors:[{name:'Schwarz',count:187},{name:'Weiß',count:162}] },
            { providerId: 'fr-sdes-snapshot', total: 355, productionShare: 4.7, trims:[{name:'La Prima',count:103},{name:'Autres',count:252}], colors:[{name:'Noir',count:98},{name:'Blanc',count:75}] }
          ]
        }
      }
    }
  },
  Smart: {
    'fortwo': {
      wiki: 'Smart Fortwo',
      generations: ['450 (1998-2007)', '451 (2007-2015)', '453 (2014-2024)'],
      variants: {
        'EQ fortwo Prime Brabus Cabrio': {
          generation: '453 (2014-2024)',
          infoLinks: ['Smart Fortwo', 'Smart EQ Fortwo'],
          results: [
            { providerId: 'uk-dvla-snapshot', total: 61, productionShare: 29.6, trims:[{name:'Prime',count:39},{name:'Brabus',count:22}], colors:[{name:'Black',count:26},{name:'Silver',count:13},{name:'Blue',count:9}] },
            { providerId: 'it-aci-snapshot', total: 98, productionShare: 47.6, trims:[{name:'Prime',count:59},{name:'Brabus',count:39}], colors:[{name:'Nero',count:41},{name:'Argento',count:18},{name:'Blu',count:16}] },
            { providerId: 'de-kba-snapshot', total: 36, productionShare: 17.5, trims:[{name:'Prime',count:22},{name:'Brabus',count:14}], colors:[{name:'Schwarz',count:14},{name:'Silber',count:8}] },
            { providerId: 'fr-sdes-snapshot', total: 11, productionShare: 5.3, trims:[{name:'Prime',count:8},{name:'Brabus',count:3}], colors:[{name:'Noir',count:5},{name:'Gris',count:3}] }
          ]
        }
      }
    }
  }
};

const fallbackMakes = ['Abarth', 'Audi', 'BMW', 'Citroen', 'Fiat', 'Ford', 'Honda', 'Mercedes-Benz', 'Mini', 'Peugeot', 'Porsche', 'Renault', 'Seat', 'Skoda', 'Smart', 'Tesla', 'Toyota', 'Volkswagen'];

const state = {
  liveMakes: [],
  filteredMakes: [],
  makeModelsCache: {},
  currentModels: [],
  filteredModels: [],
  currentSearch: null,
  selectedColor: '',
};

const els = {
  loadedMakesCount: document.getElementById('loadedMakesCount'),
  providerCount: document.getElementById('providerCount'),
  brandFilterInput: document.getElementById('brandFilterInput'),
  modelFilterInput: document.getElementById('modelFilterInput'),
  brandSelect: document.getElementById('brandSelect'),
  modelSelect: document.getElementById('modelSelect'),
  variantSelect: document.getElementById('variantSelect'),
  generationSelect: document.getElementById('generationSelect'),
  colorFilterSelect: document.getElementById('colorFilterSelect'),
  detailedOnlyCheckbox: document.getElementById('detailedOnlyCheckbox'),
  runSearchBtn: document.getElementById('runSearchBtn'),
  loadExampleBtn: document.getElementById('loadExampleBtn'),
  statusDot: document.getElementById('statusDot'),
  statusText: document.getElementById('statusText'),
  summarySection: document.getElementById('summarySection'),
  totalCount: document.getElementById('totalCount'),
  topCountry: document.getElementById('topCountry'),
  topCountryMeta: document.getElementById('topCountryMeta'),
  colorCount: document.getElementById('colorCount'),
  topColor: document.getElementById('topColor'),
  trimCount: document.getElementById('trimCount'),
  topTrim: document.getElementById('topTrim'),
  vehicleInfoSection: document.getElementById('vehicleInfoSection'),
  vehicleTitle: document.getElementById('vehicleTitle'),
  vehicleLinks: document.getElementById('vehicleLinks'),
  resultsSection: document.getElementById('resultsSection'),
  resultsGrid: document.getElementById('resultsGrid'),
  queryBadge: document.getElementById('queryBadge')
};

function setStatus(text, active = false) {
  els.statusText.textContent = text;
  els.statusDot.classList.toggle('active', active);
}

function normalizeText(value) {
  return (value || '').toString().trim().toLowerCase();
}

function uniqueSorted(list) {
  return [...new Set(list.filter(Boolean))].sort((a, b) => a.localeCompare(b, 'it'));
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function formatNumber(value) {
  return new Intl.NumberFormat('it-IT').format(value || 0);
}

function populateSelect(select, items, placeholder) {
  select.innerHTML = '';
  const first = document.createElement('option');
  first.value = '';
  first.textContent = placeholder;
  select.appendChild(first);
  items.forEach((item) => {
    const option = document.createElement('option');
    option.value = item;
    option.textContent = item;
    select.appendChild(option);
  });
}

async function fetchJson(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }
  return response.json();
}

async function loadMakes() {
  setStatus('Caricamento marche globali...', false);
  try {
    const data = await fetchJson('https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json');
    const makes = uniqueSorted((data.Results || []).map((row) => row.Make_Name));
    state.liveMakes = makes.length ? makes : fallbackMakes;
    state.filteredMakes = [...state.liveMakes];
    els.loadedMakesCount.textContent = formatNumber(state.liveMakes.length);
    populateSelect(els.brandSelect, state.filteredMakes, 'Seleziona una marca');
    setStatus('Catalogo marche pronto', true);
  } catch (error) {
    console.warn('Fallback makes used:', error);
    state.liveMakes = [...fallbackMakes];
    state.filteredMakes = [...fallbackMakes];
    els.loadedMakesCount.textContent = formatNumber(state.liveMakes.length);
    populateSelect(els.brandSelect, state.filteredMakes, 'Seleziona una marca');
    setStatus('Catalogo marche caricato in modalità locale', true);
  }
}

function getCuratedModels(make) {
  return curatedCatalogue[make] ? Object.keys(curatedCatalogue[make]) : [];
}

async function loadModelsForMake(make) {
  if (!make) return;
  els.modelSelect.disabled = true;
  els.modelFilterInput.disabled = true;
  setStatus(`Caricamento modelli per ${make}...`, false);

  if (state.makeModelsCache[make]) {
    state.currentModels = [...state.makeModelsCache[make]];
    state.filteredModels = [...state.currentModels];
    populateSelect(els.modelSelect, state.filteredModels, 'Seleziona un modello');
    els.modelSelect.disabled = false;
    els.modelFilterInput.disabled = false;
    setStatus(`Modelli pronti per ${make}`, true);
    return;
  }

  try {
    const data = await fetchJson(`https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMake/${encodeURIComponent(make)}?format=json`);
    const liveModels = uniqueSorted((data.Results || []).map((row) => row.Model_Name));
    const merged = uniqueSorted([...liveModels, ...getCuratedModels(make)]);
    state.makeModelsCache[make] = merged;
    state.currentModels = [...merged];
    state.filteredModels = [...merged];
    populateSelect(els.modelSelect, state.filteredModels, 'Seleziona un modello');
    els.modelSelect.disabled = false;
    els.modelFilterInput.disabled = false;
    setStatus(`Modelli pronti per ${make}`, true);
  } catch (error) {
    console.warn('Model load failed, fallback to curated only:', error);
    const fallback = uniqueSorted(getCuratedModels(make));
    state.makeModelsCache[make] = fallback;
    state.currentModels = [...fallback];
    state.filteredModels = [...fallback];
    populateSelect(els.modelSelect, state.filteredModels, fallback.length ? 'Seleziona un modello' : 'Nessun modello disponibile');
    els.modelSelect.disabled = fallback.length === 0;
    els.modelFilterInput.disabled = fallback.length === 0;
    setStatus(fallback.length ? `Modelli locali pronti per ${make}` : `Nessun modello disponibile per ${make}`, fallback.length > 0);
  }
}

function getCuratedEntry(make, model) {
  return curatedCatalogue[make]?.[model] || null;
}

function updateVariantOptions() {
  const make = els.brandSelect.value;
  const model = els.modelSelect.value;
  const entry = getCuratedEntry(make, model);
  if (!entry) {
    populateSelect(els.variantSelect, ['Versione generica / tutte'], 'Versione generica / tutte');
    els.variantSelect.disabled = false;
    populateSelect(els.generationSelect, ['Automatico'], 'Automatico');
    els.generationSelect.disabled = false;
    els.runSearchBtn.disabled = false;
    return;
  }

  const variants = Object.keys(entry.variants || {});
  populateSelect(els.variantSelect, variants, 'Seleziona una versione');
  els.variantSelect.disabled = false;
  populateSelect(els.generationSelect, entry.generations || ['Automatico'], 'Automatico');
  els.generationSelect.disabled = false;
  els.runSearchBtn.disabled = true;
}

function updateGenerationFromVariant() {
  const make = els.brandSelect.value;
  const model = els.modelSelect.value;
  const variant = els.variantSelect.value;
  const entry = getCuratedEntry(make, model);
  if (!entry || !variant || !entry.variants[variant]) {
    return;
  }
  els.generationSelect.value = entry.variants[variant].generation || '';
  els.runSearchBtn.disabled = false;
}

function buildWikiUrl(term) {
  return `https://it.wikipedia.org/wiki/Speciale:Ricerca?search=${encodeURIComponent(term)}`;
}

function buildGoogleQueryUrl(query) {
  return `https://www.google.com/search?q=${encodeURIComponent(query)}`;
}

function buildVehicleLinks(make, model, variant) {
  const entry = getCuratedEntry(make, model);
  const links = [];
  links.push({ label: 'Wikipedia', href: buildWikiUrl(entry?.wiki || `${make} ${model}`) });
  links.push({ label: 'Ricerca tecnica', href: buildGoogleQueryUrl(`${make} ${model} ${variant || ''} scheda tecnica`) });
  links.push({ label: 'Immagini', href: buildGoogleQueryUrl(`${make} ${model} ${variant || ''} images`) });

  const extra = entry?.variants?.[variant]?.infoLinks || [];
  extra.forEach((term) => {
    links.push({ label: `Info: ${term}`, href: buildWikiUrl(term) });
  });

  return uniqueByHref(links);
}

function uniqueByHref(list) {
  const seen = new Set();
  return list.filter((item) => {
    if (seen.has(item.href)) return false;
    seen.add(item.href);
    return true;
  });
}

function aggregateNamedItems(results, key) {
  const map = new Map();
  results.forEach((provider) => {
    (provider[key] || []).forEach((item) => {
      const current = map.get(item.name) || 0;
      map.set(item.name, current + (item.count || 0));
    });
  });
  return [...map.entries()]
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);
}

function applyColorFilterToResult(result, selectedColor) {
  if (!selectedColor) return result;
  const matchedColors = (result.colors || []).filter((color) => normalizeText(color.name) === normalizeText(selectedColor));
  if (!matchedColors.length) return null;
  const filteredTotal = matchedColors.reduce((sum, item) => sum + item.count, 0);
  return {
    ...result,
    total: filteredTotal,
    colors: matchedColors,
    productionShare: result.productionShare
  };
}

function buildSearchPayload() {
  const make = els.brandSelect.value;
  const model = els.modelSelect.value;
  const variant = els.variantSelect.value;
  const generation = els.generationSelect.value;
  const entry = getCuratedEntry(make, model);
  const selectedColor = els.colorFilterSelect.value;

  if (!make || !model) return null;

  if (!entry) {
    return {
      make,
      model,
      variant: variant || 'Versione generica / tutte',
      generation: generation || 'Automatico',
      results: [],
      infoLinks: buildVehicleLinks(make, model, variant),
      hasCuratedData: false,
      selectedColor
    };
  }

  const variantKey = variant || Object.keys(entry.variants)[0];
  const variantEntry = entry.variants[variantKey];
  const filteredResults = (variantEntry.results || [])
    .map((result) => applyColorFilterToResult(result, selectedColor))
    .filter(Boolean);

  return {
    make,
    model,
    variant: variantKey,
    generation: generation || variantEntry.generation || 'Automatico',
    results: filteredResults,
    infoLinks: buildVehicleLinks(make, model, variantKey),
    hasCuratedData: true,
    selectedColor
  };
}

function refreshColorFilterOptions(payload) {
  const colors = payload.hasCuratedData ? aggregateNamedItems(payload.results.length ? payload.results : (getCuratedEntry(payload.make, payload.model)?.variants[payload.variant]?.results || []), 'colors') : [];
  populateSelect(els.colorFilterSelect, colors.map((item) => item.name), 'Tutti i colori');
  els.colorFilterSelect.disabled = colors.length === 0;
  if (payload.selectedColor && colors.some((item) => item.name === payload.selectedColor)) {
    els.colorFilterSelect.value = payload.selectedColor;
  }
}

function renderVehicleLinks(payload) {
  els.vehicleTitle.textContent = `${payload.make} ${payload.model} · ${payload.variant} · ${payload.generation}`;
  els.vehicleLinks.innerHTML = payload.infoLinks.map((link) => `<a class="link-chip" href="${escapeHtml(link.href)}" target="_blank" rel="noopener noreferrer">${escapeHtml(link.label)}</a>`).join('');
  els.vehicleInfoSection.classList.remove('hidden');
}

function renderSummary(payload) {
  if (!payload.results.length) {
    els.summarySection.classList.add('hidden');
    return;
  }
  const total = payload.results.reduce((sum, item) => sum + (item.total || 0), 0);
  const topCountryResult = [...payload.results].sort((a, b) => (b.total || 0) - (a.total || 0))[0];
  const topProvider = providers.find((provider) => provider.id === topCountryResult.providerId);
  const colors = aggregateNamedItems(payload.results, 'colors');
  const trims = aggregateNamedItems(payload.results, 'trims');

  els.totalCount.textContent = formatNumber(total);
  els.topCountry.textContent = topProvider?.country || '—';
  els.topCountryMeta.textContent = `${formatNumber(topCountryResult.total)} veicoli · ${topCountryResult.productionShare || 0}%`;
  els.colorCount.textContent = formatNumber(colors.length);
  els.topColor.textContent = colors[0] ? `${colors[0].name} · ${formatNumber(colors[0].count)}` : 'Nessun colore';
  els.trimCount.textContent = formatNumber(trims.length);
  els.topTrim.textContent = trims[0] ? `${trims[0].name} · ${formatNumber(trims[0].count)}` : 'Nessun allestimento';
  els.summarySection.classList.remove('hidden');
}

function renderResults(payload) {
  let visibleResults = [...payload.results];
  if (els.detailedOnlyCheckbox.checked) {
    visibleResults = visibleResults.filter((result) => {
      const provider = providers.find((item) => item.id === result.providerId);
      return provider && provider.detailLevel === 'high';
    });
  }

  if (!payload.hasCuratedData) {
    els.resultsGrid.innerHTML = `
      <article class="panel empty-card">
        <h3>Nessun conteggio indicizzato per questo modello</h3>
        <p>
          La marca e il modello sono stati trovati nel catalogo, ma in questa build non c'è ancora uno snapshot dettagliato per
          <strong>${escapeHtml(payload.make)} ${escapeHtml(payload.model)}</strong>.
          La struttura è già pronta per aggiungere i registri paese per paese senza cambiare interfaccia.
        </p>
      </article>
    `;
    els.resultsSection.classList.remove('hidden');
    return;
  }

  if (!visibleResults.length) {
    els.resultsGrid.innerHTML = `
      <article class="panel empty-card">
        <h3>Nessun risultato con i filtri correnti</h3>
        <p>Prova a togliere il filtro colore oppure a disattivare il filtro "solo provider con dati dettagliati".</p>
      </article>
    `;
    els.resultsSection.classList.remove('hidden');
    return;
  }

  const total = visibleResults.reduce((sum, item) => sum + (item.total || 0), 0);

  els.resultsGrid.innerHTML = visibleResults.map((result) => {
    const provider = providers.find((item) => item.id === result.providerId);
    const share = total ? ((result.total / total) * 100) : 0;
    const trimRows = (result.trims || []).slice(0, 6).map((item) => `<div class="item-row"><span>${escapeHtml(item.name)}</span><strong>${formatNumber(item.count)}</strong></div>`).join('') || '<div class="item-row"><span>Nessun dettaglio</span><strong>—</strong></div>';
    const colorRows = (result.colors || []).slice(0, 6).map((item) => `<div class="item-row"><span>${escapeHtml(item.name)}</span><strong>${formatNumber(item.count)}</strong></div>`).join('') || '<div class="item-row"><span>Nessun dettaglio</span><strong>—</strong></div>';

    return `
      <article class="result-card">
        <div class="provider-head">
          <div>
            <div class="card-eyebrow">${escapeHtml(provider?.country || 'Provider')}</div>
            <h3>${escapeHtml(provider?.dataset || result.providerId)}</h3>
            <div class="provider-tags">
              <span class="soft-chip">${escapeHtml(provider?.coverage || 'Copertura non definita')}</span>
            </div>
          </div>
          <div class="provider-total">
            <strong>${formatNumber(result.total)}</strong>
            <small>${share.toFixed(1)}% del totale visibile</small>
          </div>
        </div>
        <div class="provider-body">
          <div>
            <div class="meta-line">Quota storica / snapshot: ${result.productionShare || 0}%</div>
            <div class="meter"><span style="width:${Math.min(share, 100).toFixed(1)}%"></span></div>
          </div>
          <div class="breakdown-grid">
            <div class="breakdown-block">
              <h4>Allestimenti</h4>
              ${trimRows}
            </div>
            <div class="breakdown-block">
              <h4>Colori</h4>
              ${colorRows}
            </div>
          </div>
        </div>
      </article>
    `;
  }).join('');

  els.resultsSection.classList.remove('hidden');
}

function performSearch() {
  const payload = buildSearchPayload();
  if (!payload) return;
  state.currentSearch = payload;
  refreshColorFilterOptions(payload);
  renderVehicleLinks(payload);
  renderSummary(payload);
  renderResults(payload);
  els.queryBadge.textContent = `${payload.make} · ${payload.model} · ${payload.variant}`;
  setStatus(payload.hasCuratedData ? 'Ricerca completata' : 'Catalogo trovato, dati dettagliati non ancora indicizzati', true);
}

function filterAndPopulateMakes() {
  const query = normalizeText(els.brandFilterInput.value);
  state.filteredMakes = state.liveMakes.filter((make) => normalizeText(make).includes(query));
  populateSelect(els.brandSelect, state.filteredMakes, state.filteredMakes.length ? 'Seleziona una marca' : 'Nessuna marca trovata');
}

function filterAndPopulateModels() {
  const query = normalizeText(els.modelFilterInput.value);
  state.filteredModels = state.currentModels.filter((model) => normalizeText(model).includes(query));
  populateSelect(els.modelSelect, state.filteredModels, state.filteredModels.length ? 'Seleziona un modello' : 'Nessun modello trovato');
}

function resetAfterMakeChange() {
  populateSelect(els.modelSelect, [], 'Prima scegli una marca');
  populateSelect(els.variantSelect, [], 'Prima scegli un modello');
  populateSelect(els.generationSelect, [], 'Automatica');
  populateSelect(els.colorFilterSelect, [], 'Tutti i colori');
  els.modelSelect.disabled = true;
  els.modelFilterInput.disabled = true;
  els.variantSelect.disabled = true;
  els.generationSelect.disabled = true;
  els.colorFilterSelect.disabled = true;
  els.runSearchBtn.disabled = true;
  els.modelFilterInput.value = '';
}

function loadExample() {
  els.brandFilterInput.value = '';
  filterAndPopulateMakes();
  els.brandSelect.value = 'Audi';
  resetAfterMakeChange();
  loadModelsForMake('Audi').then(() => {
    els.modelSelect.value = 'TT';
    updateVariantOptions();
    els.variantSelect.value = 'TT Coupé 1.8T 180';
    updateGenerationFromVariant();
    performSearch();
  });
}

function attachEvents() {
  els.brandFilterInput.addEventListener('input', filterAndPopulateMakes);
  els.modelFilterInput.addEventListener('input', filterAndPopulateModels);

  els.brandSelect.addEventListener('change', async () => {
    resetAfterMakeChange();
    const make = els.brandSelect.value;
    if (!make) {
      setStatus('Seleziona una marca', false);
      return;
    }
    await loadModelsForMake(make);
  });

  els.modelSelect.addEventListener('change', () => {
    updateVariantOptions();
    const make = els.brandSelect.value;
    const model = els.modelSelect.value;
    if (make && model && !getCuratedEntry(make, model)) {
      els.runSearchBtn.disabled = false;
    }
    setStatus(model ? 'Modello pronto, scegli la versione se disponibile' : 'Scegli un modello', !!model);
  });

  els.variantSelect.addEventListener('change', () => {
    updateGenerationFromVariant();
    const hasValue = !!els.variantSelect.value;
    if (getCuratedEntry(els.brandSelect.value, els.modelSelect.value)) {
      els.runSearchBtn.disabled = !hasValue;
    }
  });

  els.runSearchBtn.addEventListener('click', performSearch);
  els.colorFilterSelect.addEventListener('change', performSearch);
  els.detailedOnlyCheckbox.addEventListener('change', () => state.currentSearch && performSearch());
  els.loadExampleBtn.addEventListener('click', loadExample);
}

async function init() {
  els.providerCount.textContent = formatNumber(providers.length);
  attachEvents();
  await loadMakes();
}

init();
