import * as z from 'zod';

export const DeviceSchema = z.object({
  uid: z.number().min(1, 'This Field is required'),
  vendor: z
    .string()
    .min(1, 'This Field is required')
    .nonempty('This Field is required'),
  created_at: z.string().optional(),
  status: z.string().refine((value) => {
    return value === 'offline' || value === 'online';
  }, 'Invalid status value'),
});

export const DeviceArrSchema = z.object({
  devices: z.array(DeviceSchema),
});

export type DeviceArr = z.infer<typeof DeviceArrSchema>;

export type Device = z.infer<typeof DeviceSchema>;
