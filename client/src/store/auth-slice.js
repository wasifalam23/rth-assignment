import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: undefined,
  isCandDeleted: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsLoggedIn(state, action) {
      state.isLoggedIn = action.payload;
    },

    candDeleted(state) {
      state.isCandDeleted = !state.isCandDeleted;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice;
