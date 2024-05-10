import { configureStore } from '@reduxjs/toolkit';
import modalWindowReducer from './slices/modalWindowSlice';
import sortReducer from './slices/sortSlice';
import votesSlice from './slices/votesSlice';

export const store = configureStore({
  reducer: {
    modalWindow: modalWindowReducer,
    sortBy: sortReducer,
    votes: votesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
