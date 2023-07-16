<?php

require_once "loginfunction.php";
require_once "../database.php";


?>



<!DOCTYPE html>
<html>

<head>
    <title>Login</title>
    <!-- fontawesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css">

    <!-- boostrap  -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">

    <link rel="stylesheet" href="../css/style.css">
</head>

<body>



    <div class="modalcontainer " id="modalcontainer">



        <!-- End Create  -->

        <div id="loginform" class="loginform model">
            <h4 class="text-center text-light lead mt-3">LOGIN</h4>

            <form action="" method="post" class="form-group text-center mt-3">

                <div class="text-center mb-4 d-flex justify-content-between candl">
                    <span class="smsingin mt-3"> <a href="./signup.php" id="smssignup">Create</a></span>
                    <span class="smsingin loginactive mt-3 "> <a href="login.php" id="">Login</a></span>
                </div>


                <div class="text-light mb-2 formgroupitems">
                    <label for="username mb-2"><i class="fa-solid fa-user fs-5"></i></label>
                    <input type="text" name="usrename" id="username" class="form-control" placeholder="username">
                </div>

                <div class="text-light mb-2 formgroupitems">
                    <label for="email"><i class="fa-solid fa-envelope fs-5"></i></label>
                    <input type="email" name="email" id="email" class="form-control" placeholder="email">
                </div>

                <div class="text-light mb-2 formgroupitems ">
                    <label for="password"><i class="fa-solid fa-key fs-5"></i></label>
                    <input type="password" name="lgpassword" id="password" class="form-control" value="" 
                        placeholder="password">
                    <span class="small lock3" id="show_loginpassword"> <i class="fa-solid fa-lock"></i></span>
                </div>

                <div class="signin text-center mt-3">
                    <small class="">Don't you remember?, <a href="">forget password</a></small>

                </div>


                <div class="btncontainer text-center mt-4">
                    <div class="btnsmct ">
                        <!-- <button type="button" id="logincancle" class="btn bg-secondary me-1 canclebtn">Cancle</button> -->
                        <button type="submit" name="login" id="singin" class="btn">Login</button>
                    </div>
                </div>
            </form>
        </div>


    </div>




    <!-- boostrap -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
        crossorigin="anonymous"></script>

    <!-- jq  -->
    <script src="../asses/libs/jquery-3.6.3.min.js"></script>
    <!-- tilt js  -->
    <script src="../asses/libs/tilt.jquery.min.js"></script>

    <!-- aos  -->
    <script src="../asses/libs/aos.js"></script>
    <!-- js  -->
    <script>
    // Your JavaScript code goes here
    const getlgname = document.getElementById("lgname");
    const getloginpassword = document.getElementById('loginpassword');
    const getshowloginpassword = document.getElementById('show_loginpassword');

    const getformcontrol = document.querySelector('.form-control');

    const getsinginbtn = document.getElementById("singin");

    getshowloginpassword.addEventListener('click', function () {
        if (getloginpassword.type === "password") {
            getloginpassword.setAttribute('type', 'text');
            getshowloginpassword.innerHTML = '<span class="" id ="show_password"> <i class="fa-solid fa-lock-open"></i></span>';
        } else {
            getloginpassword.setAttribute('type', 'password');
            getshowloginpassword.innerHTML = `<span class="" id ="show_password"> <i class="fa-solid fa-lock"></i></span>`;
        }
    });
</script>





</body>

</html>