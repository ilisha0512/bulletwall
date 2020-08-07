var wall, thickness;
var bullet, speed, weight;
var damage;

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(70, 200, 50, 50);
  speed = random(233, 321);
  weight = random(30, 52);
  wall = createSprite (1200, 20, thickness, 1600);
  thickness = random(22, 83);
 
}

function draw() {
  background(255,255,255);  
  bullet.velocityX = speed;
  wall.shapeColor = (80, 80, 80);
  
  if(hasCollided(bullet, wall)){ 
    bullet.velocityX=0;
     var damage;
     damage = 0.5 * weight * speed * speed/ thickness * thickness * thickness
     if (damage > 10) { 
      wall.shapeColor = color(255, 0, 0);
    }
    if (damage < 10) {
      wall.shapeColor =color(0, 255, 0);
    }
  
    }
  
  drawSprites();
}

function hasCollided (lbullet, lwall){
bulletRightEdge = lbullet.x + lbullet.width;
wallLeftEdge = lwall.x;
if (bulletRightEdge >= wallLeftEdge){
  return true;
}
  return false;
}