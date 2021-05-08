"use strict";
exports.__esModule = true;
exports.Iphone = void 0;
var Iphone = /** @class */ (function () {
    function Iphone(brand, model, price) {
        this.brand = "Iphone";
        if (brand == undefined)
            this.brand;
        else
            this.brand = brand;
        this.price = price;
        this.model = model;
    }
    Iphone.prototype.priceWithDiscount = function (discount) {
        return (this.price = this.price - discount);
    };
    Iphone.prototype.getInfo = function () {
        console.log("Brand of the phone is: " + this.brand);
        console.log("Model of the phone is: " + this.model);
        console.log("Price of the phone is: " + this.price);
    };
    return Iphone;
}());
exports.Iphone = Iphone;
