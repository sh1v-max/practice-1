import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './slices/moviesSlice';
import authReducer from './slices/authSlice';
import favoritesReducer from './slices/favoritesSlice';

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    auth: authReducer,
    favorites: favoritesReducer,
  },
});
