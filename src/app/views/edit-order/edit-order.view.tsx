// vendors
import { useParams } from 'react-router-dom';
// components
import { EditOrderOrchestrator } from './components/orchestrator/edit-order.orchestrator.component';
// contexts
import { EditOrderContextProvider } from './context/edit-order.context';

export const EditOrderView = () => {
  const { id } = useParams();

  return (
    <EditOrderContextProvider id={id!}>
      <EditOrderOrchestrator />
    </EditOrderContextProvider>
  );
};
