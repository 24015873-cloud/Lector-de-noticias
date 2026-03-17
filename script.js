const newsData = {
    articles: [
        {
            "title": "Anthropic, la empresa de IA que se enfrentó al Pentágono",
            "description": "Una batalla tecnológica que muestra cómo la inteligencia artificial está cambiando la política global.",
            "urlToImage": "https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/4730/live/ef3437a0-1f1f-11f1-a600-6bf0292beaaf.jpg.webp",
            "source": { "name": "BBC Mundo" },
            "url": "https://www.bbc.com/mundo/articles/cddnjd34p7no",
            "category": "ciencia"
        },
        {
            "title": "Cómo nació la histórica rivalidad entre EE.UU. y Cuba",
            "description": "Una revisión histórica sobre el origen de una de las rivalidades geopolíticas más prolongadas.",
            "urlToImage": "https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/5a15/live/dd561510-1cc4-11f1-a77f-65f2fdb37c23.jpg.webp",
            "source": { "name": "BBC Mundo" },
            "url": "https://www.bbc.com/mundo/articles/cq6q15rdrqeo",
            "category": "mundo"
        },
        {
            "title": "Artemis II: el primer vuelo tripulado del programa lunar",
            "description": "El programa Artemis prepara el regreso de astronautas a la órbita lunar.",
            "urlToImage": "https://images-assets.nasa.gov/image/KSC-20230920-PH-FMX01_0467/KSC-20230920-PH-FMX01_0467~large.jpg",
            "source": { "name": "NASA" },
            "url": "https://www.nasa.gov/mission/artemis-ii/",
            "category": "ciencia"
        },
        {
            "title": "Guanajuato define selección de clavados",
            "description": "Delegación de Guanajuato se prepara para competir en la Olimpiada Nacional 2026.",
            "urlToImage": "https://i0.wp.com/s3-am-btat-server.s3.amazonaws.com/wp-content/uploads/2026/03/clavados_gto_11.jpg",
            "source": { "name": "Periódico AM" },
            "url": "https://www.am.com.mx/superdeportivo/2026/03/15/guanajuato-define-seleccion-de-clavados-tras-exitoso-selectivo-nacional-en-leon-1764966.html",
            "category": "mexico"
        },
        {
            "title": "El sistema eléctrico de Cuba sufre un colapso total",
            "description": "Un apagón generalizado afectó a millones de personas en Cuba.",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/c-gettyimages-2264256020-20260316192944750.jpg",
            "source": { "name": "CNN en Español" },
            "url": "https://cnnespanol.cnn.com/2026/03/16/latinoamerica/sistema-electrico-cuba-colapso-total-trax",
            "category": "mundo"
        },
        {
            "title": "Felipe VI reconoce abusos durante la Conquista",
            "description": "El rey de España reconoció los abusos ocurridos durante la conquista de México.",
            "urlToImage": "https://images.milenio.com/2iEa9y7vSL45zy_bTJ19iIcGljQ=/345x194/uploads/media/2026/03/16/rey-espana-exposicion-mitad-mundo.jpg",
            "source": { "name": "Milenio" },
            "url": "https://www.milenio.com/internacional/rey-espana-reconoce-abuso-conquista-mexico",
            "category": "mundo"
        },
        {
            "title": "Oscar 2026: lista completa de ganadores",
            "description": "La ceremonia reconoció a las mejores producciones cinematográficas.",
            "urlToImage": "https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/e7dc/live/ff01d740-215a-11f1-b539-43e5d7f861d2.jpg.webp",
            "source": { "name": "BBC Mundo" },
            "url": "https://www.bbc.com/mundo/articles/cx2rw9gg189o",
            "category": "cultura"
        },
        {
            "title": "Escasez de energía en Bangladés",
            "description": "El conflicto regional afecta el mercado energético global.",
            "urlToImage": "https://static01.nyt.com/images/2026/03/16/espanol/16Biz-Iran-Bangladesh-02-wlvm-ES-copy1/16Biz-Iran-Bangladesh-02-wlvm-superJumbo.jpg",
            "source": { "name": "The New York Times" },
            "url": "https://www.nytimes.com/es/2026/03/16/espanol/negocios/guerra-iran-escasez-energia.html",
            "category": "mundo"
        },
        {
            "title": "ADN de Leonardo da Vinci",
            "description": "Investigadores intentan descifrar el ADN del polímata italiano.",
            "urlToImage": "https://static.nationalgeographicla.com/files/styles/image_3200/public/karinaswabbing.png.webp",
            "source": { "name": "National Geographic" },
            "url": "https://www.nationalgeographicla.com/ciencia/2026/03/un-paso-mas-cerca-de-descifrar-el-verdadero-codigo-da-vinci",
            "category": "ciencia"
        },
        {
            "title": "Caminar mejora la digestión",
            "description": "Caminar unos minutos después de comer mejora la digestión y el metabolismo.",
            "urlToImage": "https://static.nationalgeographicla.com/files/styles/image_3200/public/gettyimages-1448002372.webp",
            "source": { "name": "National Geographic" },
            "url": "https://www.nationalgeographicla.com/salud/2026/03/caminar-despues-de-comer",
            "category": "salud"
        }
    ]
};

