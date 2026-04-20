const registry = {
  providers: [
    {
      id: 'uk-dvla-snapshot',
      country: 'Regno Unito',
      dataset: 'DVLA snapshot',
      type: 'snapshot',
      coverage: 'modello + versione + colore',
    },
    {
      id: 'it-aci-snapshot',
      country: 'Italia',
      dataset: 'ACI / PRA snapshot',
      type: 'snapshot',
      coverage: 'modello + versione + allestimenti',
    },
    {
      id: 'de-kba-snapshot',
      country: 'Germania',
      dataset: 'KBA snapshot',
      type: 'snapshot',
      coverage: 'modello + versioni principali',
    },
    {
      id: 'fr-sdes-snapshot',
      country: 'Francia',
      dataset: 'SDES snapshot',
      type: 'snapshot',
      coverage: 'modello + motorizzazione / fasce',
    },
  ],
  catalogue: {
    Audi: {
      'TT': {
        variants: {
          'TT Coupé 1.8T 180': {
            generations: ['8N (1998-2006)'],
            results: [
              {
                providerId: 'uk-dvla-snapshot',
                total: 1186,
                trims: [
                  { name: 'Quattro Sport', count: 141 },
                  { name: 'Standard', count: 923 },
                  { name: 'Limited / special', count: 122 },
                ],
                colors: [
                  { name: 'Silver', count: 365 },
                  { name: 'Black', count: 248 },
                  { name: 'Blue', count: 172 },
                  { name: 'Red', count: 104 },
                ],
                productionShare: 44.8,
              },
              {
                providerId: 'it-aci-snapshot',
                total: 742,
                trims: [
                  { name: 'Base', count: 511 },
                  { name: 'S line', count: 96 },
                  { name: 'Altro', count: 135 },
                ],
                colors: [
                  { name: 'Grigio', count: 237 },
                  { name: 'Nero', count: 179 },
                  { name: 'Blu', count: 123 },
                ],
                productionShare: 28.0,
              },
              {
                providerId: 'de-kba-snapshot',
                total: 613,
                trims: [
                  { name: 'Coupé', count: 534 },
                  { name: 'Special editions', count: 79 },
                ],
                colors: [
                  { name: 'Silber', count: 190 },
                  { name: 'Schwarz', count: 167 },
                  { name: 'Blau', count: 91 },
                ],
                productionShare: 23.1,
              },
              {
                providerId: 'fr-sdes-snapshot',
                total: 108,
                trims: [
                  { name: 'Coupé', count: 93 },
                  { name: 'Autres finitions', count: 15 },
                ],
                colors: [
                  { name: 'Gris', count: 37 },
                  { name: 'Noir', count: 28 },
                ],
                productionShare: 4.1,
              },
            ],
          },
          'TT Roadster 1.8T 180': {
            generations: ['8N (1998-2006)'],
            results: [
              {
                providerId: 'uk-dvla-snapshot',
                total: 834,
                trims: [
                  { name: 'Standard', count: 687 },
                  { name: 'Special', count: 147 },
                ],
                colors: [
                  { name: 'Silver', count: 251 },
                  { name: 'Black', count: 188 },
                  { name: 'Blue', count: 129 },
                ],
                productionShare: 52.4,
              },
              {
                providerId: 'it-aci-snapshot',
                total: 446,
                trims: [
                  { name: 'Base', count: 332 },
                  { name: 'Altro', count: 114 },
                ],
                colors: [
                  { name: 'Grigio', count: 136 },
                  { name: 'Nero', count: 103 },
                ],
                productionShare: 28.0,
              },
              {
                providerId: 'de-kba-snapshot',
                total: 312,
                trims: [
                  { name: 'Roadster', count: 312 },
                ],
                colors: [
                  { name: 'Silber', count: 99 },
                  { name: 'Schwarz', count: 81 },
                ],
                productionShare: 19.6,
              },
            ],
          },
        },
      },
    },
    Abarth: {
      '600e': {
        variants: {
          '600e Turismo': {
            generations: ['2024-'],
            results: [
              {
                providerId: 'uk-dvla-snapshot',
                total: 152,
                trims: [
                  { name: 'Turismo', count: 152 },
                ],
                colors: [
                  { name: 'Acid Green', count: 61 },
                  { name: 'Black', count: 43 },
                  { name: 'White', count: 26 },
                ],
                productionShare: 34.4,
              },
              {
                providerId: 'it-aci-snapshot',
                total: 217,
                trims: [
                  { name: 'Turismo', count: 217 },
                ],
                colors: [
                  { name: 'Verde Acid', count: 88 },
                  { name: 'Nero', count: 61 },
                  { name: 'Bianco', count: 39 },
                ],
                productionShare: 49.1,
              },
              {
                providerId: 'de-kba-snapshot',
                total: 47,
                trims: [
                  { name: 'Turismo', count: 47 },
                ],
                colors: [
                  { name: 'Acid Green', count: 16 },
                  { name: 'Black', count: 12 },
                ],
                productionShare: 10.6,
              },
              {
                providerId: 'fr-sdes-snapshot',
                total: 26,
                trims: [
                  { name: 'Turismo', count: 26 },
                ],
                colors: [
                  { name: 'Vert', count: 10 },
                  { name: 'Noir', count: 9 },
                ],
                productionShare: 5.9,
              },
            ],
          },
          '600e Scorpionissima': {
            generations: ['2024-'],
            results: [
              {
                providerId: 'uk-dvla-snapshot',
                total: 34,
                trims: [
                  { name: 'Scorpionissima', count: 34 },
                ],
                colors: [
                  { name: 'Hypnotic Purple', count: 17 },
                  { name: 'Acid Green', count: 11 },
                ],
                productionShare: 41.5,
              },
              {
                providerId: 'it-aci-snapshot',
                total: 29,
                trims: [
                  { name: 'Scorpionissima', count: 29 },
                ],
                colors: [
                  { name: 'Viola', count: 13 },
                  { name: 'Verde', count: 10 },
                ],
                productionShare: 35.4,
              },
              {
                providerId: 'de-kba-snapshot',
                total: 12,
                trims: [
                  { name: 'Scorpionissima', count: 12 },
                ],
                colors: [
                  { name: 'Purple', count: 6 },
                  { name: 'Green', count: 4 },
                ],
                productionShare: 14.6,
              },
              {
                providerId: 'fr-sdes-snapshot',
                total: 7,
                trims: [
                  { name: 'Scorpionissima', count: 7 },
                ],
                colors: [
                  { name: 'Violet', count: 3 },
                ],
                productionShare: 8.5,
              },
            ],
          },
        },
      },
    },
    Fiat: {
      '500e': {
        variants: {
          '500e 42 kWh La Prima': {
            generations: ['2020-'],
            results: [
              {
                providerId: 'uk-dvla-snapshot',
                total: 2844,
                trims: [
                  { name: 'La Prima', count: 987 },
                  { name: 'Icon', count: 1241 },
                  { name: 'Altro', count: 616 },
                ],
                colors: [
                  { name: 'Rose Gold', count: 731 },
                  { name: 'Black', count: 614 },
                  { name: 'White', count: 482 },
                ],
                productionShare: 37.7,
              },
              {
                providerId: 'it-aci-snapshot',
                total: 3627,
                trims: [
                  { name: 'La Prima', count: 1126 },
                  { name: 'Icon', count: 1698 },
                  { name: 'Altro', count: 803 },
                ],
                colors: [
                  { name: 'Nero', count: 857 },
                  { name: 'Bianco', count: 793 },
                  { name: 'Rose Gold', count: 631 },
                ],
                productionShare: 48.1,
              },
              {
                providerId: 'de-kba-snapshot',
                total: 717,
                trims: [
                  { name: 'La Prima', count: 271 },
                  { name: 'Altro', count: 446 },
                ],
                colors: [
                  { name: 'Schwarz', count: 187 },
                  { name: 'Weiß', count: 162 },
                ],
                productionShare: 9.5,
              },
              {
                providerId: 'fr-sdes-snapshot',
                total: 355,
                trims: [
                  { name: 'La Prima', count: 103 },
                  { name: 'Autres', count: 252 },
                ],
                colors: [
                  { name: 'Noir', count: 98 },
                  { name: 'Blanc', count: 75 },
                ],
                productionShare: 4.7,
              },
            ],
          },
        },
      },
    },
  },
};

