import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 'Most votes',
  filter: 'All',
};

const sortSlice = createSlice({
  name: 'sortBy',
  initialState,
  reducers: {
    setValue: (state, action) => {
      state.value = action.payload;
    },

    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { setValue, setFilter } = sortSlice.actions;
export default sortSlice.reducer;
