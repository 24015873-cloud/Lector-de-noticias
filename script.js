/**
 * Datos de las noticias (Simulación de JSON/AJAX)
 */
const mockNews = {
    "articles": [
        {
            "title": "El misterio de los agujeros negros 'errantes'",
            "description": "Nuevas investigaciones astronómicas sugieren que miles de agujeros negros podrían estar viajando por el espacio sin una galaxia anfitriona.",
            "urlToImage": "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=800&q=60",
            "source": { "name": "BBC Mundo" },
            "publishedAt": "2026-03-16T09:00:00Z",
            "url": "https://www.bbc.com/mundo",
            "category": "ciencia"
        },
        {
            "title": "Cómo la inteligencia artificial está reescribiendo la arqueología",
            "description": "Herramientas de IA han permitido identificar ciudades perdidas en la selva amazónica sin necesidad de excavaciones iniciales.",
            "urlToImage": "https://images.unsplash.com/photo-1599110364868-3641fdd91883?auto=format&fit=crop&w=800&q=60",
            "source": { "name": "The New York Times" },
            "publishedAt": "2026-03-16T10:00:00Z",
            "url": "https://www.nytimes.com",
            "category": "educacion"
        },
        {
            "title": "Inflación en México: El costo de la canasta básica en 2026",
            "description": "Un reporte detallado sobre cómo los precios de productos esenciales han variado en las principales ciudades del país durante el primer trimestre.",
            "urlToImage": "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=60",
            "source": { "name": "Sol de México" },
            "publishedAt": "2026-03-16T08:30:00Z",
            "url": "https://oem.com.mx/elsoldemexico",
            "category": "mexico"
        },
        {
            "title": "Desarrollo industrial en Guanajuato: Nuevas inversiones",
            "description": "El Bajío continúa consolidándose como el centro automotriz de América Latina con la llegada de tres nuevas plantas de componentes eléctricos.",
            "urlToImage": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=60",
            "source": { "name": "Periódico AM" },
            "publishedAt": "2026-03-16T07:45:00Z",
            "url": "https://www.am.com.mx",
            "category": "mexico"
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