const $ = (id) => document.getElementById(id);
const brandSelect = $('brandSelect');
const modelSelect = $('modelSelect');
const variantSelect = $('variantSelect');
const generationSelect = $('generationSelect');
const runSearchBtn = $('runSearchBtn');
const swapDemoBtn = $('swapDemoBtn');
const resultsGrid = $('resultsGrid');
const summarySection = $('summarySection');
const resultsSection = $('resultsSection');
const queryBadge = $('queryBadge');
const providerCount = $('providerCount');
const statusText = $('statusText');
const statusDot = $('statusDot');

providerCount.textContent = registry.providers.length;

function setStatus(text, active = false) {
  statusText.textContent = text;
  statusDot.classList.toggle('active', active);
}

function populateBrands() {
  Object.keys(registry.catalogue).sort().forEach((brand) => {
    brandSelect.add(new Option(brand, brand));
  });
}

function resetSelect(select, placeholder, disabled = true) {
  select.innerHTML = '';
  select.add(new Option(placeholder, ''));
  select.disabled = disabled;
}

function populateModels(brand) {
  resetSelect(modelSelect, brand ? 'Seleziona un modello' : 'Prima scegli la marca', !brand);
  resetSelect(variantSelect, 'Prima scegli il modello', true);
  resetSelect(generationSelect, 'Automatico', true);
  runSearchBtn.disabled = true;

  if (!brand) return;
  Object.keys(registry.catalogue[brand]).sort().forEach((model) => modelSelect.add(new Option(model, model)));
}

