import k from "./kaplayCtx";
import mainMenu from "./Scenes/mainMenu";

k.loadSprite("chemical-bg", "graphics/chemical-bg.png");
k.loadSprite("platform", "graphics/platforms.png");
k.loadSprite("sonic", "graphics/sonic.png", {
    sliceX: 8,
    sliceY: 2,
    anims: {
        run: {from: 0, to: 8, loop: true, speed: 30}
    }
});

k.loadSprite("ring", "graphics/ring.png", {
    sliceX: 16,
    sliceY: 1,
    anims:{
        spin: {from: 0, to: 15, loop: true, speed: 30}
    },
});

k.loadSprite("motobug", "graphics/motobug.png", {
    sliceX: 5,
    sliceY: 1,
    anims: {
        run: {from: 0, to: 4, loop: true, speed: 8}
    }
})

// loading the font
k.loadFont("mania", "font/mania.ttf");

// loading the sounds
k.loadSound("city", "sounds/city.mp3");
k.loadSound("destroy", "sounds/Destroy.wav");
k.loadSound("hurt", "sounds/Hurt.wav");
k.loadSound("hyper-ring", "sounds/HyperRing.wav");
k.loadSound("jump", "sounds/Jump.wav");
k.loadSound("ring", "sounds/Ring.wav");


// scenes in the game
k.scene("main-menu", mainMenu);

// start-game scene
k.scene("game", );

// game-over scene
k.scene("game-over", )

k.go("main-menu")