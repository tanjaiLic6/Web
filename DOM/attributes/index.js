function validation(){
   var form=document.querySelector("form");
    form.querySelectorAll("input");
    form.forEach(function(element){
        if (element.hasAttribute("required")&& element.textContent===""){
             element.className=".redBorder";
        }
    })
}

validation();



