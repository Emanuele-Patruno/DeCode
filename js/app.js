'use strict';

/* ═══════════════════════════════════════════════════════════
   DIZIONARIO TRADUZIONI (EN → IT)
═══════════════════════════════════════════════════════════ */
const IT = {
  gender: { women: 'Donna', men: 'Uomo', unisex: 'Unisex', 'for women': 'Donna', 'for men': 'Uomo', 'for women and men': 'Unisex' },
  country: { france: 'Francia', italy: 'Italia', 'united states': 'Stati Uniti', usa: 'USA', uk: 'Regno Unito', 'united kingdom': 'Regno Unito', germany: 'Germania', spain: 'Spagna', switzerland: 'Svizzera', netherlands: 'Paesi Bassi', russia: 'Russia', japan: 'Giappone', 'saudi arabia': 'Arabia Saudita', uae: 'Emirati Arabi', 'united arab emirates': 'Emirati Arabi', poland: 'Polonia', belgium: 'Belgio', canada: 'Canada', australia: 'Australia', brazil: 'Brasile', 'south korea': 'Corea del Sud', sweden: 'Svezia', denmark: 'Danimarca', norway: 'Norvegia', portugal: 'Portogallo', greece: 'Grecia', turkey: 'Turchia', egypt: 'Egitto', china: 'Cina', india: 'India', mexico: 'Messico', argentina: 'Argentina', austria: 'Austria', ireland: 'Irlanda', czech: 'Repubblica Ceca', hungary: 'Ungheria', lebanon: 'Libano' },
  accords: { floral: 'floreale', woody: 'legnoso', amber: 'ambrato', citrus: 'agrumato', musky: 'muschiato', sweet: 'dolce', fresh: 'fresco', aromatic: 'aromatico', spicy: 'speziato', 'warm spicy': 'speziato caldo', 'fresh spicy': 'speziato fresco', 'soft spicy': 'speziato morbido', powdery: 'polveroso', vanilla: 'vanigliato', fruity: 'fruttato', green: 'verde', earthy: 'terroso', animalic: 'animalico', aquatic: 'acquatico', 'white floral': 'floreale bianco', rose: 'rosa', lavender: 'lavanda', tropical: 'tropicale', nutty: 'frutta secca', mossy: 'muschiato', soapy: 'saponoso', balsamic: 'balsamico', dry: 'secco', smoky: 'affumicato', herbal: 'erbaceo', watery: 'acquoso', oriental: 'orientale', gourmand: 'gourmand', leather: 'cuoio', tobacco: 'tabacco', resinous: 'resinoso', ozonic: 'ozonico', marine: 'marino', coniferous: 'resinoso', creamy: 'cremoso', cinnamon: 'cannella', caramel: 'caramello', chocolate: 'cioccolato', coffee: 'caffè', almond: 'mandorla', honey: 'miele', iris: 'iris', patchouli: 'patchouli', oud: 'oud', musk: 'muschio', aldehydic: 'aldeidico', 'citrus aromatic': 'agrumato aromatico', 'floral fruity': 'floreale fruttato', 'floral woody musk': 'floreale legnoso muschiato', powdery: 'polveroso', woody: 'legnoso', 'soft floral': 'floreale morbido', 'floral aldehyde': 'floreale aldeidico', 'chypre': 'chypre', 'fougere': 'fougère', 'fougère': 'fougère' },
  notes: {
    // Agrumi
    'bergamot': 'bergamotto', 'calabrian bergamot': 'bergamotto calabrese', 'sicilian bergamot': 'bergamotto siciliano',
    'lemon': 'limone', 'amalfi lemon': 'limone di Amalfi', 'candied lemon': 'limone candito', 'lemon tree': 'albero di limone', 'sicilian lemon': 'limone siciliano',
    'orange': 'arancia', 'bitter orange': 'arancia amara', 'blood orange': 'arancia rossa', 'sicilian orange': 'arancia siciliana',
    'grapefruit': 'pompelmo', 'blood grapefruit': 'pompelmo rosso', 'pink grapefruit': 'pompelmo rosa',
    'mandarin orange': 'mandarino', 'mandarin': 'mandarino', 'italian mandarin': 'mandarino italiano', 'sicilian mandarin': 'mandarino siciliano', 'green mandarin': 'mandarino verde', 'tangerine': 'tangerina',
    'lime': 'lime', 'citron': 'cedro', 'citruses': 'agrumi', 'yuzu': 'yuzu',
    // Pepe & spezie
    'pink pepper': 'pepe rosa', 'black pepper': 'pepe nero', 'white pepper': 'pepe bianco', 'pepper': 'pepe', 'sichuan pepper': 'pepe del Sichuan', 'pimento': 'pimento',
    'cardamom': 'cardamomo', 'cardamon': 'cardamomo', 'guatemalan cardamom': 'cardamomo guatemalteco',
    'coriander': 'coriandolo', 'nutmeg': 'noce moscata', 'nutmeg flower': 'fiore di noce moscata', 'ginger': 'zenzero', 'ginger flower': 'fiore di zenzero',
    'cinnamon': 'cannella', 'cassia': 'cassia', 'clove': 'chiodo di garofano', 'cloves': 'chiodi di garofano',
    'saffron': 'zafferano', 'cumin': 'cumino', 'caraway': 'cumino dei prati', 'star anise': 'anice stellato', 'anise': 'anice',
    'thyme': 'timo', 'oregano': 'origano', 'tarragon': 'dragoncello', 'mace': 'macis', 'turmeric': 'curcuma',
    // Erbacee & verdi
    'basil': 'basilico', 'mint': 'menta', 'rosemary': 'rosmarino', 'sage': 'salvia', 'clary sage': 'salvia sclarea',
    'artemisia': 'artemisia', 'verbena': 'verbena', 'lemon verbena': 'verbena limone', 'lemongrass': 'citronella',
    'bay leaf': 'foglia di alloro', 'laurels': 'alloro', 'green notes': 'note verdi', 'green leaves': 'foglie verdi', 'green accord': 'accordo verde',
    'grass': 'erba', 'bamboo': 'bambù', 'ivy': 'edera', 'tomato leaf': 'foglia di pomodoro', 'violet leaf': 'foglia di violetta', 'violet leaves': 'foglie di violetta',
    'apple leaf': 'foglia di melo', 'birch leaf': 'foglia di betulla', 'cypress leaf': 'foglia di cipresso',
    'galbanum': 'gàlbano', 'elemi': 'elemi', 'angelica': 'angelica',
    // Frutta
    'apple': 'mela', 'green apple': 'mela verde', 'red apple': 'mela rossa', 'candy apple': 'mela caramellata',
    'pear': 'pera', 'pear blossom': 'fiore di pero', 'white pear': 'pera bianca',
    'peach': 'pesca', 'peach blossom': 'fiore di pesco', 'white peach': 'pesca bianca', 'nectarine': 'nettarina',
    'apricot': 'albicocca', 'apricot blossom': 'fiore di albicocco', 'mirabelle': 'mirabella',
    'raspberry': 'lampone', 'strawberry': 'fragola', 'big strawberry': 'fragola', 'blackberry': 'mora', 'cranberry': 'mirtillo rosso',
    'cherry': 'ciliegia', 'cherry blossom': 'fiore di ciliegio', 'sour cherry': 'amarena',
    'plum': 'prugna', 'quince': 'cotogna', 'fig': 'fico', 'fig nectar': 'nettare di fico',
    'melon': 'melone', 'watermelon': 'anguria', 'pineapple': 'ananas', 'mango': 'mango', 'guava': 'guava',
    'lychee': 'litchi', 'litchi': 'litchi', 'red litchi': 'litchi rosso', 'kiwi': 'kiwi', 'papaya': 'papaia',
    'banana': 'banana', 'coconut': 'cocco', 'coconut milk': 'latte di cocco',
    'passion fruit': 'frutto della passione', 'passionfruit': 'frutto della passione', 'tropical fruit': 'frutto tropicale',
    'red fruits': 'frutti rossi', 'red berries': 'bacche rosse', 'dried fruits': 'frutta secca', 'fruits': 'frutta',
    'fruity notes': 'note fruttate', 'cassis': 'cassis', 'black currant': 'ribes nero', 'red currant': 'ribes rosso',
    'pomegranate': 'melograno', 'tamarind': 'tamarindo', 'persimmon': 'cachi', 'rhubarb': 'rabarbaro', 'rhuburb': 'rabarbaro',
    'chestnut': 'castagna', 'walnut': 'noce', 'pistachio': 'pistacchio',
    // Floreale
    'rose': 'rosa', 'bulgarian rose': 'rosa bulgara', 'turkish rose': 'rosa turca', 'may rose': 'rosa di maggio',
    'grasse rose': 'rosa di Grasse', 'damask rose': 'rosa di Damasco', 'moroccan rose': 'rosa marocchina',
    'white rose': 'rosa bianca', 'tincture of rose': 'tintura di rosa', 'rose hip': 'rosa canina',
    'jasmine': 'gelsomino', 'egyptian jasmine': 'gelsomino egiziano', 'indian jasmine': 'gelsomino indiano',
    'jasmine sambac': 'gelsomino sambac', 'chinese jasmine': 'gelsomino cinese', 'moroccan jasmine': 'gelsomino marocchino',
    'water jasmine': 'gelsomino acquatico', 'jasmine tea': 'tè al gelsomino',
    'iris': 'iris', 'white iris': 'iris bianco', 'orris': 'iris', 'orris root': 'radice di iris', 'violet root': 'radice di violetta',
    'violet': 'violetta', 'parma violet': 'viola di Parma', 'black violet': 'violetta nera', 'red cyclamen': 'ciclamino rosso',
    'lily': 'giglio', 'lily-of-the-valley': 'mughetto', 'lily of the valley': 'mughetto', 'muguet': 'mughetto',
    'casablanca lily': 'giglio Casablanca', 'pink lily': 'giglio rosa', 'water lily': 'ninfea', 'yellow water lily': 'ninfea gialla',
    'peony': 'peonia', 'tuberose': 'tuberosa', 'indian tuberose': 'tuberosa indiana', 'ylang-ylang': 'ylang-ylang',
    'magnolia': 'magnolia', 'geranium': 'geranio', 'bourbon geranium': 'geranio bourbon', 'pelargonium': 'pelargonio',
    'lavender': 'lavanda', 'wild lavender': 'lavanda selvatica',
    'orange blossom': 'fiore d\'arancio', 'tunisian orange blossom': 'fiore d\'arancio tunisino', 'neroli': 'neroli', 'neroli essence': 'essenza di neroli',
    'freesia': 'fresia', 'yellow freesia': 'fresia gialla', 'mimosa': 'mimosa', 'heliotrope': 'eliotropio',
    'cyclamen': 'ciclamino', 'carnation': 'garofano', 'marigold': 'calendula', 'tagetes': 'tagete',
    'hibiscus': 'ibisco', 'honeysuckle': 'caprifoglio', 'hyacinth': 'giacinto', 'hiacynth': 'giacinto', 'blue hyacinth': 'giacinto blu', 'water hyacinth': 'giacinto d\'acqua',
    'heather': 'erica', 'sweet pea': 'pisello odoroso', 'lilac': 'lillà', 'syringa': 'siringa',
    'mimosa': 'mimosa', 'bellflower': 'campanula', 'amaryllis': 'amaryllis',
    'chrysanthemum': 'crisantemo', 'lotus': 'loto', 'frangipani': 'frangipane',
    'stephanotis': 'stefanote', 'boronia': 'boronia', 'champaca': 'champaca', 'datura': 'datura',
    'orchid': 'orchidea', 'black orchid': 'orchidea nera', 'butterfly orchid': 'orchidea farfalla', 'vanilla orchid': 'orchidea vaniglia',
    'floral notes': 'note floreali', 'white flowers': 'fiori bianchi', 'flowers': 'fiori',
    'african orange flower': 'fiore d\'arancio africano', 'papaya flower': 'fiore di papaia',
    'tobacco blossom': 'fiore di tabacco', 'olive blossom': 'fiore d\'ulivo', 'almond blossom': 'fiore di mandorlo',
    'rangoon creeper': 'rangoon creeper', 'silkwood blossom': 'fiore di seta', 'ginger flower': 'fiore di zenzero',
    'tahitian tiare flower': 'fiore di tiaré tahitiano',
    // Legni & muschi
    'sandalwood': 'sandalo', 'australian sandalwood': 'sandalo australiano', 'sandalowood': 'sandalo',
    'cedar': 'cedro', 'cedarwood': 'cedro', 'atlas cedar': 'cedro dell\'Atlante', 'himalayan cedar': 'cedro himalayano',
    'red cedar': 'cedro rosso', 'virginia cedar': 'cedro della Virginia', 'virginian cedar': 'cedro della Virginia',
    'white cedar extract': 'estratto di cedro bianco',
    'patchouli': 'patchouli', 'indonesian patchouli leaf': 'patchouli indonesiano',
    'vetiver': 'vetiver', 'haitian vetiver': 'vetiver haitiano', 'madagascar vetiver': 'vetiver del Madagascar', 'tahitian vetiver': 'vetiver tahitiano', 'vetyver': 'vetiver',
    'guaiac wood': 'legno di guaiaco', 'agarwood': 'legno d\'agar', 'agarwood (oud)': 'oud', 'oud': 'oud',
    'cashmere wood': 'legno di cashmere', 'cashmirwood': 'legno di cashmere', 'cashmeran': 'cashmeran',
    'amberwood': 'legno ambrato', 'teak wood': 'legno di teak', 'massoia wood': 'legno di massoia',
    'mahogany': 'mogano', 'palo santo': 'palo santo', 'sequoia': 'sequoia', 'birch': 'betulla',
    'hinoki': 'hinoki', 'palisander rosewood': 'palissandro', 'brazilian rosewood': 'palissandro brasiliano',
    'guaiac wood': 'legno di guaiaco', 'precious woods': 'legni pregiati', 'woody notes': 'note legnose',
    'woodsy notes': 'note boschive', 'white woods': 'legni bianchi', 'warm woods': 'legni caldi',
    'oakmoss': 'muschio di quercia', 'oak moss': 'muschio di quercia', 'moss': 'muschio', 'fern': 'felce',
    'musk': 'muschio', 'white musk': 'muschio bianco', 'musky': 'muschiato', 'musks': 'muschi',
    // Resine & balsami
    'amber': 'ambra', 'ambre': 'ambra', 'crystal amber': 'ambra cristallo', 'white amber': 'ambra bianca',
    'ambergris': 'ambra grigia', 'labdanum': 'labdano', 'french labdanum': 'labdano francese',
    'benzoin': 'benzoino', 'styrax': 'storace', 'olibanum': 'olibano', 'frankincense': 'olibano',
    'myrrh': 'mirra', 'myrhh': 'mirra', 'opoponax': 'opoponace', 'incense': 'incenso',
    'resin': 'resina', 'resins': 'resine', 'fir resin': 'resina d\'abete', 'balsam fir': 'abete balsamico',
    'tolu balsam': 'balsamo del Tolù', 'peru balsam': 'balsamo del Perù', 'mastic or lentisque': 'mastice',
    'coumarin': 'cumarina', 'labdanum': 'labdano', 'immortelle': 'elicriso',
    // Legno & note boschive
    'smoke': 'fumo', 'hay': 'fieno', 'costus': 'costo', 'davana': 'davana', 'galbanum': 'gàlbano',
    'oakmoss': 'muschio di quercia', 'suede': 'camoscio',
    // Note marine & acquatiche
    'sea notes': 'note marine', 'sea water': 'acqua di mare', 'sea salt': 'sale marino', 'salt': 'sale',
    'seawater': 'acqua di mare', 'seaweed': 'alga marina', 'red algae': 'alga rossa', 'calone': 'calone',
    'ozonic notes': 'note ozoniche', 'water notes': 'note acquose', 'aquatic notes': 'note acquatiche',
    'solar notes': 'note solari', 'dew drop': 'rugiada', 'sand': 'sabbia', 'flint': 'selce',
    // Tè & tabacco
    'tea': 'tè', 'green tea': 'tè verde', 'black tea': 'tè nero', 'white tea': 'tè bianco',
    'buckwheat tea': 'tè al grano saraceno', 'jasmine tea': 'tè al gelsomino', 'mate': 'maté',
    'tobacco': 'tabacco', 'tobacco leaf': 'foglia di tabacco',
    // Gourmand
    'vanilla': 'vaniglia', 'madagascar vanilla': 'vaniglia del Madagascar', 'tahitian vanilla': 'vaniglia tahitiana',
    'bourbon vanilla': 'vaniglia bourbon', 'vanilla absolute': 'assoluta di vaniglia', 'vanilla sugar': 'zucchero vanigliato',
    'vanilla caviar': 'caviale di vaniglia', 'vanila': 'vaniglia', 'vanille': 'vaniglia',
    'tonka bean': 'fava tonka', 'tonka': 'fava tonka',
    'caramel': 'caramello', 'chocolate': 'cioccolato', 'white chocolate': 'cioccolato bianco',
    'mexican chocolate': 'cioccolato messicano', 'cacao': 'cacao', 'cacao pod': 'baccello di cacao',
    'coffee': 'caffè', 'honey': 'miele', 'white honey': 'miele bianco', 'beeswax': 'cera d\'api',
    'almond': 'mandorla', 'bitter almond': 'mandorla amara', 'almond milk': 'latte di mandorla',
    'hazelnut': 'nocciola', 'praline': 'pralinato', 'sugar': 'zucchero', 'sugar cane': 'canna da zucchero',
    'brown sugar': 'zucchero di canna', 'calypsone': 'calypsone', 'cotton candy': 'zucchero filato',
    'marshmallow': 'marshmallow', 'cream': 'crema', 'whipped cream': 'panna montata',
    'milk': 'latte', 'butter': 'burro', 'panacotta': 'panna cotta', 'meringue': 'meringa',
    'cupcake': 'cupcake', 'ice cream': 'gelato', 'dulce de leche': 'dulce de leche',
    'licorice': 'liquirizia', 'truffle': 'tartufo',
    // Aldeidi & molecole
    'aldehydes': 'aldeidi', 'aldehyde': 'aldeide', 'ambroxan': 'ambroxan', 'ambrofix': 'ambrofix',
    'iso e super': 'iso e super', 'hedione': 'hedione', 'akigalawood': 'akigalawood',
    'ambrette (musk mallow)': 'ambretto', 'ethyl maltol': 'etil maltolo', 'benzyl benzoate': 'benzoato di benzile',
    // Legno & fibre sintetiche
    'petitgrain': 'petitgrain', 'galbanum': 'gàlbano',
    // Animali
    'civet': 'zibetto', 'castoreum': 'castoreo', 'leather': 'cuoio',
    // Alberi & conifere
    'pine': 'pino', 'pine tree needles': 'aghi di pino', 'fir': 'abete', 'cypress': 'cipresso',
    'juniper': 'ginepro', 'juniper berries': 'bacche di ginepro', 'eucalyptus': 'eucalipto',
    'olive tree': 'olivo', 'myrtle': 'mirto', 'pitosporum': 'pittosporo',
    // Altro
    'petitgrain': 'petitgrain', 'osmanthus': 'osmanto', 'japanese osmanthus': 'osmanto giapponese',
    'champaca': 'champaca', 'papyrus': 'papiro', 'heather': 'erica', 'hay': 'fieno',
    'nail polish': 'smalto per unghie', 'rum': 'rum', 'cognac': 'cognac', 'liquor': 'liquore',
    'campari': 'campari', 'coca-cola': 'coca-cola', 'cannabis': 'cannabis',
    'spices': 'spezie', 'spicy notes': 'note speziate', 'powdery notes': 'note polverose',
    'unknown': ''
  }
};

