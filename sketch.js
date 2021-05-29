//Create variables here
var dog,happydog,database,foodS,foodStock;
var dogImg,happydogImg;
var feed, addfood;
var fedTime, lastTime;
var foodObj
function preload()
{
  //load images here
  dogImg=loadImage("images/dogimg.png")
  happydogImg=loadImage("images/dogimg1.png")
}

function setup() {
  database=firebase.database();
  createCanvas(500, 500);
  dog=createSprite(200,200,50,50);
  dog.addImage("normaldog",dogImg) ;
  dog.scale=0.5
 foodStock=database.ref('food');
 foodStock.on("value",readStock);
textSize(20);

feed=createButton("Feed the Dog")
feed.position(700,95);
feed.mousePressed(feedDog);

addfood=createButton("Add food")
addFood.position(800,95)
addfood.mousePressed(addfoods)


foodobj= new Food

}


function draw() {  
background(46,139,87);
if(keyWentDown(UP_ARROW))
{
  writeStock(foodS)
  dog.addImage(dogImg);
}
  drawSprites();
  stroke("black")
text("Food remaining: " + foodS,170,200)
text("Press UP_ARROW key to feed Drago milk")
textSize(35)
fill("red")
stroke("white")
}

fill(255,255,254);
textSize(15);
if(lastFed>=12){
  text("Last Feed : "+ lastFed%12 + "PM",350, 30 );
}else if(lastFed==0){
  text("Last Feed : 12 AM", 350, 30);
}else{
  text("last Feed : " + lastFed + "AM", 350, 30);
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


function feedDog(){
  dog.addImage(dogimg1.png);

  foodObj.updateFoodStock(foodObj.getFoodStock()-1);
  database.ref("/").update({
    Food:foodObj.getFoodStock(),
    FeedTime:Hour()
  })
}

function addFoods(){
  foodS++;
  database.ref('/').update({
    Food:foodS
  })
}

