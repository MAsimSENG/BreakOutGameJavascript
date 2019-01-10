var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");
var x = 0;
var y =0;
var dx = 0.25;
var dy=0.5;
var pX = canvas.width/2;
var pIx =50;
var pW= 70;
var pH= 10;
var pY=280;

document.addEventListener("keydown",movePaddle);
function movePaddle(event){
  if(event.keyCode == "39" && pX+pIx < canvas.width-pW ) {
    pX +=pIx;
  }
  if(event.keyCode == "37" && pX-pIx >0){
    pX-=pIx;
  }
}
function drawBricks(){

}
function drawPaddle(){
  ctx.beginPath();
  ctx.rect(pX,pY,pW,pH);
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.closePath();
}
function ball() {
  ctx.beginPath();
  ctx.arc(x,y,10,0,2 * Math.PI);
  ctx.fillStyle = "purple";
  ctx.fill();
  ctx.closePath();
}

function draw(){
  ctx.clearRect(0,0,canvas.width, canvas.height);
  drawPaddle();
  ball();
  if(x>canvas.width || x< 0) {
    dx=-dx;
  }
  if(y< 0){
    dy = -dy;
  }
  if(y>pY){
    if(x>pX && x<pX+pW){
      dy=-dy;
    }
  }
  if( y> canvas.height){
    alert("gameOver");
    clearInterval(interval);
  }
  x+=dx;
  y+=dy;
}
var interval = setInterval(draw,1);
