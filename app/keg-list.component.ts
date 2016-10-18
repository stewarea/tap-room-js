import { Component, Input } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `
  <div *ngFor="let currentKeg of childKegList">
    <h3>{{ currentKeg.name }}</h3>
    <h5>{{ currentKeg.brand }}, Price: {{ currentKeg.price}}, Alc%{{ currentKeg.alc }}</h5>
  </div>
  `
})

export class KegListComponent {
  @Input() childKegList: Keg[];
  
}
