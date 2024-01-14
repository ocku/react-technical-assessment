// infra
import { buildAPIHandler } from '@/infra/api';
// types
import { ProductModel } from '@/domain/models/product.model';
// constants
import { PRODUCT_BASE_URL } from './constants/repository.constants';

export const productRepository = buildAPIHandler<ProductModel>({
  baseURL: PRODUCT_BASE_URL,
});
