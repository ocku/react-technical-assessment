import { useLocaleContextConsumer } from '@/app/contexts/locale/locale.context';
import { supportedLocales } from '@/app/intl/constants/locale.constants';
import styles from './navigation.module.css';

export const NavigationComponent = () => {
  const { locale, setLocale } = useLocaleContextConsumer();

  return (
    <nav className={styles.navigation}>
      <b>Assessment</b>

      <select defaultValue={locale} onChange={(e) => setLocale(e.target.value)}>
        {supportedLocales.map((locale) => (
          <option value={locale}>{locale}</option>
        ))}
      </select>
    </nav>
  );
};
