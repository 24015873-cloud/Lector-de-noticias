// --- Base de Datos Actualizada ---
const news = {
    articles: [
        {
            "title": "Anthropic, la empresa de IA que se enfrentó al Pentágono",
            "description": "Cómo la inteligencia artificial está cambiando la política global en Washington y el mundo.",
            "urlToImage": "https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/4730/live/ef3437a0-1f1f-11f1-a600-6bf0292beaaf.jpg.webp",
            "source": { "name": "BBC Mundo" },
            "url": "https://www.bbc.com/mundo/articles/cddnjd34p7no",
            "category": "ciencia"
        },
        {
            "title": "Cómo nació la histórica rivalidad entre EE.UU. y Cuba",
            "description": "Revisión histórica sobre el origen de la rivalidad geopolítica más prolongada.",
            "urlToImage": "https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/5a15/live/dd561510-1cc4-11f1-a77f-65f2fdb37c23.jpg.webp",
            "source": { "name": "BBC Mundo" },
            "url": "https://www.bbc.com/mundo/articles/cq6q15rdrqeo",
            "category": "mundo"
        },
        {
            "title": "Artemis II: el primer vuelo tripulado del programa lunar",
            "description": "La NASA prepara el regreso de astronautas a la órbita lunar para misiones hacia Marte.",
            "urlToImage": "https://images-assets.nasa.gov/image/KSC-20230920-PH-FMX01_0467/KSC-20230920-PH-FMX01_0467~large.jpg",
            "source": { "name": "NASA" },
            "url": "https://www.nasa.gov/mission/artemis-ii/",
            "category": "ciencia"
        },
        {
            "title": "Guanajuato define selección de clavados en León",
            "description": "Franco Frausto y Natalia Núñez lideran la delegación para la Olimpiada Nacional 2026.",
            "urlToImage": "https://i0.wp.com/s3-am-btat-server.s3.amazonaws.com/wp-content/uploads/2026/03/clavados_gto_11.jpg",
            "source": { "name": "Periódico AM" },
            "url": "https://www.am.com.mx/superdeportivo/2026/03/15/guanajuato-define-seleccion-de-clavados-tras-exitoso-selectivo-nacional-en-leon-1764966.html",
            "category": "mexico"
        },
        {
            "title": "El sistema eléctrico de Cuba sufre un colapso total",
            "description": "Un apagón generalizado afectó a millones de personas tras falla en sistema energético.",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/c-gettyimages-2264256020-20260316192944750.jpg",
            "source": { "name": "CNN en Español" },
            "url": "https://cnnespanol.cnn.com/2026/03/16/latinoamerica/sistema-electrico-cuba-colapso-total-trax",
            "category": "mundo"
        },
        {
            "title": "Felipe VI reconoce abusos durante la Conquista",
            "description": "El rey de España reconoció los abusos históricos en el territorio mexicano.",
            "urlToImage": "https://images.milenio.com/2iEa9y7vSL45zy_bTJ19iIcGljQ=/345x194/uploads/media/2026/03/16/rey-espana-exposicion-mitad-mundo.jpg",
            "source": { "name": "Milenio" },
            "url": "https://www.milenio.com/internacional/rey-espana-reconoce-abuso-conquista-mexico",
            "category": "mundo"
        },
        {
            "title": "Oscar 2026: Lista completa de ganadores",
            "description": "La Academia reconoce a las mejores producciones cinematográficas del año.",
            "urlToImage": "https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/e7dc/live/ff01d740-215a-11f1-b539-43e5d7f861d2.jpg.webp",
            "source": { "name": "BBC Mundo" },
            "url": "https://www.bbc.com/mundo/articles/cx2rw9gg189o",
            "category": "cultura"
        },
        {
            "title": "Escasez de energía en Bangladés por guerra en el Golfo",
            "description": "Conflicto regional complica el abastecimiento eléctrico en varios países asiáticos.",
            "urlToImage": "https://static01.nyt.com/images/2026/03/16/espanol/16Biz-Iran-Bangladesh-02-wlvm-ES-copy1/16Biz-Iran-Bangladesh-02-wlvm-superJumbo.jpg",
            "source": { "name": "The New York Times" },
            "url": "https://www.nytimes.com/es/2026/03/16/espanol/negocios/guerra-iran-escasez-energia.html",
            "category": "mundo"
        },
        {
            "title": "Pistas sobre el ADN de Leonardo da Vinci",
            "description": "Investigadores buscan descifrar el ADN del polímata para comprender mejor su vida.",
            "urlToImage": "https://static.nationalgeographicla.com/files/styles/image_3200/public/karinaswabbing.png.webp",
            "source": { "name": "National Geographic" },
            "url": "https://www.nationalgeographicla.com/ciencia/2026/03/un-paso-mas-cerca-de-descifrar-el-verdadero-codigo-da-vinci",
            "category": "ciencia"
        },
        {
            "title": "Caminar después de comer mejora el metabolismo",
            "description": "Estudios científicos muestran beneficios digestivos por caminar unos minutos.",
            "urlToImage": "https://static.nationalgeographicla.com/files/styles/image_3200/public/gettyimages-1448002372.webp",
            "source": { "name": "National Geographic" },
            "url": "https://www.nationalgeographicla.com/salud/2026/03/caminar-despues-de-comer",
            "category": "salud"
        }
    ]
};

