export default class UIScene extends Phaser.Scene {
  constructor() {
    super({ key: 'UIScene' });
  }

  create() {
    // Create health bars, mana bars, skill icons, etc.
    this.healthBar = this.add.rectangle(50, 50, 100, 20, 0xff0000);
    this.add.text(20, 20, 'Health:', { fontSize: '16px', fill: '#ffffff' });

    // Add interactive elements for inventory, skills, etc.
  }

  update() {
    // Update UI elements based on game state
  }
}
