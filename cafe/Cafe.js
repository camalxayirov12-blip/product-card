import { Drink } from './Drink.js';

export class Cafe {
  constructor(name, location, menu = []) {
    this.name = name;
    this.location = location;
    this.menu = menu;
  }

  /** Текстовая информация о кафе и напитках в меню */
  getInfo() {
    const drinksLines = this.menu
      .map((drink, i) => `${i + 1}. ${drink.name} — ${drink.size}, ${drink.price} ₽`)
      .join('\n');

    return [
      `Cafe: ${this.name}`,
      `Location: ${this.location}`,
      `About: Your favorite lemon-mint spot. Ice-cold soft drinks only.`,
      `Drinks on menu (${this.menu.length}):`,
      drinksLines,
    ].join('\n');
  }

  /** Список названий напитков */
  getDrinkNames() {
    return this.menu.map((d) => d.name);
  }

  /** Найти напиток в меню по имени */
  findDrinkByName(name) {
    return this.menu.find((d) => d.name.toLowerCase() === name.toLowerCase());
  }

  /**
   * Заказ: вызываем serve() у напитка (внутри — приватный prepare и смена температуры).
   */
  orderDrink(drink) {
    if (!(drink instanceof Drink)) {
      throw new TypeError('Можно заказать только напиток (наследник Drink)');
    }

    console.log(`\n═══ Order at "${this.name}" ═══`);
    console.log(`Drink: ${drink.name}, size ${drink.size}, ${drink.price} ₽`);

    drink.serve();

    const receipt = drink.getInfo();
    console.log(`Receipt: ${receipt}`);
    return receipt;
  }
}
