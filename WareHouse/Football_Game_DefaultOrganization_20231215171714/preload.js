
// This is the preload class that loads all the necessary game assets.

class Preload extends Phaser.Scene {
    constructor() {
        super({ key: 'Preload' });
    }
    preload() {
        this.load.image('background', 'assets/background.png');
        this.load.image('field', 'assets/field.png');
        this.load.image('football', 'assets/football.png');
        this.load.image('player', 'assets/player.png');
    }
    create() {
        this.scene.start('Game');
    }
}

console.log("Preload Script loaded");