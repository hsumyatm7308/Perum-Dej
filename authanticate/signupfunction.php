<?php 

require_once "signup.php";
require_once "../database.php";

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    global $conn;

    $username = textfilter($_POST["username"]);
    $email = textfilter($_POST["email"]);
    $password = textfilter($_POST["password"]); // Get the plain text password without hashing it
    $compassword = textfilter($_POST['copassword']);

    // Check if the entered passwords match
    if ($password !== $compassword) {
        echo "Passwords do not match";
       
    } else {
        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

        try {
            $stmt = $conn->prepare("INSERT INTO users(username, email, password) VALUES(:username, :email, :password)");
            $stmt->bindParam(":username", $username);
            $stmt->bindParam(":email", $email);
            $stmt->bindParam(":password", $hashedPassword);
            $stmt->execute();

            header("Location: ../index.php");
            exit;
        } catch (Exception $e) {
            echo "Error Found : " . $e->getMessage();
        }
    }
}

function textfilter($data)
{
    $data = trim($data);
    $data = htmlspecialchars($data);
    $data = stripcslashes($data);

    return $data;
}


?>