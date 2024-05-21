import { Model } from 'mongoose';

/* eslint-disable no-unused-vars */
export interface IVariant {
  type: string;
  value: string;
}

export interface IInventory {
  quantity: number;
  inStock: boolean;
}

export interface IProduct {
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  variants: IVariant[];
  inventory: IInventory;
}

// for check productId is Exist or Not

export interface ProductModel extends Model<IProduct> {
  isProductExist: (id: string) => Promise<IProduct | null>;
}
