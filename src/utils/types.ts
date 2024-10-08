export interface IProduct {
  _id: string;
  title: string;
  description?: string | undefined;
  extraInfo?: string[] | undefined;
  image: string;
  price: number;
  colour: string;
  sizes: string[];
  material: string;
  brand: string;
  departmentId: string;
}

export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phoneNumber?: number;
  dateOfBirth?: string;
  address?: {
    street?: string;
    city?: string;
    postalcode?: string;
    country?: string;
  };
}

export interface IDepartment {
  _id: string;
  name: string;
  text: string;
  description: string;
  products: IProduct[];
}

export interface ICart {
  cartId: string;
  product: Pick<IProduct, '_id' | 'title' | 'price' | 'image' | 'colour'>;
  size: string;
  quantity: number;
}

export interface IBrand {
  id: string;
  title: string;
  image: string;
}

export interface ISelect {
  id: string;
  text: string;
  value: string | number;
}

export interface IDropdownOption {
  id: string | number;
  text: string;
  url: string;
}

export interface IDeliveryInformation {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  shippingAddress: {
    street: string;
    city: string;
    country: string;
    postalcode: string;
  };
}

export interface IOrder {
  orderItems: Partial<IProduct[]>;
  shippingAddress: {
    street: string;
    city: string;
    postalcode: string;
    country: string;
  };
  shippingMethod: string;
  paymentMethod: string;
  totalPrice: number;
}
