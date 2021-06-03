(function(){
    document.querySelector('.second').className='bg';
})();

(function(){

    document.querySelectorAll('li').forEach(function(element){
        element.className='li-bg';
    });





})();

(
    function(){
       document.querySelectorAll('.third li').forEach(function(element){
           element.className='li-third';
           element.style.textTransform = 'uppercase';
       })


    }
)();

