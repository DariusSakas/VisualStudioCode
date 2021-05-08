import { Iphone } from "./Iphone";
import { Samsung } from "./Samsung";
import { Device } from "./Device";

let iphone1 = new Iphone();
let iphone2 = new Iphone();

iphone1.model = "SE2";
iphone1.price = 399;
iphone1.getInfo();
iphone1.priceWithDiscount(10);

iphone2.model = "13";
iphone2.price = 1299;
iphone2.getInfo();
iphone2.priceWithDiscount(10);

let samsung1 = new Samsung();
let samsung2 = new Samsung();

samsung1.model = "AS";
samsung1.price = 300;
samsung1.getInfo();

samsung2.model = "A7";
samsung2.price = 398;
samsung2.getInfo();

console.log("Price before discount:");
let deviceArrayBeforeDisc: Device[] = [samsung1, samsung2, iphone1, iphone2];
for (let value of deviceArrayBeforeDisc) {
  console.log(value);
}

samsung1.priceWithDiscount(25);
samsung2.priceWithDiscount(20);
iphone1.priceWithDiscount(29);
iphone2.priceWithDiscount(114);

console.log("Price before discount:");
let deviceArrayAfterDisc: Device[] = [samsung1, samsung2, iphone1, iphone2];
for (let value of deviceArrayAfterDisc) {
  console.log(value);
}
