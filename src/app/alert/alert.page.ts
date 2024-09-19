import { Component } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: 'alert.page.html',
  styleUrls: ['alert.page.scss'],
})
export class AlertPage {
  botellas: number = 0;
  baldes: number = 0;

  constructor() {}

  increment(type: string) {
    if (type === 'botellas') {
      this.botellas++;
    } else if (type === 'baldes') {
      this.baldes++;
    }
  }

  decrement(type: string) {
    if (type === 'botellas' && this.botellas > 0) {
      this.botellas--;
    } else if (type === 'baldes' && this.baldes > 0) {
      this.baldes--;
    }
  }

  onQuantityChange(type: string, event: any) {
    const value = parseInt(event.target.value, 10);
    if (type === 'botellas') {
      this.botellas = isNaN(value) ? 0 : value;
    } else if (type === 'baldes') {
      this.baldes = isNaN(value) ? 0 : value;
    }
  }
}
