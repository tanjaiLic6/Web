var footbalField=document.querySelector(".field");
var body=document.querySelector('body');
var player=document.querySelector(".player");



function getClickPosition(e) {
    var xPosition = e.clientX;
    var yPosition = e.clientY;
    console.log(xPosition)
    console.log(yPosition)
    player.style.top=yPosition+"px";
    player.style.left=xPosition+"px";
}
footbalField.addEventListener("click",getClickPosition);


