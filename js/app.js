// Start Navbar 


// End Navbar 




// Start Products Sectionn 

const getpditems = document.querySelectorAll('.pditems');

pdfilter('all');
function pdfilter(idx){

  
  for(var i = 0; i < getpditems.length; i++){
        
    console.log(getpditems[i].className.split(' ').indexOf(idx) === -1)
    
    let pditemspl = getpditems[i].className.split(' ');
      

     console.log(pditemspl[6] === idx)
     if(pditemspl[6] === idx){
      console.log( getpditems[i].classList.add('all'))
     }

     showfilter(getpditems[i],'show')

     if(pditemspl.indexOf(idx) === -1){
      removeshowfilter(getpditems[i],'show');

    }   



    
      
  }

}


function showfilter(getpditem,show){
  const pditemspl = getpditem.className.split(' ');

  const getshow = show.split(' ');

  for(var s =0; s < getshow.length;s++){
    

   console.log(pditemspl.indexOf(getshow[s]) === -1)

    if(pditemspl.indexOf(getshow[s]) === -1){
      getpditem.classList.add('show')
      // pditemspl.splice(pditemspl.indexOf(getshow[s]),1);
    }
  }

}


function removeshowfilter(getpditem,show){
  const pditemspl = getpditem.className.split(' ');

  const getshow = show.split(' ');

   for(var s =0; s < getshow.length;s++){
  

    console.log(pditemspl.indexOf(getshow[s]) < -1)

     if(pditemspl.indexOf(getshow[s]) > -1 ){
      getpditem.classList.remove('show')

      //  getpditem.className += " "+getshow[s]
     }
   }
}


var getproductitems = document.getElementsByClassName('productitems');

for(var i = 0 ; i < getproductitems.length ; i++){
  getproductitems[i].addEventListener('click',function(){
     var curractives = document.querySelector('.activepd');
     curractives.className = curractives.className.replace(' activepd','');
     this.className += " activepd";
  })
}





// End Products Section 





// Start Login Form 
const getmodalcontainer = document.getElementById('modalcontainer')
const getname = document.getElementById('fname');
const getemail = document.getElementById('email')

const getpassword = document.getElementById('password');
const getcopassword = document.getElementById('copassword')
const getshowpassword = document.getElementById('show_password');
const getshowcopassword = document.getElementById('show_copassword');

const canclebtn = document.querySelectorAll('.canclebtn');

const getsignupform = document.getElementById('signupform');
const getloginform = document.getElementById('loginform');
const smsingin = document.getElementById('smsingin');
const smsignup = document.getElementById('smssignup');

const showmodal = document.getElementsByClassName('showmodal')

for(var c = 0; c < canclebtn.length; c++){
  canclebtn[c].addEventListener("click",function(){
    getmodalcontainer.classList.toggle('showmodal')
  })
}

smsignup.addEventListener("click",function(){
  getsignupform.style.display = "block";
  getloginform.style.display = "none";
})

smsingin.addEventListener("click",function(){
  getsignupform.style.display = "none";
  getloginform.style.display = "block";
})






window.onclick = function(e){

  if(e.target === getmodalcontainer){
    getmodalcontainer.classList.toggle("showmodal")
  }
 }





 const getshopcards = document.querySelectorAll(".shopcards");
 const getcounts = document.getElementById('counts');
 
 for(var p = 0; p < getshopcards.length; p++){
     getshopcards[p].addEventListener("click",function(){
      //  console.log(localStorage.length)
       
       if(localStorage.length === 0){
        getmodalcontainer.classList.toggle("showmodal")  

       }

     })


 }

let count = 1;


getshopcards.forEach(function(getshopcard,idx){
  getshopcard.addEventListener("click",function(){
  

    getcounts.innerHTML = count++;
  })
})


















 

  getshowpassword.addEventListener('click',function(){

    
   console.log(getname.value)
    
     console.log(getpassword.type)
   
     if(getpassword.type === "password"){
       getpassword.setAttribute('type','text');
       getshowpassword.innerHTML = '<span class="" id ="show_password"> <i class="fa-solid fa-lock-open"></i> hide password</span>'

     }else{
       getpassword.setAttribute('type','password')
       getshowpassword.innerHTML = `<span class="" id ="show_password"> <i class="fa-solid fa-lock"></i> show password</span>`
   
     }
   })


   

  getshowcopassword.addEventListener('click',function(){
    
   
     if(getcopassword.type === "password"){
       getcopassword.setAttribute('type','text');
       getshowcopassword.innerHTML = `<span id="show_copassword">  <i class="fa-solid fa-lock-open"></i> hide password</span>`
     }else{
       getcopassword.setAttribute('type','password')
       getshowcopassword.innerHTML = `<span id="show_copassword">  <i class="fa-solid fa-lock"></i> show password</span>`
   
     }
  
   })





const signupbtn = document.getElementById('singup');
  
  signupbtn.addEventListener('click',function(e){

    localStorage.setItem("name",getname.value)
    localStorage.setItem("email",getemail.value)
    localStorage.setItem("password",getpassword.value)


    // console.log(localStorage.getItem("name"))


    


    if(getpassword.value === getcopassword.value){

      if( (getname.value === '' && getemail.value === '' ) && getpassword.value === '' && getcopassword.value === ''){
        getmodalcontainer.style.visibility = "visible";
        // console.log('true')
        alert("Something went wrong!")


      }else if(getname.value && getemail.value && getpassword.value && getcopassword.value){
        getmodalcontainer.style.visibility = "hidden";

     
      }

 
    } else{
      const getalertbox = document.getElementById('alertbox');
      getalertbox.classList.add("alertboxani");
    };
    
    e.preventDefault()
  

  })
  





  



// Start  Sing in 

const getlgname = document.getElementById("lgname")
const getloginpassword = document.getElementById('loginpassword');
const getshowloginpassword = document.getElementById('show_loginpassword');

const getformcontrol = document.querySelectorAll('.form-control');

const getsinginbtn = document.getElementById("singin");

getshowloginpassword.addEventListener('click',function(){

  
  
    if(getloginpassword.type === "password"){
      getloginpassword.setAttribute('type','text');
      getshowloginpassword.innerHTML = '<span class="" id ="show_password"> <i class="fa-solid fa-lock-open"></i> hide password</span>'

    }else{
      getloginpassword.setAttribute('type','password')
      getshowloginpassword.innerHTML = `<span class="" id ="show_password"> <i class="fa-solid fa-lock"></i> show password</span>`
  
    }
  })







  getsinginbtn.addEventListener("click",function(e){
   
    let localname = localStorage["name"];
    let localemail = localStorage["email"];
    let localpassword = localStorage["password"];
  

    for(var c = 0; c < getformcontrol.length; c++){
      

      if(getformcontrol[c].value === (localname && localemail && localpassword)){
            console.log("true")
          getmodalcontainer.classList.toggle("showmodal")

      }
    }


    
    e.preventDefault();
  })


 

// End Login Form 