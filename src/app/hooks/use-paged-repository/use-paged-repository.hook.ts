import { useEffect, useState } from 'react';
import { FetchOptions } from 'ofetch';
import { useAsyncFn } from '../use-async-fn/use-async-fn.hook';
import { ApiHandler, WithId } from '@/infra/api.types';
import { UsePagedRepositoryValue } from './use-paged-repisitory.hook.types';

export const usePagedRepository = <TModel extends WithId>({
  limit = 10,
  query,
  repository,
}: {
  limit?: number;
  query?: FetchOptions<'json'>['params'];
  repository: Pick<ApiHandler<TModel>, 'getAll'>;
}): UsePagedRepositoryValue<TModel> => {
  const [page, setPage] = useState(1);
  const { call, data, error, loading } = useAsyncFn(repository.getAll);

  useEffect(() => {
    call({ query, limit, page });
  }, [page, limit, query, call]);

  const next = () => setPage((current) => current + 1);
  const previous = () => setPage((current) => current - 1);
  const retry = () => call({ query, limit, page });

  return {
    error,
    loading,
    data: data?.data,
    hasNext: (data?.totalItems || 0) > page * limit,
    hasPrevious: page > 1,
    previous,
    next,
    retry,
  };
};
