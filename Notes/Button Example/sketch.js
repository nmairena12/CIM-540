
var showButton, hideButton;

var showingOrHiding;


function setup() {
  // put setup code here

  createCanvas(500,500);
  showButton = createButton("show");
  showButton.position(10,40);
  showButton.mousePressed(function(){
      //set the action, what do you want mouse pressed to do
      //fill(0);
      //rect(width/2,height/2,100,100)

      showingOrHiding = 1;


  });

  hideButton = createButton("hide");
  hideButton.position(100,40);
  hideButton.mousePressed(function (){
    //fill(255);
    //rect(width/2,height/2,100,100);
    showingOrHiding = 0;

  });

}


function draw() {
  // put drawing code here

  background(255);

  if(showingOrHiding == 1){
    fill(0);
    ellipse(width/2, width/2, 100,100);
  }

  if (showingOrHiding == 0){

  }




}
