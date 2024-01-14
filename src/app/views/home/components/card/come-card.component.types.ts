// vendors
import { ReactNode } from 'react';

export type HomeCardProps = {
  icon: ReactNode;
  title: string;
  subtitle: string;
  anchor: {
    to: string;
    ariaLabel?: string;
  };
};
