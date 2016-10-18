import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'edit-keg',
  template: `
    <div *ngIf="childSelectedKeg">
      <h1>Edit Keg</h1>
      <div>
        <label>Enter Keg Description</label>
        <input [(ngModel)]="childSelectedKeg.name">
      </div>
      <div>
        <label>Enter Keg Brand</label>
        <input [(ngModel)]="childSelectedKeg.brand">
      </div>
      <div>
        <label>Enter Keg price</label>
        <input [(ngModel)]="childSelectedKeg.price">
      </div>
      <div>
        <label>Enter Keg Alcohol Content</label>
        <input [(ngModel)]="childSelectedKeg.alc">
        <button (click)="doneClicked()">Done</button>
      </div>
    </div>
  `
})

  export class EditKegComponent {
    @Input() childSelectedKeg: Keg;
    @Output() doneClickedSender = new EventEmitter();
    doneClicked() {
      this.doneClickedSender.emit();
    }
  }
