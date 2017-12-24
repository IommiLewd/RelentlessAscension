class UserInterface extends Phaser.Sprite {
    constructor(game) {
        super(game);
        this.game.add.existing(this);
        console.log('user Interface Fired');
        this.health = 2;
        this._initHealth();
        this._initEnergy();
    }

    _initHealth() {
        this.healthBar = this.game.add.sprite(0, 2 + 4, 'healthBar');
       this.healthBar.fixedToCamera = true;
    }

    _initEnergy() {

                this.energyBar = this.game.add.sprite(0, 28 + 4, 'energyBar');
       this.energyBar.fixedToCamera = true;
    }
    

    update() {

    }

}