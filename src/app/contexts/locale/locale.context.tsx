// vendors
import { ReactNode, createContext, useContext, useMemo, useState } from 'react';
import { IntlProvider } from 'react-intl';
// constants
import { supportedLocales } from '@/app/intl/constants/locale.constants';
import messages from '@/app/intl/messages';
// types
import { LocaleContextValue } from './locale.context.types';

const LocaleContext = createContext<LocaleContextValue | null>(null);

export const LocaleContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [locale, setLocale] = useState<string>(supportedLocales[0]);

  const value = useMemo(
    () => ({ locale, setLocale, messages: messages[locale] }),
    [locale, setLocale]
  );

  return (
    <LocaleContext.Provider value={value}>
      <IntlProvider locale={locale} messages={value.messages}>
        {children}
      </IntlProvider>
    </LocaleContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useLocaleContextConsumer = (): LocaleContextValue => {
  const ctx = useContext(LocaleContext);

  if (!ctx) {
    throw new Error(
      'useLocaleContextConsumer must be used inside a LocaleContextProvider'
    );
  }

  return ctx;
};
