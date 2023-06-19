import { Flex, useColorModeValue } from '@chakra-ui/react';
import classNames from 'classnames';
import { NavLogo } from './NavLogo';
import { NavMenu } from './NavMenu';
import { NavContainer } from './styles';
import { useScrollNav } from '../../utils/hooks';

export const NavBar = () => {
  const { isTop } = useScrollNav();
  const navBg = useColorModeValue('gray.200', 'blue.900');

  return (
    <header>
      <NavContainer
        px={8}
        className={classNames({ nav_hidden: !isTop })}
        top={isTop ? 0 : -40}
        position="fixed"
        bg={navBg}
        w="100vw"
        zIndex={1000}
      >
        <Flex h={20} alignItems="center" justifyContent="space-between">
          <NavLogo colorScheme="blue" logoTitle="Gateways" />
          <NavMenu />
        </Flex>
      </NavContainer>
    </header>
  );
};
