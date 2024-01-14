// vendors
import { useIntl } from 'react-intl';
// styles
import styles from './error.module.css';
// constants
import intlConstants from '@/app/intl/constants/intl.constants';

export const Error = ({ retry }: { retry?: () => void }) => {
  const { formatMessage } = useIntl();

  return (
    <section className={styles.wrapper} role="alert" aria-live="polite">
      <h2>
        {formatMessage({
          id: intlConstants.error.title,
        })}
      </h2>
      <p>
        {formatMessage({
          id: intlConstants.error.description,
        })}
      </p>
      {retry && (
        <button onClick={retry}>
          {formatMessage({
            id: intlConstants.error.retry,
          })}
        </button>
      )}
    </section>
  );
};
