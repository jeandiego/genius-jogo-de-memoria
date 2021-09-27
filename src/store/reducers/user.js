import { createSlice } from '@reduxjs/toolkit';

const USER_INITIAL_STATE = {
  users: [],
  currentUser: {},
};

const userSlice = createSlice({
  name: 'user',
  initialState: USER_INITIAL_STATE,
  reducers: {
    addNewUser: (state, action) => {
      const createId = new Date().getTime();
      const newUser = { ...action.payload, id: createId };
      state.currentUser = newUser;
      state.users.push(newUser);
      state.users.sort((a, b) => b.id - a.id);
    },
    pickUser: (state, action) => {
      state.currentUser = action.payload;
    },
    clearUser: () => USER_INITIAL_STATE,
  },
});

export const { addNewUser, pickUser, clearUser } = userSlice.actions;

export const userReducer = userSlice.reducer;
