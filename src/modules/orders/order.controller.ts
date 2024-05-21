import { NextFunction, Request, Response } from 'express';
import { orderValidationSchema } from './order.validation';
import { Product } from '../products/product.model';
import { IOrder } from './order.interface';
import { createOrderService, getAllOrderService } from './order.service';

export const createOrderController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const parsedData: IOrder = orderValidationSchema.parse(req.body);

    // check is Product is Exist or not

    const check = await Product.isProductExist(parsedData.productId);
    if (check) {
      const result = await createOrderService(parsedData);

      res.status(201).json({
        success: true,
        message: 'Order created successfully!',
        data: result,
      });
    }
    res.status(500).json({
      success: false,
      message: 'somethinfg Went Wrong',
    });
  } catch (error: any) {
    next(error);
  }
};

// get All Orders
export const getAllOrdersController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const email = req.query.email  as string;


    const result = await getAllOrderService(email)

    res.status(200).json({
      success: false,
      message: 'Orders fetched successfully!',
      data:result
    });
  } catch (error: any) {
    next(error);
  }
};
