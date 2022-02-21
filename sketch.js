const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Bodies;

var engine, world, backgroundImg;

var tower, ground, cannon, cannonBall;
var angle = 70;

var balls = [];

function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");
}

function setup() {

  createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;

  angleMode(DEGREES);
  angle = 30;
  
  ground = Bodies.rectangle(0, height - 1, width*2, 1, {isStatic:true});
  World.add(world, ground);

  tower = Bodies.rectangle(80, 200, 160, 310, {isStatic:true});
  World.add(world, tower);

  cannon = new Cannon (180, 120, 130, 110, angle);

  
  
}

function draw() {

  image(backgroundImg, 0, 0, 1200, 600);
  Engine.update(engine);

  rect(ground.position.x, ground.position.y, width*2, 1);

  image(towerImage, tower.position.x, tower.position.y, 160, 310);

  cannon.display();

  for (var i=0; i < balls.length; i++){
    showCannonBalls(balls[i]);
  }
}


function keyReleased(){

  if(keyCode === DOWN_ARROW){
    balls[balls.length -1].shoot();
  }
}

function keyPressed(){

  if(keyCode === DOWN_ARROW){

    cannonBall = new CannonBall (cannon.x, cannon.y);
    balls.push(cannonBall);

  }

}

function showCannonBalls(ball){

  if(ball){
    ball.display();
  }

}

