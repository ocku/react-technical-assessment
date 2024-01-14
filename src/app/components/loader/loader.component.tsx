// components
import { IconLoader } from '@tabler/icons-react';
// styles
import styles from './loader.module.css';
// constants
import intlConstants from '@/app/intl/constants/intl.constants';

export const Loader = () => (
  <section className={styles.wrapper} role="alert" aria-live="polite">
    <IconLoader aria-label={intlConstants.loader.message} />
  </section>
);
