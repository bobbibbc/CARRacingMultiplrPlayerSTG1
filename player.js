class Player{
    constructor(){
        
    }
    //getCount() to get the playerCount
    getCount(){
        var playerCountref=database.ref("playerCount");
        playerCountref.on("value",function(data){playerCount=data.val()});
    }
    //update the playerCount in the database.

    updateCount(count){
        database.ref("/").update({playerCount:count})
    }
    update(name){
        var playerIndex="player"+playerCount;
        database.ref(playerIndex).set({name:name});
    }
}