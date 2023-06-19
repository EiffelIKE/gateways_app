import { ReactNode } from 'react';

export interface NavLinkProp {
  aria: string;
  href: string;
  icon: ReactNode;
  description?: string;
}
