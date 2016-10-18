import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">

    <keg-list [childKegList]="masterKegList"
    (clickSender)="showEdit($event)"></keg-list>
    <new-keg
    (newKegSender)="addKeg($event)"></new-keg>
    <edit-keg
      [childSelectedKeg]="selectedKeg"
      (doneClickedSender)="finishedEditing()"
    ></edit-keg>
    <pour-keg [childKegList]="pouredKeg"
    (beerSender)="pourBeer()"></pour-keg>
  </div>
  `
})

export class AppComponent {
    public masterKegList: Keg[] = [
      new Keg("10 Barrel Apocolypse", "IPA", 5, 6.7, 124),
      new Keg("Double Mountain", "Kolsch", 4.5, 5.9, 124),
      new Keg("Rogue Dead Guy", "Ale", 8, 6.0, 124),
    ];
    selectedKeg: Keg = null;

    addKeg(newKegFromChild: Keg) {
      this.masterKegList.push(newKegFromChild);
    }
    showEdit(clickedKeg: Keg) {
      this.selectedKeg = clickedKeg;
    }
    finishedEditing(){
      this.selectedKeg = null;
    }
    pourBeer() {
      if(this.pouredKeg.beers > 0) {
        this.pouredKeg.beers--;
    }  else {
        alert("out of beer!");
        }
    }

  }
