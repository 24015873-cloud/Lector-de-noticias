// --- Datos de Noticias ---
const news = {
    articles: [
        {
            "title": "Anthropic, la empresa de IA que se enfrentó al Pentágono en EE.UU. y por qué esto nos concierne a todos",
            "description": "Mientras el mundo observaba la operación estadounidense en Venezuela y cómo la guerra con Irán se hacía inevitable, en Washington se desarrollaba una batalla tecnológica que muestra cómo la inteligencia artificial está cambiando la política global.",
            "urlToImage": "https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/4730/live/ef3437a0-1f1f-11f1-a600-6bf0292beaaf.jpg.webp",
            "source": { "name": "BBC Mundo" },
            "publishedAt": "2026-03-16T09:00:00Z",
            "url": "https://www.bbc.com/mundo/articles/cddnjd34p7no",
            "category": "ciencia"
        },
        {
            "title": "Cómo nació la histórica rivalidad entre EE.UU. y Cuba",
            "description": "Una revisión histórica sobre el origen de una de las rivalidades geopolíticas más prolongadas del mundo moderno entre Estados Unidos y Cuba.",
            "urlToImage": "https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/5a15/live/dd561510-1cc4-11f1-a77f-65f2fdb37c23.jpg.webp",
            "source": { "name": "BBC Mundo" },
            "publishedAt": "2026-03-15T10:00:00Z",
            "url": "https://www.bbc.com/mundo/articles/cq6q15rdrqeo",
            "category": "mundo"
        },
        {
            "title": "Artemis II: el primer vuelo tripulado del programa lunar de la NASA",
            "description": "El programa Artemis prepara el regreso de astronautas a la órbita lunar como paso previo para futuras misiones humanas hacia Marte.",
            "urlToImage": "https://images-assets.nasa.gov/image/KSC-20230920-PH-FMX01_0467/KSC-20230920-PH-FMX01_0467~large.jpg",
            "source": { "name": "NASA" },
            "publishedAt": "2026-03-12T08:30:00Z",
            "url": "https://www.nasa.gov/mission/artemis-ii/",
            "category": "ciencia"
        },
        {
            "title": "Guanajuato define selección de clavados tras exitoso Selectivo Nacional en León",
            "description": "Con la clasificación de Franco Frausto y Natalia Núñez, la delegación de Guanajuato se prepara para competir en la Olimpiada Nacional 2026.",
            "urlToImage": "https://i0.wp.com/s3-am-btat-server.s3.amazonaws.com/wp-content/uploads/2026/03/clavados_gto_11.jpg",
            "source": { "name": "Periódico AM" },
            "publishedAt": "2026-03-16T07:45:00Z",
            "url": "https://www.am.com.mx/superdeportivo/2026/03/15/guanajuato-define-seleccion-de-clavados-tras-exitoso-selectivo-nacional-en-leon-1764966.html",
            "category": "mexico"
        },
        {
            "title": "El sistema eléctrico de Cuba sufre un colapso total",
            "description": "Un apagón generalizado afectó a millones de personas en Cuba tras una falla en el sistema energético nacional.",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/c-gettyimages-2264256020-20260316192944750.jpg",
            "source": { "name": "CNN en Español" },
            "publishedAt": "2026-03-16T14:00:00Z",
            "url": "https://cnnespanol.cnn.com/2026/03/16/latinoamerica/sistema-electrico-cuba-colapso-total-trax",
            "category": "mundo"
        },
        {
            "title": "Felipe VI reconoce abusos durante la Conquista de México",
            "description": "Durante una exposición histórica, el rey de España Felipe VI reconoció los abusos ocurridos durante la conquista del territorio mexicano.",
            "urlToImage": "https://images.milenio.com/2iEa9y7vSL45zy_bTJ19iIcGljQ=/345x194/uploads/media/2026/03/16/rey-espana-exposicion-mitad-mundo.jpg",
            "source": { "name": "Milenio" },
            "publishedAt": "2026-03-16T12:30:00Z",
            "url": "https://www.milenio.com/internacional/rey-espana-reconoce-abuso-conquista-mexico",
            "category": "mundo"
        },
        {
            "title": "Oscar 2026: lista completa de ganadores de la Academia",
            "description": "La ceremonia de los premios Oscar 2026 reconoció a las mejores producciones cinematográficas del año.",
            "urlToImage": "https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/e7dc/live/ff01d740-215a-11f1-b539-43e5d7f861d2.jpg.webp",
            "source": { "name": "BBC Mundo" },
            "publishedAt": "2026-03-16T05:00:00Z",
            "url": "https://www.bbc.com/mundo/articles/cx2rw9gg189o",
            "category": "cultura"
        },
        {
            "title": "La guerra en el Golfo complica el suministro de energía en Bangladés",
            "description": "El conflicto regional afecta el mercado energético global y complica el abastecimiento eléctrico en varios países asiáticos.",
            "urlToImage": "https://static01.nyt.com/images/2026/03/16/espanol/16Biz-Iran-Bangladesh-02-wlvm-ES-copy1/16Biz-Iran-Bangladesh-02-wlvm-superJumbo.jpg",
            "source": { "name": "The New York Times" },
            "publishedAt": "2026-03-16T06:30:00Z",
            "url": "https://www.nytimes.com/es/2026/03/16/espanol/negocios/guerra-iran-escasez-energia.html",
            "category": "mundo"
        },
        {
            "title": "Científicos buscan pistas sobre el ADN de Leonardo da Vinci",
            "description": "Investigadores intentan descifrar el ADN del polímata italiano para comprender mejor su vida.",
            "urlToImage": "https://static.nationalgeographicla.com/files/styles/image_3200/public/karinaswabbing.png.webp",
            "source": { "name": "National Geographic" },
            "publishedAt": "2026-03-16T08:00:00Z",
            "url": "https://www.nationalgeographicla.com/ciencia/2026/03/un-paso-mas-cerca-de-descifrar-el-verdadero-codigo-da-vinci",
            "category": "ciencia"
        },
        {
            "title": "Caminar después de comer mejora la respuesta del cuerpo a los alimentos",
            "description": "Estudios científicos muestran que caminar unos minutos después de comer puede mejorar la digestión y el metabolismo.",
            "urlToImage": "https://static.nationalgeographicla.com/files/styles/image_3200/public/gettyimages-1448002372.webp",
            "source": { "name": "National Geographic" },
            "publishedAt": "2026-03-16T07:00:00Z",
            "url": "https://www.nationalgeographicla.com/salud/2026/03/caminar-despues-de-comer",
            "category": "salud"
        }
    ]
};

