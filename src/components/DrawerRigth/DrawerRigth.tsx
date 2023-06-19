import { FC } from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react';
import { NavLogo } from '../NavBar/NavLogo';
import type { DrawerProps } from './types';

export const DrawerRigth: FC<DrawerProps> = ({ isOpen, onClose, children }) => {
  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>
          <NavLogo colorScheme="blue" logoTitle="Menu" />
        </DrawerHeader>
        <DrawerBody>{children}</DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
