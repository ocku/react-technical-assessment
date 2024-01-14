// vendors
import { z } from 'zod';
// validators (this is backwards)
import { validateOrder } from '@/domain/validators/models/order.validator';

export type OrderModel = z.infer<typeof validateOrder>;
