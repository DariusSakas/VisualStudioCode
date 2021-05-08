"use strict";
exports.__esModule = true;
var Iphone_1 = require("./Iphone");
var Samsung_1 = require("./Samsung");
var iphone1 = new Iphone_1.Iphone();
var iphone2 = new Iphone_1.Iphone();
iphone1.model = "SE2";
iphone1.price = 399;
iphone1.getInfo();
iphone1.priceWithDiscount(10);
iphone2.model = "13";
iphone2.price = 1299;
iphone2.getInfo();
iphone2.priceWithDiscount(10);
var samsung1 = new Samsung_1.Samsung();
var samsung2 = new Samsung_1.Samsung();
samsung1.model = "AS";
samsung1.price = 300;
samsung1.getInfo();
samsung2.model = "A7";
samsung2.price = 398;
samsung2.getInfo();
console.log("Price before discount:");
var deviceArrayBeforeDisc = [samsung1, samsung2, iphone1, iphone2];
for (var _i = 0, deviceArrayBeforeDisc_1 = deviceArrayBeforeDisc; _i < deviceArrayBeforeDisc_1.length; _i++) {
    var value = deviceArrayBeforeDisc_1[_i];
    console.log(value);
}
samsung1.priceWithDiscount(25);
samsung2.priceWithDiscount(20);
iphone1.priceWithDiscount(29);
iphone2.priceWithDiscount(114);
console.log("Price before discount:");
var deviceArrayAfterDisc = [samsung1, samsung2, iphone1, iphone2];
for (var _a = 0, deviceArrayAfterDisc_1 = deviceArrayAfterDisc; _a < deviceArrayAfterDisc_1.length; _a++) {
    var value = deviceArrayAfterDisc_1[_a];
    console.log(value);
}
