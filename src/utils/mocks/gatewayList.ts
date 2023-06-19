import { gateway } from './gateway';

export const gatewayList = [1, 2, 3, 4, 5, 6].map((num) => ({
  ...gateway,
  _id: num,
}));