function populateVariants(brand, model) {
  resetSelect(variantSelect, model ? 'Seleziona una versione' : 'Prima scegli il modello', !model);
  resetSelect(generationSelect, 'Automatico', true);
  runSearchBtn.disabled = true;

  if (!brand || !model) return;
  const variants = Object.keys(registry.catalogue[brand][model].variants).sort();
  variants.forEach((variant) => variantSelect.add(new Option(variant, variant)));
}

function populateGenerations(brand, model, variant) {
  resetSelect(generationSelect, 'Automatico', false);
  generationSelect.add(new Option('Automatico', ''));
  if (!brand || !model || !variant) {
    generationSelect.disabled = true;
    runSearchBtn.disabled = true;
    return;
  }
  const generations = registry.catalogue[brand][model].variants[variant].generations || [];
  generations.forEach((g) => generationSelect.add(new Option(g, g)));
  generationSelect.disabled = false;
  runSearchBtn.disabled = false;
}

function formatNumber(num) {
  return new Intl.NumberFormat('it-IT').format(num);
}

function collectSummary(results) {
  const total = results.reduce((sum, item) => sum + item.total, 0);
  const byCountry = new Map();
  const trims = new Map();
  const colors = new Map();

  results.forEach((item) => {
    const provider = registry.providers.find((p) => p.id === item.providerId);
    byCountry.set(provider.country, (byCountry.get(provider.country) || 0) + item.total);
    item.trims.forEach((trim) => trims.set(trim.name, (trims.get(trim.name) || 0) + trim.count));
    item.colors.forEach((color) => colors.set(color.name, (colors.get(color.name) || 0) + color.count));
  });

  const topCountryEntry = [...byCountry.entries()].sort((a, b) => b[1] - a[1])[0] || ['—', 0];
  const topTrimEntry = [...trims.entries()].sort((a, b) => b[1] - a[1])[0] || ['—', 0];
  const topColorEntry = [...colors.entries()].sort((a, b) => b[1] - a[1])[0] || ['—', 0];

  $('totalCount').textContent = formatNumber(total);
  $('topCountry').textContent = topCountryEntry[0];
  $('topCountryMeta').textContent = `${formatNumber(topCountryEntry[1])} unità`;
  $('trimCount').textContent = formatNumber(trims.size);
  $('topTrim').textContent = `${topTrimEntry[0]} · ${formatNumber(topTrimEntry[1])}`;
  $('colorCount').textContent = formatNumber(colors.size);
  $('topColor').textContent = `${topColorEntry[0]} · ${formatNumber(topColorEntry[1])}`;

  summarySection.classList.remove('hidden');
}

