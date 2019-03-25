var eyeOffset= 30;
var mountain;
var hamX=375;
var hamY=375;
var hamPressed;
var bodyX = 400;
var bodyY = 250;

var eaten = false;

var snowLocationX=[];
var snowLocationY=[];
var snowAmount=150;
var tremble;

var hatPressed;
var hatOn;
var hatX = 200;
var hatY = 400;

var sunX = 200;
var sunY = 100;

var moonX = 700;
var moonY = 100;

var firstX =200;
var firstY = 100;

var sunThere = false;
var moonThere = false;
var firstBack=true;

var sunDistance = 0;
var moonDistance = 0;

var sleepLocationX=[];
var sleepLocationY=[];
var sleepAmount = 3;

var blink = false;
var bodyPoke = false;


function preload(){

  mountain = loadImage("https://openclipart.org/image/2400px/svg_to_png/303790/1530341588.png")
}

function setup() {
  // put setup code here
  createCanvas(800,500);
  let foot = color(151,231,247);

  for (var i = 0; i < snowAmount; i++) {
   snowLocationX[i] = random(0, width);
   snowLocationY[i] = random(0, -500);
 }

 for (var i = 0; i<sleepAmount; i++){
   sleepLocationY[i] = random(bodyY + 150, bodyY - 50);
   sleepLocationX[i] = random(bodyX + 100, bodyX + 200);
 }

}

