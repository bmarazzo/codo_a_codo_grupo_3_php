<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Buscadas</title>
    <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css">
    <link rel="stylesheet" href="../css/estilos.css">
    <link rel="stylesheet" href="../css/peliculaBuscada.css">
    <script src="https://kit.fontawesome.com/f7fb471b65.js" crossorigin="anonymous"></script>
    <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,300&display=swap" rel="stylesheet">
    <link rel="shortcut icon" href="../favicon.ico" type="image/x-icon">

    
</head>
<body>
    <header class="header">
        <nav class="navegacion">
            <a class="anclaLogo" href="../index.html">
                <i class="fas fa-film" aria-hidden="true"></i>
                <span>CAC-Movies</span>
            </a>
            <ul class="listaNav">
                <li class="listaItem"><a class="linkNav" href="#tendencias">Tendencias</a></li>
                <li class="listaItem"><a class="linkNav" href="../pages/registrarse.html">Registrarse</a></li>
                <li class="listaItem"><a class="linkNav iniciarSesion" href="../pages/iniciosesion.html">Iniciar Sesión</a></li>
            </ul>
        </nav>
    </header>

    <main id="main" class="main">

        <div class="container  titulo">
            <h1>Películas buscadas</h1>
            <div id="peliculas" class="buscadas">
            
            <?php
                session_start();
                if (isset($_SESSION['peliculas'])) {
                    $peliculas_json = $_SESSION['peliculas'];
                    $peliculas = json_decode($peliculas_json, true);
                    
                    if (!empty($peliculas)) {
                        echo '<script>';
                        echo 'const peliculas = ' . json_encode($peliculas) . ';';
                        echo '</script>';
                    } else {
                        echo 'No se han recibido datos de películas.';
                    }
                } else {
                    echo 'No se han recibido datos de películas.';
                }
            ?>
        </div>

    </main>

    <script  type="module"  src="../js/pelicula_buscada.js"></script>
</body>
</html>
