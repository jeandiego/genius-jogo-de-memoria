import { createSlice } from '@reduxjs/toolkit';

const GAME_INITIAL_STATE = {
  cards: [],
  firstCard: null,
  secondCard: null,
  lockedMode: false,
  moves: 0,
};

const gameSlice = createSlice({
  name: 'game',
  initialState: GAME_INITIAL_STATE,
  reducers: {
    setCardsOnScreen: (state, action) => {
      state.cards = action.payload;
    },
    setCard: (state, action) => {
      const newCards = state.cards.map((item) => ({
        ...item,
        shown: item.id === action.payload ? true : item.shown,
      }));

      state.cards = newCards;

      const cardsFiltered = state.cards.find(
        (card) => card.id === action.payload,
      );

      if (!state.firstCard) {
        state.firstCard = cardsFiltered;
      } else {
        state.secondCard = cardsFiltered;
        state.lockedMode = true;
      }
    },
    clearCards: (state, action) => {
      if (!action.payload) {
        state.cards = state.cards.map((item) => ({
          ...item,
          shown:
            item.id === state.firstCard.id || item.id === state.secondCard.id
              ? false
              : item.shown,
        }));
      }
      state.firstCard = null;
      state.secondCard = null;
      state.lockedMode = false;
    },
    addMoves: (state) => {
      state.moves += 1;
    },
    clearGame: () => GAME_INITIAL_STATE,
  },
});

export const { setCardsOnScreen, setCard, addMoves, clearCards, clearGame } =
  gameSlice.actions;

export const gameReducer = gameSlice.reducer;
