export const TMDB_API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMzBmMWFhNGM3ODYwMmVmNDc1OGY3NzI0M2MxOTI4ZCIsIm5iZiI6MTc0NTEyNTkwMy42MTIsInN1YiI6IjY4MDQ4MjBmNmUxYTc2OWU4MWVlMDUzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HUr4lYeOV_hP-FsLQaRSN6yWQZo4a6s7iz6SQ2qwVak'
  }
};

export const TMDB_IMG_BASE_URL = 'https://image.tmdb.org/t/p/w500';
export const TMDB_HERO_IMG_BASE = 'https://image.tmdb.org/t/p/original';

const TMDB_BASE = 'https://api.themoviedb.org/3';

export const API_ENDPOINTS = {
  popular: `${TMDB_BASE}/movie/popular?language=en-US&page=1`,
  trending: `${TMDB_BASE}/trending/all/week?language=en-US`,
  topRated: `${TMDB_BASE}/movie/top_rated?language=en-US&page=1`,
  action: `${TMDB_BASE}/discover/movie?include_adult=false&language=en-US&page=1&with_genres=28`,
  comedy: `${TMDB_BASE}/discover/movie?include_adult=false&language=en-US&page=1&with_genres=35`,
  horror: `${TMDB_BASE}/discover/movie?include_adult=false&language=en-US&page=1&with_genres=27`,
};
