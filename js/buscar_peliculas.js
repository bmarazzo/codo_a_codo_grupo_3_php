import { API_SERVER } from "./constantes.js";

async function buscarPeliculas(event) {
    event.preventDefault();
    const query = document.getElementById('buscar').value.trim();

    if (query) {
        try {
            const response = await fetch(`${API_SERVER}/index.php?buscar=${encodeURIComponent(query)}`, {
                mode: 'cors'
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            // Guarda los datos de las películas en localStorage para usarlos en peliculaBuscada.html
            localStorage.setItem('peliculasBuscadas', JSON.stringify(data));
            window.location.href = 'pages/peliculaBuscada.html';
        } catch (error) {
            console.error('Error al buscar películas:', error);
        }
    } else {
        alert('Por favor ingrese un término de búsqueda.');
    }
}

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('.botonBuscador').addEventListener('click', buscarPeliculas);
});






















/*
document.addEventListener("DOMContentLoaded", function() {
    const formBuscar = document.getElementById('form-buscar');

    formBuscar.addEventListener('submit', async function(event) {
        event.preventDefault();
        const query = document.getElementById('buscar').value.trim();

        if (query) {
            try {
                const response = await fetch(`${API_SERVER}/index.php?query=${encodeURIComponent(query)}`, {
                    mode: 'cors'
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();

                if (data.length > 0) {
                    // Suponiendo que solo deseas mostrar la primera película encontrada
                    const pelicula = data[0];

                    // Ejemplo de cómo mostrar los datos en la página peliculaBuscada.html
                    const peliculasContainer = document.getElementById('peliculas');
                    peliculasContainer.innerHTML = `
                        <div class="pelicula">
                            <h2 class="titulo">${pelicula.titulo}</h2>
                            <img src="${API_SERVER}/${pelicula.img_url}" alt="${pelicula.titulo}">
                            <p class="descripcion"><strong>Descripción:</strong> ${pelicula.descripcion}</p>
                            <p class="detalles"><strong>Género:</strong> ${pelicula.genero}</p>
                            <p class="detalles"><strong>Calificación:</strong> ${pelicula.calificacion}</p>
                            <p class="detalles"><strong>Año:</strong> ${pelicula.anio}</p>
                            <p class="detalles"><strong>Estrellas:</strong> ${pelicula.estrellas}</p>
                            <p class="detalles"><strong>Duración:</strong> ${pelicula.duracion} minutos</p>
                        </div>
                    `;
                } else {
                    alert('No se encontraron películas con el término de búsqueda proporcionado.');
                }
            } catch (error) {
                console.error('Error al buscar películas:', error);
            }
        } else {
            alert('Por favor ingrese un término de búsqueda.');
        }
    });
});






/*
import { API_SERVER } from "./constantes.js";


document.addEventListener("DOMContentLoaded", function() {
    const formBuscar = document.getElementById('form-buscar');

    formBuscar.addEventListener('submit', async function(event) {
        event.preventDefault();
        const query = document.getElementById('buscar').value.trim();
        console.log(query);
        if (query) {
            try {
                const response = await fetch(`${API_SERVER}/index.php?query=${encodeURIComponent(query)}`, {
                    mode: 'cors' // Cambiado de 'no-cors' a 'cors' para permitir manejar la respuesta
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();
                // Guarda los datos de las películas en localStorage para usarlos en peliculaBuscada.html
                localStorage.setItem('peliculasBuscadas', JSON.stringify(data));
                window.location.href = '../pages/peliculaBuscada.html';
            } catch (error) {
                console.error('Error al buscar películas:', error);
            }
        } else {
            alert('Por favor ingrese un término de búsqueda.');
        }
    });
});

*/