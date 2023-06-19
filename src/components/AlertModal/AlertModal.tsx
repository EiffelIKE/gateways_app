/* eslint-disable @typescript-eslint/no-explicit-any */
// Focusable type not accesibble
import { useRef, FC } from 'react';
import {
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  Button,
} from '@chakra-ui/react';

import type { AlerModalProps } from './types';

export const AlertModal: FC<AlerModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  action,
  confirmText,
  alert,
}) => {
  const cancelRef = useRef<any>();

  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
      closeOnOverlayClick={false}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            {action}
          </AlertDialogHeader>

          <AlertDialogBody>{alert}</AlertDialogBody>

          <AlertDialogFooter>
            <Button ref={cancelRef} colorScheme="blue" onClick={onClose}>
              Cancel
            </Button>
            <Button
              colorScheme="red"
              onClick={() => {
                onClose();
                onConfirm();
              }}
              ml={3}
            >
              {confirmText}
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};
