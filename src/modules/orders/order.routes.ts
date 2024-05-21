import { Router } from 'express';
import { createOrderController, getAllOrdersController } from './order.controller';

export const orderRoutes = Router();

orderRoutes.post('/', createOrderController);
orderRoutes.get('/', getAllOrdersController);
