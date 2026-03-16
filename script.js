/**
 * Datos de las noticias (Simulación de JSON/AJAX)
 */
const mockNews = {
    "articles": [
        {
            "title": "Anthropic, la empresa de IA que se enfrentó al Pentágono en EE.UU. y por qué esto nos concierne a todos'",
            "description": "Mientras el mundo observaba la operación estadounidense en Venezuela y cómo la guerra con Irán se hacía inevitable, en Washington se iba fraguando una batalla que advertía que el futuro profetizado durante siglos ya es presente.",
            "urlToImage": "https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/4730/live/ef3437a0-1f1f-11f1-a600-6bf0292beaaf.jpg.webp",
            "source": { "name": "BBC Mundo" },
            "publishedAt": "2026-03-16T09:00:00Z",
            "url": "https://www.bbc.com/mundo/articles/cddnjd34p7no",
            "category": "Ciencia"
        },
        {
            "title": "Cómo nació la histórica rivalidad entre EE.UU. y Cuba",
            "description": "Es una de las rivalidades más longevas de la historia contemporánea. El país más poderoso del mundo frente a una isla de menos de 10 millones de habitantes.",
            "urlToImage": "https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/5a15/live/dd561510-1cc4-11f1-a77f-65f2fdb37c23.jpg.webp",
            "source": { "name": "BBC NEWS mundo" },
            "publishedAt": "2026-03-15T10:00:00Z",
            "url": "https://www.bbc.com/mundo/articles/cq6q15rdrqeo",
            "category": "Mundo"
        },
        {
            "title": "Artemis II",
            "description": "El primer vuelo tripulado del programa Artemis supone un paso clave hacia el regreso a largo plazo a la Luna y las futuras misiones a Marte.",
            "urlToImage": "https://images-assets.nasa.gov/image/KSC-20230920-PH-FMX01_0467/KSC-20230920-PH-FMX01_0467~large.jpg?w=1536&h=1024&fit=crop&crop=faces%2Cfocalpoint",
            "source": { "name": "NASA" },
            "publishedAt": "2026-03-12T08:30:00Z",
            "url": "https://www.nasa.gov/mission/artemis-ii/",
            "category": "Mundo"
        },
        {
            "title": "DGuanajuato define selección de clavados tras exitoso Selectivo Nacional en León",
            "description": "Con la clasificación de figuras como Franco Frausto y Natalia Núñez, la delegación estatal se prepara para defender su podio nacional en la próxima Olimpiada Nacional 2026.",
            "urlToImage": "https://i0.wp.com/s3-am-btat-server.s3.amazonaws.com/wp-content/uploads/2026/03/clavados_gto_11.jpg",
            "source": { "name": "Periódico AM" },
            "publishedAt": "2026-03-16T07:45:00Z",
            "url": "https://www.am.com.mx/superdeportivo/2026/03/15/guanajuato-define-seleccion-de-clavados-tras-exitoso-selectivo-nacional-en-leon-1764966.html",
            "category": "mexico" "educación"
        },
        {
            "title": "El renacimiento de las lenguas indígenas en las escuelas",
            "description": "Programas bilingües en México y Sudamérica están logrando que nuevas generaciones retomen el uso de lenguas nativas en peligro de extinción.",
            "urlToImage": "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=60",
            "source": { "name": "BBC Mundo" },
            "publishedAt": "2026-03-16T11:20:00Z",
            "url": "https://www.bbc.com/mundo",
            "category": "educacion"
        },
        {
            "title": "La carrera por la energía de fusión nuclear",
            "description": "Científicos europeos anuncian un récord de duración en el mantenimiento de plasma, acercándonos a una fuente de energía limpia e ilimitada.",
            "urlToImage": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=60",
            "source": { "name": "The New York Times" },
            "publishedAt": "2026-03-16T12:00:00Z",
            "url": "https://www.nytimes.com",
            "category": "ciencia"
        },
        {
            "title": "Protección de santuarios de la mariposa monarca",
            "description": "Autoridades mexicanas refuerzan la vigilancia en Michoacán para evitar la tala clandestina y asegurar el hábitat del insecto migratorio.",
            "urlToImage": "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=800&q=60",
            "source": { "name": "Sol de México" },
            "publishedAt": "2026-03-16T06:15:00Z",
            "url": "https://oem.com.mx/elsoldemexico",
            "category": "mexico"
        },
        {
            "title": "Infraestructura vial: El reto de la movilidad urbana",
            "description": "Análisis sobre los proyectos de transporte público masivo que buscan reducir el tráfico y la contaminación en las zonas metropolitanas.",
            "urlToImage": "https://images.unsplash.com/photo-1545147986-a9d6f210df77?auto=format&fit=crop&w=800&q=60",
            "source": { "name": "Periódico AM" },
            "publishedAt": "2026-03-15T22:00:00Z",
            "url": "https://www.am.com.mx",
            "category": "mexico"
        },
        {
            "title": "La geopolítica del Ártico: Nuevas rutas comerciales",
            "description": "El deshielo polar está abriendo pasos marítimos que podrían cambiar el comercio global entre Asia y Europa de forma radical.",
            "urlToImage": "https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?auto=format&fit=crop&w=800&q=60",
            "source": { "name": "BBC Mundo" },
            "publishedAt": "2026-03-16T05:00:00Z",
            "url": "https://www.bbc.com/mundo",
            "category": "mundo"
        },
        {
            "title": "Neurociencia: El impacto del sueño en el aprendizaje",
            "description": "Un nuevo estudio demuestra que las siestas cortas durante el horario escolar mejoran la retención de información en estudiantes de secundaria.",
            "urlToImage": "https://images.unsplash.com/photo-1541170716948-9944963bf774?auto=format&fit=crop&w=800&q=60",
            "source": { "name": "The New York Times" },
            "publishedAt": "2026-03-16T08:00:00Z",
            "url": "https://www.nytimes.com",
            "category": "educacion"
        }
    ]
};

