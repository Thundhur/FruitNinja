var swordimage,sword;
var score = 0;
var BG,BGi;
var gamestate;
var GOver,swoosh;
var EG,FG;
var Escreen,Escreeni;
function preload(){
  Escreeni = loadImage("gameover.png");
  Escreen = createSprite(300,200,0,0);
  Escreen.addImage(Escreeni);
  GOver = loadSound("gameover.mp3");
  swoosh = loadSound("knifeSwooshSound.mp3");
  swordimage = loadImage("sword.png");
  BGi = loadImage("wood.jpg");
  BG = createSprite();
  BG.addImage(BGi);
 sword = createSprite(0,0,0,0);
  sword.addImage(swordimage);
  sword.scale = 0.5;
  

}
function setup(){
  sword.rotation = 270;
  EG = new Group();
  FG = new Group();
  gamestate = "play";
  
}
function draw(){
  createCanvas(600,400);
  if(gamestate === "play"){
    sword.y = mouseY;
  sword.x = mouseX;
    if(frameCount%80 === 0){
    Alien();
    Fruit();
  }
    if(sword.isTouching(EG)){
    gamestate = "end";
  }
    if(sword.isTouching(FG)){
      FG.destroyEach();
      score = score + 2;
      swoosh.play();
  }
  } 
  if(gamestate === "end"){
    GOver.play();
    gamestate = "nothing";
    FG.destroyEach();
    EG.destroyEach();
    Escreen.depth = BG.depth + 2;
  }
  
  drawSprites();
  text("Score: " + score,500,50)
}
function Alien(){
  var i = random(1,2);
  i = Math.round(i);
  if (i === 1){
    var rand = random(0,400);
    var A = createSprite(-30,0,0,0);
    A.y = rand;
    var Ai = loadImage("alien1.png");
    A.velocityX = 7;
    A.depth = BG.depth +1;
    A.addImage(Ai);
    A.lifetime = 100;
    EG.add(A);
  } else if (i===2) {
    var rand = random(0,400);
    var A = createSprite(-30,0,0,0);
    A.y = rand;
    var Ai = loadImage("alien2.png");
    A.velocityX = 7;
    A.depth = BG.depth +1;
    A.addImage(Ai);
    EG.add(A);
    A.lifetime = 100;
    
  }
  
  
}
function Fruit(){
  var i = random(1,4);
  i = Math.round(i);
  if (i === 1){
    var rand = random(0,400);
    var B = createSprite(-30,0,0,0);
    B.y = rand;
    var Bi = loadImage("fruit1.png");
    B.velocityX = 7;
    B.depth = BG.depth +1;
    B.addImage(Bi);
    B.lifetime = 100;
    FG.add(B);
        B.scale = 0.2;

  } else if (i===2) {
    var rand = random(0,400);
    var B = createSprite(-30,0,0,0);
    B.y = rand;
    var Bi = loadImage("fruit2.png");
    B.velocityX = 7;
    B.depth = BG.depth +1;
    B.addImage(Bi);
    FG.add(B);
    B.lifetime = 100;
    B.scale = 0.2;
    
  }else if (i===3) {
    var rand = random(0,400);
    var B = createSprite(-30,0,0,0);
    B.y = rand;
    var Bi = loadImage("fruit3.png");
    B.velocityX = 7;
    B.depth = BG.depth +1;
    B.addImage(Bi);
    FG.add(B);
    B.lifetime = 100;
        B.scale = 0.2;

    
  }else if (i===4) {
    var rand = random(0,400);
    var B = createSprite(-30,0,0,0);
    B.y = rand;
    var Bi = loadImage("fruit4.png");
    B.velocityX = 7;
    B.depth = BG.depth +1;
    B.addImage(Bi);
    FG.add(B);
    B.lifetime = 100;
        B.scale = 0.2;

    
  }}