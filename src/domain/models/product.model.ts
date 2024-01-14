// vendors
import { z } from 'zod';
// validators (this is backwards)
import { validateProduct } from '@/domain/validators/models/product.validator';

export type ProductModel = z.infer<typeof validateProduct>;
