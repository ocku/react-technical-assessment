// infra
import { buildAPIHandler } from '@/infra/api';
// types
import { OrderModel } from '@/domain/models/order.model';
// constants
import { ORDER_BASE_URL } from './constants/repository.constants';

export const orderRepository = buildAPIHandler<OrderModel>({
  baseURL: ORDER_BASE_URL,
});
