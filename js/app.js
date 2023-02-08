
const getpditems = document.querySelectorAll('.pditems');

pdfilter('all');
function pdfilter(idx){

  
   
   
 
   
  

  for(var i = 0; i < getpditems.length; i++){

  
  

    // console.log(getpditems[i].className.split(' ').indexOf(idx))
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
