// vendors
import { useId } from 'react';
import { useIntl } from 'react-intl';
import { IconX } from '@tabler/icons-react';
// domain
import { ProductPickerModalOrchestrator } from './components/orchestrator/product-picker-modal.orchestrator.component';
import { OrderAggregateProductModel } from '@/domain/aggregates/order.aggregate.model';
// components
import { ProductPickerModalInput } from './components/input/product-picker-modal-input.component';
// contexts
import { ProductPickerModalContextProvider } from './context/product-picker-modal.context';
// styles
import styles from './product-picker-modal.module.css';
import intlConstants from '@/app/intl/constants/intl.constants';

export const ProductPickerModal = (props: {
  omit: OrderAggregateProductModel[];
  onAdd: (products: OrderAggregateProductModel) => void;
  onClose: () => void;
  open: boolean;
}) => {
  const { formatMessage } = useIntl();
  const id = useId();

  return (
    <dialog id={id} open={props.open} className={styles.dialog}>
      <ProductPickerModalContextProvider {...props}>
        <ProductPickerModalInput />
        <ProductPickerModalOrchestrator />
      </ProductPickerModalContextProvider>
      <button
        aria-controls={id}
        onClick={props.onClose}
        className={styles.close}
        aria-label={formatMessage({ id: intlConstants.actions.close })}
      >
        <IconX aria-hidden="true" size={16} />
      </button>
    </dialog>
  );
};
