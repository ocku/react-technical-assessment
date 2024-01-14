// components
import { Error } from '@/app/components/error/error.component';
import { Empty } from '@/app/components/empty/empty.component';
import { Loader } from '@/app/components/loader/loader.component';
import { OrdersTable } from '../table/orders-table.component';
// hooks
import { useOrdersAggregate } from '../../hooks/use-orders-aggregate/use-orders-aggregate.hook';

export const OrdersOrchestrator = () => {
  const { error, data, loading, retry, ...pagination } = useOrdersAggregate({
    limit: 10,
  });

  switch (true) {
    case error:
      return <Error retry={retry} />;
    case loading:
      return <Loader />;
    case !data?.length:
      return <Empty />;
    default:
      return <OrdersTable {...{ data, ...pagination }} />;
  }
};
