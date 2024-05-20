import { Router } from 'express';
import { createProductController, deleteProductsByIdController, getAllProductController, getProductsByIdController, updateProductsByIdController } from './product.controller';

export const productsRoutes = Router();

productsRoutes.post('/',createProductController);
productsRoutes.get('/',getAllProductController);


productsRoutes.get('/:productId',getProductsByIdController);
productsRoutes.put('/:productId',updateProductsByIdController);
productsRoutes.delete('/:productId',deleteProductsByIdController);