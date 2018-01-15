class Enemy extends Phaser.Sprite {
    constructor(game, x, y, key) {
        super(game, x, y, 'walker');
        this.game.add.existing(this);
        this.game.physics.arcade.enable(this);
        this.anchor.setTo(0.5, 0.5);
        this.game.physics.arcade.enableBody(this);
        //this.body.gravity.y = 300;
        this.health = 60;
        this.outOfBoundsKill = true;
        this.targetX;
        this.targetY;
        this.randomization = Math.random() * 50;
        var posNeg = Math.random() < 0.5 ? -1 : 1;
        this.randomization = this.randomization * posNeg;

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
  
        
        
        if(this.targetY + 80 + this.randomization < this.y){
            this.body.velocity.y = -160 + this.randomization;
            
        } else if(this.targetY - 80 + this.randomization > this.y){
            this.body.velocity.y =  160 + this.randomization;
        }
        
        if(this.targetX + 80 + this.randomization < this.x){
            this.body.velocity.x = -160 + this.randomization;
            
        } else if(this.targetX - 80 + this.randomization > this.x){
            this.body.velocity.x =  160 + this.randomization;
        }
        
        if(this.y < -32){
            this.kill();
        }

    }
}