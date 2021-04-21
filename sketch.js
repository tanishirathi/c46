var frect,mrect 
var jungle;
var mowgli;

function preload (){
   jungle = loadImage ("Forest3.jpg")
   mowgli = loadAnimation ("walking mowgli.png")
   tiger  = loadImage ("tiger1.png")
   zebra = loadImage ("zebra1.png")
   rhino = loadImage ("rhino1.png")
   lepord = loadImage ("lepord2.png")
   }

function setup() { 
createCanvas(displayWidth-50,displayHeight-150);
jungle1 = createSprite(displayWidth/2,displayHeight/2-100,10,10)
jungle1.addImage(jungle)
jungle1.scale = 0.3;

mowgli1 = createSprite (50,displayHeight-500,10,50) 
mowgli1.addAnimation("running",mowgli);}


 

   
function draw() {
background(0);
jungle1.velocityX=-2
if(jungle1.x<600){
jungle1.x=displayWidth/2;
}
spawnAnimals();
drawSprites() }

function spawnAnimals(){
   if(frameCount % 60 === 0 ){
   var Animal = createSprite (displayWidth,displayHeight-300,10,40);
   Animal.velocityX=-10
   
   var rand=Math.round(random (1,4))
   switch(rand){
   case 1: Animal.addImage(tiger);
          break;
   case 2: Animal.addImage(rhino);
          break;   
   case 3: Animal.addImage(lepord);
          break;
   case 4: Animal.addImage(zebra);
          break;
  
    default: break; }  
     Animal.scale=0.5;
     //Opstical.lifetime=  50;
     
   }
   }
   