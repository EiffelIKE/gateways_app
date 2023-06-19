import { useMediaQuery } from '@chakra-ui/react';

export const useBreakPoints = () => {
  const [moreThanMd] = useMediaQuery('(min-width: 768px)');
  const [moreThanXs] = useMediaQuery('(min-width: 480px)');
  const [moreThanXl] = useMediaQuery('(min-width: 1280px)');

  return { moreThanMd, moreThanXl, moreThanXs };
};

//  sm: '30em', // 480px
// md: '48em', // 768px
// xl: '80em', // 1280px
