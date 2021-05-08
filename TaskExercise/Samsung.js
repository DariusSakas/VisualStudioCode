"use strict";
exports.__esModule = true;
exports.Samsung = void 0;
var Samsung = /** @class */ (function () {
    function Samsung(brand, model, price) {
        this.brand = "Samsung";
        if (brand == undefined)
            this.brand;
        else
            this.brand = brand;
        this.price = price;
        this.model = model;
    }
    Samsung.prototype.priceWithDiscount = function (discount) {
        return (this.price = this.price - discount);
    };
    Samsung.prototype.getInfo = function () {
        console.log("Brand of the phone is: " + this.brand);
        console.log("Model of the phone is: " + this.model);
        console.log("Price of the phone is: " + this.price);
    };
    return Samsung;
}());
exports.Samsung = Samsung;
