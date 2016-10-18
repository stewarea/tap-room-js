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
var NewKegComponent = (function () {
    function NewKegComponent() {
        this.newKegSender = new core_1.EventEmitter();
    }
    NewKegComponent.prototype.addClicked = function (name, brand, price, alc, beers) {
        var newKegToAdd = new keg_model_1.Keg(name, brand, price, alc, beers = 124);
        this.newKegSender.emit(newKegToAdd);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], NewKegComponent.prototype, "newKegSender", void 0);
    NewKegComponent = __decorate([
        core_1.Component({
            selector: 'new-keg',
            template: "\n  <h1>New Keg</h1>\n  <div>\n    <label>Name</label>\n    <input #newName>\n  </div>\n  <div>\n    <label>Type</label>\n    <input #newBrand>\n  </div>\n  <div>\n    <label>Price</label>\n    <input #newPrice>\n  </div>\n  <div>\n    <label>Alcohol %:</label>\n    <input #newAlc>\n    <button (click)=\"addClicked(newName.value, newBrand.value, newPrice.value, newAlc.value); newName.value=''; newBrand.value=''; newPrice.value=''; newAlc.value='';\">Add</button>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], NewKegComponent);
    return NewKegComponent;
}());
exports.NewKegComponent = NewKegComponent;
//# sourceMappingURL=new-keg.component.js.map