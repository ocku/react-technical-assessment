// vendors
import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
} from 'react';
import { useNavigate } from 'react-router-dom';
// domain
import { OrderAggregateModel } from '@/domain/aggregates/order.aggregate.model';
import { OrderModel } from '@/domain/models/order.model';
import { orderRepository } from '@/infra/repository/order.repository';
import {
  buildAggregateOrder,
  disaggregateOrder,
} from '@/domain/services/order.aggregate.service';
// hooks
import { useAsyncFn } from '@/app/hooks/use-async-fn/use-async-fn.hook';
// types
import { EditOrderContextValue } from './edit-order.context.types';

const EditOrderContext = createContext<EditOrderContextValue | null>(null);

export const EditOrderContextProvider = ({
  id,
  children,
}: {
  id: string;
  children: ReactNode;
}) => {
  const getAggregateOrder = useCallback(
    ({ id }: Pick<OrderModel, 'id'>) =>
      orderRepository.getOne({ id }).then(buildAggregateOrder),
    []
  );

  const {
    call: getOrder,
    error: getOrderError,
    loading: getOrderLoading,
    data: getOrderData,
  } = useAsyncFn(getAggregateOrder);

  const {
    call: updateOrder,
    error: updateOrderError,
    loading: updateOrderLoading,
    data: updateOrderData,
  } = useAsyncFn(orderRepository.updateOne);

  const {
    call: deleteOrder,
    error: deleteOrderError,
    loading: deleteOrderLoading,
    data: deleteOrderData,
  } = useAsyncFn(orderRepository.deleteOne);

  const navigate = useNavigate();

  useEffect(() => {
    if (deleteOrderData || updateOrderData) {
      navigate(-1);
    }
  }, [deleteOrderData, updateOrderData, navigate]);

  useEffect(() => {
    getOrder({ id });
  }, [id, getOrder]);

  const value = useMemo(
    () => ({
      loading: [getOrderLoading, updateOrderLoading, deleteOrderLoading].some(
        (loading) => loading
      ),

      error: [getOrderError, updateOrderError, deleteOrderError].some(
        (error) => error
      ),

      retry: () => getOrder({ id }),

      data: getOrderData,

      updateOrder: (document: Pick<OrderAggregateModel, 'products'>) =>
        updateOrder(
          {
            id,
          },
          disaggregateOrder({
            id,
            products: document.products,
          })
        ),

      deleteOrder: () => deleteOrder({ id }),
    }),
    [
      getOrderLoading,
      updateOrderLoading,
      deleteOrderLoading,
      getOrderError,
      updateOrderError,
      deleteOrderError,
      getOrderData,
      getOrder,
      updateOrder,
      deleteOrder,
      id,
    ]
  );

  return (
    <EditOrderContext.Provider value={value}>
      {children}
    </EditOrderContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useEditOrderContextConsumer = (): EditOrderContextValue => {
  const ctx = useContext(EditOrderContext);

  if (!ctx) {
    throw new Error(
      'useEditOrderContextConsumer must be used inside a EditOrderContextProvider'
    );
  }

  return ctx;
};
