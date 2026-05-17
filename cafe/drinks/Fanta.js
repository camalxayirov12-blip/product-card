import { Drink } from '../Drink.js';

export class Fanta extends Drink {
  constructor({ size, price, temperature, fruitFlavor }) {
    super({ name: 'Fanta', size, price, temperature });
    this.fruitFlavor = fruitFlavor;
  }

  getInfo() {
    return `${super.getInfo()} | фруктовый вкус: ${this.fruitFlavor}`;
  }

  _prepareDrink() {
    console.log(`  → Fanta ${this.fruitFlavor}: газировка + сироп`);
  }

  _finalizeServing() {
    this.setTemperature(4);
  }
}
