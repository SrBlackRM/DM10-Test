<?php
    $server_url = "127.0.0.1";
    $username = "root";
    $password = "";
    $database = "test";

    $conn = mysqli_connect($server_url, $username, $password, $database);

    if(!$conn){
        die("Connection failed: " . mysqli_connect_error());
    }   
?>