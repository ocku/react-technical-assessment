// vendors
import { useEffect, useState } from 'react';
// domain
import { OrderAggregateProductModel } from '@/domain/aggregates/order.aggregate.model';
// contexts
import { useEditOrderContextConsumer } from '../../../context/edit-order.context';
import { ProductModel } from '@/domain/models/product.model';
// types
import { UseEditOrderContentValue } from './use-edit-order-content.hook.types';

export const useEditOrderContent = (): UseEditOrderContentValue => {
  const [modalOpen, setModalOpen] = useState(false);
  const { updateOrder, deleteOrder, data } = useEditOrderContextConsumer();
  const [products, setProducts] = useState<OrderAggregateProductModel[]>([]);

  const addProduct = (product: OrderAggregateProductModel) =>
    setProducts([...products, product]);

  const deleteProduct = (product: ProductModel) =>
    setProducts((products) =>
      products.filter(({ product: { id } }) => product.id !== id)
    );

  useEffect(() => {
    setProducts(data!.products);
  }, [data]);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  const save = (products: OrderAggregateProductModel[]) =>
    updateOrder({ products });

  return {
    products,
    addProduct,
    modalOpen,
    openModal,
    closeModal,
    save,
    deleteOrder,
    deleteProduct,
  };
};
