import { configureStore } from '@reduxjs/toolkit';
import modalWindowReducer from './slices/modalWindowSlice';

export const store = configureStore({
  reducer: {
    modalWindow: modalWindowReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
