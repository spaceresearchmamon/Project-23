const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var playerB, computerB;
var player, comp;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
    playerB=new PlayerBase(width/5,height/1.06,250,250);
    computerB=new Computerbase(width/1.4,height/1.06,250,250);
    player=new Player(width/5,height/1.8,150,300);
    comp=new Player(width/1.4,height/1.8,150,300);
 }

function draw() {

  background("midnightblue");

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
   playerB.display();
   computerB.display();

   
  
   //display Player and computerplayer
   player.display();
   comp.display();


}
