
// This is the player class that handles player movement and interaction with the football.

class Player {
    constructor(scene, x, y, key) {
        this.scene = scene;
        this.sprite = this.scene.physics.add.sprite(x, y, key);
        this.holdingFootball = false;

        // Create a cursor keys object to listen to keyboard input
        this.cursors = this.scene.input.keyboard.createCursorKeys();
    }

    move() {
        // Move player based on cursor keys
        if (this.cursors.left.isDown) {
            this.sprite.setVelocityX(-160);
        } else if (this.cursors.right.isDown) {
            this.sprite.setVelocityX(160);
        } else {
            this.sprite.setVelocityX(0);
        }

        if (this.cursors.up.isDown) {
            this.sprite.setVelocityY(-160);
        } else if (this.cursors.down.isDown) {
            this.sprite.setVelocityY(160);
        } else {
            this.sprite.setVelocityY(0);
        }
    }

    interactWithFootball(football) {
        // Check if player is close enough to pick up or throw football
        var distance = Phaser.Math.Distance.Between(this.sprite.x, this.sprite.y, football.sprite.x, football.sprite.y);
        if (distance < 50) { // adjust this value as needed
            if (this.cursors.space.isDown) {
                // If the player is holding the football, throw it
                if (this.holdingFootball) {
                    football.sprite.setVelocityX(this.sprite.flipX ? -500 : 500); // adjust these values as needed
                    football.sprite.setVelocityY(-500); // adjust this value as needed
                    this.holdingFootball = false;
                }
                // If the player is not holding the football, pick it up
                else {
                    football.sprite.setPosition(this.sprite.x, this.sprite.y);
                    this.holdingFootball = true;
                }
            }
        }
    }
}

console.log("Player Script loaded");