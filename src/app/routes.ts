import { Request, Response, Router } from 'express';
import { productsRoutes } from '../modules/products/products.routes';
import { orderRoutes } from '../modules/orders/order.routes';
const routes = Router();

routes.get('/health', (_req: Request, res: Response) => {
  res.status(200).json({
    status: 200,
    message: 'success',
    data: '🏓Ping🏓',
  });
});

// all Routes
routes.use('/products', productsRoutes);
routes.use('/orders', orderRoutes);

export default routes;
