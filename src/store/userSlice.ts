import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICheckedFormDataState } from '../types';

const initialState: ICheckedFormDataState = {
  email: null,
  token: null,
  id: null,
};

export const sliceCheckedFormData = createSlice({
  name: 'userAuth',
  initialState,

  reducers: {
    setUser(state, action) {
      state.email = action.payload;
      state.token = action.payload;
      state.id = action.payload;
    },
    removeUser(state, action: PayloadAction<number>) {
      state.email = action.payload;
      state.token = action.payload;
      state.id = action.payload;
    },
  },
});

export default sliceCheckedFormData.reducer;
export const { setUser, removeUser } = sliceCheckedFormData.actions;