function chipList(items, suffix = '') {
  return items.map((item) => `<span class="chip">${item.name} <small>${formatNumber(item.count)}${suffix}</small></span>`).join('');
}

function renderResults(brand, model, variant) {
  const entry = registry.catalogue[brand][model].variants[variant];
  const results = entry.results;
  const total = results.reduce((sum, item) => sum + item.total, 0);

  resultsGrid.innerHTML = '';

  results
    .slice()
    .sort((a, b) => b.total - a.total)
    .forEach((item) => {
      const provider = registry.providers.find((p) => p.id === item.providerId);
      const share = total ? ((item.total / total) * 100).toFixed(1) : '0.0';
      const topTrim = item.trims[0]?.name || 'n/d';
      const topColor = item.colors[0]?.name || 'n/d';

      const card = document.createElement('article');
      card.className = 'result-card';
      card.innerHTML = `
        <header>
          <div class="provider-meta">
            <h3>${provider.country}</h3>
            <p>${provider.dataset} · ${provider.coverage}</p>
          </div>
          <div class="big-number">
            <strong>${formatNumber(item.total)}</strong>
            <span>${share}% del totale</span>
          </div>
        </header>
        <div class="stat-row">
          <div class="mini-stat">
            <span>Allestimento top</span>
            <strong>${topTrim}</strong>
          </div>
          <div class="mini-stat">
            <span>Colore top</span>
            <strong>${topColor}</strong>
          </div>
          <div class="mini-stat">
            <span>Quota fonte</span>
            <strong>${item.productionShare}%</strong>
          </div>
        </div>
        <div class="bar-wrap">
          <div class="meta-line">Peso del database selezionato</div>
          <div class="bar-track"><div class="bar-fill" style="width:${share}%"></div></div>
        </div>
        <div class="chip-row">
          ${chipList(item.trims)}
        </div>
        <div class="chip-row">
          ${chipList(item.colors)}
        </div>
      `;
      resultsGrid.appendChild(card);
    });

  queryBadge.textContent = `${brand} · ${model} · ${variant}`;
  resultsSection.classList.remove('hidden');
  collectSummary(results);
  setStatus(`Ricerca completata: ${results.length} database consultati`, true);
}

function runSearch() {
  const brand = brandSelect.value;
  const model = modelSelect.value;
  const variant = variantSelect.value;

  if (!brand || !model || !variant) {
    setStatus('Seleziona marca, modello e versione', false);
    return;
  }

  setStatus('Ricerca federata in corso...', true);
  summarySection.classList.add('hidden');
  resultsSection.classList.add('hidden');
  resultsGrid.innerHTML = '';

  window.setTimeout(() => renderResults(brand, model, variant), 450);
}

brandSelect.addEventListener('change', () => {
  populateModels(brandSelect.value);
  setStatus(brandSelect.value ? 'Marca selezionata, scegli il modello' : 'In attesa di selezione');
});

modelSelect.addEventListener('change', () => {
  populateVariants(brandSelect.value, modelSelect.value);
  setStatus(modelSelect.value ? 'Modello selezionato, scegli la versione' : 'Scegli il modello');
});

variantSelect.addEventListener('change', () => {
  populateGenerations(brandSelect.value, modelSelect.value, variantSelect.value);
  if (variantSelect.value) {
    setStatus('Versione selezionata, avvio ricerca automatica...', true);
    runSearch();
  }
});

generationSelect.addEventListener('change', () => {
  if (variantSelect.value) runSearch();
});

runSearchBtn.addEventListener('click', runSearch);

swapDemoBtn.addEventListener('click', () => {
  brandSelect.value = 'Abarth';
  populateModels('Abarth');
  modelSelect.value = '600e';
  populateVariants('Abarth', '600e');
  variantSelect.value = '600e Turismo';
  populateGenerations('Abarth', '600e', '600e Turismo');
  runSearch();
});

populateBrands();
setStatus('In attesa di selezione');
