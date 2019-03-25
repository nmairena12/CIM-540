//GLobal var
var page0,page1,page2,page3,page4;
var image0,image1,image2,image3,image4;
var currentImage = 0;

function preload(){
  image0 = loadImage("assets/sand.jpg");
  image1 = loadImage("assets/plus.jpg");
  image2 = loadImage("assets/witch.jpg");
  image3 = loadImage("assets/equal.jpg");
  image4 = loadImage("assets/sandwich.jpg");

}


function setup() {
  // put setup code here
  createCanvas(500,500);
  page0 = createButton("Page 0");
  page0.position(10,400);
  page0.mousePressed(function(){

    currentImage = 0;
  });

  page1 = createButton("Page 1");
  page1.position(100,400);
  page1.mousePressed(function(){

    currentImage = 1;
  });

  page2 = createButton("Page 2");
  page2.position(200,400);
  page2.mousePressed(function(){

    currentImage = 2;
  });

  page3 = createButton("Page 3");
  page3.position(300,400);
  page3.mousePressed(function(){

    currentImage = 3;
  });

  page4 = createButton("Page 4");
  page4.position(400,400);
  page4.mousePressed(function(){

    currentImage = 4;
  });
}

function draw() {
  // put drawing code here
  background(255);
  if(currentImage == 0){
    image(image0,0,0);
    text("Some sand...",10,10);
  }else if(currentImage == 1){
    image(image1,0,0);
    text("PLUS!",10,10);
  }else if(currentImage == 2){
    image(image2,0,0);
    text("A witch...",10,10);
  }else if(currentImage == 3){
    image(image3,0,0);
    text("must be...",10,10);
  }else if(currentImage == 4){
    image(image4,0,0);
    text("A Sandwich!",10,10);
  }





}
