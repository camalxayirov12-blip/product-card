import { Drink } from '../Drink.js';

export class CocaCola extends Drink {
  constructor({ size, price, temperature, recipe }) {
    super({ name: 'Coca-Cola', size, price, temperature });
    this.recipe = recipe;
  }

  getInfo() {
    return `${super.getInfo()} | рецепт: ${this.recipe}, классическая кола`;
  }

  _prepareDrink() {
    console.log(`  → Наливаем Coca-Cola (${this.recipe}), добавляем лёд`);
  }

  _finalizeServing() {
    this.setTemperature(3);
  }
}
