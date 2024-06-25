
// This is the main JavaScript file that sets up the Phaser game configuration and starts the game.

window.onload = function() {
    var config = {
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 0 },
                debug: false
            }
        },
        scene: [Preload, Game]
    };
    var game = new Phaser.Game(config);
}

console.log("Main Script loaded");