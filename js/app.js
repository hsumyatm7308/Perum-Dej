
// Jquery Area 

// Start About Us 
const getaboutusctn = document.getElementById('aboutus');
const aboutustext = document.getElementById('aboutustext');
const leftaboutusboxani = document.getElementById('leftaboutusbox');
const rightaboutusboxani = document.getElementById('rightaboutusbox');

$(document).ready(function () {


  // start Nav 
  const menubar = document.querySelector('.menubar');
  const navbackarr = document.querySelector('.navbackarr');
  const navbarmenu = document.querySelector('.navbarmenu');
  $(menubar).click(function () {
    navbarmenu.classList.toggle('navbarmenutoggle')
  })
  $(navbackarr).click(function () {
    navbarmenu.classList.toggle('navbarmenutoggle');
  })
 


  $('.aboutustext').hide()
  $('.left-aboutusbox').hide();
  $('.right-aboutusbox').hide();


  $(window).scroll(function () {
    const windowscrolltop = $(this).scrollTop();
    console.log(windowscrolltop)

    //  Start About Us 

    if (windowscrolltop >= 226) {
      aboutustext.classList.add('aboutustextani');
      leftaboutusboxani.classList.add('left-aboutusboxani');
      rightaboutusboxani.classList.add('right-aboutusboxani');
      $('.aboutustext').fadeIn(1000)
      $('.left-aboutusbox').fadeIn(1000);
      $('.right-aboutusbox').fadeIn(100);


    }
    else {
      $('.aboutustext').fadeOut(1000);
      $('.left-aboutusbox').fadeOut(1000);
      $('.right-aboutusbox').fadeOut(1000);
    }


    // start Banner 

    if (windowscrolltop <= 465) {
      $('.imgcontainer').fadeIn(1000);
      $('.textsidebanner').fadeIn(1000);
    } else {
      $('.imgcontainer').fadeOut(1000)
      $('.textsidebanner').fadeOut(1000);

    }
    //  Start Banner 


    //  $('.salecontainer').css('transform','translate(-500%)')

    console.log(windowscrolltop);

    if (windowscrolltop >= 936) {

      // $('.salecontainer').css('transform','translate(0%)')
      AOS.init();

    }

    // start story 
    if (windowscrolltop >= 2576) {
      AOS.init();
    }



    if (windowscrolltop >= 3258) {
      AOS.init();

    }

    if (windowscrolltop >= 3867) {
      AOS.init();

    }

  })

  // End Scroll 









  $('.cardfooter').click(function () {
    $('.property-container').css('height', '100vh')
    $('.items-container').css('display', 'block')
  })

  $('.backarrow').click(function () {
    $('.items-container').css('display', 'none')
    $('.property-container').css('height', '75vh')

  })

  $('.dot1').click(function () {
    $('.displaycard').css({
      'display': 'block',
      'animation': 'displayani1 2s'
    });
    $('.displaycard2').css('display', 'none');
    $(this).css("background", "#021d3f")
    $('.dot2').css("background", "#fbfbfb")

  })


  $('.dot2').click(function () {
    $('.displaycard').css('display', 'none');
    $('.displaycard2').css({
      'display': 'block',
      'animation': 'displayani 2s'
    });

    $(this).css("background", "#021d3f")
    $('.dot1').css("background", "#fbfbfb")

  })






})

// Jquery




// Start Banner 
const getbannerimgs = document.querySelectorAll('.banner-img');
const getimgtitles = document.querySelectorAll('.imgtits')

const leftarrw = document.getElementById('leftarr');
const rightarrw = document.getElementById('rightarr');

let curimg = 0;
let curtitl = 0;



rightarrw.addEventListener("click", function () {
  curimg++;
  curtitl++;

  if (curimg > getbannerimgs.length - 1) {
    curimg = 0;
  }

  if (curtitl > getimgtitles.length - 1) {
    curtitl = 0;
  }

  bannerfun();
  bannertitlefun();
});

leftarrw.addEventListener("click", function () {
  curimg--;
  curtitl--;

  if (curimg < 0) {
    curimg = getbannerimgs.length - 1;
  }

  if (curtitl < 0) {
    curtitl = getimgtitles.length - 1;
  }


  bannerfun();
  bannertitlefun();
})

function bannerfun() {
  getbannerimgs.forEach(function (getbannerimg, idx) {
    console.log(getbannerimgs[curimg])
    if (curimg === idx) {
      getbannerimg.classList.add('bannerimgshow')

    } else {
      getbannerimg.classList.remove('bannerimgshow')

    }
  })

}


function bannertitlefun() {
  getimgtitles.forEach(function (getimgtitle, idx) {
    if (curtitl === idx) {
      getimgtitle.classList.add('imgtitleani')
    } else {
      getimgtitle.classList.remove('imgtitleani')
    }
  })
}

// End Banner 








// Start Login Form 


// End Login Form 





// Start Products Sectionn 

const getpditems = document.querySelectorAll('.pditems');

