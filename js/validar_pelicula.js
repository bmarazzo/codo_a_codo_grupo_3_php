document.addEventListener('DOMContentLoaded', function(e) {

    let formPelicula = document.querySelector(".form-pelicula");

    const titulo = document.getElementById('titulo');
    const genero = document.getElementById('genero');
    const calificacion = document.getElementById('calificacion');
    const descripcion = document.getElementById('descripcion');
    const anio = document.getElementById('anio');
    const estrellas = document.getElementById('estrellas');
    const duracion = document.getElementById('duracion');
    //const img_url = document.getElementById('img_url');

    if (!titulo || !genero || !calificacion || !descripcion || !anio || !estrellas || !duracion ) {
        e.preventDefault(); // Prevenir el envío del formulario
        alert('Debes completar todos los campos del formulario');
    }
    else {
        formPelicula.submit();
        }
});



