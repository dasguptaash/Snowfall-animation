var bg;
var ice = [];

function preload(){
     bg = loadImage("snow3.jpg");
}

function setup() {
  createCanvas(1200,600);
  createSprite(400, 200, 50, 50);

  if(frameCount % 200 === 0){
    for(var i=0; i<150; i++){
    ice.push(new Snow(random(20,1000),10,20));
    }
    }

  
}
 

function draw() {
  background(bg);  
 
  for(var i = 0;i < 150; i++){
    ice[i].display();
    }  

 

  drawSprites();
}