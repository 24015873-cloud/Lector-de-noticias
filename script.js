const newsGrid=document.getElementById("newsGrid")
const statusMessage=document.getElementById("statusMessage")
const searchInput=document.getElementById("searchInput")
const refreshBtn=document.getElementById("refreshBtn")

const mockNews={
articles:[

{
"title":"Anthropic, la empresa de IA que se enfrentó al Pentágono en EE.UU. y por qué esto nos concierne a todos",
"description":"Mientras el mundo observaba la operación estadounidense en Venezuela y cómo la guerra con Irán se hacía inevitable, en Washington se desarrollaba una batalla tecnológica que muestra cómo la inteligencia artificial está cambiando la política global.",
"urlToImage":"https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/4730/live/ef3437a0-1f1f-11f1-a600-6bf0292beaaf.jpg.webp",
"source":{"name":"BBC Mundo"},
"publishedAt":"2026-03-16T09:00:00Z",
"url":"https://www.bbc.com/mundo/articles/cddnjd34p7no",
"category":"ciencia"
},

{
"title":"Cómo nació la histórica rivalidad entre EE.UU. y Cuba",
"description":"Una revisión histórica sobre el origen de una de las rivalidades geopolíticas más prolongadas del mundo moderno entre Estados Unidos y Cuba.",
"urlToImage":"https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/5a15/live/dd561510-1cc4-11f1-a77f-65f2fdb37c23.jpg.webp",
"source":{"name":"BBC Mundo"},
"publishedAt":"2026-03-15T10:00:00Z",
"url":"https://www.bbc.com/mundo/articles/cq6q15rdrqeo",
"category":"mundo"
},

{
"title":"Artemis II: el primer vuelo tripulado del programa lunar de la NASA",
"description":"El programa Artemis prepara el regreso de astronautas a la órbita lunar como paso previo para futuras misiones humanas hacia Marte.",
"urlToImage":"https://images-assets.nasa.gov/image/KSC-20230920-PH-FMX01_0467/KSC-20230920-PH-FMX01_0467~large.jpg",
"source":{"name":"NASA"},
"publishedAt":"2026-03-12T08:30:00Z",
"url":"https://www.nasa.gov/mission/artemis-ii/",
"category":"ciencia"
},

{
"title":"Guanajuato define selección de clavados tras exitoso Selectivo Nacional en León",
"description":"Con la clasificación de Franco Frausto y Natalia Núñez, la delegación de Guanajuato se prepara para competir en la Olimpiada Nacional 2026.",
"urlToImage":"https://i0.wp.com/s3-am-btat-server.s3.amazonaws.com/wp-content/uploads/2026/03/clavados_gto_11.jpg",
"source":{"name":"Periódico AM"},
"publishedAt":"2026-03-16T07:45:00Z",
"url":"https://www.am.com.mx/superdeportivo/2026/03/15/guanajuato-define-seleccion-de-clavados-tras-exitoso-selectivo-nacional-en-leon-1764966.html",
"category":"mexico"
},

{
"title":"El sistema eléctrico de Cuba sufre un colapso total",
"description":"Un apagón generalizado afectó a millones de personas en Cuba tras una falla en el sistema energético nacional.",
"urlToImage":"https://media.cnn.com/api/v1/images/stellar/prod/c-gettyimages-2264256020-20260316192944750.jpg",
"source":{"name":"CNN en Español"},
"publishedAt":"2026-03-16T14:00:00Z",
"url":"https://cnnespanol.cnn.com/2026/03/16/latinoamerica/sistema-electrico-cuba-colapso-total-trax",
"category":"mundo"
},

{
"title":"Felipe VI reconoce abusos durante la Conquista de México",
"description":"Durante una exposición histórica, el rey de España Felipe VI reconoció los abusos ocurridos durante la conquista del territorio mexicano.",
"urlToImage":"https://images.milenio.com/2iEa9y7vSL45zy_bTJ19iIcGljQ=/345x194/uploads/media/2026/03/16/rey-espana-exposicion-mitad-mundo.jpg",
"source":{"name":"Milenio"},
"publishedAt":"2026-03-16T12:30:00Z",
"url":"https://www.milenio.com/internacional/rey-espana-reconoce-abuso-conquista-mexico",
"category":"mundo"
},

{
"title":"Oscar 2026: lista completa de ganadores de la Academia",
"description":"La ceremonia de los premios Oscar 2026 reconoció a las mejores producciones cinematográficas del año.",
"urlToImage":"https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/e7dc/live/ff01d740-215a-11f1-b539-43e5d7f861d2.jpg.webp",
"source":{"name":"BBC Mundo"},
"publishedAt":"2026-03-16T05:00:00Z",
"url":"https://www.bbc.com/mundo/articles/cx2rw9gg189o",
"category":"cultura"
},

{
"title":"La guerra en el Golfo complica el suministro de energía en Bangladés",
"description":"El conflicto regional afecta el mercado energético global y complica el abastecimiento eléctrico en varios países asiáticos.",
"urlToImage":"https://static01.nyt.com/images/2026/03/16/espanol/16Biz-Iran-Bangladesh-02-wlvm-ES-copy1/16Biz-Iran-Bangladesh-02-wlvm-superJumbo.jpg",
"source":{"name":"The New York Times"},
"publishedAt":"2026-03-16T06:30:00Z",
"url":"https://www.nytimes.com/es/2026/03/16/espanol/negocios/guerra-iran-escasez-energia.html",
"category":"mundo"
},

{
"title":"Científicos buscan pistas sobre el ADN de Leonardo da Vinci",
"description":"Investigadores intentan descifrar el ADN del polímata italiano para comprender mejor su vida.",
"urlToImage":"https://static.nationalgeographicla.com/files/styles/image_3200/public/karinaswabbing.png.webp",
"source":{"name":"National Geographic"},
"publishedAt":"2026-03-16T08:00:00Z",
"url":"https://www.nationalgeographicla.com/ciencia/2026/03/un-paso-mas-cerca-de-descifrar-el-verdadero-codigo-da-vinci",
"category":"ciencia"
},

{
"title":"Caminar después de comer mejora la respuesta del cuerpo a los alimentos",
"description":"Estudios científicos muestran que caminar unos minutos después de comer puede mejorar la digestión y el metabolismo.",
"urlToImage":"https://static.nationalgeographicla.com/files/styles/image_3200/public/gettyimages-1448002372.webp",
"source":{"name":"National Geographic"},
"publishedAt":"2026-03-16T07:00:00Z",
"url":"https://www.nationalgeographicla.com/salud/2026/03/caminar-despues-de-comer",
"category":"salud"
}

]}

