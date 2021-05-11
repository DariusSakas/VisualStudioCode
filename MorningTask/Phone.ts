import { Item } from "./Item";

export class Phone implements Item {
  name: string;
  price: number;
  hasgurantee: boolean;

  constructor(
    name: string,
    price: number,
    public manufacturer: string,
    hasgurantee?: boolean
  ) {
    this.name = name;
    this.price = price;
    this.hasgurantee = hasgurantee;
  }

  printItemData() {
    console.log(`${this.name}, ${this.price}, ${this.hasgurantee}`);
  }
}
