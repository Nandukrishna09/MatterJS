
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var groundobj;
var leftSide;

function preload()
{
    
}

function setup() {
    createCanvas(1100, 700);


    engine = Engine.create();
    world = engine.world;

    ball_options={
        isStatic:false,
        restitution:0.3,
        friction:0,
        density:1.2
    }

    //Create the Bodies Here   
    ball=Bodies.circle(200,100,20,ball_options)
    World.add(world,ball)

	groundobj=new Ground(550,670,1100,20)
	leftSide=new Ground(750,600,20,120)
    leftSide1=new Ground(1000,600,20,120)

    Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER)
  ellipseMode(RADIUS)
  background(0);    
  ellipse(ball.position.x,ball.position.y,20,20)
  
  groundobj.show();
  leftSide.show();
  leftSide1.show();
}

function keyPressed(){
    if (keyCode === UP_ARROW){
        Matter.Body.applyForce(ball,ball.position,{x:75,y:-75})
    }
}
