export class CatalogItem {
  constructor({ id, category, title, description, ingredients, price, imageName }) {
    this.id = id;
    this.category = category;
    this.title = title;
    this.description = description;
    this.ingredients = ingredients;
    this.price = price;
    this.imageName = imageName;
  }

  formatPrice() {
    return `${this.price.toLocaleString('ru-RU')} ₽`;
  }

  getImagePath() {
    return `./img/${this.imageName}.png`;
  }
}