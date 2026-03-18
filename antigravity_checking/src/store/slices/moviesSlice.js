import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API_ENDPOINTS, TMDB_API_OPTIONS } from '../../utils/constants';

const fetchCategory = async (url) => {
  const response = await fetch(url, TMDB_API_OPTIONS);
  if (!response.ok) throw new Error('Failed to fetch from TMDB');
  const data = await response.json();
  return data.results;
};

// Async Thunks
export const fetchPopular = createAsyncThunk('movies/fetchPopular', async () => fetchCategory(API_ENDPOINTS.popular));
export const fetchTrending = createAsyncThunk('movies/fetchTrending', async () => fetchCategory(API_ENDPOINTS.trending));
export const fetchTopRated = createAsyncThunk('movies/fetchTopRated', async () => fetchCategory(API_ENDPOINTS.topRated));
export const fetchActionMovies = createAsyncThunk('movies/fetchAction', async () => fetchCategory(API_ENDPOINTS.action));
export const fetchComedyMovies = createAsyncThunk('movies/fetchComedy', async () => fetchCategory(API_ENDPOINTS.comedy));
export const fetchHorrorMovies = createAsyncThunk('movies/fetchHorror', async () => fetchCategory(API_ENDPOINTS.horror));

const initialState = {
  popular: { items: [], status: 'idle', error: null },
  trending: { items: [], status: 'idle', error: null },
  topRated: { items: [], status: 'idle', error: null },
  action: { items: [], status: 'idle', error: null },
  comedy: { items: [], status: 'idle', error: null },
  horror: { items: [], status: 'idle', error: null },
};

const setupBuilderCase = (builder, thunk, key) => {
  builder
    .addCase(thunk.pending, (state) => { state[key].status = 'loading'; })
    .addCase(thunk.fulfilled, (state, action) => {
      state[key].status = 'succeeded';
      state[key].items = action.payload;
    })
    .addCase(thunk.rejected, (state, action) => {
      state[key].status = 'failed';
      state[key].error = action.error.message;
    });
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    setupBuilderCase(builder, fetchPopular, 'popular');
    setupBuilderCase(builder, fetchTrending, 'trending');
    setupBuilderCase(builder, fetchTopRated, 'topRated');
    setupBuilderCase(builder, fetchActionMovies, 'action');
    setupBuilderCase(builder, fetchComedyMovies, 'comedy');
    setupBuilderCase(builder, fetchHorrorMovies, 'horror');
  },
});

export default moviesSlice.reducer;
