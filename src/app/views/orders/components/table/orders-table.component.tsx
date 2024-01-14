// vendors
import { useId } from 'react';
import { useIntl } from 'react-intl';
import { Link } from 'react-router-dom';
// domain
import { OrderAggregateModel } from '@/domain/aggregates/order.aggregate.model';
// components
import { Paginator } from '@/app/components/paginator/paginator.component';
// constants
import intlConstants from '@/app/intl/constants/intl.constants';
// styles
import layoutStyles from '@/app/styles/layout.module.css';
// types
import { UseOrdersAggregateValue } from '../../hooks/use-orders-aggregate/use-orders-aggregate.hook.types';

export const OrdersTable = ({
  data,
  ...pagination
}: Pick<
  UseOrdersAggregateValue,
  'hasPrevious' | 'hasNext' | 'previous' | 'next'
> & {
  data: OrderAggregateModel[];
}) => {
  const { formatMessage } = useIntl();
  const tableId = useId();

  return (
    <>
      <div className={layoutStyles.tableWrapper}>
        <table id={tableId} aria-live="polite">
          <thead>
            <tr>
              <th scope="col">
                {formatMessage({
                  id: intlConstants.models.orderAggregateModel.id,
                })}
              </th>
              <th scope="col">
                {formatMessage({
                  id: intlConstants.models.orderAggregateModel.price,
                })}
              </th>
              <th scope="col">
                {formatMessage({
                  id: intlConstants.models.orderAggregateModel.withTax,
                })}
              </th>
            </tr>
          </thead>
          <tbody>
            {data!.map((order) => (
              <tr key={order.id}>
                <th scope="row">
                  <Link to={`/orders/${order.id}`}>{order.id}</Link>
                </th>
                <td>{order.price.raw.toFixed(2)}</td>
                <td>{order.price.withTax.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Paginator
        {...pagination}
        ariaControls={tableId}
        ariaLabel={formatMessage({
          id: intlConstants.orders.pagination.ariaLabel,
        })}
      />
    </>
  );
};
