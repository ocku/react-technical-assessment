// vendors
import { useIntl } from 'react-intl';
// components
import { IconBox, IconPackages } from '@tabler/icons-react';
import { HomeCard } from './components/card/home-card.component';
// styles
import styles from './home.module.css';
// translations
import intlConstants from '@/app/intl/constants/intl.constants';

export const HomeView = () => {
  const { formatMessage } = useIntl();

  return (
    <>
      <header>
        <hgroup>
          <h1>{formatMessage({ id: intlConstants.home.title })}</h1>
          <p>{formatMessage({ id: intlConstants.home.description })}</p>
        </hgroup>
      </header>

      <main className={styles.main}>
        <HomeCard
          icon={<IconBox />}
          title={formatMessage({ id: intlConstants.products.title })}
          subtitle={formatMessage({ id: intlConstants.products.description })}
          anchor={{ to: '/products' }}
        />

        <HomeCard
          icon={<IconPackages />}
          title={formatMessage({ id: intlConstants.orders.title })}
          subtitle={formatMessage({ id: intlConstants.orders.description })}
          anchor={{ to: '/orders' }}
        />
      </main>
    </>
  );
};
