import { NextFunction,Request,Response } from "express";
import { ProductValidationSchema } from "./product.validation";
import { createProductService } from "./product.service";

export const createProductController = async(req:Request, res:Response, next:NextFunction)=>{
try {
    const parsedData:any = ProductValidationSchema.parse(req.body);
    const result = await createProductService(parsedData)

    res.status(201).json({
      success: true,
      message: 'Product created successfully!',
      data: result,
    });

} catch (error:any) {
    next(error);
}
}