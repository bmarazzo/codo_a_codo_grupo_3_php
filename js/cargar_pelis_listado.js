

const API_SERVER = 'http://localhost:8001/';


// Función para cargar películas en la cuadrícula
const cargarPeliculasTendencia = async () => {
    try {
        const response = await fetch(API_SERVER);
        const data = await response.json(); // Convertimos la respuesta a JSON
        const movies = data; // Extraemos las películas de la respuesta
             
        const peliculasContainer = document.getElementById('peliculasContainer');
        peliculasContainer.innerHTML = ''; // Limpiamos el contenido previo del contenedor

        movies.forEach(movie => {
            const row = document.createElement('div');
            row.className = 'row mb-2 text-center';
            
            row.innerHTML = `
                <div class="col-3">${movie.id}</div>
                <div class="col-3">${movie.titulo}</div>
                <div class="col-3">${movie.duracion || 'N/A'}</div>
                <div class="col-3 text-end">
                    <button class="btn btn-primary btn-sm editar" data-id="${movie.id}">Editar</button>
                    <button class="btn btn-danger btn-sm eliminar" data-id="${movie.id}">Eliminar</button>
                   
                </div>
            `;
            peliculasContainer.appendChild(row);
        });

          //  event listeners para los botones de editar y eliminar
          document.querySelectorAll('.editar').forEach(button => {
            button.addEventListener('click', (event) => {
                const movieId = event.target.getAttribute('data-id');
                editarPelicula(movieId);
            });
        });

        document.querySelectorAll('.eliminar').forEach(button => {
            button.addEventListener('click', (event) => {
                const movieId = event.target.getAttribute('data-id');
                eliminarPelicula(movieId);
            });
        });
    } catch (error) {
        console.error('Error al cargar las películas:', error);
    }
};

    // Función para editar película
            const editarPelicula = (movieId) => {
     
            window.location.href = `/pages/peliculaEditada.html?id=${movieId}`;
};

    // Función para eliminar película         

            const eliminarPelicula = async (movieId) => {
                if (confirm('¿Estás seguro de que deseas eliminar esta película?')) {
                    try {
                        const response = await fetch(`${API_SERVER}?id=${movieId}`, {
                            method: 'DELETE',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({ id: movieId })
                        });
            
                        const data = await response.json();
            
                        if (data[0] === 'success') {
                            alert('Película eliminada exitosamente');
                            cargarPeliculasTendencia(); // Recargar la lista de películas
                        } else {
                            alert('Error al eliminar la película: ' + data[1]);
                        }
                    } catch (error) {
                        console.error('Error al eliminar la película:', error);
                        alert('Error al eliminar la película');
                    }
                }

};

// Llamamos a la función para cargar las películas al cargar la página
document.addEventListener('DOMContentLoaded', cargarPeliculasTendencia);

