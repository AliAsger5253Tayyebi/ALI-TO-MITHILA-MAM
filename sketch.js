var gameState = 0;
var playerCount;
var game,player,form;
var players;


function setup(){
  database = firebase.database();

  console.log(database);
  createCanvas(800,500);
   game = new Game ();


   game.readGameState();

 game.start();
}

function draw(){
  
   
  if (playerCount === 4){
    
    game.writeGamestate(1);
  }
  if (gameState === 1){
    game.play();
  }
}

