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
export const getAllOrderService = async (email:string | undefined ) => {

  try {
    const queries:{
      email?: string
    }= {};

if(email){
queries.email = email
}

    const result = await Order.find(queries);
    return result;
  } catch (error: any) {
    throw new Error(error);
  }
};
