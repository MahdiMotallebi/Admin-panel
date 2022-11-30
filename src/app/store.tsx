import { configureStore } from '@reduxjs/toolkit';
import adminSlice from '../features/slice';
export const store = configureStore({
  reducer: { adminSlice }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
