canvas= document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var mouseevent="empty";
var lastx,lasty;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    mouseevent="mousedown";
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseevent="mouseup";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseevent="mouseleave";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
var currentx=e.clientX -canvas.offsetLeft;
var currentY=e.cilentY -canvas.offsetTop;
if(mouseevent=="mousedown"){
    ctx.beginPath();
    ctx.strokeStyle="blue";
    ctx.lineWidth=5;
    ctx.moveTo(lastx,lasty);
    ctx.lineTo(currentx,currentY);
    ctx.stroke();
}
lastx=currentx;
lasty=currentY;
}


