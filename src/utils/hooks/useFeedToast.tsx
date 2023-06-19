import { useToast } from '@chakra-ui/react';

interface ToastProp {
  title: string;
  description: string;
  status?: 'info' | 'warning' | 'success' | 'error' | 'loading';
}

export const useFeedToast = () => {
  const toast = useToast();

  const showToast = ({ title, description, status }: ToastProp) => {
    toast({
      title,
      description,
      status: status || 'success',
      duration: 5000,
      isClosable: true,
      position: 'top-right',
    });
  };
  return showToast;
};
