// domain
import { OrderAggregateProductModel } from '@/domain/aggregates/order.aggregate.model';
// vendors
import { useCallback, useMemo } from 'react';
// mappers
import {
  mapOrderProductsToRecord,
  mapRecordToOrderProducts,
} from '../utils/order-product-form.utils';
// validators
import { orderProductFormValidator } from '../utils/order-product-form.validators';
// hooks
import { useForm } from '@/app/hooks/use-form/use-form.hook';

export const useOrderProductForm = ({
  products,
  setProducts,
}: {
  products: OrderAggregateProductModel[];
  setProducts: (products: OrderAggregateProductModel[]) => void;
}) => {
  const productsRecord = useMemo(
    () => mapOrderProductsToRecord(products),
    [products]
  );

  const onSave = useCallback(
    (productsRecord: Record<string, number>) =>
      setProducts(mapRecordToOrderProducts(productsRecord, products)),
    [products, setProducts]
  );

  const { values, canSave, onChange, onBlur, save } = useForm({
    defaultValues: productsRecord,
    validator: orderProductFormValidator,
    onSave,
  });

  return {
    products,
    values,
    canSave: canSave && products.length > 0,
    onChange,
    onBlur,
    save,
  };
};
