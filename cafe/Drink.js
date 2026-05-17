/**
 * Абстрактный класс напитка.
 * Экземпляры Drink создавать нельзя — только наследники.
 */
export class Drink {
  #temperature;

  constructor({ name, size, price, temperature }) {
    if (new.target === Drink) {
      throw new TypeError('Класс Drink абстрактный: создавайте Kinza, CocaCola, Fanta, Sprite.');
    }

    this.name = name;
    this.size = size;
    this.price = price;
    this.#temperature = temperature;
  }

  getInfo() {
    return `${this.name} (${this.size}) — ${this.price} ₽, ${this.getTemperature()}°C`;
  }

  getTemperature() {
    return this.#temperature;
  }

  setTemperature(value) {
    const prev = this.#temperature;
    this.#temperature = value;
    console.log(`[${this.name}] Температура: ${prev}°C → ${value}°C`);
  }

  /** Приватная подготовка: общие шаги + логика наследника */
  #prepare() {
    console.log(`[${this.name}] Начинаем приготовление...`);
    this._prepareDrink();
    console.log(`[${this.name}] Приготовление завершено.`);
  }

  /**
   * «Защищённый» хук для наследников (полиморфизм).
   * Каждый напиток реализует свою логику.
   */
  _prepareDrink() {
    throw new Error(`Метод _prepareDrink() не реализован в ${this.constructor.name}`);
  }

  /** Подача: готовим напиток и выставляем финальную температуру */
  serve() {
    console.log(`[${this.name}] Подаём напиток клиенту.`);
    this.#prepare();
    this._finalizeServing();
    console.log(`[${this.name}] Готово к выдаче.\n`);
  }

  /** Наследник может задать температуру после готовки */
  _finalizeServing() {
    // переопределяется при необходимости
  }
}
