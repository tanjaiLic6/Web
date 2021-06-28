
var main=document.querySelector(".main");
var img=document.querySelectorAll('img');
var document=document.documentElement;

img.forEach(function(el){
    el.addEventListener('click',addRedBorder);
    
})


function addRedBorder(e){
  
     this.classList.add('red-border'); 
    if(this.width>=300){
        e.stopPropagation();
    }
}



function elementClicked(e){
  console.log(e.target.tagName)
}
function element(e){
    console.log("main"+e.target)
  }

document.addEventListener('click',elementClicked);
document.addEventListener('click',element);


// var h1=document.querySelector('h1')
// var h2=document.querySelector('h2')


// function cao(){
//     this.style.color='red';
// }


// h1.addEventListener('click',cao)
// h2.addEventListener('click',cao)


