import { z } from 'zod';

export const orderValidationSchema = z.object({
  email: z
    .string()
    .email({ message: 'Invalid email address' })
    .min(1, { message: 'Email is required.' }),
  productId: z.string({ message: 'Product ID is required' }),
  price: z
    .number()
    .positive({ message: 'Price must be a positive number' })
    .min(1, { message: 'Price is required.' }),
  quantity: z
    .number()
    .int()
    .positive({ message: 'Quantity must be a positive integer' })
    .min(1, { message: 'Quantity is required.' }),
});
