// vendors
import { useId } from 'react';
import { useIntl } from 'react-intl';
import { Link } from 'react-router-dom';
// domain
import { ProductModel } from '@/domain/models/product.model';
// components
import { Paginator } from '@/app/components/paginator/paginator.component';
// constants
import intlConstants from '@/app/intl/constants/intl.constants';
// types
import { UsePagedRepositoryValue } from '@/app/hooks/use-paged-repository/use-paged-repisitory.hook.types';
// styles
import layoutStyles from '@/app/styles/layout.module.css';

export const ProductsTable = ({
  data,
  ...pagination
}: Pick<
  UsePagedRepositoryValue<ProductModel>,
  'hasPrevious' | 'hasNext' | 'previous' | 'next'
> & {
  data: ProductModel[];
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
                {formatMessage({ id: intlConstants.models.product.id })}
              </th>
              <th scope="col">
                {formatMessage({ id: intlConstants.models.product.name })}
              </th>
              <th scope="col">
                {formatMessage({
                  id: intlConstants.models.product.description,
                })}
              </th>
              <th scope="col">
                {formatMessage({ id: intlConstants.models.product.price })}
              </th>
              <th scope="col">
                {formatMessage({
                  id: intlConstants.models.product.taxPercentage,
                })}
              </th>
            </tr>
          </thead>
          <tbody>
            {data!.map((product) => (
              <tr key={product.id}>
                <th scope="row">
                  <Link to={`/products/${product.id}`}>{product.id}</Link>
                </th>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>
                <td>{product.taxPercentage}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Paginator
        {...pagination}
        ariaControls={tableId}
        ariaLabel={formatMessage({
          id: intlConstants.products.pagination.ariaLabel,
        })}
      />
    </>
  );
};
