var doggy
var database 
var count
var stock 
var b1 
var b2
function preload()
{
   doggyi = loadImage("images/dogImg.png");
   milk = loadImage("images/milk.png")
}

function setup() {
	createCanvas(800, 700);
  doggy= createSprite(400,300,10,10) 
  doggy.addImage(doggyi)
  doggy.scale=0.5;
  database=firebase.database()
  var doggyposition  = database.ref("food")
    doggyposition.on("value",read,showerror)
    this.b1 = createButton("ADD FOOD")
    this.b2 = createButton("FEED THE DOG")
    this.b1.position(350,300)
    this.b2.position(350,400)
}


function draw() { 
  background ("green") 
 text(stock,50,10)
  drawSprites();
displaymilk(); 
b2.mousePressed(()=>
{
  stock-=1;
  updatefirebase();
})
b1.mousePressed(()=>
{
   stock+=1;
   updatefirebase();
})

}
function read (data)
{
  count=data.val()
  stock = count.count;
  console.log(count.count)
}
function showerror()
{

}
function updatefirebase ()
{
  database.ref("food").update
  ({
     count:stock
  })
}
function displaymilk ()
{
  var x = 100;
  for (var i=1;i<=stock;i++)
  {
    image (milk,x,600,50,50)
    x+=15;
  }

}

