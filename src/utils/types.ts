export interface IProduct {
  id: string;
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

export interface ICart {
  product: Partial<IProduct>;
  size: string;
  quantity: number;
}
