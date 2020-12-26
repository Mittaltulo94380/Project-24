
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1;
var paper1,dustbin1,dustbin2,dustbin3;

function setup() {
	createCanvas(1200, 400);

	engine = Engine.create();
	world = engine.world;

	paper1=new Paper(150,320,25);
	dustbin1=new Dustbin(800,325,15,100);
	dustbin2=new Dustbin(900,380,200,15);
	dustbin3=new Dustbin(1000,325,15,100);
	ground1=new Ground(600,392.5,1200,15);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground1.display();
  paper1.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();


  drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:40,y:-20});
	}
}