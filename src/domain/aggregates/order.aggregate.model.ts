// types
import { OrderModel } from '../models/order.model';
import { ProductModel } from '../models/product.model';

export type OrderAggregateProductModel = {
  product: ProductModel;
  amount: number;
};

export type OrderAggregateModel = Omit<OrderModel, 'products'> & {
  products: OrderAggregateProductModel[];
  price: {
    raw: number;
    withTax: number;
  };
};
