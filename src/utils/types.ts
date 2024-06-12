export interface IProduct {
  id: number | string;
  title: string;
  image: string;
  price: number;
  availableSizes: string[];
  productDetails: {
    description?: string;
    extraInfo?: string[];
    color: string;
    brand: string;
    material: string;
  };
}
