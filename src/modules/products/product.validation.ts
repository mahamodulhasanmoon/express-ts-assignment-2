import { z } from 'zod';

export const VariantSchema = z.object({
  type: z.string().min(1, 'Variant type is required.'),
  value: z.string().min(1, 'Variant value is required.'),
});

export const InventorySchema = z.object({
  quantity: z.number().min(1, 'Inventory quantity is required.'),
  inStock: z.boolean().refine(val => val === true || val === false, {
    message: 'Inventory stock status is required.',
  }),
});

export const ProductValidationSchema = z.object({
  name: z.string().min(1, 'Product name is required.'),
  description: z.string().min(1, 'Product description is required.'),
  price: z.number().min(0, 'Product price is required.'),
  category: z.string().min(1, 'Product category is required.'),
  tags: z.array(z.string()).nonempty('Product tags are required.'),
  variants: z.array(VariantSchema).nonempty('Product variants are required.'),
  inventory: InventorySchema,
});
