import { API_SERVER, API_SERVER2, API_SERVER3 } from "./constantes.js";


// esto solo se usa en la api original que trae las peliculas aclamadas
const options = {
    method: 'GET', // Método de la petición (GET)
    headers: {
        accept: 'application/json', // Tipo de respuesta esperada (JSON)
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYTJjYTAwZDYxZWIzOTEyYjZlNzc4MDA4YWQ3ZmNjOCIsInN1YiI6IjYyODJmNmYwMTQ5NTY1MDA2NmI1NjlhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4MJSPDJhhpbHHJyNYBtH_uCZh4o0e3xGhZpcBIDy-Y8'
    }
};
// Función para cargar películas en la cuadrícula de tendencias
const cargarPeliculasTendencia = async (page = 1) => {
    // Realizamos una petición fetch a la API para obtener las películas populares
    const response = await fetch(`${API_SERVER}`, { mode: 'cors' });

    const data = await response.json();// Convertimos la respuesta a JSON
    const movies = data;               // Extraemos las películas de la respuesta
    const tendenciasContainer = document.querySelector('.peliculasTendencia .peliculas');// Seleccionamos el contenedor de películas de tendencia en el DOM, la section que tiene dentro el div peliculas
    tendenciasContainer.innerHTML = '';// Limpiamos el contenido previo del contenedor


    //* Iteramos sobre cada película obtenida y creamos los elementos HTML para mostrar la película teniendo que en 
    // cuenta que se debe respetar la siguiente estructura por los estilos:
    movies.forEach(movie => {
         // creo el ancla
        const ancla = document.createElement('a');
        ancla.href = `./pages/detalle.html`;
        // creo el div pelicula
        ancla.addEventListener('click', (e) => {
            e.preventDefault();
            localStorage.setItem('pelicula-detalle', JSON.stringify(movie));//guardo en localstorage la pelicula que le hice click
            window.location.href = ancla.href;// la muestro en detalle.html
        });

        const pelicula = document.createElement('div');
        pelicula.classList.add('pelicula');
         // creo la imagen
        const img = document.createElement('img');
        img.classList.add('imgTendencia');
        img.src = `${API_SERVER}/${movie.img_url}`;
        img.alt = movie.title;
        img.loading = 'lazy';
         // creo el div tituloPelicula
        const tituloPelicula = document.createElement('div');
        tituloPelicula.classList.add('tituloPelicula');
        // creo el h4
        const titulo = document.createElement('h4');
        titulo.textContent = movie.titulo;
        // relaciono los elementos
        ancla.appendChild(pelicula);
        pelicula.appendChild(img);;//<-------- aca debe ir la url de la imagen desde la columna img de la bbdd
        pelicula.appendChild(tituloPelicula);
        tituloPelicula.appendChild(titulo);//<-----   aca va el nombre de la columna "titulo" de la bbdd
        tendenciasContainer.appendChild(ancla);
    });
  // Actualizamos el atributo data-page con el número de página actual
    tendenciasContainer.parentElement.setAttribute('data-page', page);
};

// Función para cargar películas en el carrusel de películas aclamadas
const cargarPeliculasAclamadas = async () => {
      // Realizamos una petición fetch a la API para obtener las películas más aclamadas
    const response = await fetch(`${API_SERVER2}/movie/top_rated`, options);

    const data = await response.json();// Convertimos la respuesta a JSON
    const movies = data.results;// Extraemos las películas de la respuesta
    const aclamadasContainer = document.querySelector('.aclamadas');// Seleccionamos el contenedor de películas aclamadas en el DOM
    
    // Iteramos sobre cada película obtenida para lograr la estructura de html que pongo a continuación:
    movies.forEach(movie => {
           // creo el div peliculaItem
        const peliculaItem = document.createElement('div');
        peliculaItem.classList.add('peliculaItem');
         // creo la imagen
        const img = document.createElement('img');
        img.classList.add('imgAclamada');
        img.src = `${API_SERVER3}${movie.poster_path}`;
        img.alt = movie.title;
        img.loading = 'lazy';
           // relaciono los elementos
        peliculaItem.appendChild(img);
        aclamadasContainer.appendChild(peliculaItem);
    });
};

const botonAnterior = document.getElementById('botonAnterior');
const botonSiguiente = document.getElementById('botonSiguiente');
const seccionTendencias = document.getElementById('tendencias');

// Event listener para el botón "Anterior"
botonAnterior.addEventListener('click', () => {
    // Obtener el número de página actual
    let currentPage = Number(seccionTendencias.getAttribute('data-page'));
     // Si es la primera página, no hacemos nada
    if (currentPage <= 1) return;
     // Cargar las películas de la página anterior
    cargarPeliculasTendencia(currentPage - 1);
});

// Event listener para el botón "Siguiente"
botonSiguiente.addEventListener('click', () => {
    // Obtener el número de página actual
    let currentPage = Number(seccionTendencias.getAttribute('data-page'));
    // Cargar las películas de la página siguiente
    cargarPeliculasTendencia(currentPage + 1);
});

// Ejecutamos las funciones de carga de películas al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    // Cargamos las películas en la cuadrícula de tendencias
    cargarPeliculasTendencia();
    // Cargamos las películas en el carrusel de películas aclamadas
    cargarPeliculasAclamadas();
});
