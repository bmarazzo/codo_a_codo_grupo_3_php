import { API_SERVER } from "./constantes.js";

document.addEventListener("DOMContentLoaded", function() {
    const peliculasContainer = document.getElementById('peliculas');
    const peliculasBuscadas = JSON.parse(localStorage.getItem('peliculasBuscadas'));

    if (peliculasBuscadas && peliculasBuscadas.length > 0) {
        peliculasBuscadas.forEach(pelicula => {
            const peliculaElement = document.createElement('div');
            peliculaElement.classList.add('pelicula');
            peliculaElement.innerHTML = `
                <h2 class="titulo">${pelicula.titulo}</h2>
                 <img src="${API_SERVER}/${pelicula.img_url}" alt="${pelicula.titulo}">              
                <p class="descripcion"><strong>Descripción:</strong> ${pelicula.descripcion}</p>
                <p class="detalles"><strong>Género:</strong> ${pelicula.genero}</p>
                <p class="detalles"><strong>Calificación:</strong> ${pelicula.calificacion}</p>
                <p class="detalles"><strong>Año:</strong> ${pelicula.anio}</p>
                <p class="detalles"><strong>Estrellas:</strong> ${pelicula.estrellas}</p>
                <p class="detalles"><strong>Duración:</strong> ${pelicula.duracion} minutos</p>
            `;
            peliculasContainer.appendChild(peliculaElement);
        });
    } else {
        peliculasContainer.innerHTML = '<p>No se encontraron películas.</p>';
    }
});




