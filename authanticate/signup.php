<?php

require_once "../database.php";
require_once "signupfunction.php";

?>


<!DOCTYPE html>
<html>

<head>
    <title>Sign Up</title>
    <!-- fontawesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css">

    <!-- boostrap  -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">

    <link rel="stylesheet" href="../css/style.css">
</head>

<body>

    <div class="modalcontainer " id="modalcontainer">




            <div id="alertbox" class="alertbox">
                <span id="alert">Password doesn't match!</span>
            </div>

            <!-- End Create  -->

            <div id="" class="loginform model">
                <h4 class="text-center text-light lead mt-3">REGISTER</h4>


                <form action="" method="post" class="form-group mt-3">

                    <div class="text-center mb-4 d-flex justify-content-between signin candl">

                        <span class="smsingin loginactive me-5"><a href="./signup.php" id="">Create</a></span>
                        <span class="smsingin"><a href="./login.php" id="smsingin">Login</a></span>
                    </div>


                    <div class="text-light mb-2 formgroupitems">
                        <label for="fname mb-1"><i class="fa-solid fa-user fs-5"></i></label>
                        <input type="text" name="username" id="fname" class="form-control" required
                            placeholder="username">
                    </div>

                    <div class="text-light mb-2 formgroupitems">
                        <label for="email"><i class="fa-solid fa-envelope fs-5"></i></label>
                        <input type="email" name="email" id="regemail" class="form-control" required
                            placeholder="email">
                    </div>

                    <div class="text-light mb-2 formgroupitems passwordctn">
                        <label for="password"><i class="fa-solid fa-key fs-5"></i></label>
                        <input type="password" name="password" id="password" class="form-control" value="" required
                            placeholder="password">
                        <span class="small lock1" id="show_password"> <i class="fa-solid fa-lock"></i></span>
                    </div>

                    <div class="text-light mb-5 formgroupitems copasswordctn">
                        <label for="copassword"><i class="fa-solid fa-key fs-5"></i></label>
                        <input type="password" name="copassword" id="copassword" class="form-control" required
                            placeholder="Comfirm Your Password">
                        <span class="small lock2" id="show_copassword"> <i class="fa-solid fa-lock"></i> </span>
                    </div>

                    <div class="regbtncontainer text-center">
                        <div class="btnsmct">
                            <!-- <button type="button" id="signupcancle" class="btn bg-secondary me-1 canclebtn">Cancle</button> -->
                            <button type="submit" name="signup" id="singup" class="btn">Register</button>
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
        const getmodalcontainer = document.getElementById('modalcontainer')
        const getname = document.getElementById('fname');
        const getemail = document.getElementById('email')

        const getpassword = document.getElementById('password');
        const getcopassword = document.getElementById('copassword')
        const getshowpassword = document.getElementById('show_password');
        const getshowcopassword = document.getElementById('show_copassword');

        const canclebtn = document.querySelectorAll('.canclebtn');
        const loginbtn = document.querySelector('.loginbtn')

        const getsignupform = document.getElementById('signupform');
        const getloginform = document.getElementById('loginform');
        const smsingin = document.getElementById('smsingin');
        const smsignup = document.getElementById('smssignup');

        const showmodal = document.getElementsByClassName('showmodal');







        getshowpassword.addEventListener('click', function () {


            console.log(getname.value)
            console.log(getpassword.type)

            if (getpassword.type === "password") {
                getpassword.setAttribute('type', 'text');
                getshowpassword.innerHTML = '<span class="" id ="show_password"> <i class="fa-solid fa-lock-open"></i></span>'

            } else {
                getpassword.setAttribute('type', 'password')
                getshowpassword.innerHTML = `<span class="" id ="show_password"> <i class="fa-solid fa-lock"></i></span>`

            }
        })




        getshowcopassword.addEventListener('click', function () {


            if (getcopassword.type === "password") {
                getcopassword.setAttribute('type', 'text');
                getshowcopassword.innerHTML = `<span id="show_copassword">  <i class="fa-solid fa-lock-open"></i></span>`
            } else {
                getcopassword.setAttribute('type', 'password')
                getshowcopassword.innerHTML = `<span id="show_copassword">  <i class="fa-solid fa-lock"></i></span>`

            }

        })
    </script>
</body>

</html>