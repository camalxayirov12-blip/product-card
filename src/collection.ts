export class Collection<T> {
  private items: T[] = [];

  constructor(initialData?: T[]) {
    if (initialData) {
      this.items = [...initialData];
    }
  }

  public getAll(): T[] {
    return this.items;
  }

  public get(index: number): T | undefined {
    if (index >= 0 && index < this.items.length) {
      return this.items[index];
    }
    return undefined;
  }

  public clear(): void {
    this.items = [];
  }

  public remove(index: number): void {
    if (index >= 0 && index < this.items.length) {
      this.items.splice(index, 1);
    }
  }

  public replace(index: number, newItem: T): void {
    if (index >= 0 && index < this.items.length) {
      this.items[index] = newItem;
    } else {
      console.error('Индекс за пределами коллекции');
    }
  }
}