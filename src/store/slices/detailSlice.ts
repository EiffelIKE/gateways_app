/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { GatewayWithId } from '../../utils/schemas/GatewaySchema';
import type { RootState } from '../store';

interface InitialStateProps {
  data: GatewayWithId;
}

export const initialState: InitialStateProps = {
  data: {
    _id: '',
    name: '',
    ipv4: '',
    serialNumber: '',
    devices: [],
  },
};

const detailSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {
    setDetails: (state, { payload }: PayloadAction<GatewayWithId>) => {
      state.data = payload;
    },
  },
});

export const { setDetails } = detailSlice.actions;
export default detailSlice.reducer;
export const selectDetails = (state: RootState) => state.details.data;
