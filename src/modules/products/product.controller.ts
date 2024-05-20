import { NextFunction,Request,Response } from "express";
import { ProductValidationSchema } from "./product.validation";
import { createProductService,deleteProductsByIdService,getAllProductService, getProductsByIdService, updateProductByIdService } from "./product.service";

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

export const getAllProductController = async(req:Request, res:Response, next:NextFunction)=>{
try {
   
    const result = await getAllProductService()

    res.status(201).json({
      success: true,
      message: 'Products fetched successfully!',
      data: result,
    });

} catch (error:any) {
    next(error);
}
}
export const getProductsByIdController = async(req:Request, res:Response, next:NextFunction)=>{
try {
   
    const result = await getProductsByIdService(req.params.productId)

    res.status(200).json({
      success: true,
      message: 'Products fetched successfully!',
      data: result,
    });

} catch (error:any) {
    next(error);
}
}

//  for delete specific products

export const updateProductsByIdController = async(req:Request, res:Response, next:NextFunction)=>{
    try {
       
        const result = await updateProductByIdService(req.params.productId,req.body)
    
        res.status(200).json({
          success: true,
          message: 'Product updated successfully!',
          data: result,
        });
    
    } catch (error:any) {
        next(error);
    }
    }

    // update data for products
export const deleteProductsByIdController = async(req:Request, res:Response, next:NextFunction)=>{
    try {
       
        const result = await deleteProductsByIdService(req.params.productId)
    
        res.status(200).json({
          success: true,
          message: 'Product deleted successfully!',
          data: result,
        });
    
    } catch (error:any) {
        next(error);
    }
    }