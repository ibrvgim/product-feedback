import { configureStore } from '@reduxjs/toolkit';
import modalWindowReducer from './slices/modalWindowSlice';
import sortReducer from './slices/sortSlice';

export const store = configureStore({
  reducer: {
    modalWindow: modalWindowReducer,
    sortBy: sortReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
