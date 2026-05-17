import { CatalogItem } from './CatalogItem.js';

export class SkincareProduct extends CatalogItem {
  constructor(data) {
    super(data);
  }

  getCareTip() {
    return `${this.title}: наносите на очищенную кожу по инструкции на упаковке.`;
  }
}
