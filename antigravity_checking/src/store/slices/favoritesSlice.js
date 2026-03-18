import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    items: [],
  },
  reducers: {
    toggleFavorite: (state, action) => {
      const movie = action.payload;
      const index = state.items.findIndex((item) => item.id === movie.id);
      
      if (index >= 0) {
        // Remove if it exists
        state.items.splice(index, 1);
      } else {
        // Add if it doesn't
        state.items.push(movie);
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
