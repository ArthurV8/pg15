
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var corpo1,corpo2,corpo3,chao;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
var chaop={
	isStatic:true
}
chao=Bodies.rectangle(600,580,1200,2,chaop);
World.add(world,chao);

var corpo1op={
	restitution:0.5,
	friction:0.02,
	frictionAir:0

}
corpo1=Bodies.circle(220,10,10,corpo1op);
World.add(world,corpo1);

var corpo2op={
	restitution:0.7,
	friction:0.01,
	frictionAir:0.1

}
corpo2=Bodies.rectangle(110,50,10,10,corpo2op);
World.add(world,corpo2);

var corpo3op={
	restitution:0.01,
	friction:1,
	frictionAir:0.3

}
corpo3=Bodies.rectangle(350,50,10,10,corpo3op);
World.add(world,corpo3);










	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  drawSprites();
  rect(chao.position.x,chao.position.y,1200);
  ellipse(corpo1.position.x,corpo1.position.y,30);
  rect(corpo3.position.x,corpo3.position.y,100,50);
  rect(corpo2.position.x,corpo2.position.y,50,50);
}



