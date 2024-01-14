// vendors
import { useState } from 'react';
// domain
import { ProductModel } from '@/domain/models/product.model';
import { OrderAggregateProductModel } from '@/domain/aggregates/order.aggregate.model';
// types
import { UseCreateOrderContentValue } from './use-create-order-content.hook.types';

export const useCreateOrderContent = (): UseCreateOrderContentValue => {
  const [modalOpen, setModalOpen] = useState(false);
  const [products, setProducts] = useState<OrderAggregateProductModel[]>([]);

  const addProduct = (product: OrderAggregateProductModel) => {
    setProducts([...products, product]);
  };

  const deleteProduct = (product: ProductModel) =>
    setProducts((products) =>
      products.filter(({ product: { id } }) => product.id !== id)
    );

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return {
    products,
    addProduct,
    modalOpen,
    openModal,
    closeModal,
    deleteProduct,
  };
};
