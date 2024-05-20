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
export const getProductsByIdService = async (id:string)=>{
    const result = await Product.findById(id);
    return result
}