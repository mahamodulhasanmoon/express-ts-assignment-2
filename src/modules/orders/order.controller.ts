import { NextFunction, Request, Response } from 'express';
import { orderValidationSchema } from './order.validation';
import { Product } from '../products/product.model';
import { IOrder } from './order.interface';
import { createOrderService } from './order.service';

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
