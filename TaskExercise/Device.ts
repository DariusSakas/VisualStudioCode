export interface Device {
  brand: string;
  model: string;
  price: number;

  priceWithDiscount: (price: number, discount: number) => number;
  getInfo: () => void;
}
