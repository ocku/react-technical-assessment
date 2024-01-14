// domain
import { OrderAggregateProductModel } from '@/domain/aggregates/order.aggregate.model';
import { ProductModel } from '@/domain/models/product.model';

export type UseCreateOrderContentValue = {
  products: OrderAggregateProductModel[];
  addProduct: (product: OrderAggregateProductModel) => void;
  modalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  deleteProduct: (product: ProductModel) => void;
};