function draw() {
  // put drawing code here
  var generalBody = color(1,231,247);
  var body = color(130,126,236);
  var arm = color(98,212,235);
  var mouthX = 400;
  var mouthY = 250;
  var distance = dist(mouseX, mouseY, mouthX+120,mouthY+45);
  var hatDistance = dist(mouseX,mouseY,hatX+75,hatY-100);
  var bodyDistance = dist(mouseX,mouseY,bodyX+150,bodyY+50)
  var sunDistance = dist(mouseX,mouseY,sunX,sunY);
  var moonDistance = dist(mouseX,mouseY,moonX,moonY);
  var firstDistance = dist(mouseX,mouseY,firstX,firstY);
  var daySky = color(148,238,255);


  //background mountains

  background(mountain);


  ellipse(width/2,height/2,10,10);
  angleMode(RADIANS);
  if(firstBack==true){
    background(daySky)
    fill("orange");
    for (var i = 0; i < 25; i++) {
     push();
     translate(firstX,firstY);
     rotate(i + 30);
     triangle(50,0,40,20,70,10);
     pop();
   }
    fill("yellow");
    ellipse(firstX,firstY,100,100);
    fill("white")
    // text(storyText0, width/2, height/2-100)
  } else {
  }



  if(firstDistance<50 && mouseIsPressed==true){
    firstBack==false;
    moonThere=true;

  };
  if(moonThere==true){
      background("black");
      ellipse(moonX,moonY,100,100);
    }

    if(moonDistance<50 && mouseIsPressed==true){
      moonThere=false;
      sunThere=true;
    }

  if (sunThere==true){
    background(daySky)
    fill("orange");
    for (var i = 0; i < 25; i++) {
     push();
     translate(firstX,firstY);
     rotate(i + 30);
     triangle(50,0,40,20,70,10);
     pop();
   }
    fill("yellow");
    ellipse(sunX,sunY,100,100);
  }

  if (sunDistance<50 && mouseIsPressed==true){
    sunThere=false;
    moonThere=true;
    firstBack=false;
  }

  if (hatOn==true && moonThere == true){
    fill("blue");
        for(var i = 0; i < sleepAmount; i++) {
        textSize(30);
        textStyle("bold");
        text("Z", sleepLocationX[i], sleepLocationY[i]);
        sleepLocationY[i]--;
           if(sleepLocationY[i]<100){
            sleepLocationY[i] = random(bodyY + 150, bodyY - 50);
            sleepLocationX[i] = random(bodyX + 100, bodyX + 200);
          }
    }
  }


  //iceberg
  fill(168,204,252);
  ellipse(width/2,height/2+225,900,300);
  fill(203,212,255);
  ellipse(width/2,height/2+150,700,150);



  //little yeti
  noStroke();
  //arm
  fill(arm);
  ellipse(bodyX+85,bodyY+70,30,95)
  //body
  fill(body);
  ellipse(bodyX+150,bodyY+50,150,175);
  //foot
  fill(generalBody);
  ellipse(bodyX+105,bodyY+125,40,50);
  //arm
  ellipse(bodyX+200,bodyY+70,30,95)
  //foot
  fill(generalBody);
  ellipse(bodyX+155,bodyY+125,40,50);
  //face
  fill(generalBody);
  ellipse(bodyX+125,bodyY+25,90,75);
  fill("black");



  if (bodyDistance<80 && mouseIsPressed==true && eaten ==false && hamPressed ==false){
    textSize(30);
    textStyle("bold");
    text(">", bodyX+95,bodyY+30)
    text("<", bodyX+100+eyeOffset,bodyY+30)
    blink=true
  } else if (hamPressed==true && eaten==false){
    //left eye
    fill("black");
    ellipse(bodyX+100,bodyY+20,15,25);
    fill("white")
    ellipse(bodyX+100,bodyY+15,5,10);
    //right eye
    fill("black")
    ellipse(bodyX+100+eyeOffset,bodyY+20,15,25);
    fill("white")
    ellipse(bodyX+100+eyeOffset,bodyY+15,5,10);
  } else if (eaten==true && hatOn==false){
    fill("black")
    //left eye
    ellipse(bodyX+100,bodyY+20,10,20);
    angleMode(DEGREES);
    noFill()
    stroke(5)
    arc(bodyX+100,bodyY+20, 15, 25, 90,180);
    fill("black")
    //right eye
    ellipse(bodyX+100+eyeOffset,bodyY+20,10,20);
    angleMode(DEGREES);
    noFill()
    stroke(5)
    arc(bodyX+100 + eyeOffset,bodyY+20, 15, 25, 360,90);
    noStroke();
    fill("black")
  } else if (hatOn==true && moonThere==false){
    //left eye
    angleMode(DEGREES);
    stroke(5)
    arc(bodyX+100,bodyY+20, 10, 20, 0,180);
    fill("black")
    //right eye
    angleMode(DEGREES);
    stroke(5)
    arc(bodyX+100 + eyeOffset,bodyY+20, 10, 20, 0,180);
    noStroke();
    fill("black")
    sleeping=false
  } else if (hatOn==true && moonThere==true){
    noFill()
    angleMode(DEGREES);
    strokeWeight(3)
    stroke(5)
    arc(bodyX+100,bodyY+20, 10, 20, 0,180);
    //right eye
    angleMode(DEGREES);
    strokeWeight(3)
    stroke(5)
    arc(bodyX+100 + eyeOffset,bodyY+20, 10, 20, 0,180);
    noStroke();
    sleeping=true
  }
  else {
    //left eye
    ellipse(bodyX+100,bodyY+20,10,20);
    //right eye
    ellipse(bodyX+100+eyeOffset,bodyY+20,10,20);
  }





  //pick up hat
  if (eaten==true && hatOn==false){
    tremble=true;
  } else {
    tremble=false;
  };
  //hat
  fill("purple");
  triangle(hatX,hatY,hatX+75,hatY-100,hatX+90,hatY);

  if (hatDistance<10 && eaten==true){
  hatPressed=true;
  fill("red");
}else{
    fill("white");
};
  ellipse(hatX+75,hatY-100,20,20);

  if(mouseIsPressed == true && hatPressed == true && tremble==true){
    hatX=mouseX;
    hatY=mouseY;
  } else{
    hatPressed = false;
  }

  if(bodyDistance<80 && hatPressed==true){
    hatOn=true
  };

  if(hatOn==true){
    hatX=505;
    hatY=230;
    tremble=false;
  } else {
    hatOn =false;
};

  if(tremble==true){
    angleMode(RADIANS);
    bodyX = bodyX + (sin(radians(frameCount * 20)) * .5);
  }else{
    tremble=false;
  };

  if (hatOn==false){
    tremble=true;
  };

  if(tremble==false && hatOn==true){
    bodyX=400;
  };




if (eaten == false && hamPressed == true){
  //mouth
  fill("pink");
  ellipse(bodyX+120,mouthY+45,26,26);
  fill("red");
  ellipse(bodyX+120,mouthY+50,16,16);
}


  //pick up meat
  if(mouseX>hamX && mouseX<hamX+80 && mouseY>hamY && mouseY<hamY+10){
    hamPressed= true;
    fill("red");
    cursor(HAND);
  }else{
    fill("white")
    cursor(ARROW);
  }

  if(mouseIsPressed == true && hamPressed == true){
   hamX=mouseX;
   hamY=mouseY;
} else {
  hamPressed = false;
}


if (distance<13 && hamPressed==true){
  eaten = true;
}
  rect(hamX,hamY,80,10);
  ellipse(hamX+80,hamY,10,10);
  ellipse(hamX+80,hamY+10,10,10);
  ellipse(hamX,hamY,10,10);
  ellipse(hamX,hamY+10,10,10);

  //meat
if(eaten == false){
  noStroke();
  fill("brown");
  triangle(hamX-25,hamY-50,hamX-25,hamY+25,hamX+50,hamY);
  fill("pink");
  ellipse(hamX-25,hamY-12,40,73);
  fill("white");
  ellipse(hamX-25,hamY-12,10,23);
  tremble=false;
}

if ( mouseIsPressed==true && bodyDistance<80 && blink ==true){
  bodyPoke=true;
}

if(eaten==true){
  fill("white");
  for(var i = 0; i < snowAmount; i++) {
  ellipse(snowLocationX[i], snowLocationY[i], 10,10);
  snowLocationY[i]++;
 if(snowLocationY[i]>height){
  snowLocationY[i] = random(-500,0);
  snowLocationX[i] = random(0,width)
}
}
}


if(firstBack==true && blink==false){
  fill("black");
  textSize(12);
  textStyle("bold")
  text("Welcome to Yeti World! Give him a poke to see how he reacts.", width/2-50, height/2-100);
} else if (blink==true && eaten==false){
  fill("black");
  textSize(12)
  textStyle("bold")
  text("Feed him by picking up the ham and bringing it to his mouth.", width/2-50, height/2-100);
}else if(hatOn== false && eaten==true){
    fill("black");
  text("Oh no he's cold! Put his hat on his head.", width/2-50, height/2-100)
  textSize(12)
  textStyle("bold")
} else if (hatOn==true && firstBack==true){
    fill("black");
    textSize(12)
    textStyle("bold")
  text("All better! But now he's sleepy", width/2-50, height/2-100);
  text("-- change it to nightime so he can go to sleep.", width/2-50, height/2-86);
  text("Click on the Sun to switch to nightime.", width/2-50, height/2-72);
}else if (hatOn == true && moonThere==true && firstBack==false){
  fill("white");
  textSize(12)
  textStyle("bold")
text("Good night!", width/2-50, height/2-100);

}



}
