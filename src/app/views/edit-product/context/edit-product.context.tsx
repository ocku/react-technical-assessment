// vendors
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useMemo,
} from 'react';
import { useNavigate } from 'react-router-dom';
// domain
import { ProductModel } from '@/domain/models/product.model';
import { productRepository } from '@/infra/repository/product.repository';
// hooks
import { useAsyncFn } from '@/app/hooks/use-async-fn/use-async-fn.hook';
// types
import { EditProductContextValue } from './edit-product.context.types';

const EditProductContext = createContext<EditProductContextValue | null>(null);

export const EditProductContextProvider = ({
  id,
  children,
}: {
  id: string;
  children: ReactNode;
}) => {
  const {
    call: getProduct,
    error: getProductError,
    loading: getProductLoading,
    data: getProductData,
  } = useAsyncFn(productRepository.getOne);

  const {
    call: updateProduct,
    error: updateProductError,
    loading: updateProductLoading,
    data: updateProductData,
  } = useAsyncFn(productRepository.updateOne);

  const {
    call: deleteProduct,
    error: deleteProductError,
    loading: deleteProductLoading,
    data: deleteProductData,
  } = useAsyncFn(productRepository.deleteOne);

  const navigate = useNavigate();

  useEffect(() => {
    if (deleteProductData || updateProductData) {
      navigate(-1);
    }
  }, [deleteProductData, updateProductData, navigate]);

  useEffect(() => {
    getProduct({ id });
  }, [id, getProduct]);

  const value = useMemo(
    () => ({
      loading: [
        getProductLoading,
        updateProductLoading,
        deleteProductLoading,
      ].some((loading) => loading),

      error: [getProductError, updateProductError, deleteProductError].some(
        (error) => error
      ),

      retry: () => getProduct({ id }),

      data: updateProductData || getProductData,

      updateProduct: (document: Partial<ProductModel>) =>
        updateProduct(
          {
            id,
          },
          document
        ),

      deleteProduct: () => deleteProduct({ id }),
    }),
    [
      getProductLoading,
      updateProductLoading,
      deleteProductLoading,
      getProductError,
      updateProductError,
      deleteProductError,
      updateProductData,
      getProductData,
      getProduct,
      updateProduct,
      deleteProduct,
      id,
    ]
  );

  return (
    <EditProductContext.Provider value={value}>
      {children}
    </EditProductContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useEditProductContextConsumer = (): EditProductContextValue => {
  const ctx = useContext(EditProductContext);

  if (!ctx) {
    throw new Error(
      'useEditProductContextConsumer must be used inside a EditProductContextProvider'
    );
  }

  return ctx;
};
