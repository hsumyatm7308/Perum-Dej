<?php
ini_set("display_errors", 1);



require_once "../database.php";
require_once "./login.php";

if ($_SERVER['REQUEST_METHOD'] === "POST") {
    $getemail = textfilter($_POST['email']);
    $getpassword = textfilter($_POST["lgpassword"]); // Get the plain text password without hashing it

    echo $getemail;
    echo $getpassword;

    if ($getemail && $getpassword) {
        $conn = $GLOBALS['conn'];

        try {
            // Essential to protect from SQL injection!! 
            $stmt = $conn->prepare('SELECT email, password FROM users WHERE email = :secemail');
            // Bind parameters here
            $stmt->bindParam(":secemail", $getemail);
            $stmt->execute();

            // Fetch the user record
            $user = $stmt->fetch(PDO::FETCH_ASSOC);

            echo "<pre>".print_r($user,true)."</pre>";
            if ($user) {
                // User exists, compare the passwords
                $hashedPasswordFromDB = $user['password'];

                echo $hashedPasswordFromDB;

                // Use the 'password_verify' function to compare hashed passwords
                if (password_verify($getpassword, $hashedPasswordFromDB)) {
                    // Passwords match, login successful
                    // Perform the necessary actions here (e.g., set session variables and redirect)
                    $_SESSION['email'] = $user['email'];
                    header("Location: ../index.php");
                } else {
                    // Passwords don't match, login failed
                    echo "Invalid password";
                }
            } else {
                // User does not exist with the provided email
                echo "User not found";
            }
        } catch (PDOException $e) {
            echo "Error found = " . $e->getMessage();
        }
    } else {
        echo "Enter Username & password";
    }
}

function textfilter($data)
{
    $data = trim($data);
    $data = htmlspecialchars($data);
    $data = stripslashes($data);

    return $data;
}




?>