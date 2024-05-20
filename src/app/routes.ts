import { Request, Response, Router } from 'express';
import { productsRoutes } from '../modules/products/products.routes';
const routes = Router();

routes.get('/health', (_req: Request, res: Response) => {
  res.status(200).json({
    status: 200,
    message: 'success',
    data:"🏓Ping🏓"
  });
});

// all Routes
routes.use('/products',productsRoutes)

export default routes;
