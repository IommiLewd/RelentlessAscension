class UserInterface extends Phaser.Sprite {
    constructor(game) {
        super(game);
        this.game.add.existing(this);
        console.log('user Interface Fired');
       
      
        
        this._initStatus();
        //this._initHealth();

    }
    
    
    
//this.events.deepChanger.dispatch(this.horizontalCoordinate);
//this.events.courseChanger = new Phaser.Signal();
//this.courseUpdater = this.interface.events.courseChanger.add(this.player._courseUpdate, this.player, 0);

    _initStatus() {
        this.statusBar = this.game.add.sprite(2, 2, 'statusBar');
        this.statusBar.fixedToCamera = true;
    }









    update() {

    }

}