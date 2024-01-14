// vendors
import { useIntl } from 'react-intl';
import { IconPlus } from '@tabler/icons-react';
// components
import { ProductPickerModal } from '@/app/components/product-picker-modal/product-picker-modal.component';
import { OrderProductForm } from '@/app/components/order-product-form/order-product-form.component';
// hooks
import { useEditOrderContent } from './hooks/use-edit-order-content.hook';
// constants
import intlConstants from '@/app/intl/constants/intl.constants';
// styles
import layoutStyles from '@/app/styles/layout.module.css';

export const EditOrderContent = () => {
  const {
    products,
    modalOpen,
    openModal,
    closeModal,
    addProduct,
    deleteOrder,
    deleteProduct,
    save,
  } = useEditOrderContent();

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
          setProducts={save}
          deleteProduct={deleteProduct}
        />

        <div className={layoutStyles.group}>
          <button
            onClick={deleteOrder}
            aria-label={`${formatMessage({
              id: intlConstants.actions.delete,
            })} ${formatMessage({
              id: intlConstants.actions.delete,
            })}`}
          >
            {formatMessage({
              id: intlConstants.actions.delete,
            })}
          </button>
        </div>
      </main>
    </>
  );
};
