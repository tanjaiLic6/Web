
function greet(){  

    alert("Hello my dear!");

}

greet();


function question(){
 return   prompt("Da li si ok?");
}

var answer=question();

function dialog(answer){
  if  (  confirm("We will submit this  answer now "+ answer)){
        alert("success");
  }

   
}

dialog(answer);

