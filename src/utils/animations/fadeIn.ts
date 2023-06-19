import { css, keyframes } from 'styled-components';

const fadeInKeyFrames = keyframes`
  from {
    filter: blur(3px);
    opacity: 0;
  }
  to {
    filter: blur(0);
    opacity: 1;
  }
`;

export const fadeIn = ({
  time = '1s',
  type = 'ease',
}: {
  time?: string;
  type?: string;
}) => css`
  animation: ${fadeInKeyFrames} ${time} ${type};
`;