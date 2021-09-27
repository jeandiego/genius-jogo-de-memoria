import { createSlice } from '@reduxjs/toolkit';

const REGION_INITIAL_STATE = {
  region: 'ptBR',
};

const regionSlice = createSlice({
  name: 'region',
  initialState: REGION_INITIAL_STATE,
  reducers: {
    selectRegion: (state, action) => {
      state.region = action.payload;
    },
  },
});

export const { selectRegion } = regionSlice.actions;

export const regionReducer = regionSlice.reducer;
