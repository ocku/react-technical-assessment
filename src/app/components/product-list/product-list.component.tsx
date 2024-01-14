import { OrderAggregateModel } from '@/domain/aggregates/order.aggregate.model';
import { ProductModel } from '@/domain/models/product.model';
import { Dispatch, SetStateAction } from 'react';

export const ProductListComponent = ({
  products,
  setProducts,
}: {
  products: OrderAggregateModel['products'];
  setProducts: Dispatch<SetStateAction<OrderAggregateModel['products']>>;
}) => {
  const onChange = (product: ProductModel, amount: number) => {
    setProducts((oldProducts) => [
      ...oldProducts.filter(
        (oldProduct) => oldProduct.product.id !== product.id
      ),
      {
        amount,
        product,
      },
    ]);
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th scope="col">name</th>
            <th scope="col">price</th>
            <th scope="col">taxPercentage</th>
            <th scope="col">total</th>
            <th scope="col">amount</th>
          </tr>
        </thead>
        <tbody>
          {products.map(({ product, amount }) => (
            <tr>
              <th scope="row">{product.name}</th>
              <td>{product.price}</td>
              <td>{product.taxPercentage}</td>
              <td>
                {((product.price * product.taxPercentage) / 100) * amount}
              </td>
              <td>
                <input
                  onChange={(event) => {
                    onChange(product, event.target.valueAsNumber);
                  }}
                  defaultValue={amount}
                  type="number"
                ></input>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
