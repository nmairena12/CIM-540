var momCat;

var attack;
var dodge;
var hunt;

var dogX = [];
var dogY = [];
// var dog;
var dogAmount = 1;
var dogs = [];

var virusX = [];
var virusY = [];
var virus = [];
var virusAmount = 2;

var carX = [];
var carY = [];
var car = [];
var carAmount = 2;

var ratX = [];
var ratY = [];
var rat = [];
var ratAmount = 2;

var kittens = [];
var kittenAmount=5;

var run = false;
var prevTime= 0;
var boost = 5000;



function preload(){
  // kitten = createSprite(700,750);
  kitten = loadImage('../imgs/Cat-Silhouette-2.png');
}

function setup() {
  // put setup code here

  attack = new Group();
  dodge = new Group();
  hunt = new Group();

  createCanvas(400,800)
  momCat = createSprite(200,700);
  momCat.addAnimation('normal', '../imgs/cat-silhouette-snowshoe.png');
  momCat.debug = "true";

  for(var i = 0; i<dogAmount; i++){
  //dogX[i] = random(0, width);
  //dogY[i] = random(0, -800);
  dogs[i] = createSprite(random(0, width), random(-100, -800));
  dogs[i].addAnimation('normal', '../imgs/z-pa005-dog.png');
  dogs[i].velocity.y = 3;
  dogs[i].debug='true';
  attack.add(dogs[i]);
}
  // dog = createSprite(dogX, dogY);
  // dog.addAnimation('normal', '../imgs/z-pa005-dog.png');
  // dog.velocity.y = 3;

  for(var i = 0; i<virusAmount; i++){
  virus[i] = createSprite(random(0,width),random(-100,-800));
  virus[i].addAnimation('normal', '../imgs/Virus.png');
  virus[i].velocity.y = 3;
  virus[i].debug='true';
  dodge.add(virus[i]);
}

for(var i = 0; i<ratAmount; i++){
  rat[i] = createSprite(500,800);
  rat[i].addAnimation('normal', '../imgs/lemmling-Simple-cartoon-mouse-1.png');
  rat[i].velocity.y = 3;
  rat[i].debug = "true";
  hunt.add(rat[i]);
}

for(var i = 0; i<carAmount; i++){
  car[i]= createSprite(300,800);
  car[i].addAnimation('normal', '../imgs/Machovka-grey-car.png');
  car[i].velocity.y = 3;
  car[i].debug='true;'
  dodge.add(car[i]);

}


for(var i = 0; i<kittenAmount; i++){
  let x = 350-50*i;
  kittens[i] = createSprite(x,750);
  kittens[i].addImage(loadImage("../imgs/Cat-Silhouette-2.png"));
}


}

function draw() {
  // put drawing code here
  background(255,255,255);


  momCat.velocity.x=0;
  momCat.velocity.y=0;
  if (keyIsDown(LEFT_ARROW))
    momCat.velocity.x = -5;
  if (keyIsDown(RIGHT_ARROW))
    momCat.velocity.x = 5;
  if(keyIsDown(UP_ARROW))
    momCat.velocity.y=-5;
  if(keyIsDown(DOWN_ARROW))
    momCat.velocity.y=5;


  for(var i = 0; i<dogAmount; i++){
  if (dogs[i].position.y > height){
  dogs[i].position.y = random(-500, -100);
  dogs[i].position.x = random(0, width);
  // hide(kitten);
   }
 }


  for(var i = 0; i<virusAmount; i++){
  if (virus[i].position.y > height){
  virus[i].position.y = random(-500,-100);
  virus[i].position.x = random(0, width);
    }
  }

  // RAT CHECK
  for(var i = 0; i<ratAmount; i++){
  if (rat[i].position.y > height){
  rat[i].position.y = random(-500,-100);
  rat[i].position.x = random(0, width);
    }
  }


  for(var i = 0; i<carAmount; i++){
  if (car[i].position.y > height){
  car[i].position.y = random(-500,-100);
  car[i].position.x = random(0, width);
    }
  }


  if (momCat.overlap(dodge)){
    console.log("dodge hit");
    kittens.splice(i, 1);

  }

  dodge.displace(dodge);
  dodge.displace(hunt);
  dodge.displace(attack);
  hunt.displace(hunt);
  hunt.displace(attack);
  hunt.displace(dodge);
  attack.displace(attack);

  // setInterval()

  if (momCat.overlap(hunt)){
    console.log("hunt hit")
    run = true;
  }
  for(run==true; millis()<5000;run==false){
    if (keyIsDown(LEFT_ARROW)){
      momCat.velocity.x = -20;
    }
    if (keyIsDown(RIGHT_ARROW)){
      momCat.velocity.x = 20;
    }
    if(keyIsDown(UP_ARROW)){
      momCat.velocity.y=-20;
    }
    if(keyIsDown(DOWN_ARROW)){
      momCat.velocity.y=20;
    }
  }

  if (momCat.overlap(attack)){

  }


  // function dodgeGroup (){
  //   dodge.splice(i,1);
  //   // kittens.splice(i,1);
  // };


// ACTION
//   if(rat[0].overlapPixel(momCat.position.x, momCat.position.y)){
//     console.log("rat hit");
//     if (keyIsDown(LEFT_ARROW))
//         momCat.velocity.x = -10;
//       if (keyIsDown(RIGHT_ARROW))
//         momCat.velocity.x = 10;
//   }
//
//   if(rat[1].overlapPixel(momCat.position.x, momCat.position.y)){
//     console.log("rat hit");
//     if (keyIsDown(LEFT_ARROW))
//         momCat.velocity.x = -10;
//       if (keyIsDown(RIGHT_ARROW))
//         momCat.velocity.x = 10;
//   }
//
// if(virus[0].overlapPixel(momCat.position.x, momCat.position.y)){
//   console.log("virus hit")
//   kittens.splice(i,1);
// }
//
// if(dodge.overlapPixel(momCat.position.x, momCat.position.y)){
//   console.log("virus hit")
//   kittens.splice(i,1);
//
// }

// function catRun(){
//   if (keyIsDown(LEFT_ARROW)){
//     momCat.velocity.x = -20;
//   }
//   if (keyIsDown(RIGHT_ARROW)){
//     momCat.velocity.x = 20;
//   }
//   if(keyIsDown(UP_ARROW)){
//     momCat.velocity.y=-20;
//   }
//   if(keyIsDown(DOWN_ARROW)){
//     momCat.velocity.y=20;
//   }
// }
 drawSprites();
}
