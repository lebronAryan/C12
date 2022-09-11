
var trex ,trex_running;
var ground,groundImage
var invisibleGround

function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")
groundImage=loadImage("ground2.png")
}
 
function setup(){
  createCanvas(600,200)
  
  //create a trex sp  rite
 trex=createSprite(50,180,20,50)
 trex.addAnimation("running",trex_running) 
 trex.scale= 0.5
 ground=createSprite(50,190,400,10)
 ground.addImage(groundImage)
 ground.velocityX=-2 
 invisibleGround=createSprite(50,200,400,10)
 invisibleGround.visible=false
}

function draw(){
  background("white")
  if (keyDown("space")&&trex.y>=100)
  {
    trex.velocityY=-10

  }
console.log(trex.y)
  trex.velocityY=trex.velocityY+0.8
  if(ground.x<0)
  {
    ground.x=300
  }
  trex.collide(invisibleGround   )
  
  drawSprites()


} 
