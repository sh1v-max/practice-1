import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../store/slices/favoritesSlice';
import { TMDB_IMG_BASE_URL } from '../utils/constants';
import { Heart } from 'lucide-react';

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();
  const { items: favorites } = useSelector((state) => state.favorites);
  
  const isFavorite = favorites.some((fav) => fav.id === movie.id);

  const handleFavoriteClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(toggleFavorite(movie));
  };

  return (
    <div className="group relative rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer bg-[#111] border border-white/5 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(59,130,246,0.2)] hover:border-white/20">
      <div className="w-full aspect-[2/3] relative">
        <img
          src={movie.poster_path ? `${TMDB_IMG_BASE_URL}${movie.poster_path}` : 'https://via.placeholder.com/500x750?text=No+Poster'}
          alt={movie.title || movie.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Favorite Button Overlay */}
        <button 
          onClick={handleFavoriteClick}
          className="absolute top-3 left-3 bg-black/50 backdrop-blur-md p-2 rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 hover:bg-black/80 z-20"
        >
          <Heart 
            className={`w-5 h-5 transition-colors ${isFavorite ? 'fill-red-500 text-red-500' : 'text-white'}`} 
          />
        </button>

        {/* Rating Badge */}
        <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10 flex items-center gap-1 shadow-lg z-20">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-yellow-500">
            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
          </svg>
          <span className="text-white text-xs font-bold">{movie.vote_average?.toFixed(1) || 'N/A'}</span>
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070514] via-[#070514]/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-end p-4 sm:p-5 z-10">
          <div className="transform translate-y-3 transition-transform duration-300 group-hover:translate-y-0 text-left">
            <h2 className="text-sm md:text-base font-bold text-white mb-1 line-clamp-2 leading-tight">
              {movie.title || movie.name}
            </h2>
            <p className="text-xs text-blue-300 font-medium tracking-wide">
              {(movie.release_date || movie.first_air_date) ? new Date(movie.release_date || movie.first_air_date).getFullYear() : 'Unknown'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
