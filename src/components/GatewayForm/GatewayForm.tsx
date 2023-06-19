/* eslint-disable react/jsx-props-no-spreading */
import {
  FormControl,
  FormLabel,
  Input,
  Flex,
  Button,
  Box,
  Card,
  FormHelperText,
  useColorModeValue,
  FormErrorMessage,
  IconButton,
  ButtonGroup,
  Text,
} from '@chakra-ui/react';
import { FC } from 'react';
import { FaPlus, FaTrash, FaSave } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Gateway, IGateway } from '../../utils/schemas/GatewaySchema';
import { TextControl } from '../Form/TextControl';
import { SelectControl } from '../Form/SelectControl';
import { options } from '../../utils/const';

export interface GatewayFormprops {
  goHome: () => void;
  isLoading: boolean;
  onSubmit: (data: IGateway) => void;
  defaultValues?: IGateway;
}

export const GatewayForm: FC<GatewayFormprops> = ({
  goHome,
  isLoading,
  onSubmit,
  defaultValues,
}) => {
  const cardBg = useColorModeValue('gray.200', 'gray.900');
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid, isDirty },
  } = useForm<IGateway>({
    defaultValues,
    resolver: zodResolver(Gateway),
    mode: 'onChange',
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'devices', // unique name for your Field Array
  });
  return (
    <Card padding={8} marginTop={8} backgroundColor={cardBg}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex direction="column" gap={5}>
          <ButtonGroup alignSelf="flex-end" gap={4}>
            <IconButton
              colorScheme="blue"
              icon={<FaSave />}
              fontSize={20}
              aria-label="Sabe gateway"
              padding={1}
              variant="solid"
              isDisabled={!isDirty || !isValid}
              type="submit"
              isLoading={isLoading}
            />
            <IconButton
              colorScheme="red"
              icon={<AiOutlineClose />}
              fontSize={20}
              aria-label="Sabe gateway"
              padding={1}
              variant="solid"
              onClick={() => goHome()}
            />
          </ButtonGroup>
          <TextControl
            error={!!errors.name}
            errorMessage={errors?.name && errors?.name.message}
            label="Name"
            name="name"
            helpText="Gateway Name"
            register={register}
          />
          <TextControl
            error={!!errors.ipv4}
            errorMessage={errors?.ipv4 && errors?.ipv4.message}
            label="IPv4"
            name="ipv4"
            helpText="Gateway IPv4"
            register={register}
          />
          <TextControl
            error={!!errors.serialNumber}
            errorMessage={errors?.serialNumber && errors?.serialNumber.message}
            label="Serial number"
            name="serialNumber"
            helpText="Gateway unique serial number"
            register={register}
          />
          <Box display="flex" justifyContent="center" alignContent="center">
            {fields.length < 10 ? (
              <Button
                fontSize={14}
                rightIcon={<FaPlus />}
                aria-label="Add Device"
                padding={1}
                variant="ghost"
                onClick={() =>
                  append({
                    uid: 0,
                    status: 'offline',
                    vendor: '',
                  })
                }
              >
                Devices
              </Button>
            ) : (
              <Text fontSize={14}>Details</Text>
            )}
          </Box>
          {fields.map((field, index) => {
            return (
              <Flex
                key={field.id}
                padding={5}
                direction="column"
                border="1px"
                borderRadius={10}
                borderColor="gray.400"
                gap="20px"
              >
                <Flex width="100%" justifyContent="space-between">
                  <FormLabel fontSize={14}>{`Device ${index + 1}:`}</FormLabel>
                  <IconButton
                    fontSize={16}
                    icon={<FaTrash />}
                    aria-label="Delete Device"
                    padding={1}
                    variant="ghost"
                    onClick={() => remove(index)}
                  />
                </Flex>
                <FormControl
                  borderColor="gray.400"
                  isInvalid={errors?.devices && !!errors?.devices[index]?.uid}
                >
                  <FormLabel fontSize={18}>Uid:</FormLabel>
                  <Input
                    type="text"
                    {...register(`devices.${index}.uid`, {
                      valueAsNumber: true,
                    })}
                  />
                  {errors?.devices && !errors?.devices[index]?.uid ? (
                    <FormHelperText>Device UID</FormHelperText>
                  ) : (
                    <FormErrorMessage>
                      {errors?.devices && errors?.devices[index].uid?.message}
                    </FormErrorMessage>
                  )}
                </FormControl>
                <SelectControl
                  label="Status:"
                  name={`devices.${index}.status`}
                  error={errors?.devices && !!errors?.devices[index]?.status}
                  register={register}
                  helpText="Device connection status"
                  errorMessage={
                    errors?.devices && errors?.devices[index]?.status.message
                  }
                  options={options}
                />
                <TextControl
                  error={errors?.devices && !!errors?.devices[index]?.vendor}
                  errorMessage={
                    errors?.devices && errors?.devices[index]?.vendor.message
                  }
                  label="Vendor:"
                  name={`devices.${index}.vendor`}
                  helpText="Device vendor details"
                  register={register}
                />
              </Flex>
            );
          })}
        </Flex>
      </form>
    </Card>
  );
};
