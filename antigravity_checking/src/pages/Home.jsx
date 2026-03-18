import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
  fetchPopular, fetchTrending, fetchTopRated, 
  fetchActionMovies, fetchComedyMovies, fetchHorrorMovies 
} from '../store/slices/moviesSlice';
import MovieRow from '../components/MovieRow';
import { TMDB_HERO_IMG_BASE } from '../utils/constants';
import { Info, Play } from 'lucide-react';

const Home = () => {
  const dispatch = useDispatch();
  const { popular, trending, topRated, action, comedy, horror } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchTrending());
    dispatch(fetchPopular());
    dispatch(fetchTopRated());
    dispatch(fetchActionMovies());
    dispatch(fetchComedyMovies());
    dispatch(fetchHorrorMovies());
  }, [dispatch]);

  // Featured Hero Movie
  const heroMovie = trending.items?.length > 0 ? trending.items[0] : null;

  return (
    <main className="min-h-screen pb-20">
      {/* Hero Section */}
      <div className="relative w-full h-[75vh] md:h-[85vh] lg:h-[90vh] bg-[#070514]">
        {heroMovie ? (
          <>
            <div className="absolute inset-0">
              <img 
                src={`${TMDB_HERO_IMG_BASE}${heroMovie.backdrop_path || heroMovie.poster_path}`}
                alt={heroMovie.title}
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070514] via-[#070514]/40 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#070514] via-[#070514]/50 to-transparent" />
            </div>
            
            <div className="relative z-10 h-full flex items-center px-6 sm:px-12 xl:px-20 pt-20">
              <div className="max-w-2xl lg:max-w-3xl animate-in fade-in slide-in-from-bottom-10 duration-1000">
                <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-bold text-gray-200 tracking-wider uppercase border border-white/20 mb-4 inline-block">
                  #1 in Trending
                </span>
                <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-tight mb-6 drop-shadow-2xl">
                  {heroMovie.title || heroMovie.name}
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 line-clamp-3 font-medium text-shadow-lg leading-relaxed max-w-xl">
                  {heroMovie.overview}
                </p>
                <div className="flex gap-4">
                  <button className="flex items-center gap-2 bg-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold transition-all hover:bg-gray-200 hover:scale-105 active:scale-95 shadow-lg">
                    <Play fill="currentColor" className="w-5 h-5" /> Play
                  </button>
                  <button className="flex items-center gap-2 bg-white/20 backdrop-blur-md text-white border border-white/10 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold transition-all hover:bg-white/30 hover:scale-105 active:scale-95 shadow-lg">
                    <Info className="w-5 h-5" /> More Info
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="absolute inset-0 bg-gray-900 animate-pulse" />
        )}
      </div>

      {/* Movie Rows */}
      <div className="relative z-20 -mt-24 sm:-mt-32 md:-mt-40 space-y-4 md:space-y-8 pb-10">
        <MovieRow title="Trending Now" fetchState={trending} />
        <MovieRow title="Popular on Antigravity" fetchState={popular} />
        <MovieRow title="Critically Acclaimed" fetchState={topRated} />
        <MovieRow title="Adrenaline Rush: Action" fetchState={action} />
        <MovieRow title="Laugh Out Loud" fetchState={comedy} />
        <MovieRow title="Chilling Horror" fetchState={horror} />
      </div>
    </main>
  );
};

export default Home;
