var hr,mn,sc;
var srangle;
var hangle;
var mangle;

function setup() {
  createCanvas(displayWidth,displayHeight); // height = 1080, wifth = 1920  

}

function draw() {
  background("Black"); 

  hr = hour()%12;
  mn = minute();
  sc = second();


  angleMode(DEGREES); 
  srangle = map(sc,0,60,0,360);
  hangle = map(hr,0,12,0,360);
  mangle = map(mn,0,60,0,360);

  

  
  //fill(255,255,255);
  //ellipse(405,300,400,400);
  
  push();
  translate(900,500)
  rotate(srangle)
  stroke("Blue")
  strokeWeight(7)
  line(0,0,350,0)
  pop();

  push();
  translate(900,500)
  rotate(hangle)
  stroke(147, 249, 4)
  strokeWeight(7)
  line(0,0,120,0)
  pop();

  push();
  translate(900,500);
  rotate(mangle);
  stroke(255, 59, 10)
  strokeWeight(7)
  line(0,0,200,0)
  pop();



  drawSprites();
}