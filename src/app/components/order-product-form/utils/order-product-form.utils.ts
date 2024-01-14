// model
import { OrderAggregateProductModel } from '@/domain/aggregates/order.aggregate.model';

export const mapOrderProductsToRecord = (
  products: OrderAggregateProductModel[]
) =>
  products.reduce(
    (prev, { product, amount }) => ({
      ...prev,
      [product.id]: amount,
    }),
    {} as Record<string, number>
  );

export const mapRecordToOrderProducts = (
  record: Record<string, number>,
  products: OrderAggregateProductModel[]
) =>
  products.map(({ product }) => ({
    product,
    amount: record[product.id],
  }));
