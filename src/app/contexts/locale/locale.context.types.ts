import { Dispatch, SetStateAction } from 'react';

export type LocaleContextValue = {
  locale: string;
  setLocale: Dispatch<SetStateAction<string>>;
  messages: Record<string, string>;
};
