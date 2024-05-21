import { Schema, model } from 'mongoose';
import {
  IInventory,
  IProduct,
  IVariant,
  ProductModel,
} from './product.interface';
import { CustomError } from '../../app/errors';

const variantSchema = new Schema<IVariant>({
  type: {
    type: String,
    required: [true, 'Variant type is required.'],
  },
  value: {
    type: String,
    required: [true, 'Variant value is required.'],
  },
});

const inventorySchema = new Schema<IInventory>({
  quantity: {
    type: Number,
    required: [true, 'Inventory quantity is required.'],
  },
  inStock: {
    type: Boolean,
    required: [true, 'Inventory stock status is required.'],
  },
});

const productSchema = new Schema<IProduct, ProductModel>(
  {
    name: {
      type: String,
      required: [true, 'Product name is required.'],
    },
    description: {
      type: String,
      required: [true, 'Product description is required.'],
    },
    price: {
      type: Number,
      required: [true, 'Product price is required.'],
    },
    category: {
      type: String,
      required: [true, 'Product category is required.'],
    },
    tags: {
      type: [String],
      required: [true, 'Product tags are required.'],
    },
    variants: {
      type: [variantSchema],
      required: [true, 'Product variants are required.'],
    },
    inventory: {
      type: inventorySchema,
      required: [true, 'Product inventory is required.'],
    },
  },
  { timestamps: true },
);

// check is Product is Exist or Not
productSchema.statics.isProductExist = async function (id: string) {
  try {
    const existingProduct = await Product.findById(id);
    return existingProduct;
  } catch (error: any) {
    throw new CustomError('Please Provide Valid Product ID', 422);
  }
};

export const Product = model<IProduct, ProductModel>('Product', productSchema);
