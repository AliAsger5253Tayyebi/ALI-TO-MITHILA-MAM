class Game {
    constructor(){

    }
    readGameState(){
        var gameref  =  database.ref("gameState")
        gameref.on("value",(data)=>{
            gameState  = data.val();

        })
    }
    //async 
    writeGamestate(state){
  database.ref("/").update({
      'gameState' : state
  })
   

    }
    
start(){
if (gameState === 0){
    player = new Player();
    form = new Form();
player.readPlayerCount();
form.display();
}

}
    play(){
        form.hide();
        Player.readPlayers();
        textSize(20);
        text ("Game Start",250,100)
        var y = 100;
        for (var i in players){
            if(i === "player"+player.index){
                fill("red");
                
                
            }
            else
            fill("black");
      text(players[i].name+":"+players[i].distance,250,y)
      
      y +=30  
        }
        if (keyDown(UP_ARROW)){
            player.distance += 50;
            player.update();
        }
    }
}