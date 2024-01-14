// components
import { Empty } from '@/app/components/empty/empty.component';
import { Error } from '@/app/components/error/error.component';
import { Loader } from '@/app/components/loader/loader.component';
import { ProductPickerModalList } from '../list/product-picker-modal-list.component';
// contexts
import { useProductPickerModalContextConsumer } from '../../context/product-picker-modal.context';

export const ProductPickerModalOrchestrator = () => {
  const { error, loading, data } = useProductPickerModalContextConsumer();

  switch (true) {
    case error:
      return <Error />;
    case loading:
      return <Loader />;
    case !data?.data.length:
      return <Empty />;
    default:
      return <ProductPickerModalList />;
  }
};
