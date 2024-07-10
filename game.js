var width = window.innerWidth;
var height = window.innerHeight;

var config = {
    type: Phaser.AUTO,
    width: width,
    height: height,
    scene: {
        preload: preload,
        create: create,
        update: update
    },
    backgroundColor: "#1E2233"
};

var game = new Phaser.Game(config);

function preload() {
    this.load.image('tourelle', 'assets/tourelle.png');
    this.load.image('bas-droite', 'assets/canon/bas-droite.png');
    this.load.image('bas-gauche', 'assets/canon/bas-gauche.png');
    this.load.image('bas', 'assets/canon/bas.png');
    this.load.image('droite', 'assets/canon/droite.png');
    this.load.image('gauche', 'assets/canon/gauche.png');
    this.load.image('haut-droite', 'assets/canon/haut-droite.png');
    this.load.image('haut-gauche', 'assets/canon/haut-gauche.png');
    this.load.image('haut', 'assets/canon/haut.png');
    this.load.spritesheet('cannon_spritesheet', 'assets/canon/cannon_spritesheet.png', { frameWidth: 16, frameHeight: 16 });
}

function create() {
    this.add.image(width / 2, height / 2, 'tourelle');

    var cannon = this.add.sprite(width / 2, height / 2, 'cannon_spritesheet');
    
    this.anims.create({
        key: 'cannon_anim',
        frames: this.anims.generateFrameNumbers('cannon_spritesheet', { start: 0, end: 7 }),
        frameRate: 10,
        repeat: -1
    });

    cannon.play('cannon_anim');
}

function update() {}
