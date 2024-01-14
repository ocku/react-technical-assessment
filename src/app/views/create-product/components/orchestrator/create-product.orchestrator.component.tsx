// vendors
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
// repository
import { productRepository } from '@/infra/repository/product.repository';
// components
import { Error } from '@/app/components/error/error.component';
import { Loader } from '@/app/components/loader/loader.component';
import { CreateProductForm } from '../form/create-product-form.component';
// hooks
import { useAsyncFn } from '@/app/hooks/use-async-fn/use-async-fn.hook';

export const CreateProductOrchestrator = () => {
  const navigate = useNavigate();

  const { error, loading, data, call } = useAsyncFn(
    productRepository.createOne
  );

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
      return <CreateProductForm onSave={call} />;
  }
};
