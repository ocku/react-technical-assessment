// vendors
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// domain
import { orderRepository } from '@/infra/repository/order.repository';
import { disaggregateOrder } from '@/domain/services/order.aggregate.service';
import { OrderAggregateProductModel } from '@/domain/aggregates/order.aggregate.model';
// components
import { Error } from '@/app/components/error/error.component';
import { Loader } from '@/app/components/loader/loader.component';
import { EditOrderContent } from '../content/create-order-content.component';
// hooks
import { useAsyncFn } from '@/app/hooks/use-async-fn/use-async-fn.hook';
import { useUUID } from '@/app/hooks/use-uuid/use-uuid.hook';

export const CreateOrderOrchestrator = () => {
  const { error, loading, data, call } = useAsyncFn(orderRepository.createOne);

  const id = useUUID();

  const navigate = useNavigate();

  const onSave = (products: OrderAggregateProductModel[]) => {
    call(
      disaggregateOrder({
        id,
        products,
      })
    );
  };

  useEffect(() => {
    if (data) {
      navigate(-1);
    }
  }, [data, navigate]);

  switch (true) {
    case error:
      return <Error />;
    case loading:
      return <Loader />;
    default:
      return <EditOrderContent onSave={onSave} />;
  }
};
