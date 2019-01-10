var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");
var x = 0;
var y =0;
var dx = 0.25;
var dy=0.5;
var pX = canvas.width/2;
var pIx =50;
var pW= 80;
var pH= 10;
var pY=280;
var bH= 5;
var bW=10;
var bP=30;
var bA=[];
var row =3;
var col =3;
var xoS =30;
var yoS = 20;


for(c=0;c<3;c++){
  bA[c] = [];
  for(r=0;r<3;r++){
    bA[c][r] = {x:0,y:0,status:false};
  }
}


document.addEventListener("keydown",movePaddle);
function movePaddle(event){
  if(event.keyCode == "39" && pX+pIx < canvas.width-pW ) {
    pX +=pIx;
  }
  if(event.keyCode == "37" && pX-pIx >0){
    pX-=pIx;
  }
}
var bY=0;
var bX=0;
function drawBricks(){
  for(c=0; c<col; c++){
    for(r=0;r<row;r++){
      bX= (10*r*(bW))+xoS;
      bA[c][r].x= bX;
      bY= c*(bH+bP)+yoS;
      bA[c][r].y= bY;


      if(bA[c][r].status==false){
        ctx.beginPath();
        ctx.rect(bX,bY,pW,pH);
        ctx.fillStyle = "black";
        ctx.fill();
        ctx.closePath();

      }
    }

}
}
function drawPaddle(){
  ctx.beginPath()
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
function brickCollision(){
  for(c=0;c<col;c++){
    for(r=0;r<row;r++){
      var b= bA[c][r];
      if(x>b.x && x<b.x+bW &&y>b.y && y<b.y+bH){
        b.status=true;
        dy=-dy
      }
    }
  }
}

function draw(){
  ctx.clearRect(0,0,canvas.width, canvas.height);
  brickCollision();
  drawBricks();
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
