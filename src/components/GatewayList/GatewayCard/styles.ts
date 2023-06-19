import { Skeleton } from '@chakra-ui/react';
import styled from 'styled-components';
import { fadeIn } from '../../../utils/animations';

export const Article = styled.article`
  min-height: 300px;
  width: 100%;
  ${fadeIn({ time: '1.5s' })}
`;

export const DeleteContainer = styled.div`
  width: 100%;
  display: flex;
  align-content: center;
  justify-content: center;
  gap: 5px;
`;

export const CardSkeleton = styled(Skeleton)`
  width: 100%;
  height: 100%;
`;
