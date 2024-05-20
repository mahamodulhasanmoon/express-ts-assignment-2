import { Router } from 'express';
import { createProductController } from './product.controller';

export const productsRoutes = Router();

productsRoutes.post('/',createProductController);
productsRoutes.get('/');


productsRoutes.get('/:productId');
productsRoutes.put('/:productId');
productsRoutes.delete('/:productId');