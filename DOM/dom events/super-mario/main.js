var main=document.querySelector(".main");
var mario=document.querySelector(".mario");
var img=document.querySelector(".img");
var body=document.querySelector("body");

function moving(e){
    if (e.keyCode===39){ 
//    img.src='./assets/mario_running.gif';
mario.innerHTML='<img class="img" src="./assets/mario_running.gif" alt="">';
    main.classList.add('run-right');}
     if(e.keyCode===37){
        mario.innerHTML='<img class="img" src="./assets/mario-runing-left.gif" alt="">';
        main.classList.add('run-left')
    }
}



function stop(e){
if(e.keyCode===39){
    // img.src='./assets/mario.png';
    mario.innerHTML='<img class="img" src="./assets/mario.png" alt=""></img>';
    main.classList.remove('run-right');
}
 if(e.keyCode===37){
    mario.innerHTML='<img class="img" src="./assets/mario-left.png" alt=""></img>';
    main.classList.remove('run-left');
}

}








body.addEventListener('keydown',moving);
body.addEventListener('keyup',stop)

