import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'pour-keg',
  template: `
    <div *ngIf="childSelectedKeg">

    </div>
  `
})

  export class PourKegComponent {
    @Input() childSelectedKeg: Keg;
    @Output() beerSender = new EventEmitter();
    pourClicked() {
      this.pourClickSender.emit();
    }


  }
