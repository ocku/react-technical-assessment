// vendors
import { useEffect } from 'react';
// hooks
import { usePagedRepository } from '@/app/hooks/use-paged-repository/use-paged-repository.hook';
import { useAsyncFn } from '@/app/hooks/use-async-fn/use-async-fn.hook';
// domain
import { orderRepository } from '@/infra/repository/order.repository';
import { aggregateAll } from '@/domain/services/order.aggregate.service';
// types
import { UseOrdersAggregateValue } from './use-orders-aggregate.hook.types';

export const useOrdersAggregate = ({
  limit,
}: {
  limit: number;
}): UseOrdersAggregateValue => {
  const { loading, error, data, ...rest } = usePagedRepository({
    limit,
    repository: orderRepository,
  });

  const { call, ...ordersAggregator } = useAsyncFn(aggregateAll);

  useEffect(() => {
    if (data) {
      call(data);
    }
  }, [data, call]);

  return {
    loading: loading || ordersAggregator.loading,
    error: error || ordersAggregator.error,
    data: ordersAggregator.data,
    ...rest,
  };
};
