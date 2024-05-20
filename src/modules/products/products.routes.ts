import { Router } from 'express';
import { createProductController, getAllProductController, getProductsByIdController } from './product.controller';

export const productsRoutes = Router();

productsRoutes.post('/',createProductController);
productsRoutes.get('/',getAllProductController);


productsRoutes.get('/:productId',getProductsByIdController);
productsRoutes.put('/:productId');
productsRoutes.delete('/:productId');