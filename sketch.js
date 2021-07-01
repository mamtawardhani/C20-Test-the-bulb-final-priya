var bulb1,bulb2;
var wire;

function preload(){
  bulb1Image= loadImage("images/bulb1.png")
  bulb2Image = loadImage("images/bulb2.png")
  cableImage = loadImage("images/wire.png")
}
function setup() {
  createCanvas(800,400);

  wire = createSprite(400,380,10,100)
 wire.addImage("wire", cableImage)
 

 bulb1 = createSprite(250, 200, 50, 50);
 bulb1.addImage("b1", bulb1Image)
 bulb1.addImage("b2", bulb2Image)


 bulb2 = createSprite(550, 200, 50, 50);
 bulb2.addImage("b1", bulb1Image)
 bulb2.addImage("b2", bulb2Image)



}

function draw() {
  background("lightyellow");  


if(keyDown("right")){
  wire.x+=2
}
if(keyDown("left")){
  wire.x-=2
}

  textSize(20)
  fill("red")
  text("Test the Bulb!", 350,30)
    
  
    if(wire.y - bulb1.y < (wire.height + bulb1.height)/2
      && bulb1.y - wire.y < (wire.height + bulb1.height)/2 &&
      wire.x - bulb1.x < (wire.width + bulb1.width)/2
      && bulb1.x - wire.x < (wire.width + bulb1.width)/2){
      bulb1.changeImage("b2", bulb1Image)
      
    } 

    else{
      bulb1.changeImage("b1", bulb2Image)
    }

    
  if(wire.y - bulb2.y < (wire.height + bulb2.height)/2
    &&bulb2.y - wire.y < (wire.height + bulb2.height)/2 &&
    wire.x - bulb2.x < (wire.width + bulb2.width)/2
    && bulb2.x - wire.x < (wire.width + bulb2.width)/2){
      bulb2.changeImage("b2", bulb1Image)
     
  } 

  else{
    bulb2.changeImage("b1", bulb2Image)
  }

  


  drawSprites();
}