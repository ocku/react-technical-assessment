import { useCallback, useState } from 'react';
import { UseAsyncFnValue } from './use-async-fn.hook.types';

export const useAsyncFn = <TRet, TArgs extends unknown[]>(
  fn: (...args: TArgs) => Promise<TRet>
): UseAsyncFnValue<TRet, TArgs> => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<TRet | undefined>();

  const call = useCallback(
    (...args: TArgs) => {
      setLoading(true);
      fn(...args)
        .then(setData)
        .catch(setError)
        .finally(() => setLoading(false));
    },
    [fn]
  );

  return {
    call,
    data,
    error,
    loading,
  };
};
