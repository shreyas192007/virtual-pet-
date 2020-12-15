var dog,database,foodS,foodStock;

var happyDog_img,dog_img;



function preload()
{
  
  happyDog_img=loadImage("images/doglmg.png")
  dog_img=loadImage("images/doglmg1.png")


}

function setup() {
  createCanvas(500,500);
  
  dog=createSprite(250,300,20,20);
  dog.addImage(dog_img);
  
  database=firebase.database();
  foodStock=database.ref('food');
  foodStock.on("value",readStock);
}


function draw() {  
background(46,139,87);


if(KeyWentDown(UP_AROOW)){
     
  writeStock(foodS);

  dog.addImage(happyDog_img)
  


}


  drawSprites();
  //add styles here

  text("PRESS UP AROOW KEY TO FEED TOM MILK",200,100);
  fill("red");
  textSize(35);
  stroke(10);

} 

function readStock(data){

foodS=data.val();


}

function writeStock(x){

   if(x<=0){
   x=0
   
   }else{
   
  x=x-1

  }

  database.ref('/').update({
   food:x

  })
  
  
  }