// --- Configuración de Emojis Temáticos ---
const themeConfig = {
    all: { emojis: ['✨', '🌟', '📰'], color: '#3b82f6' },
    salud: { emojis: ['❤️', '🩺', '🍎'], color: '#f43f5e' },
    ciencia: { emojis: ['🧪', '🧬', '⚛️', '🔬'], color: '#10b981' },
    mundo: { emojis: ['🌎', '🌍', '📡'], color: '#0ea5e9' },
    mexico: { emojis: ['🇲🇽', '🌵', '🌮'], color: '#f59e0b' },
    cultura: { emojis: ['🎭', '🎬', '🎨'], color: '#a855f7' }
};

let currentSlide = 0;
const cursor = document.getElementById('custom-cursor');

// --- Cursor Tracking ---
document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
});

// --- FX de Partículas ---
function createBurst(category, x, y) {
    const config = themeConfig[category] || themeConfig.all;
    for (let i = 0; i < 15; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        p.innerText = config.emojis[Math.floor(Math.random() * config.emojis.length)];
        p.style.left = `${x}px`;
        p.style.top = `${y}px`;
        p.style.fontSize = `${Math.random() * 1.5 + 1}rem`;
        
        const angle = Math.random() * Math.PI * 2;
        const dist = 100 + Math.random() * 150;
        p.style.setProperty('--dx', `${Math.cos(angle) * dist}px`);
        p.style.setProperty('--dy', `${Math.sin(angle) * dist}px`);
        p.style.setProperty('--dr', `${Math.random() * 720}deg`);
        
        document.body.appendChild(p);
        setTimeout(() => p.remove(), 1200);
    }
}

// --- Renderizado de Noticias ---
function renderNews(category = 'all') {
    const grid = document.getElementById('newsGrid');
    const filtered = category === 'all' ? news.articles : news.articles.filter(a => a.category === category);
    
    grid.innerHTML = filtered.map((art, i) => `
        <article class="news-card group flex flex-col cursor-pointer" onclick="window.open('${art.url}','_blank')">
            <div class="h-60 w-full overflow-hidden rounded-[2rem] mb-6">
                <img src="${art.urlToImage}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="img">
            </div>
            <div class="px-2 flex-grow">
                <span class="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-3 block">${art.source.name}</span>
                <h3 class="text-xl font-bold leading-tight mb-4 dark:text-white group-hover:text-blue-600 transition-colors">${art.title}</h3>
                <p class="text-slate-500 dark:text-slate-400 text-sm line-clamp-2">${art.description}</p>
            </div>
            <div class="mt-6 pt-4 border-t border-slate-50 dark:border-white/5 flex justify-between items-center opacity-60 group-hover:opacity-100 transition-opacity">
                <span class="text-[9px] font-black uppercase">Leer Informe</span>
                <span class="text-lg">→</span>
            </div>
        </article>
    `).join('');
}

// --- Carrusel ---
function initCarousel() {
    const track = document.getElementById('carouselTrack');
    const featured = news.articles.slice(0, 5);
    track.innerHTML = featured.map(art => `
        <div class="min-w-full h-[400px] relative cursor-pointer" onclick="window.open('${art.url}','_blank')">
            <img src="${art.urlToImage}" class="w-full h-full object-cover rounded-[2.5rem]" alt="img">
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent rounded-[2.5rem]"></div>
            <div class="absolute bottom-10 left-10 right-10 text-white">
                <span class="bg-citrus-yellow text-blue-900 px-3 py-1 rounded-full text-[10px] font-black mb-4 inline-block">${art.category}</span>
                <h3 class="text-4xl font-black max-w-2xl leading-none">${art.title}</h3>
            </div>
        </div>
    `).join('');
}

function moveCarousel(dir) {
    const track = document.getElementById('carouselTrack');
    currentSlide = (currentSlide + dir + 5) % 5;
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// --- Interacciones y Tema ---
function fetchNews(cat, e) {
    if (e) createBurst(cat, e.clientX, e.clientY);
    renderNews(cat);
}

function toggleDarkMode(isDark) {
    if (isDark) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    }
}

// --- Inicialización ---
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('theme') === 'dark') toggleDarkMode(true);
    
    initCarousel();
    renderNews();

    // Eventos de Navegación
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const cat = btn.dataset.category;
            document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            fetchNews(cat, e);
        });
    });

    // Filtro de Búsqueda
    document.getElementById('searchInput').addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        document.querySelectorAll('.news-card').forEach(card => {
            const match = card.innerText.toLowerCase().includes(term);
            card.style.display = match ? 'flex' : 'none';
        });
    });

    setInterval(() => moveCarousel(1), 8000);
});
