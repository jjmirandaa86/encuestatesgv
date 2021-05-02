<?php
    header("Content-type: application/json; charset=utf-8");
    $input = json_decode(file_get_contents("php://input"), true);
    date_default_timezone_set('America/Bogota');
    $fechaActual = date('m-d-Y', time()); 
    $horaActual = date('h:i:s', time()); 

    echo "======= Almacena datos ============ \n";
    $fecha = $fechaActual;
    $hora = $horaActual;
    $usuario = $_POST['getUsuario'];
    $correo = $_POST['getCorreo'];
    $cargo = $_POST['getCargo'];
    $novedad = $_POST['getNovedad'];
    $estrellas = $_POST['getEstrellas'];

    //Arreglo 
    /*
    $_POST['getRespuesta'];
        "agencia": "Ambato",
        "user_route": 30,
        "user_backup": 5,
        "user_sim": 30,
        "it_route": 30,
        "it_backup": 5,
        "it_sim": 30
*/
    echo "======Datos Recibidos========";
    echo $fecha;
    echo "\n";
    echo $hora;
    echo "\n";
    echo $usuario;
    echo "\n";
    echo $correo;
    echo "\n";
    echo $cargo;
    echo "\n";
    echo $novedad;
    echo "\n";
    echo $estrellas;
    

?>