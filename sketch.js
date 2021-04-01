const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var stand;
var block1,block2,block3,block4,block5,block6,block7;
var block8,block9,block10,block11,block12;
var block13,block14,block15;
var block16;
var polygon,slingshot,polygon_img;
var score=0;
function preload() {
    polygon_img=loadImage("polygon.png")
}
 
function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    polygon=Bodies.circle(50,200,50);
    World.add(world,polygon);
   
   

    slingshot=new Slingshot(polygon,{x:100,y:200});
    
    ground=new Ground(600,height,1200,20)
    stand=new Ground(440,305,220,20);
    block1=new Box(350,285,30,40);
    block2=new Box(380,285,30,40);
    block3=new Box(410,285,30,40);
    block4=new Box(440,285,30,40);
    block5=new Box(470,285,30,40);
    block6=new Box(500,285,30,40);
    block7=new Box(530,285,30,40);
    block8=new Box(380,245,30,40);
    block9=new Box(410,245,30,40);
    block10=new Box(440,245,30,40);
    block11=new Box(470,245,30,40);
    block12=new Box(500,245,30,40);
    block13=new Box(410,205,30,40);
    block14=new Box(440,205,30,40);
    block15=new Box(470,205,30,40);
    block16=new Box(440,175,30,40);
}
    
    function draw(){
        background(255);
       imageMode(CENTER);
        image(polygon_img,polygon.position.x,polygon.position.y,60,60)
        Engine.update(engine);
        ground.display();
        stand.display();
        block1.display();
        block2.display();
        block3.display(); 
        block4.display();
        block5.display();
        block6.display();
        block7.display();
        block8.display();
        block9.display();
        block10.display();
        block11.display();
        block12.display();
        block13.display();
        block14.display();
        block15.display();
        block16.display();
        slingshot.display();
        block1.score();
        block2.score();
        block3.score(); 
        block4.score();
        block5.score();
        block6.score();
        block7.score();
        block8.score();
        block9.score();
        block10.score();
        block11.score();
        block12.score();
        block13.score();
        block14.score();
        block15.score();
        block16.score();
        text("Score: "+score,750,40);
        drawSprites();
    }
    function mouseDragged(){
        Matter.Body.setPosition(polygon,{x:mouseX,y:mouseY});
        }
    
    
    
    function mouseReleased(){
        slingshot.fly();
        
    }
    function keyPressed(){
        if(keyCode===32){
            slingshot.attach(polygon);
        }
    }