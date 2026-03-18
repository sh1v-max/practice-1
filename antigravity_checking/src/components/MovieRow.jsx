import React, { useRef } from 'react';
import MovieCard from './MovieCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const MovieRow = ({ title, fetchState }) => {
  const rowRef = useRef(null);
  const { items, status, error } = fetchState;

  const scroll = (direction) => {
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollAmount = direction === 'left' ? scrollLeft - clientWidth + 100 : scrollLeft + clientWidth - 100;
      rowRef.current.scrollTo({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  if (status === 'loading') {
    return (
      <div className="mb-10 px-6 sm:px-12 xl:px-20">
        <h2 className="text-2xl font-bold text-white mb-4 animate-pulse bg-white/10 w-48 h-8 rounded-md" />
        <div className="flex gap-4 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="min-w-[160px] md:min-w-[200px] lg:min-w-[240px] aspect-[2/3] bg-gray-800 rounded-2xl animate-pulse flex-shrink-0" />
          ))}
        </div>
      </div>
    );
  }

  if (status === 'failed') return null;
  if (!items || items.length === 0) return null;

  return (
    <div className="mb-12 relative group">
      <h2 className="text-xl md:text-2xl font-extrabold text-[#e5e5e5] mb-5 tracking-wide px-6 sm:px-12 xl:px-20 inline-block hover:text-white transition-colors cursor-pointer">
        {title}
      </h2>
      
      <div className="relative flex items-center">
        {/* Left Scroll Overlay */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-[#070514] to-transparent z-10 flex items-center justify-start opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <button 
            onClick={() => scroll('left')}
            className="pointer-events-auto bg-black/40 hover:bg-black/80 text-white rounded-full p-2 ml-2 sm:ml-4 backdrop-blur-md transform hover:scale-110 border border-white/10 transition-all z-20 hidden md:block"
          >
            <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>
        </div>

        {/* Scrollable Container */}
        <div 
          ref={rowRef} 
          className="flex gap-4 sm:gap-6 px-6 sm:px-12 xl:px-20 overflow-x-auto overflow-y-clip scrollbar-hide py-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {items.map((movie) => (
            <div key={movie.id} className="w-[160px] md:w-[200px] lg:w-[240px] flex-shrink-0">
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>

        {/* Right Scroll Overlay */}
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-[#070514] to-transparent z-10 flex items-center justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <button 
            onClick={() => scroll('right')}
            className="pointer-events-auto bg-black/40 hover:bg-black/80 text-white rounded-full p-2 mr-2 sm:mr-4 backdrop-blur-md transform hover:scale-110 border border-white/10 transition-all z-20 hidden md:block"
          >
            <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieRow;
