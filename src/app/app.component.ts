import { Component } from '@angular/core';
import { Color } from '../enums/Color'; 

@Component({
  selector: 'app-root',
  standalone: true, 
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public companyName: string = 'TechFusion';

  constructor() {
    this.saveLastVisitDate();
    this.updateVisitCount();
  }

  public isPrimaryColor(color: Color): boolean {
    return color === Color.Red || color === Color.Green || color === Color.Blue;
  }

  private saveLastVisitDate(): void {
    const currentDate = new Date().toISOString();
    localStorage.setItem('lastVisitDate', currentDate);
  }

  private updateVisitCount(): void {
    const countStr = localStorage.getItem('visitCount');
    let count = countStr ? parseInt(countStr, 10) : 0;
    count += 1;
    localStorage.setItem('visitCount', count.toString());
  }
}