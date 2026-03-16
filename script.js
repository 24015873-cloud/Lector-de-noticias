https://api.spaceflightnewsapi.net/v4/articles
const container = document.getElementById("news-container");
const refreshBtn = document.getElementById("refresh");

async function cargarNoticias(){

container.innerHTML = "<p>Cargando noticias...</p>";

try{

const respuesta = await fetch("https://api.spaceflightnewsapi.net/v4/articles");

if(!respuesta.ok){
throw new Error("No se pudieron obtener las noticias");
}

const datos = await respuesta.json();

mostrarNoticias(datos.results);

}catch(error){

container.innerHTML = "<p>Error al cargar noticias 😢</p>";
console.error(error);

}

}

function mostrarNoticias(noticias){

container.innerHTML = "";

if(noticias.length === 0){
container.innerHTML = "<p>No hay noticias disponibles</p>";
return;
}

noticias.slice(0,6).forEach(noticia => {

const div = document.createElement("div");
div.classList.add("news");

div.innerHTML = `
<h3>${noticia.title}</h3>
<p>${noticia.summary.substring(0,120)}...</p>
<a href="${noticia.url}" target="_blank">Leer noticia completa</a>
`;

container.appendChild(div);

});

}

refreshBtn.addEventListener("click", cargarNoticias);

cargarNoticias();