function toggleGender(btn) {
  const g = btn.dataset.gender;
  if (state.activeGender === g) {
    state.activeGender = null;
    document.querySelectorAll('[data-gender]').forEach(c => c.classList.remove('active'));
  } else {
    state.activeGender = g;
    document.querySelectorAll('[data-gender]').forEach(c => c.classList.toggle('active', c.dataset.gender === g));
  }
  applyFilters();
}

function translateNotes(str) {
  if (!str) return str;
  return str.split(',').map(part => {
    const key = part.trim().toLowerCase();
    return IT.notes[key] || part.trim();
  }).join(', ');
}

function translateAccord(a) {
  return IT.accords[a?.toLowerCase()] || a;
}

function translateGender(g) {
  return IT.gender[g?.toLowerCase()] || g;
}

function translateCountry(c) {
  return IT.country[c?.toLowerCase()] || c;
}

/* ═══════════════════════════════════════════════════════════
   CONFIG
═══════════════════════════════════════════════════════════ */
const SHEET_ID   = '1HKTQUgQRYUqt7_6NifAjv20hC7uTDuDjLoQzNEqTtY0';
const SHEET_URL  = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/export?format=csv&gid=0`;
const CACHE_KEY     = 'dupescent_data_v6';
const CACHE_TS_KEY  = 'dupescent_ts_v6';

const CACHE_TTL_MS  = 60 * 60 * 1000; // 1 hour
const FAV_KEY       = 'dupescent_favs_v1';
const THEME_KEY     = 'dupescent_theme_v1';
const SKELETON_N    = 8;

/* Section icons */
const SECTION_ICON = {
  'main':             '🌸',
  'les-secrets':      '🔮',
  'senteurs-orient':  '🌙',
};

const SECTION_LABEL = {
  'main':             'Classici',
  'les-secrets':      'Les Secrets',
  'senteurs-orient':  "Senteurs d'Orient",
};

/* ═══════════════════════════════════════════════════════════
   STATE
═══════════════════════════════════════════════════════════ */
let state = {
  allPerfumes:     [],   // full parsed data
  filtered:        [],   // after section/alpha/production filter
  displayed:       [],   // after search
  activeSection:   'all',
  activeBrand:     null,
  activeGender:    null,   // null | 'women' | 'men' | 'unisex'
  activeAccord:    null,   // null | string
  searchQuery:     '',
  sortMode:        'eq',
  favorites:       new Set(),
  currentDetail:   null,
  fuse:            null,
};

/* ═══════════════════════════════════════════════════════════
   DOM REFS
═══════════════════════════════════════════════════════════ */
const $ = id => document.getElementById(id);
const el = {
  searchInput:  $('searchInput'),
  searchClear:  $('searchClear'),
  statsText:    $('statsText'),
  sortBtn:      $('sortBtn'),
  sortLabel:    $('sortLabel'),
  brandSelect:  $('brandSelect'),
  skeletonList: $('skeletonList'),
  perfumeGrid:  $('perfumeGrid'),
  emptyState:   $('emptyState'),
  errorState:   $('errorState'),
  clearSearchBtn: $('clearSearchBtn'),
  retryBtn:     $('retryBtn'),
  backTop:      $('backTop'),
  detailOverlay:$('detailOverlay'),
  detailSheet:  $('detailSheet'),
  detailClose:  $('detailClose'),
  detailBody:   $('detailBody'),
  detailFavBtn: $('detailFavBtn'),
  favBtn:       $('favBtn'),
  favBadge:     $('favBadge'),
  favOverlay:   $('favOverlay'),
  favSheet:     $('favSheet'),
  favClose:     $('favClose'),
  favClearBtn:  $('favClearBtn'),
  favBody:      $('favBody'),
  toast:        $('toast'),
  themeBtn:     $('themeBtn'),
  logoBtn:      $('logoBtn'),
};

/* ═══════════════════════════════════════════════════════════
   THEME
═══════════════════════════════════════════════════════════ */
function initTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = saved || (prefersDark ? 'dark' : 'light');
  applyTheme(theme);
}
function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem(THEME_KEY, theme);
}
function toggleTheme() {
  const current = document.documentElement.dataset.theme;
  applyTheme(current === 'dark' ? 'light' : 'dark');
}

/* ═══════════════════════════════════════════════════════════
   FRAGRANTICA HELPERS
═══════════════════════════════════════════════════════════ */

// Extract numeric ID from Fragrantica URL → CDN image URL
// e.g. https://www.fragrantica.com/perfume/Dior/Sauvage-42344.html → 42344
function fragranticaImageUrl(url) {
  if (!url) return null;
  const m = url.match(/-(\d+)\.html/);
  return m ? `https://fimgs.net/mdimg/perfume/375x500.${m[1]}.jpg` : null;
}

