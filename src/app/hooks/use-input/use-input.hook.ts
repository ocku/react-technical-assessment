import { ChangeEvent, useState } from 'react';
import { UseInputHookValue } from './use-input.hook.types';

export const useInput = <T>({
  initialValue,
}: {
  initialValue: T;
}): UseInputHookValue<T> => {
  const [value, setValue] = useState<T>(initialValue);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value as T);
  };

  return {
    value,
    onChange,
  };
};
