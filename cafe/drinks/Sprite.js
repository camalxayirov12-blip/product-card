import { Drink } from '../Drink.js';

export class Sprite extends Drink {
  constructor({ size, price, temperature, lemonLimeIntensity }) {
    super({ name: 'Sprite', size, price, temperature });
    this.lemonLimeIntensity = lemonLimeIntensity;
  }

  getInfo() {
    return `${super.getInfo()} | лимон-лайм: ${this.lemonLimeIntensity}`;
  }

  _prepareDrink() {
    console.log(`  → Sprite: лимон-лайм (${this.lemonLimeIntensity}), лёд`);
  }

  _finalizeServing() {
    this.setTemperature(3);
  }
}
