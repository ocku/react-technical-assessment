export type UseAsyncFnValue<TRet, TArgs extends unknown[]> = {
  call: (...args: TArgs) => void;
  data?: TRet;
  error: boolean;
  loading: boolean;
};
