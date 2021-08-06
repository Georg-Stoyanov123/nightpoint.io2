class Game {
    constructor() {

    }
    play(){
        createCanvas(4096, 4096)
        image(mapImg, 0, 0, 4096, 4096);
        welcome.hideElements()
        this.playerSprite()
        this.aiSpritefunc()
        drawSprites();
        //this.handlePlayerControls()
        
    }
    
        
    
playerSprite(){
    player = createSprite(1250,400,10,10);
    player.addImage(playerImage)
    player.scale = 1.5;
    if (keyCode === 87) {
        player.velocityY -= 5
    }
    if (keyCode === 83) {
        player.velocityY += 5
    }
    if (keyCode === 65) {
        player.vlocityX -= 5
    }
    if (keyCode === 68) {
        player.velocityX += 5
    }
    

  
}
/*handlePlayerControls() {
    
}*/

aiSpritefunc() {
    var random1 = Math.round(random(1, 10000))
    var ai1Sprite = createSprite(1300, 1000, 100, 100)
    ai1Sprite.addImage(ai1);
    ai1Sprite.scale = 1.5
    var ai2Sprite = createSprite(1100, 1000, 100, 100)
    ai2Sprite.addImage(ai2);
    ai2Sprite.scale = 1.5

}
}