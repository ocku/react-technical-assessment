// domain
import { ProductModel } from '@/domain/models/product.model';

export type EditProductContextValue = {
  loading: boolean;
  error: boolean;
  data: ProductModel | undefined;
  updateProduct: (document: Partial<ProductModel>) => void;
  deleteProduct: () => void;
  retry: () => void;
};
