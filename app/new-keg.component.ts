import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component ({
  selector: 'new-keg',
  template: `
  <h1>New Keg</h1>
  <div>
    <label>Name</label>
    <input #newName>
  </div>
  <div>
    <label>Type</label>
    <input #newBrand>
  </div>
  <div>
    <label>Price</label>
    <input #newPrice>
  </div>
  <div>
    <label>Alcohol %:</label>
    <input #newAlc>
    <button (click)="addClicked(newName.value, newBrand.value, newPrice.value, newAlc.value); newName.value=''; newBrand.value=''; newPrice.value=''; newAlc.value='';">Add</button>
  </div>
  `
})
export class NewKegComponent {
  @Output() newKegSender = new EventEmitter();
  addClicked(name: string, brand: string, price: number, alc: number, beers: number) {
    var newKegToAdd: Keg = new Keg(name, brand, price, alc, beers = 124);
    this.newKegSender.emit(newKegToAdd);
  }
}
