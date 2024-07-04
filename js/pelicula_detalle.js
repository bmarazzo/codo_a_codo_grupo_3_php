import { API_SERVER } from "./constantes.js";

document.addEventListener("DOMContentLoaded", function() {
    const peliculasContainer = document.getElementById('peliculas');
    const peliculaDetalle = JSON.parse(localStorage.getItem('pelicula-detalle'));

    if (peliculaDetalle) {
        const peliculaElement = document.createElement('div');
        peliculaElement.classList.add('pelicula');
        peliculaElement.innerHTML = `
            <h2 class="titulo">${peliculaDetalle.titulo}</h2>
            <img src="${API_SERVER}/${peliculaDetalle.img_url}" alt="${peliculaDetalle.titulo}">
            <p class="descripcion"><strong>Descripción:</strong> ${peliculaDetalle.descripcion}</p>
            <p class="detalles"><strong>Género:</strong> ${peliculaDetalle.genero}</p>
            <p class="detalles"><strong>Calificación:</strong> ${peliculaDetalle.calificacion}</p>
            <p class="detalles"><strong>Año:</strong> ${peliculaDetalle.anio}</p>
            <p class="detalles"><strong>Estrellas:</strong> ${peliculaDetalle.estrellas}</p>
            <p class="detalles"><strong>Duración:</strong> ${peliculaDetalle.duracion} minutos</p>
        `;
        peliculasContainer.appendChild(peliculaElement);
    } else {
        peliculasContainer.innerHTML = '<p>No se encontraron detalles de la película.</p>';
    }
});
