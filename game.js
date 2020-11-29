class Game{
    constructor(){

    }
    //getState() will simply read the gamestate from the database.
    getState(){
        var gameStateref = database.ref("gameState");
        gameStateref.on("value",function(data){gameState=data.val()});
    };

    //update(state) will update the gameState in the database to a value
    //passed to it inside the parentheses
    update(state){
        database.ref("/").update({gameState:state});
    }

    //start the game and display on the screen depending on the state
    //of the game.

    start(){
        if (gameState===0){
            player=new Player();
            player.getCount();
            form=new Form();
            form.display();
        }
    };
}