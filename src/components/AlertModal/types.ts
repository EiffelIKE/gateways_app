export interface AlerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  action: string;
  confirmText: string;
  alert: string;
}
