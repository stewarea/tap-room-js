"use strict";
var Keg = (function () {
    function Keg(name, brand, price, alc, beers) {
        this.name = name;
        this.brand = brand;
        this.price = price;
        this.alc = alc;
        this.beers = beers;
        this.empty = false;
    }
    return Keg;
}());
exports.Keg = Keg;
//# sourceMappingURL=keg.model.js.map