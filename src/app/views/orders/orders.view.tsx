// vendors
import { useIntl } from 'react-intl';
import { Link } from 'react-router-dom';
import { OrdersOrchestrator } from './components/orchestrator/orders.orchestrator.component';
// constants
import intlConstants from '@/app/intl/constants/intl.constants';
// styles
import layoutStyles from '@/app/styles/layout.module.css';

export const OrdersView = () => {
  const { formatMessage } = useIntl();

  return (
    <>
      <header>
        <hgroup>
          <h1>{formatMessage({ id: intlConstants.orders.title })}</h1>
          <p>{formatMessage({ id: intlConstants.orders.description })}</p>
        </hgroup>

        <div className={layoutStyles.group}>
          <Link to={'/orders/new'}>
            {formatMessage({ id: intlConstants.actions.add })}
          </Link>
        </div>
      </header>

      <main>
        <OrdersOrchestrator />
      </main>
    </>
  );
};
