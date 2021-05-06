class Form {
    constructor(){
    this.input = createInput("NAME");
    this.button = createButton("START");
    this.greeting = createElement ("h3");
    }
    display(){
        var title =createElement("h2");
        title.html("Car Racing Game")
        title.position(400,100);
       this.input . position(400,200);
        this.button . position (400,250);
        this.button.mousePressed( ()=>{
        this.input .hide()
        this.button.hide();
        
         player.name = this.input.value ();
     playerCount = playerCount + 1;
     player.index = playerCount;
     player.writePlayerCount(playerCount);
player.update();


this.greeting.html("Welcome"+ player.name)
this.greeting.position(500,200);
        });
    }
hide(){
this.input.hide();
this.button.hde();
this.greeting.hide();

}
}