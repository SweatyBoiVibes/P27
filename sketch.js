
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	r1=new Roof(400,100)

	b1=new Ball(350, 300)
	rope1=new Rope(b1.body, r1.body,00)

	b2=new Ball(450,300)
	rope2=new Rope(b2.body, r1.body,50)

	b3=new Ball(550,300)
	rope3=new Rope(b3.body, r1.body,100)

	b4=new Ball(250,300)
	rope4=new Rope(b4.body, r1.body,-50)



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  r1.display()
  b1.display()
  rope1.display()
  b2.display()
  rope2.display()
  b3.display()
  rope3.display()
  b4.display()
  rope4.display()
  
  drawSprites();
 
}



