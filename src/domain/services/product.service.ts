// models
import { ProductModel } from '../models/product.model';

export const calculateProductPrice = (
  product: ProductModel,
  amount: number = 1
): {
  raw: number;
  withTax: number;
} => ({
  raw: product.price * amount,
  withTax:
    product.price * amount + (product.price * product.taxPercentage) / 100,
});
