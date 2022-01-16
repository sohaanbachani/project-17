var towerImg,tower;
var doorImg,door,doorsGroup;
var climberImg,climber,climbersGroup;
var ghost,ghostImg;

function preload(){
  towerImg=loadImage("tower.png");
  doorImg=loadImage("door.png");
  climberImg=loadImage("climber.png");
  ghostImg=loadImage("ghost-standing.png");
 
}

function setup(){
  createCanvas(600,600);
  tower=createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY=1;
  doorsGroup=new Group();
  climbersGroup=new Group();
  ghost=createSprite(200,200,50,50);
  ghost.scale=0.3;
  ghost.addImage("ghost",ghostImg);
}

function draw(){
  background(0);
  if(tower.y>400){
    tower.y=300;
  }
  if(keyDown("right")){
    ghost.x=ghost.x+3;
  }
   if(keyDown("left")){
    ghost.x=ghost.x-3;
  }
  if(keyDown("space")){
    ghost.velocityY=-5;
  }
  ghost.velocityY=ghost.velocityY+0.8;
   
  if(climbersGroup.isTouching(ghost)){
    ghost.velocityY=0;
  }
  
  
  spawnDoors();
  
  drawSprites();
}
function spawnDoors(){
  if(frameCount % 240===0){
    var door=createSprite(200,-50);
    door.addImage(doorImg);
    
    var climber=createSprite(200,10);
    climber.addImage(climberImg);
    door.x=Math.round(random(120,400));
    door.velocityY=1;
    climber.x=door.x;
    climber.velocityY=1;
    ghost.depth=door.depth;
    ghost.depth+=1;
    door.lifetime=800;
    climber.lifetime=800;
    
    doorsGroup.add(door);
    climbersGroup.add(climber);
  }
}