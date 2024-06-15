export interface IProduct {
  id: string;
  title: string;
  image: string;
  price: number;
  availableSizes: string[];
  productDetails: {
    description?: string;
    extraInfo?: string[];
    colors: string[];
    brand: string;
    material: string;
  };
  departmentId: string;
}

export interface IDepartment {
  id: string;
  title: string;
  description: string;
  tag: string;
}

export interface ICart {
  product: Pick<IProduct, 'id' | 'title' | 'price' | 'image'>;
  size: string;
  colour: string;
  quantity: number;
}
