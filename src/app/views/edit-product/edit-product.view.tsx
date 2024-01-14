// vendors
import { useParams } from 'react-router-dom';
// components
import { EditProductOrchestrator } from './components/orchestrator/edit-product.orchestrator.component';
// contexts
import { EditProductContextProvider } from './context/edit-product.context';

export const EditProductView = () => {
  const { id } = useParams();

  return (
    <EditProductContextProvider id={id!}>
      <EditProductOrchestrator />
    </EditProductContextProvider>
  );
};
