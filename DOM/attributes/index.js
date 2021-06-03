function validation(){
   var form=document.querySelector("form");
   var list= form.querySelectorAll("input");
   list.forEach(function(element){
        if (element.hasAttribute("required")&& element.value===""){
             element.classList.value="redBorder";
        }
        
    })
}

validation();



