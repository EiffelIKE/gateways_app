import { Image } from '@chakra-ui/react';
import styled from 'styled-components';
import { fadeIn } from '../../utils/animations';

export const RocketImg = styled(Image)`
  ${fadeIn({ time: '1.5s' })}
  width: 100px;
  border-radius: 50%;
  objet-fit: 'cover';
  box-shadow: 0 5px 15px -8px rgba(0, 0, 0, 0.24),
    0 8px 10px -5px rgba(0, 0, 0, 0.2);
`;