// Referencias al DOM
const newsGrid = document.getElementById('newsGrid');
const statusMessage = document.getElementById('statusMessage');
const body = document.getElementById('appBody');
const searchInput = document.getElementById('searchInput');
const refreshBtn = document.getElementById('refreshBtn');

/**
 * Cambia el tema visual de la aplicación
 * @param {string} themeName 
 */
function setTheme(themeName) {
    body.className = themeName + ' min-h-screen';
}

/**
 * Filtra y renderiza las noticias
 * @param {string} category 
 */
async function fetchNews(category = 'all') {
    statusMessage.classList.remove('hidden');
    newsGrid.style.opacity = '0.3';
    
    // Simulación de retraso de red
    await new Promise(resolve => setTimeout(resolve, 600));
    
    const filtered = category === 'all' 
        ? mockNews.articles 
        : mockNews.articles.filter(a => a.category === category);
    
    renderNews(filtered);
    statusMessage.classList.add('hidden');
    newsGrid.style.opacity = '1';
}

/**
 * Genera el HTML de las tarjetas de noticias
 * @param {Array} articles 
 */
function renderNews(articles) {
    newsGrid.innerHTML = '';
    articles.forEach(article => {
        const date = new Date(article.publishedAt).toLocaleDateString('es-ES', { day: 'numeric', month: 'short' });
        const card = `
            <article class="news-card rounded-lg overflow-hidden shadow-md flex flex-col border border-transparent">
                <div class="relative h-48 overflow-hidden">
                    <img src="${article.urlToImage}" alt="${article.title}" class="w-full h-full object-cover">
                    <span class="absolute top-4 left-4 bg-black/70 text-white text-[9px] px-2 py-1 rounded uppercase tracking-[0.2em] font-black">${article.category}</span>
                </div>
                <div class="p-6 flex-grow">
                    <div class="flex justify-between items-center mb-3">
                        <span class="text-[10px] font-black uppercase text-indigo-600 tracking-wider border-b-2 border-current">${article.source.name}</span>
                        <span class="text-[10px] opacity-50 font-bold uppercase">${date}</span>
                    </div>
                    <h3 class="text-lg font-bold leading-tight mb-3">${article.title}</h3>
                    <p class="text-sm opacity-70 leading-relaxed mb-4">${article.description}</p>
                </div>
                <div class="px-6 pb-6 mt-auto">
                    <a href="${article.url}" target="_blank" class="accent-btn block w-full text-center py-3 rounded text-[10px] font-black uppercase tracking-widest hover:shadow-lg">Ir a la fuente</a>
                </div>
            </article>
        `;
        newsGrid.insertAdjacentHTML('beforeend', card);
    });
}

// Event Listeners para Categorías
document.querySelectorAll('.category-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        fetchNews(e.target.dataset.category);
        document.querySelectorAll('.category-btn').forEach(b => {
            b.classList.remove('accent-btn');
            b.classList.add('bg-white/50');
        });
        e.target.classList.add('accent-btn');
    });
});

// Event Listener para Búsqueda en tiempo real
searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    document.querySelectorAll('.news-card').forEach(card => {
        card.style.display = card.innerText.toLowerCase().includes(term) ? 'flex' : 'none';
    });
});

// Event Listeners para cambio de tema
document.getElementById('btn-prof').addEventListener('click', () => setTheme('theme-professional'));
document.getElementById('btn-mod').addEventListener('click', () => setTheme('theme-modern'));
document.getElementById('btn-dark').addEventListener('click', () => setTheme('theme-dark'));

// Botón de actualizar
refreshBtn.addEventListener('click', () => fetchNews());

// Carga inicial
window.onload = () => fetchNews();
