<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin | CAC-MOVIES</title>
    <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css">
    <link rel="stylesheet" href="../css/estilos.css">
    <link rel="stylesheet" href="../css/peliculaEditada.css">
    <script src="https://kit.fontawesome.com/f7fb471b65.js" crossorigin="anonymous"></script>
    <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,300&display=swap" rel="stylesheet">
    <link rel="shortcut icon" href="../favicon.ico" type="image/x-icon">
</head>
<body class="bodyRegistrarse">
    <header class="headerRegistrarse">
        <a class="anclaLogo" href="../index.html">
            <i class="fas fa-film" aria-hidden="true"></i>
            <span>CAC-Movies</span>
        </a>
    </header>
    
    <main id="main" class="main">
        <section data-aos="zoom-in" data-aos-duration="1000" class="seccionAdministrador">
         
            <form action="http://localhost:8001/index.php" method="POST" id="form-pelicula" enctype="multipart/form-data">
            <input type="hidden" name="_method" value="PUT">

                <h2 class="tituloAdministrador">Editar película</h2>

                <?php
                session_start();
                if (isset($_SESSION['mensaje'])) {
                    echo "<p class='success' style='text-align:center;'>{$_SESSION['mensaje']}</p>";
                    unset($_SESSION['mensaje']);
                }   
                if (isset($_SESSION['error'])) {
                    echo "<h3 class='error'  >{$_SESSION['error']}</h3>";
                    unset($_SESSION['error']);
                }     
                ?>

                <div>
                    <label for="id">Id:</label>
                    <input type="text" id="id" name="id" value="" >
                </div>
                      
                <div>
                    <label for="titulo">Título:</label>                  
                    <input type="text" id="titulo" name="titulo" value="<?php echo ($_GET['titulo']) ? $_GET['titulo'] : ''; ?>">
                    <?php 
                    if (isset($_GET['error1'])){
                        $error1 = $_GET['error1'];            
                        echo "<h3 style='text-align:center;'>$error1</h3>";
                    }
                    ?>  
                </div>

                <div>
                    <label for="genero">Género:</label>                 
                    <input type="text" id="genero" name="genero" value="<?php echo ($_GET['genero']) ? ($_GET['genero']) : ''; ?>">
                    <?php 
                    if (isset($_GET['error2'])){
                        $error2 = $_GET['error2'];            
                        echo "<h3 style='text-align:center;'>$error2</h3>";
                    }
                    ?>
                </div>

                <div>
                    <label for="calificacion">Clasificación:</label>
                    <input type="text" id="calificacion" name="calificacion" value="<?php echo ($_GET['calificacion']) ? ($_GET['calificacion']) : ''; ?>">
                    <?php 
                    if (isset($_GET['error3'])){
                        $error3 = $_GET['error3'];            
                        echo "<h3 style='text-align:center;'>$error3</h3>";
                    }
                    ?>
                </div>

                <div>
                    <label for="descripcion">Descripción:</label>
                    <input type="text" id="descripcion" name="descripcion" value="<?php echo ($_GET['descripcion']) ? ($_GET['descripcion']) : ''; ?>">
                   
                    <?php 
                    if (isset($_GET['error4'])){
                        $error4 = $_GET['error4'];            
                        echo "<h3 style='text-align:center;'>$error4</h3>";
                    }
                    ?>
                </div>
                
                <div>
                    <label for="anio">Año de Estreno:</label>
                    <input type="text" id="anio" name="anio" value="<?php echo ($_GET['anio']) ? ($_GET['anio']) : ''; ?>">
                  <?php  
                    if (isset($_GET['error5'])){
                        $error5 = $_GET['error5'];            
                        echo "<h3 style='text-align:center;'>$error5</h3>";
                    }
                    ?>
                </div>
                <div>
                    <label for="estrellas">Estrellas:</label>
                    <input type="text" id="estrellas" name="estrellas" value="<?php echo ($_GET['estrellas']) ? ($_GET['estrellas']) : ''; ?>">
                   <?php  
                    if (isset($_GET['error6'])){
                        $error6 = $_GET['error6'];            
                        echo "<h3 style='text-align:center;'>$error6</h3>";
                    }
                    ?>
                </div>
                <div>
                    <label for="duracion">Duración:</label>
                    <input type="text" id="duracion" name="duracion" value="<?php echo ($_GET['duracion']) ? ($_GET['duracion']) : ''; ?>">
                   
                    <?php 
                    if (isset($_GET['error7'])){
                        $error7 = $_GET['error7'];            
                        echo "<h3 style='text-align:center;'>$error7</h3>";
                    }
                    ?>
                </div>
                <div>
                    <label for="img_url">Elige una imagen JPG:</label>
                    <input type="text" name="img_url"  id="img_url" accept=".jpg, .jpeg" value="<?php echo ($_GET['img_url']) ? ($_GET['img_url']) : ''; ?>" hidden> 
                    <input type="file" name="img_url" id="img_url" accept=".jpg, .jpeg">             
                    <?php 
                    if (isset($_GET['error8'])){
                        $error8 = $_GET['error8'];            
                        echo "<h3 style='text-align:center; color:red'>$error8</h3>";
                    }
                    ?>
                </div>
                <div class="comandos">
                    <div >                     
                        <input class="btn-guardar boton" type="submit" value="Guardar" >
                    </div> 
                    <div>                                                     
                        <button class="boton btn-volver" type=""  ><a class="volver" href="/pages/listados.html">Volver</a></button> 
                    </div>
                </div>
            </form>
        </section>
    </main>  

    <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
    <script>
        AOS.init();

         //Función para cargar los datos de la película en el formulario
        async function cargarDatosPelicula() {
            try {
                const idPelicula = obtenerParametroUrl('id'); // Obtener el ID de la película de la URL

                // Realizar la solicitud GET a la API para obtener los detalles de la película
                const response = await fetch(`http://localhost:8001/?id=${idPelicula}`);
                if (!response.ok) {
                    throw new Error('No se pudo obtener los detalles de la película');
                }

                const data = await response.json(); // Convertir la respuesta a JSON
                if (data.length > 0) {
                    const pelicula = data[0]; // Obtener el primer elemento del array (la película)
                    // Llenar los campos del formulario con los datos obtenidos
                    document.getElementById('id').value = pelicula.id || '';
                    document.getElementById('titulo').value = pelicula.titulo || '';
                    document.getElementById('genero').value = pelicula.genero || '';
                    document.getElementById('calificacion').value = pelicula.calificacion || '';
                    document.getElementById('descripcion').value = pelicula.descripcion || '';
                    document.getElementById('anio').value = pelicula.anio || '';
                    document.getElementById('estrellas').value = pelicula.estrellas || '';
                    document.getElementById('duracion').value = pelicula.duracion || '';
                    document.getElementById('img_url').value = pelicula.img_url || '';
                } else {
                    throw new Error('No se encontraron detalles de la película');
                }
            } catch (error) {
                console.error('Error al cargar los datos de la película:', error);
                alert('Error al cargar los datos de la película. Por favor, inténtalo nuevamente.');
            }
        }

        // Función para obtener parámetros de la URL por nombre
        function obtenerParametroUrl(nombre) {
            const urlParams = new URLSearchParams(window.location.search);
            return urlParams.get(nombre);
        }

        // Llamar a la función para cargar datos de la película cuando el documento esté listo
        document.addEventListener('DOMContentLoaded', cargarDatosPelicula);        
    </script>
     <script src="../js/validar_pelicula.js"></script>
</body>
</html>
