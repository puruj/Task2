var app = new PIXI.Application({
    antialias: true,
    backgroundColor: 0xced6e2
  });
app.renderer.resize(window.innerWidth, window.innerHeight);
document.body.appendChild(app.view);
var sprite = PIXI.Sprite.fromImage('Images/Start.png');

// Set the initial position
sprite.anchor.set(0.5);
sprite.x = app.screen.width / 2;
sprite.y = app.screen.height / 2;
sprite.scale.x = 0.5
sprite.scale.y = 0.5

// Opt-in to interactivity
sprite.interactive = true;

// Shows hand cursor
sprite.buttonMode = true;


// Pointers normalize touch and mouse
sprite.on('pointerdown', onClick);


app.stage.addChild(sprite);

function onClick () {
    app.stage.removeChild(sprite);
    f();
}