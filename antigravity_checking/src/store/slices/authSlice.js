import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  user: null, // { name: string, email: string, isGuest: boolean }
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload; // e.g., { name: 'John Doe', email: 'john@example.com', isGuest: false }
    },
    loginAsGuest: (state) => {
      state.isAuthenticated = true;
      state.user = { name: 'Guest User', email: 'guest@antigravity.tv', isGuest: true };
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const { login, loginAsGuest, logout } = authSlice.actions;
export default authSlice.reducer;
