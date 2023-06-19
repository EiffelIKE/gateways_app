/* eslint-disable react/jsx-props-no-spreading */
import {
  FormControl,
  FormLabel,
  Select,
  FormHelperText,
  FormErrorMessage,
} from '@chakra-ui/react';
import { FC } from 'react';

import type { SelectControlProps } from './types';

export const SelectControl: FC<SelectControlProps> = ({
  error,
  label,
  register,
  name,
  options,
  helpText,
  errorMessage,
}) => {
  return (
    <FormControl borderColor="gray.400" isInvalid={error}>
      <FormLabel fontSize={18}>{label}</FormLabel>
      <Select
        placeholder="Select status"
        borderColor="gray.400"
        {...register(name)}
      >
        {options.map((option) => {
          return (
            <option key={option.id} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </Select>
      {error ? (
        <FormHelperText>{helpText}</FormHelperText>
      ) : (
        !!errorMessage && <FormErrorMessage>{errorMessage}</FormErrorMessage>
      )}
    </FormControl>
  );
};
