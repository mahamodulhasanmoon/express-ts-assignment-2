import { IProduct } from "./product.interface";
import { Product } from "./product.model";

export const createProductService = async (data:IProduct)=>{
    const result = await Product.create(data);
    return result
}
export const getAllProductService = async ()=>{
    const result = await Product.find({});
    return result
}

//  spccific products operations

export const getProductsByIdService = async (id:string)=>{
    const result = await Product.findById(id);
    return result
}

export const deleteProductsByIdService = async (id:string)=>{
    const result = await Product.findByIdAndDelete(id);
    return result
}

export const updateProductByIdService = async (id: string, updateData: Partial<IProduct>): Promise<IProduct | null> => {
    try {
      const updatedProduct = await Product.findByIdAndUpdate(id, updateData, {
        new: true, 
        runValidators: true, 
      });
  
      return updatedProduct;
    } catch (error:any) {
    throw new Error(error)
    }
  };