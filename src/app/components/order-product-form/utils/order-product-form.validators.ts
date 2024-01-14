// vendors
import { z } from 'zod';

export const orderProductFormValidator = z.record(
  z.string(),
  z.coerce.number().positive()
);
