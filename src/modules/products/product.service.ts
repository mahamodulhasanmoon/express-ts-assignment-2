import { IProduct } from "./product.interface";
import { Product } from "./product.model";

export const createProductService = async (data:IProduct)=>{
    const result = await Product.create(data);
    return result
}