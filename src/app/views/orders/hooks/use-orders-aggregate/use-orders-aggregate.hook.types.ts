import { UsePagedRepositoryValue } from '@/app/hooks/use-paged-repository/use-paged-repisitory.hook.types';
import { OrderAggregateModel } from '@/domain/aggregates/order.aggregate.model';

export type UseOrdersAggregateValue =
  UsePagedRepositoryValue<OrderAggregateModel>;
