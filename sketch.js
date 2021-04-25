
const Bodies = Matter.Bodies;
const Engine = Matter.Engine;
const World = Matter.World;
const Constraint = Matter.Constraint;
 var world, engine;
function setup() {
  createCanvas(1200, 800);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  
var options={
  isStatic:true
}
fill("brown");
ground = Bodies.rectangle(600, 780, 1200, 20, options);
World.add(world, ground);
 // createSprite(400, 200, 50, 50);
 var options={
  isStatic:true
}

 dart1 = Bodies.circle(600, 400, 70, options);
 World.add(world,dart1);


var options={
  isStatic:true
}

 dart2 = Bodies.circle(600, 400, 120, options);
 World.add(world,dart2);

 var options={
  isStatic:true
}

 dart3= Bodies.circle(600, 400, 40, options);
 World.add(world,dart3);



var options={
  isStatic:true
}

 dart4= Bodies.circle(600, 400, 120, options);
 World.add(world,dart4);


 hand = Bodies.rectangle(600,750, 50,50,options);
 World.add(world,hand)

 pin = Bodies.rectangle(600, 730,10,50, options);
 World.add(world,pin);
 attachment = new Dart(pin, {x:600, y:750})
}



function draw() {
  background("blue"); 

 // pin.position.x = mouseX;
//  pin.position.y = mouseY;
 
if(keyDown("left")){
  hand.position.x =  hand.position.x-3;
}

if(keyDown("right")){
  hand.position.x =  hand.position.x+3;
}
pin.position.x = hand.position.x
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 1200, 20);
  

  ellipseMode(RADIUS);
  fill("darkgreen");
  ellipse(dart3.position.x, dart1.position.y, 120);
  
  fill("purple")
  ellipse(dart2.position.x, dart2.position.y, 90);
  fill("yellow")
  ellipse(dart1.position.x, dart1.position.y, 70);
 
  fill("red")
  ellipse(dart4.position.x, dart1.position.y, 40);
  fill(0);
  rect(pin.position.x, pin.position.y, 10,50);
  fill("yellowochre")
  rect(hand.position.x, hand.position.y, 50,50);
  
  
  drawSprites();
  fill("white");
text("100",dart4.position.x,dart4.position.y) 
//console.log(text)
fill("black");
text("80",dart3.position.x,dart3.position.y-50) 

fill("black");
text("50",dart3.position.x,dart3.position.y-75) 

fill("black");
text("0",dart3.position.x,dart3.position.y-100) 
//console.log(text)

}
function mouseDragged(){
  Matter.Body.setPosition(pin, {x: mouseX , y: mouseY});
}
function mouseReleased(){
  attachment.fly();
}

