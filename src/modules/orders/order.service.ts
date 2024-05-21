import { IOrder } from './order.interface';
import { Order } from './order.model';

export const createOrderService = async (data: IOrder) => {
  try {
    const result = await Order.create(data);
    return result;
  } catch (error: any) {
    throw new Error(error);
  }
};
