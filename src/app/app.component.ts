import { Component } from '@angular/core';
import { Color } from '../enums/Color';
import { Collection } from '../collection';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Задание №1: Свойство компании для интерполяции
  companyName: string = 'My Super IT Company';

  // Задание №5: Две коллекции с разными типами данных
  numberCollection = new Collection<number>([10, 20, 30, 40]);
  stringCollection = new Collection<string>(['Angular', 'TypeScript', 'RxJS']);

  constructor() {
    this.saveLastVisitDate();
    this.incrementVisitCount();
  }

  // Задание №2: Метод проверки базовых цветов RGB
  isPrimaryColor(color: Color): boolean {
    return color === Color.Red || color === Color.Green || color === Color.Blue;
  }

  // Задание №3: Сохранение даты последнего захода
  private saveLastVisitDate(): void {
    localStorage.setItem('lastVisitDate', new Date().toISOString());
  }

  // Задание №4: Сохранение количества заходов
  private incrementVisitCount(): void {
    const currentVisits = Number(localStorage.getItem('visitCount')) || 0;
    localStorage.setItem('visitCount', (currentVisits + 1).toString());
  }
}