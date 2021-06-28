const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint
var engine,world
var brick1;
var ball;
var Ground1
var polyimg;
var sling;
function preload(){
   polyimg = loadImage("polygon.png")
}
function setup(){
    createCanvas(1100,400)
   engine = Engine.create()
   world = engine.world
 
   ball = new Ball(150,100,26)
   sling = new Sling(ball.body,{x:130,y:130})
   brick1 = new Block1(680,350,30,40,"yellow")
   brick2 = new Block1(710,350,30,40,"red")
   brick3 = new Block1(740,350,30,40,"green")
   brick4 = new Block1(770,350,30,40,"yellow")
   brick5 = new Block1(800,350,30,40,"cyan")
   brick6 = new Block1(830,350,30,40,"yellow")
   brick7 = new Block1(860,350,30,40,"cyan")
   brick8 = new Block1(890,350,30,40,"green")
   brick9 = new Block1(875,310,30,40,"red")
   brick10 = new Block1(695,310,30,40,"cyan")
   brick11 = new Block1(725,310,30,40,"green")
   brick12 = new Block1(755,310,30,40,"red")
   brick13 = new Block1(785,310,30,40,"yellow")
   brick14 = new Block1(815,310,30,40,"green")
   brick15 = new Block1(845,310,30,40,"cyan")
   brick16 = new Block1(710,270,30,40,"green")
   brick17 = new Block1(740,270,30,40,"red")
   brick18 = new Block1(770,270,30,40,"cyan")
   brick19 = new Block1(800,270,30,40,"yellow")
   brick20 = new Block1(830,270,30,40,"green")
   brick21 = new Block1(860,270,30,40,"yellow")
   brick22 = new Block1(725,230,30,40,"green")
   brick23 = new Block1(755,230,30,40,"red")
   brick24 = new Block1(785,230,30,40,"cyan")
   brick25 = new Block1(815,230,30,40,"green")
   brick26 = new Block1(845,230,30,40,"red")
   brick27 = new Block1(740,190,30,40,"yellow")
   brick28 = new Block1(770,190,30,40,"green")
   brick29 = new Block1(800,190,30,40,"cyan")
   brick30 = new Block1(830,190,30,40,"red")
   brick31 = new Block1(755,150,30,40,"red")
   brick32 = new Block1(785,150,30,40,"cyan")
   brick33 = new Block1(815,150,30,40,"yellow")
   brick34 = new Block1(770,110,30,40,"cyan")
   brick35 = new Block1(800,110,30,40,"yellow")
   ground1 = new Ground(width/2,375,width,10)
   ground2 = new Stand(670,360,5,23)
   ground3 = new Stand(900,360,5,23)
   ground4 = new Ground(1050,height/2-15,10,370)
   Engine.run(engine)
}
function draw(){
    background(95,147,227)
    imageMode(CENTER)
    image(polyimg,ball.body.position.x,ball.body.position.y,70,70)
    
    brick1.display()
    brick3.display()
    brick4.display()
    brick2.display()
    brick5.display()
    brick6.display()
    brick7.display()
    brick8.display()
    brick9.display()
    brick10.display()
    brick11.display()
    brick12.display()
    brick13.display()
    brick14.display()
    brick15.display()
    brick16.display()
    brick17.display()
    brick18.display()
    brick19.display()
    brick20.display()
    brick21.display()
    brick22.display()
    brick23.display()
    brick24.display()
    brick25.display()
    brick26.display()
    brick27.display()
    brick28.display()
    brick29.display()
    brick30.display()
    brick31.display()
    brick32.display()
    brick33.display()
    brick34.display()
    brick35.display()
    ground1.display()
    ground2.display()
    ground3.display()
    ground4.display()
    ball.display()
    sling.display()
    textSize(35)
    stroke("black")
    strokeWeight(2)
    fill("lightgreen")
    text("Building Crash",415,50)
}
function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    sling.fly()
}
function keyPressed(){
    if(keyCode == 32){
    sling.attach(ball.body)
    }
}
