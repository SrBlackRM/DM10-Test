<?php

$username = $_POST["user"];
$password = $_POST["pass"];

header('Location: http://localhost/manage.php?user='.$username);

?>