// Build a Fragrantica search URL from name + brand (fallback)
function fragranticaSearchUrl(name, brand) {
  const q = [name, brand].filter(Boolean).join(' ');
  return `https://www.fragrantica.com/search/?query=${encodeURIComponent(q)}`;
}

// Try to load the pre-extracted link map (generated by tools/extract-links.js)
async function loadLocalLinkMap() {
  try {
    const res = await fetch('data/fragrantica-links.json');
    if (res.ok) return await res.json();
  } catch (_) {}
  return null;
}

async function loadEnrichment() {
  try {
    const res = await fetch('data/fragrantica-enrichment.json');
    if (res.ok) return await res.json();
  } catch (_) {}
  return null;
}

// ── Wikipedia image lookup (fallback when no local link map) ─────
// Uses the generator=search approach: searches Wikipedia and returns
// thumbnails for the top matching pages in a single request.
// Much more reliable than exact-title lookups.

const _wikiCache = {};   // { "Name|Brand": url | null }  (in-memory per session)

async function fetchWikipediaImage(name, brand) {
  const key = `${name}|${brand}`;
  if (key in _wikiCache) return _wikiCache[key];

  // Step 1: search Wikipedia and return pages with thumbnails.
  // We add "fragrance" / "parfum" to bias results toward perfume articles
  // rather than brand pages (which would return logos instead of bottles).
  const queries = [
    `${name} ${brand} fragrance`,
    `${name} fragrance`,
    `${name} ${brand} perfume`,
    `${name} perfume`,
  ];

  for (const q of queries) {
    const url = 'https://en.wikipedia.org/w/api.php?' + new URLSearchParams({
      action:       'query',
      generator:    'search',
      gsrsearch:    q,
      gsrnamespace: '0',
      gsrlimit:     '5',
      prop:         'pageimages|info',
      pithumbsize:  '500',
      inprop:       'url',
      format:       'json',
      origin:       '*',
    });
    try {
      const res   = await fetch(url);
      const data  = await res.json();
      const pages = Object.values(data?.query?.pages || {});

      // Prefer pages whose title contains the perfume name (skip brand-only pages)
      const nameLower = name.toLowerCase();
      const scored = pages
        .filter(p => p.thumbnail?.source)
        .map(p => ({
          ...p,
          score: p.title.toLowerCase().includes(nameLower) ? 1 : 0,
        }))
        .sort((a, b) => b.score - a.score);

      if (scored.length) {
        // Skip SVG thumbnails (usually logos/icons, not photos)
        const hit = scored.find(p => !p.thumbnail.source.endsWith('.svg'));
        const src = (hit || scored[0]).thumbnail.source;
        _wikiCache[key] = src;
        return src;
      }
    } catch (_) { /* try next query */ }
  }

  _wikiCache[key] = null;
  return null;
}

/* ═══════════════════════════════════════════════════════════
   CSV PARSING
═══════════════════════════════════════════════════════════ */
function parseCSV(text) {
  // Split into lines, handle \r\n and \n
  const lines = text.split(/\r?\n/).filter(l => l.trim());
  const perfumes = [];
  let currentSection = 'main';
  let idCounter = 0;

  for (let i = 1; i < lines.length; i++) {  // skip header row
    const cols = splitCSVLine(lines[i]);
    if (cols.length < 2) continue;

    const col0 = cols[0].trim();
    const col1 = cols[1].trim();
    const col2 = (cols[2] || '').trim();

    // Detect section headers
    if (col0 === 'LES SECRETS' || col0.startsWith('LES SECRETS')) {
      currentSection = 'les-secrets';
      continue;
    }
    if (col0.includes("D'ORIENT") || col0.includes('SENTEURS')) {
      currentSection = 'senteurs-orient';
      continue;
    }

    // Skip empty rows
    if (!col0 && !col1) continue;
    if (!col1) continue;

    // Parse production status:
    // "X" is used inconsistently — treat anything non-empty as "has status"
    // ✓ (U+2713) appears as garbled bytes; col2 truthy = some status indicated
    const inProduction = col2.trim() !== '';
    const isActive = col2.trim() === 'X' ? false : inProduction;
    // Note: Most entries with "✓" are available; "X" means discontinued

    // Parse name & brand from REFERENZA column
    const { name, brand } = parseReferenza(col1);

    // Parse code & family from NUMERO column
    const { code, family } = parseCode(col0);

    if (!name) continue;

    // Handle dual referenza: "Zeta - Morph / Baccarat Rouge 540 - Maison Francis Kurkdjian"
    const altRef = col1.includes('/') ? col1.split('/').slice(1).join('/').trim() : '';
    const { name: altName, brand: altBrand } = altRef ? parseReferenza(altRef) : { name: '', brand: '' };

    perfumes.push({
      id:          idCounter++,
      rawCode:     col0,
      code:        code,
      family:      family,
      section:     currentSection,
      referenza:   col1,
      name:        name,
      brand:       brand,
      altName:     altName,
      altBrand:    altBrand,
      inProduction: isActive,
      searchText:  `${name} ${brand} ${altName} ${altBrand} ${code} ${family || ''} ${col1}`.toLowerCase(),
    });
  }

  return perfumes;
}

