import { useMemo } from 'react';

export const useUUID = () => {
  return useMemo(() => self.crypto.randomUUID(), []);
};
