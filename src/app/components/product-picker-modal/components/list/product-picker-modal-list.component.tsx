// vendors
import { useIntl } from 'react-intl';
import { IconPlus } from '@tabler/icons-react';
// contexts
import { useProductPickerModalContextConsumer } from '../../context/product-picker-modal.context';
// constants
import intlConstants from '@/app/intl/constants/intl.constants';
// styles
import styles from './product-picker-modal-list.module.css';

export const ProductPickerModalList = () => {
  const { data, onAdd } = useProductPickerModalContextConsumer();

  const { formatMessage } = useIntl();

  return (
    <>
      {data?.data.map((product) => (
        <article className={styles.product}>
          <p>{product.name}</p>

          <button
            aria-label={`${formatMessage({ id: intlConstants.actions.add })} ${
              product.name
            }`}
            onClick={() =>
              onAdd({
                product,
                amount: 1,
              })
            }
          >
            <IconPlus aria-hidden="true" size={16} />
          </button>
        </article>
      ))}
    </>
  );
};
