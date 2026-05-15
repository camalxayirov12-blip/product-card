import { CatalogItem } from './CatalogItem.js';

export class GiftBundle extends CatalogItem {
  constructor(data) {
    super(data);
  }

  getBundlePitch() {
    return `Набор «${this.title}» — ${this.ingredients.length} ключевых направления в составе.`;
  }
}
