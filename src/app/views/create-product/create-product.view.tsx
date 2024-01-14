// vendors
import { useIntl } from 'react-intl';
// constants
import intlConstants from '@/app/intl/constants/intl.constants';
import { CreateProductOrchestrator } from './components/orchestrator/create-product.orchestrator.component';

export const CreateProductView = () => {
  const { formatMessage } = useIntl();

  return (
    <>
      <header>
        <hgroup>
          <h1>{formatMessage({ id: intlConstants.createProduct.title })}</h1>
          <p>
            {formatMessage({ id: intlConstants.createProduct.description })}
          </p>
        </hgroup>
      </header>

      <main>
        <CreateProductOrchestrator />
      </main>
    </>
  );
};
