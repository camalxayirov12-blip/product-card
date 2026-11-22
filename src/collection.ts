export class Collection<T> {
  private items: T[] = [];

  constructor(initialData?: T[]) {
    if (initialData) {
      this.items = [...initialData];
    }
  }

  getAll(): T[] {
    return this.items;
  }

  get(index: number): T | undefined {
    if (index >= 0 && index < this.items.length) {
      return this.items[index];
    }
    return undefined;
  }

  clear(): void {
    this.items = [];
  }

  remove(index: number): void {
    if (index >= 0 && index < this.items.length) {
      this.items.splice(index, 1);
    }
  }

  replace(index: number, newItem: T): void {
    if (index >= 0 && index < this.items.length) {
      this.items[index] = newItem;
    } else {
      console.error('Индекс за пределами коллекции');
    }
  }
}

interface User {
  id: number;
  name: string;
}

const rolesData: string[] = ['Admin', 'User', 'Guest'];
const stringCollection: Collection<string> = new Collection<string>(rolesData);
stringCollection.replace(2, 'Moderator');
stringCollection.remove(1);

const usersData: User[] = [
  { id: 1, name: 'Иван' },
  { id: 2, name: 'Анна' }
];
const objectCollection: Collection<User> = new Collection<User>(usersData);
objectCollection.replace(0, { id: 1, name: 'Иван Иванов' });