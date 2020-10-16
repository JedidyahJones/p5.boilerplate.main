carBox:
var bullet,wall;
var speed,weight,thickness;

speed=random(55,90);
thickness=random(22,83);


function setup() {
  createCanvas(1200,400);
  bullet=createSprite(50,200,50,50);
  wall=createSprite(1200,200,thickness,height/2);

}

function draw() {
  background(80,80,80);
  
  speed=random(221,321)
  weight=random(30,52)
}

function hasCollided(bullet,wall)
{
  bulletRightEdge=lbullet.x +lbullet.width;
  wallLeftEdge=lwall.x;
  if (bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
    return false
}

if(hasCollided(bullet,wall))
{
  bullet.velocityX=0;
  var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);

  
  if(damage>10)
  {
    wall.shapeColour=colour(255,0,0);

  }


  if(damage<10)
  {
    wall.shapeColour(0,255,0);
  }

}