function splitCSVLine(line) {
  const result = [];
  let current = '';
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (ch === '"') {
      if (inQuotes && line[i + 1] === '"') { current += '"'; i++; }
      else inQuotes = !inQuotes;
    } else if (ch === ',' && !inQuotes) {
      result.push(current); current = '';
    } else {
      current += ch;
    }
  }
  result.push(current);
  return result;
}

function parseReferenza(ref) {
  // Format: "Name - Brand" or "Name - Brand / Name2 - Brand2"
  // Take only the first part if there's a "/"
  const part = ref.split('/')[0].trim();
  const dashIdx = part.lastIndexOf(' - ');
  if (dashIdx !== -1) {
    return {
      name:  part.substring(0, dashIdx).trim(),
      brand: part.substring(dashIdx + 3).trim(),
    };
  }
  // Try a simple dash (e.g., "Shalimar Eau de Parfum Guerlain")
  const simDash = part.indexOf(' - ');
  if (simDash !== -1) {
    return { name: part.substring(0, simDash).trim(), brand: part.substring(simDash + 3).trim() };
  }
  // No brand separator found — whole thing is the name
  return { name: part, brand: '' };
}

function parseCode(rawCode) {
  // Examples: "001", "283 OUD", "383 CUIR", "484 FLEUR D'ORANGER", "709 ÉTHÉRÉ"
  // Could also be empty or just a section label
  const match = rawCode.match(/^(\d+)\s*(.*)$/);
  if (match) {
    return { code: match[1], family: match[2].trim() || null };
  }
  return { code: rawCode, family: null };
}

/* ═══════════════════════════════════════════════════════════
   DATA FETCHING
═══════════════════════════════════════════════════════════ */
async function fetchData(forceRefresh = false) {
  // Serve from cache if fresh
  if (!forceRefresh) {
    const cached = localStorage.getItem(CACHE_KEY);
    const ts     = parseInt(localStorage.getItem(CACHE_TS_KEY) || '0', 10);
    if (cached && (Date.now() - ts < CACHE_TTL_MS)) {
      try { return JSON.parse(cached); } catch (_) {}
    }
  }

  // Fetch CSV + link map + enrichment in parallel
  const [csvResp, linkMap, enrichment] = await Promise.all([
    fetch(SHEET_URL),
    loadLocalLinkMap(),
    loadEnrichment(),
  ]);
  if (!csvResp.ok) throw new Error(`HTTP ${csvResp.status}`);

  const csvText = new TextDecoder('utf-8').decode(await csvResp.arrayBuffer());
  const perfumes = parseCSV(csvText);

  for (const p of perfumes) {
    const exactUrl = linkMap?.[p.rawCode];
    if (exactUrl) {
      p.fragranticaUrl = exactUrl;
      p.imageUrl       = fragranticaImageUrl(exactUrl);
    } else {
      p.fragranticaUrl = fragranticaSearchUrl(p.name, p.brand);
      p.imageUrl       = null;
    }
    if (enrichment?.[p.rawCode]) {
      Object.assign(p, { fra: enrichment[p.rawCode] });
      const fra = enrichment[p.rawCode];
      p.notesIT = [fra.top, fra.middle, fra.base]
        .filter(Boolean)
        .map(translateNotes)
        .join(', ');
      p.accordsIT = (fra.accords || []).map(translateAccord).join(', ');
    }
  }

  localStorage.setItem(CACHE_KEY, JSON.stringify(perfumes));
  localStorage.setItem(CACHE_TS_KEY, String(Date.now()));
  return perfumes;
}

/* ═══════════════════════════════════════════════════════════
   FUSE.JS SETUP
═══════════════════════════════════════════════════════════ */
const FUSE_KEYS = [
  { name: 'name',     weight: 0.42 },
  { name: 'brand',    weight: 0.26 },
  { name: 'altName',  weight: 0.20 },
  { name: 'altBrand', weight: 0.08 },
  { name: 'family',   weight: 0.04 },
];

function initFuse(perfumes) {
  state.fuse = new Fuse(perfumes, {
    keys: FUSE_KEYS,
    threshold:       0.35,
    distance:        200,
    minMatchCharLength: 2,
    includeMatches:  true,
    ignoreLocation:  true,
  });
}

/* ═══════════════════════════════════════════════════════════
   FILTERING & SORTING
═══════════════════════════════════════════════════════════ */
function applyFilters() {
  let list = [...state.allPerfumes];

  // Section filter
  if (state.activeSection === 'in-production') {
    list = list.filter(p => p.inProduction);
  } else if (state.activeSection !== 'all') {
    list = list.filter(p => p.section === state.activeSection);
  }

  // Brand filter
  if (state.activeBrand) {
    list = list.filter(p => p.brand === state.activeBrand);
  }

  // Gender filter
  if (state.activeGender) {
    list = list.filter(p => p.fra?.gender?.toLowerCase() === state.activeGender);
  }

  // Accord filter
  if (state.activeAccord) {
    list = list.filter(p => p.fra?.accords?.some(a => a.toLowerCase() === state.activeAccord));
  }

  state.filtered = list;
  updateFilterBadge();
  applySearch();
}

function applySearch() {
  const q = state.searchQuery.trim();

  if (!q) {
    state.displayed = sortList([...state.filtered]);
    render();
    return;
  }

  // Exact/prefix code match — se la query è numerica metti i match in cima
  const isNumeric = /^\d+$/.test(q);
  if (isNumeric) {
    const exact   = state.filtered.filter(p => p.code === q.padStart(3, '0') || p.code === q);
    const prefix  = state.filtered.filter(p => !exact.includes(p) && p.code.startsWith(q));
    const codeMatches = [...exact, ...prefix];
    if (codeMatches.length) {
      state.displayed = codeMatches;
      render();
      return;
    }
  }

  // Note search — match esatto per parola intera su notesIT/accordsIT
  const noteRegex = new RegExp(`(^|,\\s*)${q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`, 'i');
  const noteMatches = state.filtered.filter(p =>
    (p.notesIT   && noteRegex.test(p.notesIT))   ||
    (p.accordsIT && noteRegex.test(p.accordsIT))
  );

  // Fuse search su nome/brand/altName — senza note per evitare falsi positivi
  const fuseTmp = new Fuse(state.filtered, {
    keys: [
      { name: 'name',     weight: 0.45 },
      { name: 'brand',    weight: 0.28 },
      { name: 'altName',  weight: 0.22 },
      { name: 'altBrand', weight: 0.05 },
    ],
    threshold:          0.20,
    distance:           100,
    minMatchCharLength: Math.max(3, Math.ceil(q.length * 0.8)),
    includeMatches:     true,
    ignoreLocation:     true,
  });

  const fuseResults = fuseTmp.search(q);
  const fuseItems   = fuseResults.map(r => ({ ...r.item, _matches: r.matches }));

  // Unione: Fuse in cima, poi note match non già presenti
  const fuseIds = new Set(fuseItems.map(p => p.id));
  const noteOnly = noteMatches.filter(p => !fuseIds.has(p.id));
  state.displayed = [...fuseItems, ...noteOnly];
  render();
}

function sortList(list) {
  return list.sort((a, b) => {
    if (state.sortMode === 'eq') {
      return parseInt(a.code, 10) - parseInt(b.code, 10);
    }
    const cmp = a.name.localeCompare(b.name, 'it', { sensitivity: 'base' });
    return state.sortMode === 'az' ? cmp : -cmp;
  });
}

/* ═══════════════════════════════════════════════════════════
   BRAND FILTER SETUP
═══════════════════════════════════════════════════════════ */
function buildBrandFilter() {
  const brands = [...new Set(state.allPerfumes.map(p => p.brand).filter(Boolean))].sort();
  brands.forEach(b => {
    const opt = document.createElement('option');
    opt.value = b;
    opt.textContent = b;
    el.brandSelect.appendChild(opt);
  });
  el.brandSelect.addEventListener('change', () => {
    state.activeBrand = el.brandSelect.value || null;
    applyFilters();
  });
}

