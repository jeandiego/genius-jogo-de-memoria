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
      // if (state.users.length > 0) {
      //   state.users.sort((a, b) => a.user - b.user);
      // }
    },
    pickUser: (state, action) => {
      console.log(action.payload);
      state.currentUser = action.payload;
    },
    clearUser: () => USER_INITIAL_STATE,
  },
});

export const { addNewUser, pickUser, clearUser } = userSlice.actions;

export const userReducer = userSlice.reducer;
