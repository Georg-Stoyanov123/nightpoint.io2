var characterSprite, characterImg, mapImg2;
var titleImg, mapImg, titleSprite;
var welcome;
var gameState = "login";
var game;
var player;
var playerImage;
var ai1, ai2;
var ak, akAnim;
function preload() {
    titleImg = loadImage("nightpoint.png");
    mapImg = loadImage("Map_sprite.png");
    playerImage = loadImage("character.png");
    //characterImg = loadImage("character.png");
    mapImg2 = loadImage("backgroundImg.jpg")
    ai1 = loadImage("ai1.png");
    ai2 = loadImage("ai2.png");
    ak = loadImage("ak.png");
}
function setup() {
    createCanvas(1950, 969)
        welcome = new Form();
        welcome.display()
       
}
    function draw() {
        background(0)
        //Tells us how big the the width and height of our page is
        console.log("Window width: " + windowWidth + " Window height: " + windowHeight)
        background(mapImg2)
        drawSprites()
        if (gameState === "playing") {
            game = new Game();
            game.play();
            
            
        } 

    }