// vendors
import { useIntl } from 'react-intl';
import { IconPlus } from '@tabler/icons-react';
// domain
import { OrderAggregateProductModel } from '@/domain/aggregates/order.aggregate.model';
// components
import { ProductPickerModal } from '@/app/components/product-picker-modal/product-picker-modal.component';
import { OrderProductForm } from '@/app/components/order-product-form/order-product-form.component';
// hooks
import { useCreateOrderContent } from './hooks/use-create-order-content.hook';
// constants
import intlConstants from '@/app/intl/constants/intl.constants';
// styles
import layoutStyles from '@/app/styles/layout.module.css';

export const EditOrderContent = ({
  onSave,
}: {
  onSave: (products: OrderAggregateProductModel[]) => void;
}) => {
  const {
    products,
    modalOpen,
    openModal,
    closeModal,
    addProduct,
    deleteProduct,
  } = useCreateOrderContent();

  const { formatMessage } = useIntl();

  return (
    <>
      <header>
        <hgroup>
          <h1>{formatMessage({ id: intlConstants.updateOrder.title })}</h1>
          <p>{formatMessage({ id: intlConstants.updateOrder.description })}</p>
        </hgroup>
      </header>

      <main>
        <div className={layoutStyles.group}>
          <h2>
            {formatMessage({
              id: intlConstants.products.title,
            })}
          </h2>
          <button
            onClick={openModal}
            aria-label={`${intlConstants.actions.add} ${intlConstants.products.title}`}
          >
            <IconPlus size={16} />
          </button>
        </div>

        <ProductPickerModal
          omit={products}
          onAdd={addProduct}
          onClose={closeModal}
          open={modalOpen}
        />

        <OrderProductForm
          products={products}
          setProducts={onSave}
          deleteProduct={deleteProduct}
        />
      </main>
    </>
  );
};
