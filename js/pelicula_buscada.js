document.addEventListener("DOMContentLoaded", function() {
    const peliculasContainer = document.getElementById('peliculas');
    
    if (peliculasContainer && typeof peliculas !== 'undefined') {
        peliculas.forEach(pelicula => {
            const peliculaElement = document.createElement('div');
            peliculaElement.classList.add('pelicula');
            peliculaElement.innerHTML = `
                <h2 class="titulo" style="text-align:center;">${pelicula.titulo}</h2>
                <img src="http://localhost:8001/${pelicula.img_url}" alt="${pelicula.titulo}">
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
        console.error('No se encontraron películas o el elemento "peliculas" no existe.');
    }
});