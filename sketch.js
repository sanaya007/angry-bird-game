const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var Pig1,Pig2;
var engine, world;
var box1,box2,box3,box4;
var Log1,Log2;
var Bird1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(900,320,70,70);
    ground = new Ground(600,height,1200,20);
    Pig1 = new Pig (800,320,50,50);
    Log1 = new Log (800,260,300,PI/2);
    Bird1 = new Bird (100,100);
    box3 = new Box (700,240,70,70);
    box4 = new Box (900,240,70,70);
    Pig2 = new Pig (800,240);
    Log2 = new Log (800,180,300,PI/2);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    Pig1.display();
    Log1.display();
    Bird1.display();
    box3.display();
    box4.display();
    Pig2.display();
    Log2.display();
}