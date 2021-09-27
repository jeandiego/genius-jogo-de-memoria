import { createSlice } from '@reduxjs/toolkit';

const LEADERBOARD_INITIAL_STATE = [];

const leaderboardSlice = createSlice({
  name: 'leaderboard',
  initialState: LEADERBOARD_INITIAL_STATE,
  reducers: {
    addUserScore: (state, action) => {
      state.push(action.payload);
      state.sort((a, b) => a.moves - b.moves);
    },
    clearLeaderboard: () => LEADERBOARD_INITIAL_STATE,
  },
});

export const { addUserScore } = leaderboardSlice.actions;

export const leaderboardReducer = leaderboardSlice.reducer;
