var snowflake,snowflakeImg
var bgImg;
var kid ,kidImg, kidAni;

function preload() {
  snowflakeImg = loadImage("snow4.webp");
  bgImg = loadImage("snow1.jpg");
  kidImg= loadImage("kid1.png");
  kidAni=loadAnimation("kid2.png","kid3.png","kid3.png","kid3.png");
}
function setup() {
  createCanvas(800,400);
 
  kid=createSprite(650,300);
  kid.addImage("standing",kidImg);
  kid.scale=0.35;
  kid.velocityX=0;
}

function draw() {
  background(bgImg);  

  if(keyDown(LEFT_ARROW)){
    kid.addAnimation("walking",kidAni);
    kid.changeAnimation("walking");
    kid.velocityX=-1;
  }

  createSnowflake();
  drawSprites();
}

function createSnowflake(){
  if(frameCount%10===0){
  snowflake = createSprite(random(0,800), 0, 50, 50);
  snowflake.velocityX = -2;
  snowflake.velocityY = 4;
  snowflake.addImage(snowflakeImg);
  snowflake.scale = 0.1;
  }
}

