import { Box } from '@chakra-ui/react';
import styled from 'styled-components';
import { fadeIn } from '../../utils/animations';

export const NavContainer = styled(Box)`
  ${fadeIn({})};

  transition: top ease 0.5s;
  &.nav_hidden {
    transition: top ease 0.5s;
  }
`;
