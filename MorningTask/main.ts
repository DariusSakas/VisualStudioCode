import { Phone } from "./Phone";
import { Pc } from "./Pc";
import { Item } from "./Item";
import { WarehouseWorker } from "./WarehouseWorker";

let phone1 = new Phone("Iphone SE", 450, "Apple");
let phone2 = new Phone("Iphone SE", 450, "Apple");

let pc1 = new Pc("MacBookAir", 1290, "Apple", true);
let pc2 = new Pc("MacBookAir", 1290, "Apple", true);

const items: Item[] = [phone1];
items.push(pc1);

items.forEach((item: Item) => console.log(item));

const worker = new WarehouseWorker();

worker.addItemToStock(items, phone2);
