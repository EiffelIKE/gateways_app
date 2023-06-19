/* eslint-disable react/jsx-props-no-spreading */
import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  FormErrorMessage,
} from '@chakra-ui/react';
import { FC } from 'react';
import type { TextControlProps } from './types';

export const TextControl: FC<TextControlProps> = ({
  errorMessage,
  error,
  name,
  register,
  label,
  helpText,
}) => {
  return (
    <FormControl borderColor="gray.400" isInvalid={error}>
      <FormLabel fontSize={18}>{label}</FormLabel>
      <Input type="text" {...register(name)} />
      {!error ? (
        <FormHelperText>{helpText}</FormHelperText>
      ) : (
        <FormErrorMessage>{errorMessage}.</FormErrorMessage>
      )}
    </FormControl>
  );
};
