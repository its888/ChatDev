
// This is the football class that handles football movement and resetting its position.

class Football {
    constructor(game, x, y, key) {
        this.game = game;
        this.sprite = this.game.physics.add.sprite(x, y, key);
        this.velocityX = 0;
        this.velocityY = 0;
    }
    move() {
        // Move football based on its velocity
        this.sprite.setVelocityX(this.velocityX);
        this.sprite.setVelocityY(this.velocityY);
    }
    reset() {
        // Reset football to starting position
        this.sprite.setPosition(400, 300);
        this.velocityX = 0;
        this.velocityY = 0;
    }
}

console.log("Football Script loaded");