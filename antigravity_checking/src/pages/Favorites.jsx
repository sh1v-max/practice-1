import React from 'react';
import { useSelector } from 'react-redux';
import MovieCard from '../components/MovieCard';
import { HeartOff } from 'lucide-react';
import { Link } from 'react-router-dom';

const Favorites = () => {
  const { items } = useSelector((state) => state.favorites);

  return (
    <main className="min-h-screen pt-32 pb-20 px-6 sm:px-12 xl:px-20 max-w-[90rem] mx-auto">
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-black text-white mb-4">My Favorites</h1>
        <p className="text-gray-400 font-medium">Your curated list of must-watch entertainment.</p>
      </header>

      {items.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-[50vh] text-center bg-white/5 border border-white/10 rounded-3xl backdrop-blur-sm p-10">
          <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mb-6 border border-white/10">
            <HeartOff className="w-12 h-12 text-gray-500" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-3">Your list is empty</h2>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            You haven't saved any movies or TV shows to your favorites yet. Discover trending titles and build your library!
          </p>
          <Link 
            to="/" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-bold transition-colors shadow-[0_0_20px_rgba(37,99,235,0.4)]"
          >
            Explore Titles
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-6 gap-6 gap-y-12 lg:gap-8 lg:gap-y-16 animate-in fade-in slide-in-from-bottom-5 duration-1000">
          {items.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </main>
  );
};

export default Favorites;
