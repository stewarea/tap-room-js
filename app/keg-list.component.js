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
var KegListComponent = (function () {
    function KegListComponent() {
        this.clickSender = new core_1.EventEmitter();
        this.filter = 'all';
    }
    KegListComponent.prototype.editButtonHasBeenClicked = function (kegToEdit) {
        this.clickSender.emit(kegToEdit);
    };
    // serveBeerHasBeenClicked() {
    //   this.beersender.emit();
    // }
    KegListComponent.prototype.filterList = function (filterSelection) {
        this.filter = filterSelection;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], KegListComponent.prototype, "childKegList", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], KegListComponent.prototype, "pourKegList", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], KegListComponent.prototype, "clickSender", void 0);
    KegListComponent = __decorate([
        core_1.Component({
            selector: 'keg-list',
            template: "\n\n\n  <div *ngFor=\"let currentKeg of childKegList | display_option:filter\">\n    <h3>{{ currentKeg.name }}</h3>\n    <h5>{{ currentKeg.brand }}, Price: {{ currentKeg.price}}, Alc%{{ currentKeg.alc }} Beers Left:{{ currentKeg.beers }}</h5>\n    <button (click)=\"editButtonHasBeenClicked(currentKeg)\">Edit</button>\n    <button (click)=\"servedBeerHasBeenClicked(currentKeg)\">Serve Beer</button>\n  </div>\n  <h2>Filter By:</h2>\n  <select (change)=\"filterList($event.target.value)\">\n    <option value=\"all\">All</option>\n    <option value=\"low\">Less than 10</option>\n    <option value=\"empty\">Empty</option>\n  </select>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], KegListComponent);
    return KegListComponent;
}());
exports.KegListComponent = KegListComponent;
//# sourceMappingURL=keg-list.component.js.map