function buildExtraFilters(perfumes) {
  const extraFilters = document.getElementById('extraFilters');
  const accordSelect = document.getElementById('accordSelect');
  const genderChips  = document.getElementById('genderChips');

  // Raccoglie tutti gli accordi presenti nel dataset, ordinati per frequenza
  const accordCount = {};
  perfumes.forEach(p => {
    p.fra?.accords?.forEach(a => {
      const key = a.toLowerCase();
      accordCount[key] = (accordCount[key] || 0) + 1;
    });
  });
  const sortedAccords = Object.entries(accordCount)
    .sort((a, b) => b[1] - a[1])
    .map(([key]) => key);

  accordSelect.innerHTML = '<option value="">Tutti gli accordi</option>' +
    sortedAccords.map(a => `<option value="${escAttr(a)}">${escHTML(translateAccord(a))}</option>`).join('');

  // Mostra la riga solo se ci sono dati di enrichment
  const hasEnrichment = perfumes.some(p => p.fra);
  if (hasEnrichment) extraFilters.style.display = 'flex';

  // Accordo
  accordSelect.addEventListener('change', () => {
    state.activeAccord = accordSelect.value || null;
    applyFilters();
  });
}

/* ═══════════════════════════════════════════════════════════
   SKELETON LOADING
═══════════════════════════════════════════════════════════ */
function showSkeleton() {
  el.skeletonList.innerHTML = Array.from({ length: SKELETON_N }, () => `
    <div class="sk-card">
      <div class="skeleton sk-code"></div>
      <div class="sk-body">
        <div class="skeleton sk-line-a"></div>
        <div class="skeleton sk-line-b"></div>
      </div>
      <div class="skeleton sk-dot"></div>
    </div>
  `).join('');
  el.skeletonList.style.display  = 'flex';
  el.perfumeGrid.style.display   = 'none';
  el.emptyState.style.display    = 'none';
  el.errorState.style.display    = 'none';
}

function hideSkeleton() {
  el.skeletonList.style.display = 'none';
}

/* ═══════════════════════════════════════════════════════════
   RENDER CARDS
═══════════════════════════════════════════════════════════ */
function render() {
  const list = state.displayed;
  const q    = state.searchQuery.trim();

  updateStats();

  if (list.length === 0) {
    el.perfumeGrid.style.display = 'none';
    el.emptyState.style.display  = q ? 'flex' : 'none';
    el.errorState.style.display  = 'none';
    return;
  }

  el.emptyState.style.display  = 'none';
  el.errorState.style.display  = 'none';
  el.perfumeGrid.style.display = 'flex';

  // Group by section when showing "all" without search
  const showSections = state.activeSection === 'all' && !q && !state.activeBrand;
  let html = '';

  if (showSections) {
    const bySection = { main: [], 'les-secrets': [], 'senteurs-orient': [] };
    list.forEach(p => { (bySection[p.section] || bySection.main).push(p); });
    for (const [sec, items] of Object.entries(bySection)) {
      if (!items.length) continue;
      html += `
        <div class="section-divider">
          <span class="section-divider-line"></span>
          <span class="section-divider-label">${SECTION_ICON[sec]} ${SECTION_LABEL[sec]}</span>
          <span class="section-divider-line"></span>
        </div>
      `;
      html += items.map(p => cardHTML(p, q)).join('');
    }
  } else {
    html = list.map(p => cardHTML(p, q)).join('');
  }

  el.perfumeGrid.innerHTML = html;
}

function cardHTML(p, query) {
  const isFav    = state.favorites.has(p.id);
  const secBadge = p.section !== 'main'
    ? `<span class="badge badge-blue">${SECTION_ICON[p.section]} ${SECTION_LABEL[p.section]}</span>`
    : '';
  const prodBadge = !p.inProduction
    ? `<span class="badge badge-muted">Non disponibile</span>`
    : '';
  const familyTag = p.family
    ? `<span class="badge badge-amber">${p.family}</span>`
    : '';

  const displayName  = query ? highlight(p.name,  query) : escHTML(p.name);
  const displayBrand = query ? highlight(p.brand, query) : escHTML(p.brand);
  const displayAlt   = p.altName && query ? highlight(p.altName, query) : escHTML(p.altName || '');

  const thumbHTML = p.imageUrl
    ? `<div class="p-card-thumb"><img class="p-card-img" src="${escAttr(p.imageUrl)}" alt="" loading="lazy"></div>`
    : `<div class="p-card-left"><div class="p-card-code">${escHTML(p.code)}</div></div>`;

  return `
  <div class="p-card${!p.inProduction ? ' unavailable' : ''}" data-id="${p.id}" role="button" tabindex="0" aria-label="${escAttr(p.name)} - ${escAttr(p.brand)}">
    ${thumbHTML}
    <div class="p-card-body">
      <div class="p-card-name">${displayName}</div>
      ${p.brand ? `<div class="p-card-brand">${displayBrand}</div>` : ''}
      ${p.altName ? `<div class="p-card-brand" style="font-style:italic;opacity:.7">/ ${displayAlt}${p.altBrand ? ' — ' + escHTML(p.altBrand) : ''}</div>` : ''}
      <div class="p-card-badges">
        <span class="badge badge-eq">Eq. ${escHTML(p.code)}</span>${secBadge}${familyTag}${prodBadge}
      </div>
    </div>
    <div class="p-card-right">
      <button class="p-card-fav ${isFav ? 'is-fav' : ''}" data-fav="${p.id}" aria-label="${isFav ? 'Rimuovi dai preferiti' : 'Aggiungi ai preferiti'}">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="${isFav ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
      </button>
    </div>
  </div>`;
}

/* ═══════════════════════════════════════════════════════════
   SEARCH HIGHLIGHT
═══════════════════════════════════════════════════════════ */
function highlight(text, query) {
  if (!query || !text) return escHTML(text);
  const escaped = escHTML(text);
  const escapedQ = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const re = new RegExp(`(${escapedQ})`, 'gi');
  return escaped.replace(re, '<mark>$1</mark>');
}

/* ═══════════════════════════════════════════════════════════
   STATS
═══════════════════════════════════════════════════════════ */
function updateStats() {
  const total = state.allPerfumes.length;
  const shown = state.displayed.length;
  const q     = state.searchQuery.trim();

  if (q || state.activeBrand || state.activeSection !== 'all' || state.activeGender || state.activeAccord) {
    el.statsText.textContent = `${shown} risultat${shown === 1 ? 'o' : 'i'} su ${total}`;
  } else {
    el.statsText.textContent = `${total} profumi`;
  }
}

/* ═══════════════════════════════════════════════════════════
   DETAIL MODAL
═══════════════════════════════════════════════════════════ */
function openDetail(id) {
  const p = state.allPerfumes.find(x => x.id === id);
  if (!p) return;
  state.currentDetail = p;
  renderDetail(p);
  el.detailOverlay.classList.remove('closing');
  el.detailOverlay.classList.add('open');
}

function closeDetail() {
  el.detailOverlay.classList.add('closing');
  setTimeout(() => {
    el.detailOverlay.classList.remove('open', 'closing');
  }, 350);
}

