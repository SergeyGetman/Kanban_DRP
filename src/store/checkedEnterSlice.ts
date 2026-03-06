import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ICheckedFormDataState {
  email: null;
  token: null;
  id: null;
  statusView: boolean;
  statusEnter: number;
}

const initialState: ICheckedFormDataState = {
  email: null,
  token: null,
  id: null,
  statusView: false,
  statusEnter: 0,
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
export const { changeVisibly, setStatusEnter } = sliceCheckedFormData.actions;
