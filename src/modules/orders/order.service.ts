import { Product } from '../products/product.model';
import { IOrder } from './order.interface';
import { Order } from './order.model';

export const createOrderService = async (data: IOrder) => {
  try {
    const product = await Product.findOneAndUpdate(
      {
        _id: data.productId,
        'inventory.quantity': { $gte: data.quantity },
      },
      [
        {
          $set: {
            'inventory.quantity': {
              $subtract: ['$inventory.quantity', data.quantity],
            },
          },
        },
        {
          $set: {
            'inventory.inStock': {
              $cond: {
                if: { $eq: ['$inventory.quantity', 0] },
                then: false,
                else: '$inventory.inStock',
              },
            },
          },
        },
      ],
      { new: true },
    );

    if (!product) {
      return {
        error: {
          success: false,
          message: 'Insufficient quantity available in inventory',
        },
      };
    }

    const result = await Order.create(data);
    return { result };
  } catch (error: any) {
    throw new Error(error);
  }
};
export const getAllOrderService = async (email: string | undefined) => {
  try {
    const queries: {
      email?: string;
    } = {};

    if (email) {
      queries.email = email;
    }

    const result = await Order.find(queries);
    return result;
  } catch (error: any) {
    throw new Error(error);
  }
};