function renderDetail(p) {
  const isFav = state.favorites.has(p.id);
  const icon  = SECTION_ICON[p.section] || '🌸';

  // Related: same brand, different entry
  const related = state.allPerfumes
    .filter(x => x.brand === p.brand && x.id !== p.id)
    .slice(0, 4);

  const relatedHTML = related.length ? `
    <div class="detail-section">
      <div class="detail-section-title">Dello stesso brand</div>
      <div class="related-list">
        ${related.map(r => `
          <div class="related-item" data-id="${r.id}">
            <div class="related-item-name">${escHTML(r.name)}</div>
            <div class="related-item-code">${escHTML(r.code)}${r.family ? ' · ' + escHTML(r.family) : ''}</div>
          </div>
        `).join('')}
      </div>
    </div>` : '';

  const sectionBadge = p.section !== 'main'
    ? `<span class="badge badge-blue">${icon} ${SECTION_LABEL[p.section]}</span>`
    : `<span class="badge badge-muted">${icon} Classici</span>`;
  const prodBadge = p.inProduction
    ? `<span class="badge badge-green">✓ Disponibile</span>`
    : `<span class="badge badge-muted">Non disponibile</span>`;

  el.detailBody.innerHTML = `
    <div class="detail-hero">
      <div class="detail-img-wrap" id="detailImgWrap">
        <div class="detail-img-skeleton skeleton" id="detailImgSkeleton"></div>
        <img class="detail-img" id="detailImg" alt="${escAttr(p.name)}" style="display:none">
        <div class="detail-img-placeholder" id="detailImgPlaceholder" style="display:none">
          <span class="detail-placeholder-icon">${icon}</span>
          <a class="detail-placeholder-search" href="${escAttr(p.fragranticaUrl)}" target="_blank" rel="noopener">
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
            Cerca su Fragrantica
          </a>
        </div>
        ${p.imageUrl ? `<a class="detail-img-link" href="${escAttr(p.fragranticaUrl)}" target="_blank" rel="noopener" title="Apri su Fragrantica">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
        </a>` : ''}
      </div>
      <div class="detail-code-badge">
        Ref. ${escHTML(p.rawCode)}
        ${p.family ? ` · ${escHTML(p.family)}` : ''}
      </div>
      <div class="detail-name">${escHTML(p.name)}</div>
      ${p.brand ? `<div class="detail-brand">by ${escHTML(p.brand)}</div>` : ''}
      <div class="detail-badges">
        ${sectionBadge}
        ${prodBadge}
      </div>
    </div>

    <div class="detail-section">
      <div class="detail-section-title">Informazioni</div>
      <div class="detail-row">
        <span class="detail-label">Profumo originale</span>
        <span class="detail-value">${escHTML(p.name)}</span>
      </div>
      ${p.brand ? `<div class="detail-row">
        <span class="detail-label">Brand</span>
        <span class="detail-value">${escHTML(p.brand)}</span>
      </div>` : ''}
      ${p.altName ? `<div class="detail-row">
        <span class="detail-label">Alternativa</span>
        <span class="detail-value">${escHTML(p.altName)}${p.altBrand ? ' — ' + escHTML(p.altBrand) : ''}</span>
      </div>` : ''}
      <div class="detail-row">
        <span class="detail-label">Codice dupe</span>
        <span class="detail-value">${escHTML(p.rawCode)}</span>
      </div>
      ${p.family ? `<div class="detail-row">
        <span class="detail-label">Famiglia</span>
        <span class="detail-value">${escHTML(p.family)}</span>
      </div>` : ''}
      <div class="detail-row">
        <span class="detail-label">Stato</span>
        <span class="detail-value">${p.inProduction ? '✓ Disponibile' : 'Non disponibile'}</span>
      </div>
    </div>

    ${p.fra ? `
    <div class="detail-section">
      <div class="detail-section-title">Profumo originale</div>
      ${p.fra.accords?.length ? `
      <div class="detail-accords">
        ${p.fra.accords.map(a => `<span class="accord-chip">${escHTML(translateAccord(a))}</span>`).join('')}
      </div>` : ''}
      ${p.fra.top ? `<div class="detail-row">
        <span class="detail-label">Note di testa</span>
        <span class="detail-value">${escHTML(translateNotes(p.fra.top))}</span>
      </div>` : ''}
      ${p.fra.middle ? `<div class="detail-row">
        <span class="detail-label">Note di cuore</span>
        <span class="detail-value">${escHTML(translateNotes(p.fra.middle))}</span>
      </div>` : ''}
      ${p.fra.base ? `<div class="detail-row">
        <span class="detail-label">Note di fondo</span>
        <span class="detail-value">${escHTML(translateNotes(p.fra.base))}</span>
      </div>` : ''}
      ${p.fra.year ? `<div class="detail-row">
        <span class="detail-label">Anno</span>
        <span class="detail-value">${escHTML(String(p.fra.year))}</span>
      </div>` : ''}
      ${p.fra.country ? `<div class="detail-row">
        <span class="detail-label">Origine</span>
        <span class="detail-value">${escHTML(translateCountry(p.fra.country))}</span>
      </div>` : ''}
      ${p.fra.gender ? `<div class="detail-row">
        <span class="detail-label">Genere</span>
        <span class="detail-value">${escHTML(translateGender(p.fra.gender))}</span>
      </div>` : ''}
      ${p.fra.rating ? `<div class="detail-row">
        <span class="detail-label">Rating Fragrantica</span>
        <span class="detail-value">★ ${p.fra.rating.toFixed(2)}${p.fra.ratingCount ? ` (${p.fra.ratingCount.toLocaleString('it')} voti)` : ''}</span>
      </div>` : ''}
    </div>` : ''}

    <div class="detail-actions">
      <button class="detail-action-btn" id="copyDetailBtn">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
        Copia
      </button>
      <button class="detail-action-btn ${isFav ? 'fav-active' : ''}" id="toggleFavDetailBtn">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="${isFav ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
        ${isFav ? 'Preferito' : 'Preferiti'}
      </button>
      ${p.fragranticaUrl ? `
      <a class="detail-action-btn" href="${escAttr(p.fragranticaUrl)}" target="_blank" rel="noopener" id="fragBtn" style="text-decoration:none">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
        Fragrantica
      </a>` : ''}
      ${navigator.share ? `
      <button class="detail-action-btn" id="shareDetailBtn">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" x2="12" y1="2" y2="15"/></svg>
        Condividi
      </button>` : ''}
    </div>

    ${relatedHTML}
  `;

  // Update header fav icon
  updateDetailFavIcon(p.id);

  // Bind action buttons
  document.getElementById('copyDetailBtn')?.addEventListener('click', () => copyPerfume(p));
  document.getElementById('toggleFavDetailBtn')?.addEventListener('click', () => {
    toggleFav(p.id);
    renderDetail(p);
  });
  document.getElementById('shareDetailBtn')?.addEventListener('click', () => sharePerfume(p));

  // Related items
  el.detailBody.querySelectorAll('.related-item').forEach(item => {
    item.addEventListener('click', () => {
      const rid = parseInt(item.dataset.id, 10);
      closeDetail(); setTimeout(() => openDetail(rid), 350);
    });
  });

  // Image loading strategy:
  // 1. If we have a direct Fragrantica CDN URL → show immediately
  // 2. Otherwise → try Wikipedia search (async), show skeleton while waiting
  const skeleton    = document.getElementById('detailImgSkeleton');
  const img         = document.getElementById('detailImg');
  const placeholder = document.getElementById('detailImgPlaceholder');

  function showImage(url) {
    if (!skeleton) return;
    skeleton.style.display = 'none';
    img.onload  = () => { img.style.display = 'block'; };
    img.onerror = () => { img.style.display = 'none'; placeholder.style.display = 'flex'; };
    img.src     = url;
  }

  function showPlaceholder() {
    if (!skeleton) return;
    skeleton.style.display = 'none';
    placeholder.style.display = 'flex';
  }

  if (p.imageUrl) {
    // Direct Fragrantica CDN URL available — no async needed
    showImage(p.imageUrl);
  } else {
    // Fallback: try Wikipedia search
    const wikiName  = p.altName  || p.name;
    const wikiBrand = p.altBrand || p.brand || '';
    fetchWikipediaImage(wikiName, wikiBrand).then(url => {
      if (url) showImage(url);
      else     showPlaceholder();
    });
  }
}

function updateDetailFavIcon(id) {
  const isFav = state.favorites.has(id);
  el.detailFavBtn.querySelector('svg').setAttribute('fill', isFav ? 'currentColor' : 'none');
  el.detailFavBtn.querySelector('svg').setAttribute('stroke', isFav ? 'currentColor' : 'currentColor');
  el.detailFavBtn.style.color = isFav ? 'var(--accent)' : '';
}

/* ═══════════════════════════════════════════════════════════
   FAVORITES
═══════════════════════════════════════════════════════════ */
function loadFavorites() {
  try {
    const saved = JSON.parse(localStorage.getItem(FAV_KEY) || '[]');
    state.favorites = new Set(saved);
  } catch (_) {
    state.favorites = new Set();
  }
  updateFavBadge();
}

function saveFavorites() {
  localStorage.setItem(FAV_KEY, JSON.stringify([...state.favorites]));
  updateFavBadge();
}

function toggleFav(id) {
  if (state.favorites.has(id)) {
    state.favorites.delete(id);
    showToast('Rimosso dai preferiti');
  } else {
    state.favorites.add(id);
    showToast('Aggiunto ai preferiti ♡');
  }
  saveFavorites();
  updateFavBadge();
  // Re-render cards to update fav icons
  render();
  if (state.currentDetail?.id === id) updateDetailFavIcon(id);
}

function updateFavBadge() {
  const count = state.favorites.size;
  el.favBadge.textContent = count;
  el.favBadge.style.display = count > 0 ? 'flex' : 'none';
  el.favBtn.querySelector('svg').setAttribute('fill', count > 0 ? 'currentColor' : 'none');
  el.favBtn.style.color = count > 0 ? 'var(--accent)' : '';
}

function openFavorites() {
  renderFavorites();
  el.favOverlay.classList.remove('closing');
  el.favOverlay.classList.add('open');
}

function closeFavorites() {
  el.favOverlay.classList.add('closing');
  setTimeout(() => el.favOverlay.classList.remove('open', 'closing'), 350);
}

function renderFavorites() {
  if (state.favorites.size === 0) {
    el.favBody.innerHTML = `
      <div class="fav-empty">
        <div class="fav-empty-icon">🤍</div>
        <div class="fav-empty-text">Nessun preferito ancora.<br>Tocca ♡ su un profumo per salvarlo.</div>
      </div>`;
    return;
  }

  const favItems = [...state.favorites]
    .map(id => state.allPerfumes.find(p => p.id === id))
    .filter(Boolean)
    .sort((a, b) => a.name.localeCompare(b.name, 'it'));

  el.favBody.innerHTML = `<div class="fav-list-inner">
    ${favItems.map(p => `
      <div class="fav-item" data-id="${p.id}">
        <div class="fav-item-code">${escHTML(p.code)}</div>
        <div class="fav-item-body">
          <div class="fav-item-name">${escHTML(p.name)}</div>
          ${p.brand ? `<div class="fav-item-brand">${escHTML(p.brand)}</div>` : ''}
        </div>
        <button class="fav-item-remove" data-remove="${p.id}" aria-label="Rimuovi dai preferiti">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
        </button>
      </div>
    `).join('')}
  </div>`;

  el.favBody.querySelectorAll('.fav-item').forEach(item => {
    item.addEventListener('click', e => {
      if (e.target.closest('.fav-item-remove')) return;
      const id = parseInt(item.dataset.id, 10);
      closeFavorites(); setTimeout(() => openDetail(id), 350);
    });
  });

  el.favBody.querySelectorAll('.fav-item-remove').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const id = parseInt(btn.dataset.remove, 10);
      toggleFav(id);
      renderFavorites();
    });
  });
}

/* ═══════════════════════════════════════════════════════════
   MODALS
═══════════════════════════════════════════════════════════ */
function openModal(overlay) {
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(overlay, callback) {
  overlay.classList.remove('open');
  document.body.style.overflow = '';
  if (callback) setTimeout(callback, 350);
}

/* ═══════════════════════════════════════════════════════════
   COPY & SHARE
═══════════════════════════════════════════════════════════ */
function copyPerfume(p) {
  const text = `${p.name}${p.brand ? ' — ' + p.brand : ''}\nCodice dupe: ${p.rawCode}`;
  navigator.clipboard.writeText(text).then(
    () => showToast('Copiato negli appunti ✓'),
    () => showToast('Copia non riuscita'),
  );
}

function sharePerfume(p) {
  navigator.share({
    title: p.name,
    text: `Dupe di "${p.name}" by ${p.brand} — Codice: ${p.rawCode}`,
  }).catch(() => {});
}

/* ═══════════════════════════════════════════════════════════
   TOAST
═══════════════════════════════════════════════════════════ */
let toastTimer = null;
function showToast(msg) {
  el.toast.textContent = msg;
  el.toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.toast.classList.remove('show'), 2200);
}

