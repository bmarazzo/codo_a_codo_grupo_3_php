<?php 

$error;

 if(!empty($_POST['password'])){
    $password = $_POST['password'];

    if ($password == "password"){
        $error ="OK";
        //echo "accediendo";
        header("Location:adminpeliculas.php");// voy a la página para cargar/editar peliculas
    } else {
        $error ="clave incorrecta";
        header("Location: inicioAdmin.php?error=$error");
    }
 } else {
    $error = "completar clave";
    header("Location:inicioAdmin.php?error=$error");
 }

?>