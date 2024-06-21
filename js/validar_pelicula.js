
window.addEventListener('load', function() {

    let botonGuardar = document.querySelector(".btn-guardar");
    const form = document.querySelector('#form-pelicula');


            const titulo = document.querySelector('#titulo').value.trim();
            const genero = document.querySelector('#genero').value.trim();
            const calificacion = document.querySelector('#calificacion').value.trim();
            const descripcion = document.querySelector('#descripcion').value.trim();
            const anio = document.querySelector('#anio').value.trim();
            const estrellas = document.querySelector('#estrellas').value.trim();
            const duracion = document.querySelector('#duracion').value.trim();
            const img_url = document.querySelector('#img_url');

            botonGuardar.addEventListener('click', function(e){
                e.preventDefault(); // Prevenir el envío del formulario
                if (!titulo || !genero || !calificacion || !descripcion || !anio || !estrellas || !duracion || !img_url) {            
                alert('Debes completar todos los campos del formulario');
            } else {
                console.log('El formulario es válido. Enviar datos...');
                // Aquí puedes enviar los datos del formulario o realizar otras acciones
                form.submit();
            }
        });

    });
               