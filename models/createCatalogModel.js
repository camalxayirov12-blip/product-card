import { GiftBundle } from './GiftBundle.js';
import { SkincareProduct } from './SkincareProduct.js';

export function createCatalogModel(raw) {
  const isGift = raw.title.toLowerCase().includes('подарочн');
  return isGift ? new GiftBundle(raw) : new SkincareProduct(raw);
}
