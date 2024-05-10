import { createSlice } from '@reduxjs/toolkit';

interface User {
  firstName: string;
  lastName: string;
  nickname: string;
  image: string;
  votedFeedbacks: (number | string)[];
}

const storedUser = localStorage.getItem('user');
const initialState: { user: User | null } = {
  user: storedUser ? JSON.parse(storedUser) : null,
};

const votesSlice = createSlice({
  name: 'votes',
  initialState,
  reducers: {
    toggleVote: (state, action) => {
      if (!state.user) return;

      const getIndex = state.user.votedFeedbacks.indexOf(action.payload);
      if (getIndex >= 0) state.user.votedFeedbacks.splice(getIndex, 1);
      else state.user.votedFeedbacks.push(action.payload);

      localStorage.setItem('user', JSON.stringify(state.user));
    },
  },
});

export const { toggleVote } = votesSlice.actions;
export default votesSlice.reducer;
