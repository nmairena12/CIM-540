//GLobal Variables
var backgroundColor="white";
var eyePosX=65;
var eyePosY=225;
var eyeOffset=80;

function setup() {
  // put setup code here
  createCanvas(500,700);
}

function draw() {
  // put drawing code here
  background(backgroundColor);

noStroke();
  //right arm
  fill(101,188,14);
  rect(100,250,50,175,25);

  //right finger digit behind hand
  fill(246,249,169);
  triangle(350-210,455-10,370-210,445-10,360-210,500-10);

  //right hand
  fill(101,188,14);
  ellipse(125,425,100,100);

  //right fingers
  fill(246,249,169);
  triangle(105,415,295-185,445,255-185,455);
  triangle(310-195,450,335-195,455,325-195,495);

  //right leg
  fill(101,188,14);
  rect(200,455,50,90);

  //right foot
  fill(101,188,14);
  ellipse(200+20,545,70,40);

  //body
  fill(76,153,0);
  ellipse(250,300,250,350);

  //head
  fill(102,204,0);
  ellipse(150,250,150,150);

  //bun
  fill(0,0,0);
  ellipse(155,165,40,20);

  //scrunchie
  fill(152,31,213);
  ellipse(155,175,20,5);

  //chin
  fill(102,204,0)
  angleMode(DEGREES);
  arc(125,270,110,105,90,180);

  //teeth
  fill(246,249,169);
  triangle(95,250,100,270,85,270);
  triangle(95+70,250,100+70,270,85+70,270);

  //mouth
  stroke(101,188,14)
  line(70,270,180,270);

noStroke();
  //nose
  fill(240,43,109);
  ellipse(125,260,30,15)

  //right eye
  fill("blue");
  ellipse(65+eyeOffset+25,225+15,20,20)

  //left eye
  fill("blue");
  ellipse(65+25,225+15,20,20)


  //right eyebrow
  fill(0,0,0);
  rect(eyePosX,eyePosY,50,25,10);

  //left eyebrow
  fill(0,0,0);
  rect(eyePosX+eyeOffset,eyePosY,50,25,10);

  //left leg
  fill(102,204,0);
  rect(265,455,50,90);

  //left foot
  fill(102,204,0);
  ellipse(285,545,70,40);

  //skirt
  fill(239,243,103);
  rect(155,415,180,70);

  //left arm
  fill(102,204,0);
  rect(300,250,50,175,25);

  //left hand
  fill(102,204,0);
  ellipse(325,425,100,100);

  //left fingers
  fill(246,249,169);
  triangle(290,415,295,445,255,455);
  triangle(310,450,335,455,325,495);
  triangle(350,455,370,445,360,500);



}

function mousePressed(){
  eyePosY = 205;
  eyePosX = 65;
  eyeOffset = 80;
  backgroundColor = "white";

}

function mouseReleased(){
  eyePosY=225;
  eyePosX = 65;
  eyeOffset=80;


}






  //end draw loop
