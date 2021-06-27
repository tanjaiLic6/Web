var button=document.querySelector(".btn");
var input=document.querySelector(".input-space");
var mainArea=document.querySelector(".main-area");


function push(){

  var msg=document.createElement("p");
  msg.textContent=input.value;
  mainArea.appendChild(msg);

 input.value="";
};


// input.onkeyup= function(event){
//   // event.preventDefoult();
//   if(event.keycode===13 ){
//    push();
//   }
// }

button.onclick = push;

