// vendors
import { useIntl } from 'react-intl';
import { Link } from 'react-router-dom';
// components
import { ProductsOrchestrator } from './components/orchestrator/products.orchestrator.component';
// constants
import intlConstants from '@/app/intl/constants/intl.constants';
// styles
import layoutStyles from '@/app/styles/layout.module.css';

export const ProductsView = () => {
  const { formatMessage } = useIntl();

  return (
    <>
      <header>
        <hgroup>
          <h1>{formatMessage({ id: intlConstants.products.title })}</h1>
          <p>{formatMessage({ id: intlConstants.products.description })}</p>
        </hgroup>
        <div className={layoutStyles.group}>
          <Link to={'/products/new'}>
            {formatMessage({ id: intlConstants.actions.add })}
          </Link>
        </div>
      </header>

      <main>
        <ProductsOrchestrator />
      </main>
    </>
  );
};
