



function getRandomInt(max) {

    var array=[];
    for (var i=0; i<10; i++) {
       if (array.length<11){ 

   array.push(Math.random()*max);

  }
//   console.log(array);


  }

  return array;

}



  
  console.log(getRandomInt(50));
 var random=getRandomInt(50);

  

//  to fixed

function roundd(array){
    return array.map(function(el){
      return  el.toFixed(2);
    })
}

console.log(roundd(random));

//floor

function roundd(array){
    return array.map(function(el){
      return  Math.floor(el);
    })
}

console.log(roundd(random));

// max

function max(array){
  return  array.reduce(function(a, b) {
        return Math.max(a, b); })}

    console.log(max([2,5,100,0]));

    // dates

 
    var today = new Date();
    console.log(today);
    var time = today.getHours();
    console.log(time);
    var date=today.getDate()+"/"+(today.getMonth()+1);
    console.log(date);


