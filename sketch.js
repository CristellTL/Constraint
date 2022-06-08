const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var btn2;
var ball;
var union;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
   
   var ground_options ={
     isStatic: true
   };
  
  btn2 = createImg('up.png');
  btn2.position(350,30);
  btn2.size(50,50);
  btn2.mouseClicked(vForce);

  ball = new Ball(100,50,50);
  ball2 = new Ball(200, 100,5);
  
  union = Constraint.create({
    bodyA: ball.body,
    pointB: {x:200,y:50},
    length: 200,
    stiffness: 0.1
  })

  World.add(world,union);

  ground = Bodies.rectangle(100,400,650,20,ground_options);
  World.add(world,ground); 
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  //line(ball.body.position.x,ball.body.position.y, ball2.body.position.x,ball2.body.position.y);
  line(ball.body.position.x,ball.body.position.y,200,50);
  ball.display();
  ball2.display();
 
  rect(ground.position.x,ground.position.y,650,20);
 
}

function vForce()
{
  Matter.Body.applyForce(ball.body,{x:0,y:0},{x:0,y:-0.05});
}
  