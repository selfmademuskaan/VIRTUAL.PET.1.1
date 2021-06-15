//Create variables here dog, happyDog, database, foodS, foodStock
var dog,happydog,database,foods,foodstock;
var dogimg1,dogimg2;
function preload()
{
	//load images here
  dogimg1 = loadImage("images/dogImg.png");
  dogimg2= loadImage("images/dogImg1.png");
}

async function setup() {
	createCanvas(500, 500);
database=firebase.database();

  dog= createSprite(250,250,10,10)
  dog.addImage(dogimg1);
  dog.scale=0.3;

  var foodref=await database.ref('food');
  foodref.on("value",readfood);
}


function draw() {  
  text("food remaing"+foods,100,100)
  drawSprites();
  //add styles here

}

function readfood(data){
foods=data.val();
console.log(foods);

}

function writefood(){

  
}

