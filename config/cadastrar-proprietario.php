<?php

include('db_connect.php');

$url_pagina = "http://localhost/manage.php?user=teste";

$nome = $_POST['nome'];
$cpf = $_POST['cpf'];
$email = $_POST['email'];
$celular = $_POST['celular'];
$marca = $_POST['marca'];
$modelo = $_POST['modelo'];

$sql_insert_prop = "INSERT INTO proprietario (ID, nome, cpf, email, celular) VALUES (NULL, '$nome', '$cpf', '$email', '$celular')";
$sql_insert_veic = "INSERT INTO veiculos (ID, marca, modelo, proprietario) VALUES (NULL, '$marca', '$modelo', '$nome')";

mysqli_select_db($conn, $database);

$result = mysqli_query($conn, $sql_insert_prop);
if (!$result) {
    echo "Error: ". mysqli_error($sql_insert_prop);
    die();
}

$result = mysqli_query($conn, $sql_insert_veic);
if (!$result) {
    echo "Error: ". mysqli_error($sql_insert_veic);
    die();
}
mysqli_close($conn);


header('Location: '.$url_pagina);
?>