let currentSlide = 0;
const cursor = document.getElementById('custom-cursor');

// --- Seguimiento del Cursor ---
document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
});

// --- Partículas ---
function createBurst(x, y) {
    for (let i = 0; i < 10; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        p.innerHTML = '✨';
        p.style.left = `${x}px`;
        p.style.top = `${y}px`;
        const dx = (Math.random() - 0.5) * 200;
        const dy = (Math.random() - 0.5) * 200;
        p.style.setProperty('--dx', `${dx}px`);
        p.style.setProperty('--dy', `${dy}px`);
        document.body.appendChild(p);
        setTimeout(() => p.remove(), 1000);
    }
}

// --- Renderizado ---
function renderNews(category = 'all') {
    const grid = document.getElementById('newsGrid');
    const filtered = category === 'all' ? newsData.articles : newsData.articles.filter(a => a.category === category);
    
    grid.innerHTML = filtered.map(art => `
        <article class="news-card rounded-[2.5rem] p-5 shadow-lg flex flex-col cursor-pointer" onclick="window.open('${art.url}','_blank')">
            <img src="${art.urlToImage}" class="h-48 w-full object-cover rounded-[2rem] mb-4" alt="Imagen">
            <span class="text-[10px] font-bold text-blue-600 mb-2">${art.source.name}</span>
            <h3 class="text-lg font-bold leading-tight mb-2">${art.title}</h3>
            <p class="text-gray-500 text-sm line-clamp-2">${art.description}</p>
        </article>
    `).join('');
}

function initCarousel() {
    const track = document.getElementById('carouselTrack');
    const featured = newsData.articles.slice(0, 5);
    track.innerHTML = featured.map(art => `
        <div class="min-w-full h-[400px] relative cursor-pointer" onclick="window.open('${art.url}','_blank')">
            <img src="${art.urlToImage}" class="w-full h-full object-cover rounded-[2.5rem]" alt="img">
            <div class="absolute inset-0 bg-black/40 rounded-[2.5rem]"></div>
            <div class="absolute bottom-10 left-10 right-10 text-white">
                <h3 class="text-3xl font-black">${art.title}</h3>
            </div>
        </div>
    `).join('');
}

function moveCarousel(dir) {
    const track = document.getElementById('carouselTrack');
    currentSlide = (currentSlide + dir + 5) % 5;
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function fetchNews(cat, e) {
    if (e) createBurst(e.clientX, e.clientY);
    renderNews(cat);
}

function toggleDarkMode(isDark) {
    if (isDark) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
}

// --- Inicialización Arreglada ---
document.addEventListener('DOMContentLoaded', () => {
    initCarousel();
    renderNews();

    // Eventos de Categoría
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            fetchNews(btn.dataset.category, e);
        });
    });

    // Buscador
    document.getElementById('searchInput').addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        document.querySelectorAll('.news-card').forEach(card => {
            const visible = card.innerText.toLowerCase().includes(term);
            card.style.display = visible ? 'flex' : 'none';
        });
    });
});