function renderNews(articles){

newsGrid.innerHTML=""

articles
.sort((a,b)=>new Date(b.publishedAt)-new Date(a.publishedAt))
.forEach(article=>{

const date=new Date(article.publishedAt)
.toLocaleDateString("es-ES",{day:"numeric",month:"short"})

const card=`

<article class="news-card">

<div class="image-container">

<img src="${article.urlToImage}">

<span class="category-tag tag-${article.category}">
${article.category}
</span>

</div>

<div class="content">

<div class="meta">

<span>${article.source.name}</span>

<span>${date}</span>

</div>

<h3>${article.title}</h3>

<p>${article.description}</p>

<a href="${article.url}" target="_blank">
Ir a la fuente
</a>

</div>

</article>
`

newsGrid.insertAdjacentHTML("beforeend",card)

})

}

function fetchNews(category="all"){

statusMessage.style.display="block"

setTimeout(()=>{

const filtered=category==="all"
?mockNews.articles
:mockNews.articles.filter(a=>a.category===category)

renderNews(filtered)

statusMessage.style.display="none"

},500)

}

document.querySelectorAll(".category-btn")
.forEach(btn=>{

btn.addEventListener("click",e=>{

document.querySelectorAll(".category-btn")
.forEach(b=>b.classList.remove("active"))

e.target.classList.add("active")

fetchNews(e.target.dataset.category)

})

})

searchInput.addEventListener("input",e=>{

const term=e.target.value.toLowerCase()

document.querySelectorAll(".news-card")
.forEach(card=>{

card.style.display=
card.innerText.toLowerCase().includes(term)
?"flex"
:"none"

})

})

refreshBtn.addEventListener("click",()=>fetchNews())

window.onload=()=>fetchNews()