// --- Configuración Visual ---
let currentCarouselIndex = 0;
const cursor = document.getElementById('custom-cursor');

const themeConfig = {
    all: { emojis: ['✨', '🌟', '📰'], color: '#3b82f6' },
    salud: { emojis: ['❤️', '🩺', '🍎'], color: '#f43f5e' },
    ciencia: { emojis: ['🧪', '🧬', '⚛️', '🔬'], color: '#10b981' },
    mundo: { emojis: ['🌎', '🌍', '🌏', '📡'], color: '#0ea5e9' },
    mexico: { emojis: ['🇲🇽', '🌵', '🌮', '🌶️'], color: '#f59e0b' },
    cultura: { emojis: ['🎭', '🎬', '🎨', '⭐'], color: '#a855f7' }
};

// --- Lógica del Cursor ---
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// --- Lógica de Partículas ---
function createBurst(category, x, y) {
    const config = themeConfig[category] || themeConfig.all;
    for (let i = 0; i < 15; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        p.innerText = config.emojis[Math.floor(Math.random() * config.emojis.length)];
        p.style.left = (x - 10) + 'px';
        p.style.top = (y - 10) + 'px';
        p.style.fontSize = (Math.random() * 1.5 + 1) + 'rem';
        const angle = Math.random() * Math.PI * 2;
        const dist = 100 + Math.random() * 150;
        p.style.setProperty('--dx', `${Math.cos(angle) * dist}px`);
        p.style.setProperty('--dy', `${Math.sin(angle) * dist}px`);
        p.style.setProperty('--dr', `${Math.random() * 720}deg`);
        document.body.appendChild(p);
        setTimeout(() => p.remove(), 1200);
    }
}