/* ═══════════════════════════════════════════════════════════
   UTILS
═══════════════════════════════════════════════════════════ */
function escHTML(str) {
  if (!str) return '';
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}
function escAttr(str) { return escHTML(str); }

/* ═══════════════════════════════════════════════════════════
   FILTER PANEL + SWIPE TO DISMISS
═══════════════════════════════════════════════════════════ */
function initFilterSwipe() {
  const sheet = document.getElementById('filterSheet');
  const handle = document.getElementById('filterDragHandle');
  if (!sheet || !handle) return;

  let startY = 0;
  let currentY = 0;

  handle.addEventListener('touchstart', e => {
    startY = e.touches[0].clientY;
    currentY = startY;
    sheet.style.animation = 'none';
    sheet.style.transform = 'translateY(0)';
  }, { passive: true });

  handle.addEventListener('touchmove', e => {
    e.preventDefault();
    currentY = e.touches[0].clientY;
    const dy = Math.max(0, currentY - startY);
    sheet.style.transform = `translateY(${dy}px)`;
  }, { passive: false });

  handle.addEventListener('touchend', () => {
    const dy = currentY - startY;
    const overlay = document.getElementById('filterOverlay');
    const btn = document.getElementById('filterToggleBtn');
    if (dy > 60) {
      // anima fino in fondo poi chiude
      sheet.style.transition = 'transform 200ms ease';
      sheet.style.transform = 'translateY(100%)';
      overlay?.classList.remove('open');
      btn?.classList.remove('active');
      btn?.setAttribute('aria-expanded', 'false');
      setTimeout(() => {
        sheet.style.transform = '';
        sheet.style.animation = '';
        sheet.style.transition = '';
      }, 200);
    } else {
      // torna su
      sheet.style.transition = 'transform 200ms ease';
      sheet.style.transform = 'translateY(0)';
      setTimeout(() => {
        sheet.style.transform = '';
        sheet.style.animation = '';
        sheet.style.transition = '';
      }, 200);
    }
  });
}

function openFilterPanel() {
  const overlay = document.getElementById('filterOverlay');
  const btn = document.getElementById('filterToggleBtn');
  overlay?.classList.remove('closing');
  overlay?.classList.add('open');
  btn?.classList.add('active');
  btn?.setAttribute('aria-expanded', 'true');
}
function closeFilterPanel() {
  const overlay = document.getElementById('filterOverlay');
  const btn = document.getElementById('filterToggleBtn');
  const sheet = document.getElementById('filterSheet');
  if (sheet) { sheet.style.transform = ''; }
  overlay?.classList.add('closing');
  btn?.classList.remove('active');
  btn?.setAttribute('aria-expanded', 'false');
  setTimeout(() => overlay?.classList.remove('open', 'closing'), 350);
}
function updateFilterBadge() {
  const badge = document.getElementById('filterBadge');
  if (!badge) return;
  let count = 0;
  if (state.activeSection && state.activeSection !== 'all') count++;
  if (state.activeBrand) count++;
  if (state.activeGender) count++;
  if (state.activeAccord) count++;
  badge.textContent = count;
  badge.style.display = count > 0 ? 'inline-flex' : 'none';
}

/* ═══════════════════════════════════════════════════════════
   EVENT LISTENERS
═══════════════════════════════════════════════════════════ */
function bindEvents() {
  // Theme
  el.themeBtn.addEventListener('click', toggleTheme);

  // Logo — reset to home
  el.logoBtn.addEventListener('click', () => {
    el.searchInput.value = '';
    state.searchQuery   = '';
    state.activeSection = 'all';
    state.activeBrand   = null;
    state.activeGender  = null;
    state.activeAccord  = null;
    el.searchClear.style.display = 'none';
    document.querySelectorAll('.chip[data-section]').forEach(c => c.classList.toggle('active', c.dataset.section === 'all'));
    document.querySelectorAll('[data-gender]').forEach(c => c.classList.remove('active'));
    if (el.brandSelect) el.brandSelect.value = '';
    const accordSel = document.getElementById('accordSelect');
    if (accordSel) accordSel.value = '';
    applyFilters();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Search
  el.searchInput.addEventListener('input', () => {
    const q = el.searchInput.value;
    state.searchQuery = q;
    el.searchClear.style.display = q ? 'flex' : 'none';
    applySearch();
  });
  el.searchClear.addEventListener('click', () => {
    el.searchInput.value = '';
    state.searchQuery = '';
    el.searchClear.style.display = 'none';
    el.searchInput.focus();
    applySearch();
  });
  el.clearSearchBtn?.addEventListener('click', () => {
    el.searchInput.value = '';
    state.searchQuery = '';
    el.searchClear.style.display = 'none';
    applySearch();
  });

  // Section chips
  document.querySelectorAll('.chip[data-section]').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('.chip[data-section]').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      state.activeSection = chip.dataset.section;
      applyFilters();
    });
  });

  // Sort
  el.sortBtn.addEventListener('click', () => {
    const modes = ['az', 'za', 'eq'];
    const labels = { az: 'A–Z', za: 'Z–A', eq: 'Eq. 0–9' };
    state.sortMode = modes[(modes.indexOf(state.sortMode) + 1) % modes.length];
    el.sortLabel.textContent = labels[state.sortMode];
    state.displayed = sortList([...state.displayed]);
    render();
  });

  // Card clicks (event delegation)
  el.perfumeGrid.addEventListener('click', e => {
    const favBtn = e.target.closest('.p-card-fav');
    if (favBtn) {
      e.stopPropagation();
      const id = parseInt(favBtn.dataset.fav, 10);
      toggleFav(id);
      return;
    }
    const card = e.target.closest('.p-card');
    if (card) openDetail(parseInt(card.dataset.id, 10));
  });
  el.perfumeGrid.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      const card = e.target.closest('.p-card');
      if (card) { e.preventDefault(); openDetail(parseInt(card.dataset.id, 10)); }
    }
  });

  // Detail modal
  el.detailClose.addEventListener('click',  () => closeDetail());
  el.detailFavBtn.addEventListener('click', () => {
    if (state.currentDetail) toggleFav(state.currentDetail.id);
  });
  el.detailOverlay.addEventListener('click', e => {
    if (e.target === el.detailOverlay) closeDetail();
  });

  // Favorites
  el.favBtn.addEventListener('click',   openFavorites);
  document.getElementById('quizBtn').addEventListener('click', openQuiz);
  document.getElementById('quizClose').addEventListener('click', closeQuiz);
  document.getElementById('quizOverlay').addEventListener('click', e => {
    if (e.target === document.getElementById('quizOverlay')) closeQuiz();
  });
  el.favClose.addEventListener('click', () => closeFavorites());
  el.favOverlay.addEventListener('click', e => {
    if (e.target === el.favOverlay) closeFavorites();
  });
  el.favClearBtn.addEventListener('click', () => {
    if (state.favorites.size === 0) return;
    state.favorites.clear();
    saveFavorites();
    render();
    renderFavorites();
    showToast('Preferiti rimossi');
  });

  // Back to top + smart sticky hide/show
  let lastScrollY = window.scrollY;
  const stickyZone = document.querySelector('.sticky-zone');
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    el.backTop.style.display = y > 400 ? 'flex' : 'none';
    if (stickyZone) {
      if (y > lastScrollY && y > 120) {
        stickyZone.classList.add('hidden');
      } else {
        stickyZone.classList.remove('hidden');
      }
    }
    lastScrollY = y;
  }, { passive: true });
  el.backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  // Filter modal
  initFilterSwipe();
  document.getElementById('filterToggleBtn')?.addEventListener('click', openFilterPanel);
  const filterOverlay = document.getElementById('filterOverlay');
  filterOverlay?.addEventListener('click', e => {
    if (e.target === filterOverlay) closeFilterPanel();
  });
  document.getElementById('filterResetBtn')?.addEventListener('click', () => {
    state.activeGender = null;
    state.activeAccord = null;
    state.activeBrand  = null;
    state.activeSection = 'all';
    document.querySelectorAll('[data-gender]').forEach(c => c.classList.remove('active'));
    document.querySelectorAll('[data-section]').forEach(c => c.classList.toggle('active', c.dataset.section === 'all'));
    if (el.brandSelect) el.brandSelect.value = '';
    const accordSel = document.getElementById('accordSelect');
    if (accordSel) accordSel.value = '';
    applyFilters();
  });

  // Retry
  el.retryBtn?.addEventListener('click', () => init(true));

  // Keyboard: close modals with Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      if (document.getElementById('filterOverlay')?.classList.contains('open')) closeFilterPanel();
      else if (el.detailOverlay.classList.contains('open')) closeDetail();
      else if (el.favOverlay.classList.contains('open')) closeModal(el.favOverlay);
    }
  });
}

/* ═══════════════════════════════════════════════════════════
   INIT
═══════════════════════════════════════════════════════════ */
async function init(forceRefresh = false) {
  showSkeleton();
  el.errorState.style.display = 'none';

  try {
    const perfumes = await fetchData(forceRefresh);
    state.allPerfumes = perfumes;
    initFuse(perfumes);
    buildBrandFilter();
    buildExtraFilters(perfumes);
    applyFilters();
    hideSkeleton();
  } catch (err) {
    console.error('DupeScent: failed to load data', err);
    hideSkeleton();
    el.perfumeGrid.style.display = 'none';
    el.emptyState.style.display  = 'none';
    el.errorState.style.display  = 'flex';
  }
}

