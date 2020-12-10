
var movingRect, fixedRect;

function setup() {
  createCanvas(800,400);
 movingRect =  createSprite(200, 200, 50, 30);
 fixedRect = createSprite(400, 200, 30, 50);

 //50 - 50/2 = 25
 //30 - 30/2 = 15
 //25 + 15 = 40

 movingRect.shapeColor = "red";
 fixedRect.shapeColor = "red";

 movingRect.velocityX = 2;
 fixedRect.velocityX = -2;
}

function draw() {
  background(255,255,255);  

 
//is touching algorithm 

// movingRect.x = mouseX;
// movingRect.y = mouseY;

  // if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 &&
  //   fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 && 
  //   movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2 && 
  //   fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2){
  //   movingRect.shapeColor = "green";
  //   fixedRect.shapeColor = "green";
  // }else{
  //   movingRect.shapeColor = "red";
  //   fixedRect.shapeColor = "red";
  // }

 

  //bounce off algorithm

  if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 &&
    fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2){
      
      movingRect.velocityX = movingRect.velocityX * (-1);
      fixedRect.velocityX = fixedRect.velocityX * (-1);
    }


  console.log(movingRect.x - fixedRect.x);
  drawSprites();
}