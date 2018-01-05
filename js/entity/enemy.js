class Enemy extends Phaser.Sprite {
    constructor(game, x, y, key) {
        super(game, x, y, 'walker');
        this.game.add.existing(this);
        this.game.physics.arcade.enable(this);
        this.anchor.setTo(0.5, 0.5);
        this.game.physics.arcade.enableBody(this);
        this.body.gravity.y = 300;
        this.health = 100;
        this.outOfBoundsKill = true;
        
    }

    _attacking() {

    }

    _damageTaken(amount) {
          this.tint = Math.random() * 0xffffff;
        if(amount === undefined){
            amount = 8;
        }
        this.health -= amount;
        if(this.health < 0){
            this.kill();
        }

    }
    update() {
        if(this.y < -32){
            this.kill();
        }

    }
}