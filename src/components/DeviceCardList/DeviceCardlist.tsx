import { Device } from '../../utils/schemas/DeviceSchema';
import { DeviceCard } from './DeviceCard/DeviceCard';

export const DeviceCardList = ({ devices }: { devices: Array<Device> }) => {
  return devices.map((device, index) => {
    return <DeviceCard key={device.uid} device={device} index={index + 1} />;
  });
};
