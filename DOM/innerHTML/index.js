


function dropdownList (array, elem) {
   var body=document.documentElement.children[1]; 
   
   body.appendChild(elem);
 
   var select=document.createElement("select");
   elem.appendChild(select);


   for(var i=0; i<array.length; i++){
      var option=document.createElement("option");
      option.textContent=array[i];
      select.appendChild(option);

   }
   
}

dropdownList(["Home","About","Program"],document.querySelector("div"));
dropdownList(["Info","Number","Link"],document.querySelector("body").lastChild);