pdfilter('all');
function pdfilter(idx) {


  for (var i = 0; i < getpditems.length; i++) {

    console.log(getpditems[i].className.split(' ').indexOf(idx) === -1)

    let pditemspl = getpditems[i].className.split(' ');


    console.log(pditemspl[6] === idx)
    if (pditemspl[6] === idx) {
      console.log(getpditems[i].classList.add('all'))
    }

    showfilter(getpditems[i], 'show');

    if (pditemspl.indexOf(idx) === -1) {
      removeshowfilter(getpditems[i], 'show');

    }

  }

}


function showfilter(getpditem, show) {
  const pditemspl = getpditem.className.split(' ');

  const getshow = show.split(' ');

  for (var s = 0; s < getshow.length; s++) {


    console.log(pditemspl.indexOf(getshow[s]) === -1)

    if (pditemspl.indexOf(getshow[s]) === -1) {
      getpditem.classList.add('show')
      // pditemspl.splice(pditemspl.indexOf(getshow[s]),1);
    }



  }

}


function removeshowfilter(getpditem, show) {
  const pditemspl = getpditem.className.split(' ');

  const getshow = show.split(' ');

  for (var s = 0; s < getshow.length; s++) {


    console.log(pditemspl.indexOf(getshow[s]) < -1)

    if (pditemspl.indexOf(getshow[s]) > -1) {
      getpditem.classList.remove('show')

      //  getpditem.className += " "+getshow[s]
    }
  }
}


var getproductitems = document.getElementsByClassName('productitems');


for (var i = 0; i < getproductitems.length; i++) {
  getproductitems[i].addEventListener('click', function () {
    var curractives = document.querySelector('.activepd');
    curractives.className = curractives.className.replace(' activepd', '');
    this.className += " activepd";
  })
}




// End Products Section 








// // Start Items History 

// const getitemhistoryctn = document.getElementById("itemhistory")
// const shopcardbtn = document.getElementById("shopcardbtn");
// const xmaxbtn = document.querySelector(".fa-circle-xmark");

// const historylists = document.querySelector(".goodctn")



// const getshopcards = document.querySelectorAll(".shopcards");
// const getcounts = document.getElementById('counts');



// shopcardbtn.addEventListener("click",function(){
//     getitemhistoryctn.classList.toggle("itemhistoryshow")
// })

// xmaxbtn.addEventListener("click",function(){
//   getitemhistoryctn.classList.toggle("itemhistoryshow")
// })


// const pfarrs = ["Tom Ford","Chanel Co Co","Avon","Chanel N 5","Arizona","Eternity(summer)","Eternity(winter)","Elie Saab","Mouzurakahza","Tom Ford2","Arizona2","Avon"];
// const pfvalues = [250,350,150,300,200,350,150,150,250,340,290,310]


// let count = 1;
// // let cot = 1;



// getshopcards.forEach(function(getshopcard,idx){

//   let  cot = 1


//   getshopcard.addEventListener("click",function(){

//     // console.log(!sessionStorage.getItem("email") === false)

//     if (!sessionStorage.getItem("copassword") ) {
//       // email key is not set in sessionStorage
//       getmodalcontainer.style.visibility = "visible"
//     } else {
//       // email key is set in sessionStorage
//       getcounts.innerHTML = `<i class="fa-solid fa-circle countdot"></i>`;

//       // getmodalcontainer.style.visibility = "hidden" 



//     }

//      goodarrfun(getshopcard,idx,cot,pfvalues); 

//   })

// })





// function goodarrfun(good,idx){

//   cot = 1;   //for start with 1
//   rmcot = 1

//   getul = document.createElement("ul")
//   getul.setAttribute(`class`,`list-unstyled d-flex goods`)









//   pfarrs.forEach(function(pfarr,pfidx){


//     if(idx === pfidx){
//       // getul.nextElementSibling.innerHTML = ''
//       getul.innerHTML = `

//       <li class="list-inline-item col-sm-2">${pfarr}</li>
//       <li class="list-inline-item col-sm-2 cot">${cot}</li>

//       <li class="list-inline-item col-sm-2">$${pfvalues[idx]}</li>
//       <li class="list-inline-item col-sm-2 value">$${pfvalues[idx*cot]}</li>
//       <button class="col-sm-2 removeul"><i class="fa-solid fa-trash"></i></button> 

//       `;




//       good.addEventListener("click",function(){




//         getul.setAttribute(`class`,`list-unstyled d-flex goods ${pfarr}`);

//         console.log( getul.className.includes(`list-unstyled d-flex goods ${pfarr}`))

//         if( getul.className.includes(`list-unstyled d-flex goods ${pfarr}`)){

//           const colts = document.querySelector(".cot")
//           console.log(colts.innerHTML = ++cot)

//           getul.remove();

//           const vlaues = document.querySelector(".value")
//           vlaues.innerHTML =` $${pfvalues[idx]*cot}` ;






//         }



//         });







//       historylists.prepend(getul);





//       // console.log(getul.nextElementSibling)

//       // ----------------------------------------------------------------------------------------------


//       const removeul = document.querySelector('.removeul')

//       removeul.addEventListener("click",function(){

//         getul.remove()

//       })


//     } 
//   })
// }



// // End Items History 


// Start footer 
const autoyear = document.getElementById("autoyear")
const getyear = new Date().getUTCFullYear()
autoyear.textContent = getyear;
// End footer 