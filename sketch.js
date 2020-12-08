
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball1

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    box=new dustbin(618,720,15,80,PI);
	box1=new dustbin(700,750,150,15,PI/2);
	box2=new dustbin(780,720,15,80,PI);
	Ground=new ground(400,760,800,10,PI/2);
	ball=new paper(100,500);
	
	ball1=createSprite(100,500,25,25);


	ground2=createSprite(400,760,800,10);
	ground2.visible=false;
	
	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background(0);
  ball1.x=ball.position.x;
  ball1.y=ball.position.y;
  box.display();
  box1.display();
  box2.display();
  Ground.display();
  ball.display();
}



