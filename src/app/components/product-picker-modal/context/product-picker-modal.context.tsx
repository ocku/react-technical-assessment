// vendors
import { ReactNode, createContext, useContext, useEffect } from 'react';
// domain
import { OrderAggregateProductModel } from '@/domain/aggregates/order.aggregate.model';
import { productRepository } from '@/infra/repository/product.repository';
// hooks
import { useAsyncFn } from '@/app/hooks/use-async-fn/use-async-fn.hook';
import { useInput } from '@/app/hooks/use-input/use-input.hook';
// types
import { ProductPickerModalContextValue } from './product-picker-modal.context.types';

const ProductPickerModalContext =
  createContext<ProductPickerModalContextValue | null>(null);

export const ProductPickerModalContextProvider = ({
  omit,
  onAdd,
  children,
}: {
  children: ReactNode;
  omit: OrderAggregateProductModel[];
  onAdd: (products: OrderAggregateProductModel) => void;
}) => {
  const { call, error, loading, data } = useAsyncFn(productRepository.getAll);

  const { value: search, onChange: onSearchChange } = useInput({
    initialValue: '',
  });

  useEffect(() => {
    call({
      limit: 10,
      query: {
        id_ne: omit.map(({ product: { id } }) => id),
        name_like: search,
      },
    });
  }, [call, omit, search]);

  return (
    <ProductPickerModalContext.Provider
      value={{
        call,
        error,
        loading,
        data,
        search,
        onAdd,
        onSearchChange,
      }}
    >
      {children}
    </ProductPickerModalContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useProductPickerModalContextConsumer =
  (): ProductPickerModalContextValue => {
    const ctx = useContext(ProductPickerModalContext);

    if (!ctx) {
      throw new Error(
        'useProductPickerContextConsumer must be used inside a ProductPickerContextProvider'
      );
    }

    return ctx;
  };
