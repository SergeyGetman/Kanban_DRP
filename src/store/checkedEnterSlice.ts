import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICheckedFormDataState } from '../types';

const initialState: ICheckedFormDataState = {
  statusEnter: 0,
  statusView: false,
};

export const sliceCheckedFormData = createSlice({
  name: 'pageEntered',
  initialState,

  reducers: {
    changeVisibly(state) {
      state.statusView = !state.statusView;
    },
    setStatusEnter(state, action: PayloadAction<number>) {
      state.statusEnter = action.payload;
    },
  },
});

export default sliceCheckedFormData.reducer;
export const { changeVisibly } = sliceCheckedFormData.actions;
