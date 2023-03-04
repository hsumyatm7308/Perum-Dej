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
const loginbtn = document.querySelector('.loginbtn')

const getsignupform = document.getElementById('signupform');
const getloginform = document.getElementById('loginform');
const smsingin = document.getElementById('smsingin');
const smsignup = document.getElementById('smssignup');

const showmodal = document.getElementsByClassName('showmodal');


loginbtn.addEventListener("click",function(){
  getmodalcontainer.classList.toggle('showmodal')

})

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

  getshowpassword.addEventListener('click',function(){

    
   console.log(getname.value)
    
     console.log(getpassword.type)
   
     if(getpassword.type === "password"){
       getpassword.setAttribute('type','text');
       getshowpassword.innerHTML = '<span class="" id ="show_password"> <i class="fa-solid fa-lock-open"></i></span>'

     }else{
       getpassword.setAttribute('type','password')
       getshowpassword.innerHTML = `<span class="" id ="show_password"> <i class="fa-solid fa-lock"></i></span>`
   
     }
   })


   

  getshowcopassword.addEventListener('click',function(){
    
   
     if(getcopassword.type === "password"){
       getcopassword.setAttribute('type','text');
       getshowcopassword.innerHTML = `<span id="show_copassword">  <i class="fa-solid fa-lock-open"></i></span>`
     }else{
       getcopassword.setAttribute('type','password')
       getshowcopassword.innerHTML = `<span id="show_copassword">  <i class="fa-solid fa-lock"></i></span>`
   
     }
  
   })





const signupbtn = document.getElementById('singup');
  
  signupbtn.addEventListener('click',function(e){

    localStorage.setItem("name",getname.value)
    localStorage.setItem("email",getemail.value)
    localStorage.setItem("password",getpassword.value);
    localStorage.setItem("copassword",getcopassword.value);
  
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
    getshowloginpassword.innerHTML = '<span class="" id ="show_password"> <i class="fa-solid fa-lock-open"></i></span>'

  }else{
    getloginpassword.setAttribute('type','password')
    getshowloginpassword.innerHTML = `<span class="" id ="show_password"> <i class="fa-solid fa-lock"></i></span>`
  
   }
  })


  getsinginbtn.addEventListener("click",function(e){
   
    let localname = localStorage["name"];
    let localemail = localStorage["email"];
    let localpassword = localStorage["copassword"];
  
    for(var c = 0; c < getformcontrol.length; c++){
      
      if(getformcontrol[c].value === (localname && localemail && localpassword)){
          // console.log("true")
          getmodalcontainer.classList.toggle("showmodal")
      }
    }
    e.preventDefault();
  })

// End Login Form 



// Start Items History 

const getitemhistoryctn = document.getElementById("itemhistory")
const shopcardbtn = document.getElementById("shopcardbtn");
const xmaxbtn = document.querySelector(".fa-circle-xmark");

const historylists = document.querySelector(".goodctn")



const getshopcards = document.querySelectorAll(".shopcards");
const getcounts = document.getElementById('counts');



shopcardbtn.addEventListener("click",function(){
    getitemhistoryctn.classList.toggle("itemhistoryshow")
})

xmaxbtn.addEventListener("click",function(){
  getitemhistoryctn.classList.toggle("itemhistoryshow")
})


const pfarrs = ["Tom Ford","Chanel Co Co","Avon","Chanel N 5","Arizona","Eternity(summer)","Eternity(winter)","Elie Saab","Mouzurakahza","Tom Ford2","Arizona2","Avon"];
const pfvalues = [250,350,150,300,200,350,150,150,250,340,290,310]


let count = 1;
// let cot = 1;



getshopcards.forEach(function(getshopcard,idx){
 
  let  cot = 1
  

  getshopcard.addEventListener("click",function(){
 
    if(localStorage.length === 0){
      getmodalcontainer.classList.toggle("showmodal")  
 
     }else{
      getcounts.innerHTML = count++;
     }
 
     goodarrfun(getshopcard,idx,cot,pfvalues); 
  
  })

})


 


function goodarrfun(good,idx){

  cot = 1;   //for start with 1
  rmcot = 1
 
  getul = document.createElement("ul")
  getul.setAttribute(`class`,`list-unstyled d-flex goods`)
  
 
  pfarrs.forEach(function(pfarr,pfidx){

  
    if(idx === pfidx){
      // getul.nextElementSibling.innerHTML = ''
      getul.innerHTML = `
    
      <li class="list-inline-item col-sm-2">${pfarr}</li>
      <li class="list-inline-item col-sm-2 cot">${cot}</li>
   
      <li class="list-inline-item col-sm-2">$${pfvalues[idx]}</li>
      <li class="list-inline-item col-sm-2 value">$${pfvalues[idx*cot]}</li>
      <button class="col-sm-2 removeul"><i class="fa-solid fa-trash"></i></button> 

      `;
   
      
    
               
      good.addEventListener("click",function(){
  
       
      
  
        getul.setAttribute(`class`,`list-unstyled d-flex goods ${pfarr}`);
      
        console.log( getul.className.includes(`list-unstyled d-flex goods ${pfarr}`))
       
        if( getul.className.includes(`list-unstyled d-flex goods ${pfarr}`)){
     
          const colts = document.querySelector(".cot")
          console.log(colts.innerHTML = ++cot)
       
          getul.remove();
    
          const vlaues = document.querySelector(".value")
          vlaues.innerHTML =` $${pfvalues[idx]*cot}` ;
  
         

          

     
        }

        
            
        });
    



      


      historylists.prepend(getul);
      
      const removeul = document.querySelector('.removeul')
    
      
      removeul.addEventListener("click",function(){
        getul.remove();
    

      })



      // ----------------------------------------------------------------------------------------------







       
    } 
  })
}


 
// End Items History 