import * as z from 'zod';
import { DeviceSchema } from './DeviceSchema';
import { ipv4Validator, blankSpaceValidator } from '../validators';

export const Gateway = z.object({
  serialNumber: z
    .string()
    .min(1)
    .nonempty('This Field is required')
    .refine((value) => blankSpaceValidator(value), 'No blank spaces'),
  name: z.string().min(1, 'This Field is required').nonempty(),
  ipv4: z
    .string()
    .nonempty('This Field is required')
    .refine((value) => ipv4Validator(value), 'Invalid IPv4 address'),
  devices: z.array(DeviceSchema).max(10, 'Only 10 devices per gateway'),
});

export type IGateway = z.infer<typeof Gateway>;
export interface GatewayWithId extends IGateway {
  _id: string;
}
