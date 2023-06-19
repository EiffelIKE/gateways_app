import { Stack } from '@chakra-ui/react';
import { SkeletonCard } from './GatewayCard/SkeletonCard';

export const SkeletonList = () => {
  return (
    <Stack
      spacing={8}
      direction="row"
      wrap="wrap"
      alignContent="center"
      justifyContent="center"
    >
      {[1, 2, 3, 4, 5, 6, 7].map((num) => {
        return <SkeletonCard key={num} />;
      })}
    </Stack>
  );
};
