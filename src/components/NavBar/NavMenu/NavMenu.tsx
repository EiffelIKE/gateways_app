import { Flex, useColorMode, useDisclosure } from '@chakra-ui/react';
import { useBreakPoints } from '../../../utils/hooks';
import { ThemeButton } from '../../ThemeButton';
import { DrawerRigth } from '../../DrawerRigth';
import { NavButtons } from '../NavButtons';
import { MenuButton } from '../../MenuButton';

export const NavMenu = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { moreThanMd } = useBreakPoints();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex alignItems="center">
      {moreThanMd ? (
        <NavButtons moreThanMd={moreThanMd}>
          <ThemeButton
            toggleColorMode={toggleColorMode}
            colorMode={colorMode}
          />
        </NavButtons>
      ) : (
        <>
          <MenuButton onOpen={onOpen} />
          <DrawerRigth isOpen={isOpen} onClose={onClose}>
            <NavButtons moreThanMd={moreThanMd}>
              <ThemeButton
                toggleColorMode={toggleColorMode}
                colorMode={colorMode}
                showTheme
              />
            </NavButtons>
          </DrawerRigth>
        </>
      )}
    </Flex>
  );
};