// --- Gestión de Noticias y Filtros ---
async function fetchNews(category = 'all', event = null) {
    if (event) createBurst(category, event.clientX, event.clientY);
    
    const grid = document.getElementById('newsGrid');
    grid.style.opacity = '0';
    
    await new Promise(r => setTimeout(r, 300));
    const filtered = category === 'all' ? news.articles : news.articles.filter(a => a.category === category);
    renderNews(filtered);
    grid.style.opacity = '1';
}

function renderNews(articles) {
    const grid = document.getElementById('newsGrid');
    grid.innerHTML = articles.map((art, i) => `
        <article onclick="window.open('${art.url}', '_blank')" 
                 onkeydown="if(event.key==='Enter') window.open('${art.url}', '_blank')"
                 role="link" tabindex="0"
                 class="news-card bg-white rounded-[2.5rem] p-4 border border-gray-100 dark:border-white/5 flex flex-col group animate-in slide-in-from-bottom-8 duration-700" style="animation-delay: ${i*50}ms">
            <div class="relative h-64 rounded-[2rem] overflow-hidden mb-6">
                <img src="${art.urlToImage}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="${art.title}">
            </div>
            <div class="px-4 pb-6 flex-grow">
                <div class="flex items-center gap-2 mb-4">
                    <span class="text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest">${art.source.name}</span>
                </div>
                <h3 class="text-xl font-bold leading-tight mb-4 text-slate-900 transition-colors">${art.title}</h3>
                <p class="text-slate-500 text-sm line-clamp-2">${art.description}</p>
            </div>
            <div class="px-4 py-4 border-t border-slate-50 dark:border-white/5 mt-auto flex justify-between items-center group-hover:bg-blue-50/50 dark:group-hover:bg-blue-900/20 rounded-b-3xl transition-colors">
                <span class="text-[9px] font-black uppercase text-slate-400 dark:text-slate-500">Acceder al Reporte</span>
                <div class="w-8 h-8 rounded-full bg-slate-100 dark:bg-card-dark flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all" aria-hidden="true">→</div>
            </div>
        </article>
    `).join('');
}

// --- Carrusel ---
function initCarousel() {
    const track = document.getElementById('carouselTrack');
    const featured = news.articles.slice(0, 5);
    track.innerHTML = featured.map(art => `
        <div class="min-w-full h-[400px] relative cursor-pointer group" 
             role="link" tabindex="0"
             onclick="window.open('${art.url}', '_blank')">
            <img src="${art.urlToImage}" class="w-full h-full object-cover rounded-[2.5rem]" alt="${art.title}">
            <div class="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent rounded-[2.5rem]"></div>
            <div class="absolute bottom-12 left-12 right-12 text-white">
                <span class="bg-citrus-yellow text-blue-900 px-4 py-1 rounded-full text-[10px] font-black uppercase mb-4 inline-block tracking-tighter">${art.category}</span>
                <h3 class="text-4xl font-black leading-tight max-w-2xl mb-4 group-hover:text-citrus-yellow transition-colors">${art.title}</h3>
                <p class="text-white/70 max-w-lg line-clamp-2">${art.description}</p>
            </div>
        </div>
    `).join('');
}

function moveCarousel(dir) {
    const track = document.getElementById('carouselTrack');
    currentCarouselIndex = (currentCarouselIndex + dir + 5) % 5;
    track.style.transform = `translateX(-${currentCarouselIndex * 100}%)`;
}

// --- Otros Controles ---
function toggleDarkMode(force) {
    if (force) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    }
}

// --- Eventos ---
document.querySelectorAll('.category-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const cat = e.currentTarget.dataset.category;
        fetchNews(cat, e);
        document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
        e.currentTarget.classList.add('active');
    });
});

document.getElementById('searchInput').addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    document.querySelectorAll('.news-card').forEach(card => {
        card.style.display = card.innerText.toLowerCase().includes(term) ? 'flex' : 'none';
    });
});

// Inicialización
window.onload = () => {
    if (localStorage.getItem('theme') === 'dark') toggleDarkMode(true);
    initCarousel();
    fetchNews();
    setInterval(() => moveCarousel(1), 10000); // Cambio automático cada 10s
};
