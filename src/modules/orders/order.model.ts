import { Schema, model } from "mongoose";
import { IOrder } from "./order.interface";

const orderSchema = new Schema<IOrder>({
    email: { 
      type: String, 
      required: [true, 'Email is required.'] 
    },
    productId: { 
      type: Schema.Types.ObjectId, 
      ref: 'Product', 
      required: [true, 'Product ID is required.'] 
    },
    price: { 
      type: Number, 
      required: [true, 'Price is required.'] 
    },
    quantity: { 
      type: Number, 
      required: [true, 'Quantity is required.'] 
    },
  });

  export const Order = model<IOrder>('Order',orderSchema)