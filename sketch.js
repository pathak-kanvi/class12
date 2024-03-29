var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png")
}

function setup() {
  createCanvas(600,200);
  
  
  //create a trex sprite
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  

  //create a ground sprite
  ground = createSprite(300,180,600,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  //creating an invisible ground
  invisibleGround=createSprite(300, 190, 600, 10)
  invisibleGround.visible=false
  
  
}

function draw() {
  //set background color
  background(220);
  
  console.log(trex.y)
  
  //jump when the space key is pressed
  if(keyDown("space") && trex.y > 150 ) {
    trex.velocityY = -10;
  }
  
  //add gravity
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  //stop trex from falling down
  trex.collide(invisibleGround);
  
  drawSprites();
}