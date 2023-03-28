<?php

include('db_connect.php');

$sql = 'SELECT * FROM proprietario';

mysqli_select_db($conn, $database);

$result = mysqli_query($conn, $sql);

$proprietarios = array();

while($row = mysqli_fetch_array($result)){
    $proprietarios[] = $row;
}

$proprietarios_json = json_encode($proprietarios);

echo $proprietarios_json;
?>