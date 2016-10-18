"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var keg_model_1 = require('./keg.model');
var AppComponent = (function () {
    function AppComponent() {
        this.masterKegList = [
            new keg_model_1.Keg("10 Barrel Apocolypse", "IPA", 5, 6.7, 124),
            new keg_model_1.Keg("Double Mountain", "Kolsch", 4.5, 5.9, 124),
            new keg_model_1.Keg("Rogue Dead Guy", "Ale", 8, 6.0, 124),
        ];
        this.selectedKeg = null;
    }
    AppComponent.prototype.addKeg = function (newKegFromChild) {
        this.masterKegList.push(newKegFromChild);
    };
    AppComponent.prototype.showEdit = function (clickedKeg) {
        this.selectedKeg = clickedKeg;
    };
    AppComponent.prototype.finishedEditing = function () {
        this.selectedKeg = null;
    };
    AppComponent.prototype.pourBeer = function () {
        if (this.pouredKeg.beers > 0) {
            this.pouredKeg.beers--;
        }
        else {
            alert("out of beer!");
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n  <div class=\"container\">\n\n    <keg-list [childKegList]=\"masterKegList\"\n    (clickSender)=\"showEdit($event)\"></keg-list>\n    <new-keg\n    (newKegSender)=\"addKeg($event)\"></new-keg>\n    <edit-keg\n      [childSelectedKeg]=\"selectedKeg\"\n      (doneClickedSender)=\"finishedEditing()\"\n    ></edit-keg>\n    <pour-keg [childKegList]=\"pouredKeg\"\n    (beerSender)=\"pourBeer()\"></pour-keg>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map