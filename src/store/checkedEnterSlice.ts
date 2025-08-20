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
    findExample(state) {
      console.log('this is action', state);
    },
    setStatusEnter(state, action: PayloadAction<number>) {
      state.statusEnter = action.payload;
    },
  },
});

export default sliceCheckedFormData.reducer;
export const { findExample, setStatusEnter } = sliceCheckedFormData.actions;
