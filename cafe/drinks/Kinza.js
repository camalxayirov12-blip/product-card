import { Drink } from '../Drink.js';

export class Kinza extends Drink {
  constructor({ size, price, temperature, citrusBlend }) {
    super({ name: 'Kinza', size, price, temperature });
    this.citrusBlend = citrusBlend;
  }

  getInfo() {
    return `${super.getInfo()} | вкус: ${this.citrusBlend}, газированная вода`;
  }

  _prepareDrink() {
    console.log(`  → Охлаждаем бутылку Kinza, микс ${this.citrusBlend}`);
  }

  _finalizeServing() {
    this.setTemperature(4);
  }
}
