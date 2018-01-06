class barrierGenerator extends Phaser.Sprite {
    constructor(game, amount) {
        super(game, amount);
        this.game.add.existing(this);
        this.game.physics.arcade.enable(this);
        this.anchor.setTo(0.5, 0.3);
        this.tileGroup = this.game.add.group();
        this.tileGroup.physicsBodyType = Phaser.Physics.ARCADE;
        this.tileGroup.enableBody = true;
        //this.tileGroup.createMultiple(50, 'barrier');

        this.tileGroup.setAll('immovable', true);
        this.spawnSignal = new Phaser.Signal();
        this.spawnTimer = true;
        this.spawnX = this.game.world.width / 2;
        this.spawnY = 1000;
        this.velocity = -60;
        this.spawnCycle = 1;
        this.type = 1;
        // this._addFirstBarrier();
        this._initialSpawn();
        this.cycleRight = true;
        this._addBarrier(1);



    }

    _initialSpawn() {
        this.initialSpawn = Math.random() >= 0.5;
        if (this.initialSpawn) {
            this.spawnCycle += 1;
        } else {
            this.spawnCycle -= 1;
        }
    }

    _addBarrier(type, x) {
        console.log('this type is: ' + this.type);
        if (this.type === 0) {
            this.barrier = this.game.add.sprite(this.spawnX, this.spawnY, 'barrier');
            this.barrier.anchor.setTo(0.5);
        }

        if (this.type === 1) {
            this.barrier = this.game.add.sprite(this.spawnX, this.spawnY, 'mediumBarrier');
            this.barrier.anchor.setTo(0.5);
        }

        if (this.type === 2) {
            this.barrier = this.game.add.sprite(this.spawnX, this.spawnY, 'largeBarrier');
            this.barrier.anchor.setTo(0.5);
        }

        this.tileGroup.add(this.barrier);
        this.barrier.bSpawn = true;
        this.barrier.body.immovable = true;

        this.barrier.body.velocity.y = this.velocity;

        this.spawnY = this.game.world.height += 32;


    }


    //        this._addBarrier(this.spawnX, this.spawnY - 120, -130);
    //        this.spawnY = this.game.world.height + 128;
    //    }
    //
    //
    //    _addBarrier() {
    //        console.log(this.spawnCycle);
    //        this.barrier = this.tileGroup.getFirstDead();
    //        this.barrier.bSpawn = true;
    //        this.barrier.anchor.setTo(0.5);
    //        this.barrier.reset(this.spawnX, this.spawnY);
    //        this.barrier.body.immovable = true;
    //        //this.barrier.body.velocity.y = this.velocity;
    //        //this._spawnCyclic();
    //    }
    //
    //
    //

    _spawnCyclic() {
        this.spawnSignal.dispatch(this.spawnX);

        if (this.spawnCycle === 1) {
            this.spawnX = 800;
              this.type = 2;
        } else if (this.spawnCycle === 0) {
            this.spawnX = 300;
              this.type = 0;
        } else if (this.spawnCycle === 2) {
            this.spawnX = 1300;
              this.type = 0;
        }
        if (this.spawnCycle === 0) {
            this.cycleRight = true;
        } else if (this.spawnCycle === 2) {
            this.cycleRight = false;
        }

        if (this.cycleRight) {
            this.spawnCycle++;
        } else {
            this.spawnCycle--;
        }
        console.log('SpawnCyclic has fired, spawnX is: ' + this.spawnX);
        var jitter = Math.floor(Math.random() * (80 - 5 + 1)) + 5;
        jitter = Math.random() < 0.5 ? -jitter : jitter;
        this.spawnX += jitter;
    }


    update() {
        this.tileGroup.forEachAlive(function (barrier) {
            if (barrier.y < 820 && barrier.bSpawn && this.spawnTimer) {
                this._spawnCyclic();
                this._addBarrier(2);
                barrier.bSpawn = false;

            }

            if (barrier.y < -64) {
                this.spawnTimer = false;
                barrier.y = this.game.world.height;


                //  barrier.body.velocity.y = this.velocity;
            }
        }, this);
    }
}









//                                                                       ----------------------------------------------------

//class barrierGenerator extends Phaser.Sprite {
//    constructor(game, amount) {
//        super(game, amount);
//        this.game.add.existing(this);
//        this.game.physics.arcade.enable(this);
//        this.anchor.setTo(0.5, 0.3);
//        this.tileGroup = this.game.add.group();
//        this.tileGroup.physicsBodyType = Phaser.Physics.ARCADE;
//        this.tileGroup.enableBody = true;
//        this.tileGroup.createMultiple(50, 'barrier');
//
//        this.tileGroup.setAll('immovable', true);
//        this.spawnSignal = new Phaser.Signal();
//        this.spawnTimer = true;
//        this.spawnX = this.game.world.width / 2;
//        this.spawnY = 1000;
//        this.velocity = -60;
//        this.spawnCycle = 1;
//        this._addFirstBarrier();
//        this.cycleRight = true;
//
//
//
//    }
//
//    _addFirstBarrier() {
//        this.initialSpawn = Math.random() >= 0.5;
//        if (this.initialSpawn) {
//            this.spawnCycle += 1;
//        } else {
//            this.spawnCycle -= 1;
//        }
//        this._addBarrier(this.spawnX, this.spawnY - 120, -130);
//        this.spawnY = this.game.world.height + 128;
//    }
//
//
//    _addBarrier() {
//        console.log(this.spawnCycle);
//        this.barrier = this.tileGroup.getFirstDead();
//        this.barrier.bSpawn = true;
//        this.barrier.anchor.setTo(0.5);
//        this.barrier.reset(this.spawnX, this.spawnY);
//        this.barrier.body.immovable = true;
//        this.barrier.body.velocity.y = this.velocity;
//        this._spawnCyclic();
//    }
//
//
//
//
//    _spawnCyclic() {
//        this.spawnSignal.dispatch(this.spawnX);
//        if (this.spawnCycle === 1) {
//            this.spawnX = 800;
//        } else if (this.spawnCycle === 0) {
//            this.spawnX = 300;
//        } else if (this.spawnCycle === 2) {
//            this.spawnX = 1300;
//        }
//        if (this.spawnCycle === 0) {
//            this.cycleRight = true;
//        } else if (this.spawnCycle === 2) {
//            this.cycleRight = false;
//        }
//
//        if (this.cycleRight) {
//            this.spawnCycle++;
//        } else {
//            this.spawnCycle--;
//        }
//        var jitter = Math.floor(Math.random() * (80 - 5 + 1)) + 5;
//        jitter = Math.random() < 0.5 ? -jitter : jitter;
//        this.spawnX += jitter;
//    }
//
//
//    update() {
//        this.tileGroup.forEachAlive(function (barrier) {
//            if (barrier.y < 920 && this.spawnTimer && barrier.bSpawn) {
//                this._addBarrier();
//                barrier.bSpawn = false;
//                console.log('bspawn faggot');
//            }
//
//            if (barrier.y < -256) {
//                this.spawnTimer = false;
//                barrier.reset(this.spawnX, this.spawnY);
//                this._spawnCyclic();
//
//                barrier.body.velocity.y = this.velocity;
//            }
//        }, this);
//    }
//}