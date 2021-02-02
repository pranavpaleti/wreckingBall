const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var base, stand1, stand2;

var constraint;

function setup() {
  createCanvas(1200,600);

  engine = Engine.create();
  world = engine.world;

  base = new Ground(600,590,1200,25);
  block1 = new Block(600,300,50,100);
  block2 = new Block(600,200,50,100);
  block3 = new Block(600,100,50,100);

  block4 = new Block(700,100,80,180);
  block5 = new Block(700,200,80,180);
  block6 = new Block(700,300,80,180);

  block7 = new Block(800,50,20,50);
  block8 = new Block(800,100,20,50);
  block9 = new Block(800,150,20,50);
  block10 = new Block(800,200,20,50);
  block11 = new Block(800,250,20,50);
  block12 = new Block(800,300,20,50);
  block13 = new Block(800,350,20,50);
  block14 = new Block(800,400,20,50);
  block15 = new Block(800,450,20,50);
   
  wreckingBall=new Polygon(200,500)
  constraint=new SlingShot(wreckingBall.body,{x:200,y:50});
}
function draw() {
  
  background(255);  
  Engine.update(engine);
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  wreckingBall.display();
  constraint.display();
  base.display();
  

  
 

  
}

function mouseDragged(){
  Matter.Body.setPosition(wreckingBall.body, {x: mouseX, y: mouseY});
}
