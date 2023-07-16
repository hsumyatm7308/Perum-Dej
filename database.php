<?php

$dbhost = "localhost";
$dbuser = "root";
$dbpass = '';
$dbname = "perumdej";

try{

    $conn = new PDO("mysql:dbhost=$dbhost;dbname=$dbname",$dbuser,$dbpass);
    $stmt = $conn->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);

    // echo "successfull";

}catch(Exception $e){

    echo "Error Found : ". $e->getMessage();

}

?>