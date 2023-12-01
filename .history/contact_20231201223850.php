<!DOCTYPE html>
<html>

<head>
    <title>Login</title>
    <!-- fontawesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css">

    <!-- boostrap  -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">

    <link rel="stylesheet" href="./css/style.css">
</head>

<style>
    body {
        width: 100vw;
        /* height: 100vh; */
        /* background: #5c7b9d; */
        background: linear-gradient(10deg, #586d9a, #5c7b9d);
        color: #000;

        overflow-x: hidden; /* Prevent horizontal scrolling */


    }

    .banner-container {
        width: 100vw;
        height: 150vh;
        /* background: #5c7b9d; */
        background: linear-gradient(10deg, #586d9a, #5c7b9d);

    }

    .contact-banner {
        width: inherit;
        /* height: 700px; */
        height: 90vh;
        /* background: #536e8b; */
        background: rgb(86, 105, 150);





        display: flex;
        justify-content: space-between;
        align-items: center;



    }

    .contact-form-part {
        width: inherit;
        /* height: 100vh; */
        background: #5c7b9d;


    }

    .contact-banner-title {
        width: 500px;
        margin-left: 25px;
        text-align: center;
        display: flex;
        justify-content: center;
        align-content: center;
        flex-direction: column;

    }

    .contact-right {
        width: 50%;
        /* background-color: #f4f4f4; */
        margin-right: 25px;
    }


    /* Start Address  */
    .contact-address {
        width: 100vw;
        height: 80vh;
        /* background: #5c7b9d; */
        background: linear-gradient(15deg #586d9a, #5c7b9d);

    }

    .address-container {
        width: inherit;
        height: 50vh;
        background: rgb(86, 105, 150);

        transform: translateY(-50%);

    }

    .addresscol,
    .supportcol,
    .contactcol {
        height: 50vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .address,
    .support,
    .contact {
        width: 200px;
        text-align: start;
        display: flex;
        justify-self: center;
        align-content: center;
        flex-direction: column;
    }


    /* Start Location  */
    .contact-location,
    .contact-faq {
        width: 100vw;
        height: 120vh;
        /* background: #5c7b9d; */
        background: linear-gradient(15deg #586d9a, #5c7b9d);
    }

    .locationcol {
        width: inherit;
    }


    .locateus {
        width: inherit;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 10px;
    }

    .location,
    .company {
        width: inherit;
        display: flex;
        justify-content: center;
        align-items: start;
        /* flex-direction: column; */
        margin-bottom: 40px;

    }

    .locationtxt {
        width: 250px;
        text-align: start;
    }


    /* FAQ  */

    .contact-faq {
        width: 100vw;
        height: 140vh;
        /* background: #5c7b9d; */
        background: linear-gradient(15deg #586d9a, #5c7b9d);
    }

    .faq-container {
        width: inherit;
        height: 110vh;
        background: rgb(86, 105, 150);

    


    }

    .faq-title{
        padding: 40px;
    }

    .faqtxt{
        width: 600px;
        text-align: center;
    }
    .accordion {
        color: #000;
        margin-top: 40px;
    }

    .accordion-item {
        background: #586d9a;
        border: none;
        border-radius: none;
        margin-top: 30px;
        color: #000;

    }

    .accordion-header,
    .accordion-button {
        background: rgb(86, 105, 150);
    }
</style>

<body>

    <head>
        <?php require_once("navbar.php") ?>

        <div class="banner-container">


            <div class="container ">


                <div class="contact-banner-title me-5">
                    <h1>Reach out to us</h1>

                    <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt tenetur ipsum ea quos
                        explicabo
                        non illum maxime laboriosam </span>

                </div>

                <div class="mr-5 contact-right">

                    <!-- <div class="col-7 contact-left-banner"> -->
                    <form action="" method="" class="form-group">
                        <div class="container-fluid">
                            <div class="row d-flex justify-content-center align-items-center mb-3">
                                <div class="col-6  d-flex justify-content-end">
                                    <input type="text" name="name" id="addname" class="form-control addname"
                                        placeholder="Name" style="margin: 10px;">
                                </div>
                                <div class="col-6 d-flex justify-content-start">
                                    <input type="email" name="email" id="addemail" class="form-control addemail"
                                        placeholder="Email" style="margin: 10px;">
                                </div>
                            </div>

                            <div class="row">
                                <div class="mb-3">
                                    <textarea name="textmessage" id="textmessage" cols="30" rows="10"
                                        class="form-control" placeholder="Leave your message..."></textarea>
                                </div>
                                <div>
                                    <button type="button" class="form-control d-grid text-white p-2 sendbtn">Send it
                                        now</button>
                                </div>
                            </div>
                        </div>
                    </form>
                    <!-- </div> -->


                </div>



            </div>
        </div>



    </head>


    <!-- Address Section  -->
    <section>
        <div class="contact-address">
            <div class="container address-container">

                <div class="row">
                    <div class="col-4 addresscol">
                        <div class="address">
                            <h2 class="mb-3">Address</h2>
                            <div class="text-start lead">
                                <span>57199 N Cooper Rd
                                    Loranger, Louisiana(LA), 70446</span>
                            </div>
                        </div>
                    </div>

                    <div class="col-4 contactcol">
                        <div class="contact">
                            <h2 class="mb-3">Contact</h2>
                            <div class="text-start lead ">

                                <span>+959124349539</span>
                                <span>+959124349539</span>
                                <span>hsumyatm7308@gmail.com</span>

                            </div>

                        </div>
                    </div>

                    <div class="col-4 supportcol">
                        <div class="support">
                            <h2 class="mb-3">Follow Us</h2>
                            <div class="text-start lead socialaccs">
                                <!-- <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit.amet consectetur,
                                </span> -->

                                <ul class="list-unstyled d-flex justify-content-start align-items-center">
                                    <li class="m-1"><a href="https://github.com/hsumyatm7308"><i
                                                class="fa-brands fa-github"></i></a></li>
                                    <li class="m-1"> <a href="https://www.instagram.com/aitch_04/"><i
                                                class="fa-brands fa-instagram"></i></a>
                                    </li>
                                    <li class="m-1"> <a href="https://t.me/Aitch7308"><i
                                                class="fa-solid fa-paper-plane"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>



                </div>

            </div>
        </div>

    </section>

    <!-- Start Location  -->
    <section>
        <div class="contact-location">
            <div class="container location-container">

                <div class="row">
                    <div class="col-6 mapcol">
                        <!-- <div> -->
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7441.004077233285!2d94.85371469183958!3d21.17220647205284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30b5e50393d8ca61%3A0x371a4717c3e89981!2sOld%20Bagan!5e0!3m2!1sen!2smm!4v1689502723726!5m2!1sen!2smm"
                            width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                        <!-- </div> -->
                    </div>

                    <div class="col-6 locationcol">
                        <div class="locateus">
                            <h1 class="mb-5">Locate us</h1>
                        </div>

                        <div>

                            <div class="company">
                                <i class="fa-regular fa-building fs-4 m-5"></i>

                                <div class="locationtxt">

                                    <h3>Company</h3>

                                    <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores aut quos
                                        voluptate</span>

                                </div>
                            </div>

                            <div class="location">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="w-1 h-1 m-5" width="30px">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                </svg>
                                <div class="locationtxt">

                                    <h3>Location</h3>

                                    <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores aut quos
                                        voluptate</span>
                                </div>
                            </div>

                        </div>
                    </div>





                </div>

            </div>
        </div>

    </section>


    <!-- Start FAQ  -->
    <section>
        <div class="contact-faq">
            <div class="container faq-container">
                <div class="d-flex  align-items-center text-center flex-column  faq-title">
                    <h1>F.A.Q</h1>
                    <div class="faqtxt">
                        <span class="lead">
                            Common questions about the company and all the answers you need to get started discovering
                            new
                            fragrances.
                        </span>
                    </div>
                </div>

                <div>


                    <div class="accordion" id="accordion">
                        <div class="row">
                            <div class="col-6">
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseOne" aria-expanded="true"
                                            aria-controls="collapseOne">
                                            <h5 class="">Are these real brand fragrances?</h5>
                                        </button>
                                    </h2>
                                    <div id="collapseOne" class="accordion-collapse collapse show"
                                        data-bs-parent="#accordion">
                                        <div class="accordion-body">
                                            <strong>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                                Consequatur, magnam placeat. Quae repudiandae delectus accusantium
                                                ipsum, maxime facere, odio explicabo laudantium cumque illum distinctio
                                                labore et dolorum tenetur, totam a? </strong>
                                        </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <h2 class="accordion-header ">
                                        <button class="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseThree"
                                            aria-expanded="false" aria-controls="collapseThree">
                                            <h5> Are these fragrances long lasting?</h5>
                                        </button>
                                    </h2>
                                    <div id="collapseThree" class="accordion-collapse collapse "
                                        data-bs-parent="#accordion">
                                        <div class="accordion-body">
                                            <strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
                                                quod nobis sunt rem cupiditate assumenda quia animi eos voluptatem
                                                fugiat similique vel tempore suscipit eveniet quos laudantium vitae,
                                                corporis id. </strong>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header ">
                                        <button class="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseFour"
                                            aria-expanded="false" aria-controls="collapseFour">
                                            <h5> How long will the fragrance bottle last?</h5>
                                        </button>
                                    </h2>
                                    <div id="collapseFour" class="accordion-collapse collapse "
                                        data-bs-parent="#accordion">
                                        <div class="accordion-body">
                                            <strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
                                                quod nobis sunt rem cupiditate assumenda quia animi eos voluptatem
                                                fugiat similique vel tempore suscipit eveniet quos laudantium vitae,
                                                corporis id. </strong>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header ">
                                        <button class="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseFive"
                                            aria-expanded="false" aria-controls="collapseFive">
                                            <h5> Are the fragrances tested on animals?</h5>
                                        </button>
                                    </h2>
                                    <div id="collapseFive" class="accordion-collapse collapse "
                                        data-bs-parent="#accordion">
                                        <div class="accordion-body">
                                            <strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
                                                quod nobis sunt rem cupiditate assumenda quia animi eos voluptatem
                                                fugiat similique vel tempore suscipit eveniet quos laudantium vitae,
                                                corporis id. </strong>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-6">
                                <div class="accordion-item">
                                    <h2 class="accordion-header ">
                                        <button class="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseSix"
                                            aria-expanded="false" aria-controls="collapseSix">
                                            <h5> Are these fragrances long lasting?</h5>
                                        </button>
                                    </h2>
                                    <div id="collapseSix" class="accordion-collapse collapse "
                                        data-bs-parent="#accordion">
                                        <div class="accordion-body">
                                            <strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
                                                quod nobis sunt rem cupiditate assumenda quia animi eos voluptatem
                                                fugiat similique vel tempore suscipit eveniet quos laudantium vitae,
                                                corporis id. </strong>
                                        </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <h2 class="accordion-header ">
                                        <button class="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseSeven"
                                            aria-expanded="false" aria-controls="collapseSeven">
                                            <h5> Are these fragrances long lasting?</h5>
                                        </button>
                                    </h2>
                                    <div id="collapseSeven" class="accordion-collapse collapse "
                                        data-bs-parent="#accordion">
                                        <div class="accordion-body">
                                            <strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
                                                quod nobis sunt rem cupiditate assumenda quia animi eos voluptatem
                                                fugiat similique vel tempore suscipit eveniet quos laudantium vitae,
                                                corporis id. </strong>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header ">
                                        <button class="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseEight"
                                            aria-expanded="false" aria-controls="collapseEight">
                                            <h5> How long will the fragrance bottle last?</h5>
                                        </button>
                                    </h2>
                                    <div id="collapseEight" class="accordion-collapse collapse "
                                        data-bs-parent="#accordion">
                                        <div class="accordion-body">
                                            <strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
                                                quod nobis sunt rem cupiditate assumenda quia animi eos voluptatem
                                                fugiat similique vel tempore suscipit eveniet quos laudantium vitae,
                                                corporis id. </strong>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header ">
                                        <button class="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseNine"
                                            aria-expanded="false" aria-controls="collapseNine">
                                            <h5> Are the fragrances tested on animals?</h5>
                                        </button>
                                    </h2>
                                    <div id="collapseNine" class="accordion-collapse collapse "
                                        data-bs-parent="#accordion">
                                        <div class="accordion-body">
                                            <strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
                                                quod nobis sunt rem cupiditate assumenda quia animi eos voluptatem
                                                fugiat similique vel tempore suscipit eveniet quos laudantium vitae,
                                                corporis id. </strong>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>





                </div>

            </div>
        </div>


    </section>





    <footer class="container-fluid">

        <div class="row footersection">

            <div class="col-4 d-flex justify-content-center align-items-center brandname">
                <h2 class="text-uppercase">Perum Dej</h2>
            </div>


            <div class="col-4 d-grid d-flex justify-content-center align-items-center flex-column">


                <ul class="d-flex list-unstyled">
                    <li class="m-1"><a href="" class="nav-link">Home</a></li>
                    <li class="m-1"><a href="" class="nav-link">About Us</a></li>
                    <li class="m-1"><a href="" class="nav-link">Products</a></li>
                    <li class="m-1"><a href="" class="nav-link">Services</a></li>
                    <li class="m-1"><a href="" class="nav-link">Contact</a></li>
                </ul>



                <span class="footerp">
                    <span> &copy; </span>
                    Copywrite
                    <span id="autoyear"></span>
                    - Made by Aitch</span>

            </div>

            <div class="col-4 mb-3">

                <div class="socialaccs mt-4">
                    <ul class="list-unstyled d-flex justify-content-start align-items-center">
                        <li class="m-1"><a href="https://github.com/hsumyatm7308"><i
                                    class="fa-brands fa-github"></i></a></li>
                        <li class="m-1"> <a href="https://www.instagram.com/aitch_04/"><i
                                    class="fa-brands fa-instagram"></i></a>
                        </li>
                        <li class="m-1"> <a href="https://t.me/Aitch7308"><i class="fa-solid fa-paper-plane"></i></a>
                        </li>
                    </ul>
                    <p class="me-1 footerp">hsumyatm7308@gmail.com</p>

                </div>


            </div>
        </div>

        <div class="row">

            <div class="col-sm-6">
            </div>
        </div>

    </footer>



    <!-- boostrap -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
        crossorigin="anonymous"></script>

    <!-- jq  -->
    <script src="./asses/libs/jquery-3.6.3.min.js"></script>
    <!-- tilt js  -->
    <script src="./asses/libs/tilt.jquery.min.js"></script>

    <!-- aos  -->
    <script src="./asses/libs/aos.js"></script>
</body>

</html>