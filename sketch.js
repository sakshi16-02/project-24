
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var dustbin;
var paper;

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

	ground=new Ground(800,670,1600,20);
	paper=new Paper(300,650);

	dustbin=new Dustbin(1200,650);
  
}

function draw() {
  background(0);
  Engine.update(engine);
  ground.display();
  paper.display();
  dustbin.display(); 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-75});
	}
}



