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




window.onclick = function(e){

  if(e.target === getmodalcontainer){
    getmodalcontainer.style.display = "none"
  }
 }




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

  const getcanclebtn = document.getElementById('cancle');
  getcanclebtn.addEventListener('click',function(){
    getmodalcontainer.style.display = "none"
  })





const signupbtn = document.getElementById('singup');
  
  signupbtn.addEventListener('click',function(e){
    console.log(getpassword.value)
    localStorage.setItem("name",getname.value)
    localStorage.setItem("email",getemail.value)
    localStorage.setItem("password",getpassword.value)


    if(getpassword.value === getcopassword.value){

      if(getpassword.value === '' && getcopassword.value === ''){
        getmodalcontainer.style.visibility = "visible";
      }else{
        getmodalcontainer.style.visibility = "hidden";
      }
 
    }else{
      const getalertbox = document.getElementById('alertbox');
      getalertbox.classList.add("alertboxani");
    };
    
    e.preventDefault()
  

  })
  



const getshopcards = document.querySelectorAll(".shopcards");
const getcounts = document.getElementById('counts');

for(var p = 0; p < getshopcards.length; p++){
    getshopcards[p].addEventListener("click",function(){
      // console.log('hi')
      getmodalcontainer.style.visibility = "visible";
    })
}



// Start  Sing in 

const getloginpassword = document.getElementById('loginpassword');
const getshowloginpassword = document.getElementById('show_loginpassword');
getshowloginpassword.addEventListener('click',function(){

    
  
  
    if(getloginpassword.type === "password"){
      getloginpassword.setAttribute('type','text');
      getshowloginpassword.innerHTML = '<span class="" id ="show_password"> <i class="fa-solid fa-lock-open"></i> hide password</span>'

    }else{
      getloginpassword.setAttribute('type','password')
      getshowloginpassword.innerHTML = `<span class="" id ="show_password"> <i class="fa-solid fa-lock"></i> show password</span>`
  
    }
  })


// End Login Form 