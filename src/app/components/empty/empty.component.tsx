// vendors
import { useIntl } from 'react-intl';
// styles
import styles from './empty.module.css';
// constnts
import intlConstants from '@/app/intl/constants/intl.constants';

export const Empty = () => {
  const { formatMessage } = useIntl();

  return (
    <section className={styles.wrapper} role="alert" aria-live="polite">
      <h2>
        {formatMessage({
          id: intlConstants.empty.title,
        })}
      </h2>
      <p>
        {formatMessage({
          id: intlConstants.empty.description,
        })}
      </p>
    </section>
  );
};
