import { combineReducers, configureStore } from '@reduxjs/toolkit';
import globalSlice from './checkedEnterSlice';
import authUser from './userSlice';

const rootReducer = combineReducers({
  globalState: globalSlice,
  authUser: authUser,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
