const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    hammer = new Hammer(10,100);
    plane = new Plane(600,height,1200,20)
    square = new Square(100,500);
    box2 = new rectangle(300,100);
    ball1 = new Ball(400,300);
    smallball1 = new Smallball(700,300);
    smallball2 = new Smallball(710,300);
    smallball3 = new Smallball(710,300);
    smallball4 = new Smallball(710,300);
    smallball5 = new Smallball(710,300);
    smallball6 = new Smallball(710,300);



}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    square.display();
    box2.display();
    ball1.display();
    smallball1.display();    
    smallball2.display();    
    smallball3.display();    
    smallball4.display();           
    smallball5.display();   
    smallball6.display();           

}