/* ═══════════════════════════════════════════════════════════
   QUIZ
═══════════════════════════════════════════════════════════ */
const QUIZ_FAMILIES = {
  floreale:  ['floral', 'white floral', 'rose', 'soft floral', 'floral fruity', 'floral aldehyde', 'soft spicy'],
  fresco:    ['citrus', 'fresh', 'aquatic', 'aromatic', 'green', 'ozonic', 'marine', 'fresh spicy', 'citrus aromatic'],
  legnoso:   ['woody', 'amber', 'oriental', 'oud', 'resinous', 'earthy', 'warm spicy', 'spicy', 'chypre', 'fougere', 'fougère', 'leather'],
  gourmand:  ['sweet', 'vanilla', 'gourmand', 'caramel', 'chocolate', 'coffee', 'honey', 'nutty'],
  muschiato: ['musky', 'powdery', 'soapy', 'creamy', 'aldehydic'],
};

const QUIZ_OCCASIONS = {
  quotidiano: ['citrus', 'fresh', 'aromatic', 'aquatic', 'musky', 'powdery', 'green', 'fresh spicy'],
  serale:     ['amber', 'oriental', 'oud', 'woody', 'warm spicy', 'resinous', 'gourmand', 'leather', 'animalic'],
  estate:     ['citrus', 'aquatic', 'fresh', 'fruity', 'ozonic', 'marine', 'tropical', 'green', 'fresh spicy'],
  inverno:    ['amber', 'vanilla', 'woody', 'warm spicy', 'resinous', 'gourmand', 'sweet', 'spicy', 'oriental'],
};

const QUIZ_STEPS = [
  {
    id: 'gender',
    question: 'Per chi è il profumo?',
    subtitle: 'Seleziona una risposta per continuare',
    options: [
      { value: 'women',  emoji: '👩', label: 'Donna',  sub: 'Femminile' },
      { value: 'men',    emoji: '👨', label: 'Uomo',   sub: 'Maschile' },
      { value: 'unisex', emoji: '🌿', label: 'Entrambi', sub: 'Unisex' },
    ],
  },
  {
    id: 'family',
    question: 'Che tipo di profumo preferisci?',
    subtitle: 'Scegli la famiglia olfattiva più vicina ai tuoi gusti',
    options: [
      { value: 'floreale',  emoji: '🌸', label: 'Floreale',          sub: 'Rosa, gelsomino, peonia' },
      { value: 'fresco',    emoji: '🌊', label: 'Fresco & Agrumato', sub: 'Limone, acqua, erbe' },
      { value: 'legnoso',   emoji: '🪵', label: 'Legnoso & Orientale', sub: 'Sandalo, oud, ambra' },
      { value: 'gourmand',  emoji: '🍮', label: 'Dolce & Gourmand',  sub: 'Vaniglia, caramello, miele' },
      { value: 'muschiato', emoji: '🕊️', label: 'Muschiato & Pulito', sub: 'Muschio, cipria, clean' },
    ],
  },
  {
    id: 'occasion',
    question: 'Per quale occasione?',
    subtitle: 'Ti aiutiamo a trovare il profumo giusto per il momento',
    options: [
      { value: 'quotidiano', emoji: '☀️', label: 'Tutti i giorni', sub: 'Lavoro, uscite casual' },
      { value: 'serale',     emoji: '🌙', label: 'Sera & uscite',  sub: 'Cena, serata, evento' },
      { value: 'estate',     emoji: '🏖️', label: 'Estate',         sub: 'Caldo, vacanze, sport' },
      { value: 'inverno',    emoji: '❄️', label: 'Inverno',         sub: 'Freddo, avvolgente' },
    ],
  },
];

const quizState = { step: 0, answers: {} };

function openQuiz() {
  quizState.step = 0;
  quizState.answers = {};
  const overlay = document.getElementById('quizOverlay');
  overlay.classList.remove('closing');
  overlay.classList.add('open');
  renderQuizStep();
}

function closeQuiz() {
  const overlay = document.getElementById('quizOverlay');
  overlay.classList.add('closing');
  setTimeout(() => overlay.classList.remove('open', 'closing'), 350);
}

function renderQuizStep() {
  const total = QUIZ_STEPS.length;
  const step  = QUIZ_STEPS[quizState.step];
  const pct   = Math.round((quizState.step / total) * 100);

  document.getElementById('quizProgressBar').style.width = pct + '%';
  document.getElementById('quizStepLabel').textContent = `Domanda ${quizState.step + 1} di ${total}`;

  const selected = quizState.answers[step.id] || null;

  document.getElementById('quizBody').innerHTML = `
    <div class="quiz-question">${step.question}</div>
    <div class="quiz-subtitle">${step.subtitle}</div>
    <div class="quiz-options">
      ${step.options.map(o => `
        <button class="quiz-option${selected === o.value ? ' selected' : ''}" onclick="selectQuizOption('${step.id}','${o.value}',this)">
          <span class="quiz-option-emoji">${o.emoji}</span>
          <span class="quiz-option-label">${o.label}</span>
          <span class="quiz-option-sub">${o.sub}</span>
        </button>
      `).join('')}
    </div>
    <div class="quiz-nav">
      ${quizState.step > 0 ? `<button class="quiz-back-btn" onclick="quizBack()">← Indietro</button>` : ''}
      <button class="quiz-next-btn" id="quizNextBtn" onclick="quizNext()" ${!selected ? 'disabled' : ''}>
        ${quizState.step < total - 1 ? 'Avanti →' : 'Scopri i tuoi dupe ✨'}
      </button>
    </div>
  `;
}

function selectQuizOption(stepId, value, btn) {
  quizState.answers[stepId] = value;
  document.querySelectorAll('.quiz-option').forEach(o => o.classList.remove('selected'));
  btn.classList.add('selected');
  document.getElementById('quizNextBtn').disabled = false;
}

function quizBack() {
  if (quizState.step > 0) { quizState.step--; renderQuizStep(); }
}

function quizNext() {
  const step = QUIZ_STEPS[quizState.step];
  if (!quizState.answers[step.id]) return;
  if (quizState.step < QUIZ_STEPS.length - 1) {
    quizState.step++;
    renderQuizStep();
  } else {
    showQuizResults();
  }
}

function scoreQuiz(p) {
  if (!p.fra) return -1;
  let score = 0;
  const accords = (p.fra.accords || []).map(a => a.toLowerCase());
  const { gender, family, occasion } = quizState.answers;

  // Gender: +30 per match, +10 per unisex
  const g = p.fra.gender?.toLowerCase();
  if (gender === 'unisex') {
    if (g === 'unisex') score += 30;
    else score += 5;
  } else {
    if (g === gender) score += 30;
    else if (g === 'unisex') score += 15;
    else score -= 10;
  }

  // Famiglia: +12 per ogni accordo matching
  const familyAccords = QUIZ_FAMILIES[family] || [];
  accords.forEach(a => { if (familyAccords.includes(a)) score += 12; });

  // Occasione: +8 per ogni accordo matching
  const occasionAccords = QUIZ_OCCASIONS[occasion] || [];
  accords.forEach(a => { if (occasionAccords.includes(a)) score += 8; });

  // Rating bonus: max +15
  if (p.fra.rating) score += (p.fra.rating / 5) * 15;

  // Disponibile: +5
  if (p.inProduction) score += 5;

  return score;
}

function showQuizResults() {
  const scored = state.allPerfumes
    .map(p => ({ p, score: scoreQuiz(p) }))
    .filter(x => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 5);

  document.getElementById('quizProgressBar').style.width = '100%';
  document.getElementById('quizStepLabel').textContent = 'I tuoi dupe consigliati';

  const medals = ['🥇', '🥈', '🥉', '4°', '5°'];

  document.getElementById('quizBody').innerHTML = `
    <div class="quiz-results-title">Ecco i profumi più adatti a te!</div>
    <div class="quiz-results-sub">Basato sulle tue preferenze — clicca per vedere i dettagli</div>
    ${scored.map(({ p }, i) => `
      <div class="quiz-result-card" onclick="openDetail(${p.id})">
        <div class="quiz-result-rank">${medals[i]}</div>
        ${p.imageUrl
          ? `<img class="quiz-result-img" src="${escAttr(p.imageUrl)}" alt="" loading="lazy">`
          : `<div class="quiz-result-img-placeholder"></div>`}
        <div class="quiz-result-info">
          <div class="quiz-result-name">${escHTML(p.name)}</div>
          <div class="quiz-result-brand">${escHTML(p.brand)} · Eq. ${escHTML(p.code)}</div>
          <div class="quiz-result-tags">
            ${(p.fra?.accords || []).slice(0, 3).map(a => `<span class="quiz-result-tag">${escHTML(translateAccord(a))}</span>`).join('')}
          </div>
        </div>
      </div>
    `).join('')}
    <button class="quiz-restart-btn" onclick="quizState.step=0; quizState.answers={}; renderQuizStep(); document.getElementById('quizProgressBar').style.width='0%'; document.getElementById('quizStepLabel').textContent='Domanda 1 di 3'">
      🔄 Rifai il quiz
    </button>
  `;
}

/* ═══════════════════════════════════════════════════════════
   BOOT
═══════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  loadFavorites();
  bindEvents();
  init();
});
