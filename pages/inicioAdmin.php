<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Iniciar Sesión | CAC-MOVIES</title>
    <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css">
    <link rel="stylesheet" href="../css/estilos.css">
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
        <section data-aos="zoom-in" data-aos-duration="1000" class="seccionRegistrarse">
            <!--pongo get ya que en github pages da error el method post-->
            <form id="form-admin" action="procesar.php" method="POST">
                <h2 class="tituloRegistrarse">Administrador</h2>
                
                <div>
                    <input type="password" placeholder="Contraseña" id="password" name="password">
                    <div id="error-password" class="error-text"></div>
                </div>

                <?php  
                    if (isset($_GET['error'])){
                        $error =$_GET['error'];
                        if ($error == "clave incorrecta"){
                            echo "<h3 style= 'text-align:center; margin-bottom:30px'>Clave incorrecta</h3>";
                        }
                        if ($error == "completar clave"){
                            echo "<h3>Contraseña vacía</h3>";
                        }
                    }

                ?> 
                <div>
                    <input class="boton" type="submit" value="Iniciar Sesión" id="btn-envio-login-admin">
                </div>
               
            </form>
        </section>
    </main>
    <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
    <script>
        AOS.init();
    </script>
    <script src="../js/valida_inicioadmin.js"></script>
</body>
</html>