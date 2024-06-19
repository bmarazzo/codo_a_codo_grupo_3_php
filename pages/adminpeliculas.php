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
            <form action="http://localhost:8001/index.php" method="POST" id="form-registro" enctype="multipart/form-data">
                <h2 class="tituloAdministrador">Administrador</h2>

                <h4>Ingresar Nueva Película:</h4>
                

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
                    <label for="titulo">Título:</label>
                    <input type="text" id="titulo" name="titulo" value="<?php echo ($_GET['titulo']) ? $_GET['titulo'] : ''; ?>">
                   
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
                    <input type="file" name="img_url" id="file" accept=".jpg, .jpeg">
                    <?php 
                    if (isset($_GET['error8'])){
                        $error8 = $_GET['error8'];            
                        echo "<h3 style='text-align:center;'>$error8</h3>";
                    }
                    ?>
                </div>
                <div class="comandos">
                    <div >
                        <input class="boton" type="submit" value="Guardar">
                    
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
    </script>
    <script src="../js/valida_registrarse.js"></script>
</body>
</html>
