var seasons;
var seasonType ="";

var leaf;

var leafLocationX=[];
var leafLocationY=[];
var leafAmount = 25;

function preload(){
  leaf = loadImage("https://openclipart.org/image/300px/svg_to_png/257622/1470680735.png");
}
function setup() {
  // put setup code here
  createCanvas(400,400);
  seasons = createSelect();
  seasons.position(10,10);
  seasons.option("spring");
  seasons.option("summer");
  seasons.option("fall");
  seasons.option("winter");
  seasons.changed(function(){

    seasonType= seasons.value();
  });
}

function draw() {
  // put drawing code here
  background(255);
  fill("black");
  stroke(0);
  textSize(20);
  text(seasonType, 10, 75);

  seasonType = "spring";

  if(seasonType == "spring"){
    line(width/2,height/2,width/2,300);

    fill("white");
    ellipse(width/2,height/2-20,10,20);

    //i++ is the same as i=i+1
    for(var i = 0; i < 19; i++){
      //runs code in here
      push();
      translate(width/2,height/2);
      rotate(i+30);
      ellipse(0,20,10,20);
      pop();
        }



    fill("yellow");
    ellipse(width/2,height/2,20,20);


    for(var l =0;  i <leafAmount; l++);
    leafLocationX = random(0.width);
    leafLocationY = random(0,-500);

  };

}
