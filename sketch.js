
var PLAY = 1;
var END = 0;
var gameState = PLAY;

var sword, swordImage;

var fruitsgroup, fruit1, fruit2, fruit3,fruit4;

var score;

var aliensGroup, alien1, alien2;

var gameoverimg;

function preload(){
  
 swordImage = loadImage ("sword.png");
  
  fruit1 = loadImage ("fruit1.png");
  fruit2 = loadImage ("fruit2.png");
  fruit3 = loadImage ("fruit3.png");
  fruit4 = loadImage ("fruit4.png");
  
  alien1 = loadImage ("alien1.png");
  alien2 = loadImage ("alien2.png");


  gameoverimg = loadImage ("gameover.png");
}

function setup() {
  createCanvas(400,400);
  sword = createSprite (40,200,20,20);
  sword.addImage("sword2",swordImage);
  sword.scale=0.5;
  
  fruitsGroup = createGroup();
  aliensGroup = createGroup();
  
  score= 0;

}


function draw(){
  background(60,260,190);
  
  text("Score: "+ score, 300,50);

  spawnFruits();
    
    spawnAliens();
  
    
if (gameState ===PLAY) {
  
  sword.y= World.mouseY;
  sword.x=World.mouseX;
  
  if (fruitsGroup.isTouching(sword)) {
  fruitsGroup.destroyEach();
    score=score+1;
    
  }
  
  if (aliensGroup.isTouching(sword)) {
    
    gameState = END;
    
  }
} 
  else if (gameState == END) {
    aliensGroup.destroyEach();
    fruitsGroup.destroyEach();
    sword.velocityY=0;
    sword.addImage("sword2",gameoverimg);
    sword.scale=2;
    sword.velocityX=0;
    sword.x=200;
    sword.y=200;
  }
  drawSprites();
}

function spawnFruits() {
if (frameCount % 80 == 0){
  position = Math.round((1));
   fruit = createSprite (400,200,20,20);
  var rand = Math.round(random(1,4));
  switch(rand) {
      case 1 : fruit.addImage("image3",fruit1);
      break;
      case 2 : fruit.addImage("image4",fruit2);
      break;
      case 3 : fruit.addImage("image5",fruit3);
      break;
      case 4 : fruit.addImage("image6",fruit4);
      break;
  }
  
   
 if (position === 1) {
 fruit.x=0;
   fruit.velocityX=(8+(score/4));
 }
  
  
  fruit.y =Math.round(random(50,340));
  fruit.scale=0.2;
  fruit.lifetime=100;
  fruitsGroup.add(fruit);
  }
}

function spawnAliens () {
if(frameCount % 100 == 0){
  position = Math.round((1));
  alien = createSprite (400,100,20,20);
var rand = Math.round(random(1,2));
  switch(rand){
      case 1 : alien.addImage("image1",alien1);
      break;
      case 2 : alien.addImage("image2",alien2);
      break;
  }
  
 if (position === 1) {
 alien.x=0;
   alien.velocityX=(8+(score/4));
 }
  
  alien.y=Math.round(random(80,340));
  alien.seliftime=100;
  aliensGroup.add(alien);
  }
}