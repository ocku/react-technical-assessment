// vendors
import { useIntl } from 'react-intl';
// domain
import { ProductModel } from '@/domain/models/product.model';
import { OrderAggregateProductModel } from '@/domain/aggregates/order.aggregate.model';
// hooks
import { useOrderProductForm } from './hooks/use-order-product-form.hook';
// utils
import { calculateProductPrice } from '@/domain/services/product.service';
// constants
import intlConstants from '@/app/intl/constants/intl.constants';
// styles
import layoutStyles from '@/app/styles/layout.module.css';

export const OrderProductForm = ({
  products,
  setProducts,
  deleteProduct,
}: {
  products: OrderAggregateProductModel[];
  deleteProduct: (product: ProductModel) => void;
  setProducts: (products: OrderAggregateProductModel[]) => void;
}) => {
  const { formatMessage } = useIntl();

  const { values, canSave, onChange, onBlur, save } = useOrderProductForm({
    products,
    setProducts,
  });

  return (
    <div className={layoutStyles.tableWrapper}>
      <table>
        <thead>
          <tr>
            <th scope="col">
              {formatMessage({ id: intlConstants.models.product.name })}
            </th>
            <th scope="col">
              {formatMessage({ id: intlConstants.models.product.price })}
            </th>
            <th scope="col">
              {formatMessage({
                id: intlConstants.models.product.taxPercentage,
              })}
            </th>
            <th scope="col">
              {formatMessage({ id: intlConstants.models.product.total })}
            </th>
            <th scope="col">
              {formatMessage({
                id: intlConstants.models.orderAggregateProductModel.amount,
              })}
            </th>
            <th scope="col">
              {formatMessage({ id: intlConstants.actions.delete })}
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map(({ product }) => (
            <tr>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.taxPercentage}</td>
              <td>
                {calculateProductPrice(product, values[product.id]).withTax}
              </td>
              <td>
                <input
                  type="number"
                  name={product.id}
                  value={values[product.id]}
                  onChange={onChange}
                  onBlur={onBlur}
                />
              </td>
              <td>
                <button onClick={() => deleteProduct(product)}>
                  {formatMessage({
                    id: intlConstants.actions.delete,
                  })}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={save} disabled={!canSave} aria-disabled={!canSave}>
        {formatMessage({
          id: intlConstants.actions.save,
        })}
      </button>
    </div>
  );
};
