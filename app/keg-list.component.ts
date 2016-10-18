import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `


  <div *ngFor="let currentKeg of childKegList | display_option:filter">
    <h3>{{ currentKeg.name }}</h3>
    <h5>{{ currentKeg.brand }}, Price: {{ currentKeg.price}}, Alc%{{ currentKeg.alc }} Beers Left:{{ currentKeg.beers }}</h5>
    <button (click)="editButtonHasBeenClicked(currentKeg)">Edit</button>
    <button (click)="servedBeerHasBeenClicked(currentKeg)">Serve Beer</button>
  </div>
  <h2>Filter By:</h2>
  <select (change)="filterList($event.target.value)">
    <option value="all">All</option>
    <option value="low">Less than 10</option>
    <option value="empty">Empty</option>
  </select>
  `
})

export class KegListComponent {
  @Input() childKegList: Keg[];
  @Input() pourKegList: Keg[];
  @Output() clickSender = new EventEmitter();

  public filter = 'all';

  editButtonHasBeenClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }
  // serveBeerHasBeenClicked() {
  //   this.beersender.emit();
  // }
  filterList(filterSelection) {
    this.filter= filterSelection;
  }
}
