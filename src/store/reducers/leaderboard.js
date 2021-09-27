import { createSlice } from '@reduxjs/toolkit';

const LEADERBOARD_INITIAL_STATE = {
  data: [],
};

const leaderboardSlice = createSlice({
  name: 'leaderboard',
  initialState: LEADERBOARD_INITIAL_STATE,
  reducers: {
    addUserScore: (state, action) => {
      const bestScore = state.data.find(
        (item) => item.id === action.payload.id,
      );

      if (!bestScore) {
        state.data.push(action.payload);
        state.data.sort((a, b) => a.moves - b.moves);
      } else if (action.payload.moves < bestScore.moves) {
        const newLeaderboard = state.data.filter(
          (item) => item.id !== action.payload.id,
        );

        newLeaderboard.push(action.payload);
        newLeaderboard.sort((a, b) => a.moves - b.moves);

        state.data = newLeaderboard;
      }

      // state.push(action.payload);
      //
    },
    clearLeaderboard: () => LEADERBOARD_INITIAL_STATE,
  },
});

export const { addUserScore } = leaderboardSlice.actions;

export const leaderboardReducer = leaderboardSlice.reducer;
