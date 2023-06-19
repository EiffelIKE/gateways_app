import { ReactNode } from 'react';
import { IGateway } from '../../../utils/schemas/GatewaySchema';

export interface GatewayCardProps extends IGateway {
  onDetails: () => void;
  onDelete: () => void;
  onEdit: () => void;
  index: number;
}

export type FlexDirection = 'row' | 'column';

export interface CardContainerProps {
  children: ReactNode;
}
