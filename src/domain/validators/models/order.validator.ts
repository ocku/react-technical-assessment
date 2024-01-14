// vendors
import { z } from 'zod';

export const validateOrderProduct = z.object({
  id: z.string(),
  amount: z.number().positive(),
});

export const validateOrder = z.object({
  id: z.string(),
  products: z.array(validateOrderProduct),
});
