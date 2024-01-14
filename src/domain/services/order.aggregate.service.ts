// types
import { OrderModel } from '../models/order.model';
import { OrderAggregateModel } from '../aggregates/order.aggregate.model';
// repositories
import { productRepository } from '../../infra/repository/product.repository';
import { calculateProductPrice } from './product.service';

export const buildAggregateOrder = async (
  order: OrderModel
): Promise<OrderAggregateModel> => {
  const products = (
    await productRepository.getAll({
      query: {
        id: order.products.map(({ id }) => id),
      },
    })
  ).data.map((product) => ({
    product,
    amount: order.products.find(({ id }) => product.id === id)!.amount,
  }));

  const price = products.reduce(
    (previous, { product, amount }) => {
      const { raw, withTax } = calculateProductPrice(product, amount);

      return {
        raw: previous.raw + raw,
        withTax: previous.withTax + withTax,
      };
    },
    { raw: 0, withTax: 0 }
  );

  return {
    ...order,
    products,
    price,
  };
};

export const disaggregateOrder = ({
  id,
  products,
}: Pick<OrderAggregateModel, 'id' | 'products'>): OrderModel => ({
  id,
  products: products.map(({ product, amount }) => ({
    id: product.id,
    amount,
  })),
});

export const aggregateAll = (orders: OrderModel[]) =>
  Promise.all(orders.map(buildAggregateOrder));
