/* eslint-disable react/no-array-index-key */
// we can use index here since we arent changing the devices
import { Device } from '../../utils/schemas/DeviceSchema';
import { DeviceCard } from './DeviceCard/DeviceCard';

export const DeviceCardList = ({ devices }: { devices: Array<Device> }) => {
  return devices.map((device, index) => {
    return <DeviceCard key={index} device={device} index={index + 1} />;
  });
};
