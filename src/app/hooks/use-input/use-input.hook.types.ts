import { ChangeEvent } from 'react';

export type UseInputHookValue<T> = {
  value: T;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};
