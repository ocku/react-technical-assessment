import { z } from 'zod';

export const validateProduct = z.object({
  id: z.string(),
  name: z.string().min(1),
  description: z.string().min(1),
  price: z.coerce.number().positive(),
  taxPercentage: z.coerce.number().positive(),
});

export const validateProductPartial = validateProduct.partial();
