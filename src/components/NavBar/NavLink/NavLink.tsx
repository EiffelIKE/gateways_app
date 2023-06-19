import { FC } from 'react';
import { Button, Flex, Link, Text } from '@chakra-ui/react';

import type { NavLinkProp } from './types';

export const NavLink: FC<NavLinkProp> = ({ aria, href, icon, description }) => {
  return (
    <Flex alignItems="center" gap={4}>
      <Button aria-label={aria} fontSize={28} variant="ghost" p={0}>
        <Link target="_blank" href={href}>
          {icon}
        </Link>
      </Button>
      {!!description && (
        <Text fontSize={20} fontWeight={600}>
          {description}
        </Text>
      )}
    </Flex>
  );
};
