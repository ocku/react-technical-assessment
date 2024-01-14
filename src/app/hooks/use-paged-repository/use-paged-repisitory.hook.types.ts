export type UsePagedRepositoryValue<TModel> = {
  error: boolean;
  loading: boolean;
  data?: TModel[];
  hasNext: boolean;
  hasPrevious: boolean;
  previous: () => void;
  next: () => void;
  retry: () => void;
};
