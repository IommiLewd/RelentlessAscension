class Enemy extends Phaser.Sprite {
    constructor(game, x, y, key) {
        super(game, x, y, 'charger');
        this.game.add.existing(this);
        this.game.physics.arcade.enable(this);
        this.anchor.setTo(0.5, 0.5);
        this.game.physics.arcade.enableBody(this);
        this.body.gravity.y = 300;
        
        
                this.size = Math.floor(Math.random() * (12 - 6 + 1) + 6);
        this.size = this.size / 10;
        this.animSpeed = this.size;
        this.animSpeed += 4;
       // console.log('current size is: ' + this.size);
        this.scale.setTo(this.size, this.size);
        this.targetX = 300;
        this.targetY = 300;
        this._addAnimations();
        this.speed = Math.floor(Math.random() * (40 - 10 + 1) + 10);
        
        this.health = 260 * this.size * 2;
        this.attackingNow = false;
        //this.body.setSize(this.width - 20, this.height, +20, 0);
    }



    _addAnimations() {
        this.animations.add('forward', [1, 2, 3, 4], this.animSpeed, true);
        this.animations.add('attacking', [5, 6, 7, 8], 6, true);
        this.animations.play('forward');
    }

    _attacking() {
        if (this.attackingNow === false) {
            this.attackingNow = true;

            var animReference;

            animReference = this.animations.play('attacking');
            animReference = this.animations.currentAnim.onComplete.add(function () {
                console.log('animation complete');
            }, this);

        }
    }

    _damageTaken() {
        this.health -= 3;
        this.tint = Math.random() * 0xffffff;
    }
    update() {
        this.body.velocity.x = -this.speed;


        if (this.health < 0) {
            this.x = 1650;
            this.kill();
        }

        if (this.x < -30) {
            this.x = 1650;
            this.kill();
        }
        this.body.velocity.x = -this.speed;

    }
}