import { Router } from 'express';
import { createOrderController } from './order.controller';

export const orderRoutes = Router();

orderRoutes.post('/', createOrderController);
