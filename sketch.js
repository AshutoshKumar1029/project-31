const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var divisionheight = 300
var  divisionarray=[]
var plinkoarray=[]
var particlesarray=[]

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
    world = engine.world;
    newGround = new Ground(240,790,480,20);
    for(i=0;i<=width;i=i+80){
divisionarray.push(new division(i,height-divisionheight/2,10,divisionheight))
    }

for(k=40;k<=width;k=k+50){
  plinkoarray.push(new plinko(k,50,10))
}
for(k=10;k<=width;k=k+50){
  plinkoarray.push(new plinko(k,150,10))
}
for(k=40;k<=width;k=k+50){
  plinkoarray.push(new plinko(k,250,10))
}
for(k=10;k<=width;k=k+50){
  plinkoarray.push(new plinko(k,350,10))
}
   particle1 = new particles(random(200,400),20,10)
}

function draw() {
  background("black"); 
  Engine.update(engine); 
  newGround.display();
 
  
  for (var n = 0; n<divisionarray.length; n++) {
    divisionarray[n].display();
  }
  for (var n = 0; n<plinkoarray.length; n++) {
    plinkoarray[n].display();
  }

  if (frameCount %60 === 0&&particlesarray.length<20) {
    particlesarray.push(new particles(random(width/2-30, width/2+30),10,10));
  }
  
  for (var h = 0; h<particlesarray.length; h++) {
    particlesarray[h].display();
  }
  
}