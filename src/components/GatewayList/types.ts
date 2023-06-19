import { GatewayWithId } from '../../utils/schemas/GatewaySchema';

export interface GatewayListProps {
  data: Array<GatewayWithId>;
  onDetails: (gateway: GatewayWithId) => void;
  onDeleteModal: (id: string) => void;
  onEdit: (gateway: GatewayWithId) => void;
}
