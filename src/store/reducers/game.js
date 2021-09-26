import { createSlice } from '@reduxjs/toolkit';

const GAME_INITIAL_STATE = {
  cards: [],
  moves: 0,
};

const gameSlice = createSlice({
  name: 'game',
  initialState: GAME_INITIAL_STATE,
  reducers: {
    setCards: (state, action) => {
      state.cards = action.payload;
    },
    setCardStatus: (state, action) => {
      const newCards = state.cards.map((item) => ({
        ...item,
        status: item.id === action.payload ? 'shown' : item.status,
      }));

      state.cards = newCards;
    },
    clearGame: () => GAME_INITIAL_STATE,
  },
});

export const { setCards, setCardStatus, clearGame } = gameSlice.actions;

export const gameReducer = gameSlice.reducer;
