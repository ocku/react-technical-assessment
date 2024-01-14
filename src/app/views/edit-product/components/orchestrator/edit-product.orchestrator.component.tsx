// components
import { Error } from '@/app/components/error/error.component';
import { Empty } from '@/app/components/empty/empty.component';
import { Loader } from '@/app/components/loader/loader.component';
import { EditProductForm } from '../form/edit-product.form.component';
// context
import { useEditProductContextConsumer } from '../../context/edit-product.context';

export const EditProductOrchestrator = () => {
  const { error, loading, data, retry } = useEditProductContextConsumer();

  switch (true) {
    case error:
      return <Error retry={retry} />;
    case loading:
      return <Loader />;
    case !data:
      return <Empty />;
    default:
      return <EditProductForm />;
  }
};
