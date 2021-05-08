import { Device } from "./Device";
export class Samsung implements Device {
  brand: string = "Samsung";
  model: string;
  price: number;

  constructor(brand?: string, model?: string, price?: number) {
    if (brand == undefined) this.brand;
    else this.brand = brand;
    this.price = price;
    this.model = model;
  }

  priceWithDiscount(discount: number) {
    return (this.price = this.price - discount);
  }
  getInfo() {
    console.log(`Brand of the phone is: ${this.brand}`);
    console.log(`Model of the phone is: ${this.model}`);
    console.log(`Price of the phone is: ${this.price}`);
  }
}
