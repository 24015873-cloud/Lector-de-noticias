const newsGrid=document.getElementById('newsGrid')
const statusMessage=document.getElementById('statusMessage')
const body=document.getElementById('appBody')
const searchInput=document.getElementById('searchInput')
const refreshBtn=document.getElementById('refreshBtn')

const news={

articles:[

{
title:"Anthropic, la empresa de IA que se enfrentó al Pentágono",
description:"La inteligencia artificial está cambiando la política global.",
urlToImage:"https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/4730/live/ef3437a0-1f1f-11f1-a600-6bf0292beaaf.jpg.webp",
source:{name:"BBC Mundo"},
publishedAt:"2026-03-16T09:00:00Z",
url:"https://www.bbc.com/mundo/articles/cddnjd34p7no",
category:"ciencia"
},

{
title:"Cómo nació la rivalidad entre EE.UU. y Cuba",
description:"Una revisión histórica de uno de los conflictos más duraderos.",
urlToImage:"https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/5a15/live/dd561510-1cc4-11f1-a77f-65f2fdb37c23.jpg.webp",
source:{name:"BBC Mundo"},
publishedAt:"2026-03-15T10:00:00Z",
url:"https://www.bbc.com/mundo/articles/cq6q15rdrqeo",
category:"mundo"
},

{
title:"Artemis II: regreso de astronautas a la órbita lunar",
description:"La NASA prepara nuevas misiones humanas hacia Marte.",
urlToImage:"https://images-assets.nasa.gov/image/KSC-20230920-PH-FMX01_0467/KSC-20230920-PH-FMX01_0467~large.jpg",
source:{name:"NASA"},
publishedAt:"2026-03-12T08:30:00Z",
url:"https://www.nasa.gov/mission/artemis-ii/",
category:"ciencia"
},

{
title:"Oscar 2026: lista de ganadores",
description:"La ceremonia reconoció las mejores películas del año.",
urlToImage:"https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/e7dc/live/ff01d740-215a-11f1-b539-43e5d7f861d2.jpg.webp",
source:{name:"BBC Mundo"},
publishedAt:"2026-03-16T05:00:00Z",
url:"https://www.bbc.com/mundo/articles/cx2rw9gg189o",
category:"cultura"
}

]

}

function setTheme(name){
body.className=name+" min-h-screen"
}

function renderNews(articles){

newsGrid.innerHTML=""

articles.forEach(article=>{

const date=new Date(article.publishedAt)
.toLocaleDateString("es-ES",{day:'numeric',month:'short'})

const card=`

<article class="news-card rounded-lg overflow-hidden shadow-md flex flex-col">

<div class="relative h-48 overflow-hidden">

<img src="${article.urlToImage}" class="w-full h-full object-cover">

<span class="absolute top-4 left-4 bg-black/70 text-white text-[9px] px-2 py-1 rounded uppercase font-black">

${article.category}

</span>

</div>

<div class="p-6 flex-grow">

<div class="flex justify-between mb-3 text-xs font-bold">

<span>${article.source.name}</span>

<span>${date}</span>

</div>

<h3 class="text-lg font-bold mb-3">

${article.title}

</h3>

<p class="text-sm opacity-70">

${article.description}

</p>

</div>

<div class="px-6 pb-6">

<a href="${article.url}" target="_blank"
class="accent-btn block text-center py-3 rounded text-xs font-black uppercase">

Ir a la fuente

</a>

</div>

</article>
`

newsGrid.insertAdjacentHTML("beforeend",card)

})

}

function fetchNews(category="all"){

statusMessage.classList.remove("hidden")

setTimeout(()=>{

const filtered=category==="all"
?news.articles
:news.articles.filter(a=>a.category===category)

renderNews(filtered)

statusMessage.classList.add("hidden")

},500)

}

document.querySelectorAll(".category-btn").forEach(btn=>{

btn.addEventListener("click",e=>{

fetchNews(e.target.dataset.category)

})

})

searchInput.addEventListener("input",e=>{

const term=e.target.value.toLowerCase()

document.querySelectorAll(".news-card").forEach(card=>{

card.style.display=card.innerText.toLowerCase().includes(term)
?"flex"
:"none"

})

})

document.getElementById("btn-prof").onclick=()=>setTheme("theme-professional")
document.getElementById("btn-mod").onclick=()=>setTheme("theme-modern")
document.getElementById("btn-dark").onclick=()=>setTheme("theme-dark")

refreshBtn.onclick=()=>fetchNews()

window.onload=()=>fetchNews()
