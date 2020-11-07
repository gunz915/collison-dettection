var movingRect,fixedRect

function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(200,200,50,80);
  movingRect=createSprite(12,12,12,12)
  movingRect.shapeColor="white"
fixedRect.shapeColor="white"
}

function draw() {
  background("black");
  movingRect.x=mouseX
  movingRect.y=mouseY  
  if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2&&
  fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2&&
  movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2&&
  fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2)
  {
    movingRect.shapeColor="red"
  }
  else{
    movingRect.shapeColor="white"
  }
  drawSprites();
}