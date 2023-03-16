import Phaser from 'phaser';
import GameCanvas from './GameCanvas';

const config = {
  type: Phaser.AUTO,
  width: 512,
  height: 512,
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

const game = new Phaser.Game(config);

function preload() {
  // Preload assets
  this.load.image('female', 'src/assets/images/female.png');
}

function create() {
  // Create game objects
  this.add.existing(new GameCanvas());
  console.log(`Success if ^ === Phaser v3.55.2 (WebGL | Web Audio)`)

  const text = this.add.text(420, 256, 'Hello, World!', { font: '20px Arial', fill: '#fff' });
  text.setOrigin(0.5, 0.5);

  this.add.sprite(400, 400, 'female');
}

function update() {
  // Update game logic
}

export default game;