const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var mybird;
var pig1,pig2;
var log1;

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(175,300,50,50);
    box2 = new Box(320,300,50,50);
    ground = new Ground(200,height,400,20);
    pig1 = new Pig(250,300);

    //angles - degrees, RADIANS  - PI
    //PI= 180degrees
    //PI/2 = 90
    log1= new Log(250,150,200,PI/2);

    mybird = new Bird(200,100,20,20);
}

function draw(){
    background("white");
    Engine.update(engine);
   
    box1.display();
    box2.display();
    ground.display(); 
    pig1.display();
    mybird.display();   
    log1.display();

}

//classes - box and ground 
//C24 - pair programming/peer programming
//pig, bird, logs,
