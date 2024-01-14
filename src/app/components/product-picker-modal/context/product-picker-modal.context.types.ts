// domain
import { productRepository } from '@/infra/repository/product.repository';
import { OrderAggregateModel } from '@/domain/aggregates/order.aggregate.model';
// types
import { UseAsyncFnValue } from '@/app/hooks/use-async-fn/use-async-fn.hook.types';
import { UseInputHookValue } from '@/app/hooks/use-input/use-input.hook.types';

export type ProductPickerModalContextValue = UseAsyncFnValue<
  Awaited<ReturnType<typeof productRepository.getAll>>,
  Parameters<typeof productRepository.getAll>
> & {
  search: string;
  onAdd: (product: OrderAggregateModel['products'][0]) => void;
  onSearchChange: UseInputHookValue<HTMLInputElement>['onChange'];
};
