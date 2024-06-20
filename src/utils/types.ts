export interface IProduct {
  id: string;
  title: string;
  description?: string | undefined;
  extraInfo?: string[] | undefined;
  image: string;
  price: number;
  colour: string;
  brand: string;
  material: string;
  reviews?: string[] | undefined;
  averageRating?: number | undefined;
  departmentId: string;
  inventory: {
    sizes: { size: string; countInStock: number }[];
  };
}

export interface IDepartment {
  id: string;
  title: string;
  description: string;
  tag: string;
}

export interface ICart {
  product: Pick<IProduct, 'id' | 'title' | 'price' | 'image' | 'colour'>;
  size: string;
  quantity: number;
  countInStock: number;
}
