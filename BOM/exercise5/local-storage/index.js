function storingData(name,value){
   return window.localStorage.setItem(name,value);
}

// storingData("name",'Tanja');


function PrintDate(){
   if (!window.localStorage.getItem("color")){
      console.log("There is no data");
   }

   else {
      console.log(window.localStorage.getItem("color"));
   }
}

// PrintDate();


function deleteData(){
   window.localStorage.removeItem("name");
}

// deleteData()


storingData("name",'Tanja');
storingData ("day",'Saturday');
storingData ("color",'red');

PrintDate();


function back(){
 return  window.history.back(-2);
   
}

back();