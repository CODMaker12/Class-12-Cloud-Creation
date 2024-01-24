var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var cloud_image



var score;


function preload(){
  trex_running = loadAnimation("trex1.png","trex2.png","trex3.png");
  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  
 cloud_image = loadImage("cloud.png")
  
}

function setup() {

  createCanvas(600,200)
  
  //create a trex sprite
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  //create a ground sprite
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  //creating invisible ground
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  //generate random numbers
  
  var random1 = Math.round( random(4, 8))
  //console.log(random1)

}

function draw() {
  //set background color
  background(180);
  
  //console.log(trex.y)
  
  
  
  // jump when the space key is pressed
  if(keyDown("space")&& trex.y >= 100) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  //stop trex from falling down
  trex.collide(invisibleGround);
  
  //Spawn Clouds
  spawnClouds()
  
  drawSprites();
}

//function to spawn the clouds
function spawnClouds(){
 // write your code here 
 if (frameCount%60===0) {
  cloud = createSprite(600, 100, 40, 10)
  cloud.velocityX = -3;
  cloud.addImage(cloud_image)
  cloud.scale = 0.5;
  cloud.y = Math.round(random(20, 70))
  trex.depth = cloud.depth +1
  console.log(trex.depth)
  console.log(cloud.depth)
 } 
 
}



