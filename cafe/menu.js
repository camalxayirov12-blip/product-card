import { CocaCola } from './drinks/CocaCola.js';
import { Fanta } from './drinks/Fanta.js';
import { Kinza } from './drinks/Kinza.js';
import { Sprite } from './drinks/Sprite.js';

/** Меню кафе: готовые экземпляры напитков */
export function createMenu() {
  return [
    new Kinza({
      size: '0.5 L',
      price: 120,
      temperature: 8,
      citrusBlend: 'лимон + лайм',
    }),
    new CocaCola({
      size: '0.5 L',
      price: 140,
      temperature: 8,
      recipe: 'original',
    }),
    new Fanta({
      size: '0.5 L',
      price: 130,
      temperature: 8,
      fruitFlavor: 'orange',
    }),
    new Sprite({
      size: '0.5 L',
      price: 130,
      temperature: 8,
      lemonLimeIntensity: 'strong',
    }),
  ];
}
