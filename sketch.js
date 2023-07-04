var sea, seaimg
var barco, barcoimg
function preload(){
seaimg=loadImage('sea.png')
barcoimg=loadAnimation('ship-1.png','ship-2.png','ship-3.png','ship-4.png')
}

function setup(){
  createCanvas(400,400);
  sea=createSprite(-400,-6,200,200)
  sea.addImage(seaimg)
  sea.velocityX =-3
barco=createSprite(200,200,70,70)
barco.addAnimation('nadando',barcoimg)
barco.scale = 0.3
}

function draw() {
  background("blue");
    drawSprites();

 
}
