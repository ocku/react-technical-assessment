// components
import { Error } from '@/app/components/error/error.component';
import { Empty } from '@/app/components/empty/empty.component';
import { Loader } from '@/app/components/loader/loader.component';
import { EditOrderContent } from '../content/edit-order-content.component';
// hooks
import { useEditOrderContextConsumer } from '../../context/edit-order.context';

export const EditOrderOrchestrator = () => {
  const { error, loading, data } = useEditOrderContextConsumer();

  switch (true) {
    case error:
      return <Error />;
    case loading:
      return <Loader />;
    case !data:
      return <Empty />;
    default:
      return <EditOrderContent />;
  }
};
