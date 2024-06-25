
// This is the main game class that sets up the game world, player, and football.

class Game extends Phaser.Scene {
    constructor() {
        super({ key: 'Game' });
        this.score = 0;
    }
    create() {
        this.add.image(0, 0, 'background').setOrigin(0, 0);
        this.add.image(400, 300, 'field');
        this.player = new Player(this, 400, 300, 'player');
        this.football = new Football(this, 400, 300, 'football');
    }
    update() {
        this.player.move();
        this.football.move();
        this.checkScore();
    }
    checkScore() {
        // Check if a goal has been scored and update the score
        if (this.football.sprite.x < 0 || this.football.sprite.x > 800) {
            this.score += 1;
            this.football.reset();
        }
    }
}

console.log("Game Script loaded");