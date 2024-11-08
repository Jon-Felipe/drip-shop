import { IProduct } from '../components/ProductCard';

export interface IAddress {
  street: string;
  city: string;
  country: string;
  postalcode: string;
}

export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phoneNumber?: string;
  dateOfBirth?: string;
  address?: IAddress;
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

export interface IOrderItems {
  title: string;
  price: number;
  quantity: number;
  size: string;
  product: string;
}

export interface IDeliveryInformation {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  shippingAddress: IAddress;
}

export interface IOrder {
  orderItems: IOrderItems[];
  deliveryInformation: IDeliveryInformation;
  totalPrice: number;
}
