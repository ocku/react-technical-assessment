// domain
import { productRepository } from '@/infra/repository/product.repository';
// components
import { Error } from '@/app/components/error/error.component';
import { Empty } from '@/app/components/empty/empty.component';
import { Loader } from '@/app/components/loader/loader.component';
import { ProductsTable } from '../table/products-table.component';
// hooks
import { usePagedRepository } from '@/app/hooks/use-paged-repository/use-paged-repository.hook';

export const ProductsOrchestrator = () => {
  const { error, data, loading, retry, ...pagination } = usePagedRepository({
    limit: 10,
    repository: productRepository,
  });

  switch (true) {
    case error:
      return <Error retry={retry} />;
    case loading:
      return <Loader />;
    case !!data?.length:
      return <ProductsTable {...{ data, ...pagination }} />;
    default:
      return <Empty />;
  }
};
