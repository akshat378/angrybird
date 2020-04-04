const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    Pig1=new Pig(800,300,)
    box1 = new Box(900,300,70,70);
    box2 = new Box(700,300,70,70);
    box3=new Box(900,250,70,70);
    box4 = new Box(700,250,70,70);
    log1=new log(800,260,300,PI/2)
    ground = new Ground(600,height,1200,20)
    pig2=new Pig(800,250)
    log2=new log(800,220,300,PI/2)
    box5=new Box(800,180,70,70)
log3=new log(760,120,150,PI/7)
log4=new log(870,120,150,-PI/7)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    Pig1.display();
    ground.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
}