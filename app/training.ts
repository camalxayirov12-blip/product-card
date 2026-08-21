
export interface IUser {
  id: number;
  name: string;
  email: string;
  age?: number;
}

export interface IDeveloper extends IUser {
  primaryLanguage: string;
  experienceYears: number;
}

export type StatusType = "loading" | "success" | "error";
export let status: StatusType = "loading";

export type TextFormatType = 'uppercase' | 'lowercase' | 'capitalize';
export let textFormat: TextFormatType = 'uppercase';

export function getSum(a: number, b: number): number {
  return a + b;
}

export function formatString(text: string, format: TextFormatType): string {
  switch (format) {
    case 'uppercase':
      return text.toUpperCase();
    case 'lowercase':
      return text.toLowerCase();
    case 'capitalize':
      if (!text) return text;
      return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    default:
      return text;
  }
}

export function removeChar(text: string, charToRemove: string): string {
  return text.split(charToRemove).join('');
}

export const users: IUser[] = [
  { id: 101, name: 'Александр Смирнов', email: 'alex.smirnov@mail.ru', age: 28 },
  { id: 102, name: 'Екатерина Волкова', email: 'katya.volkova@yandex.ru' },
  { id: 103, name: 'Михаил Кузнецов', email: 'mikhail.kuznetsov@gmail.com', age: 16 },
  { id: 104, name: 'Анна Соколова', email: 'anna.sokolova@mail.ru', age: 23 },
  { id: 105, name: 'Дмитрий Морозов', email: 'dmitry.morozov@gmail.com', age: 34 }
];

// Фильтрация пользователей (например, старше или равных 18 годам)
export const adultUsers: IUser[] = users.filter((user) => user.age !== undefined && user.age >= 18);