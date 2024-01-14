// domain
import { OrderAggregateProductModel } from '@/domain/aggregates/order.aggregate.model';
import { ProductModel } from '@/domain/models/product.model';

export type UseEditOrderContentValue = {
  products: OrderAggregateProductModel[];
  addProduct: (product: OrderAggregateProductModel) => void;
  modalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  save: (products: OrderAggregateProductModel[]) => void;
  deleteOrder: () => void;
  deleteProduct: (product: ProductModel) => void;
};
