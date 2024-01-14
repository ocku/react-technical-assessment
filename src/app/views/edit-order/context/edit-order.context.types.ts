// domain
import { OrderAggregateModel } from '@/domain/aggregates/order.aggregate.model';

export type EditOrderContextValue = {
  loading: boolean;
  error: boolean;
  data: OrderAggregateModel | undefined;
  updateOrder: (document: Pick<OrderAggregateModel, 'products'>) => void;
  deleteOrder: () => void;
  retry: () => void;
};
