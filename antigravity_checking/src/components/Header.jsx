import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/slices/authSlice';
import { Film, Search, Bell, User, Heart, LogOut } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#070514]/90 backdrop-blur-lg shadow-lg py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-[90rem] mx-auto px-6 sm:px-12 xl:px-20 flex justify-between items-center">
        <div className="flex items-center gap-10">
          <Link to="/" className="text-2xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text flex gap-2 items-center">
            <Film className="w-8 h-8 text-blue-500" />
            Antigravity
          </Link>
          <nav className="hidden lg:flex gap-6 text-sm font-semibold tracking-wide text-gray-300">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <Link to="/favorites" className="hover:text-white transition-colors">Favorites</Link>
            <span className="hover:text-white transition-colors cursor-pointer">Movies</span>
            <span className="hover:text-white transition-colors cursor-pointer">TV Shows</span>
          </nav>
        </div>

        <div className="flex items-center gap-6">
          <Search className="w-5 h-5 text-gray-300 cursor-pointer hover:text-white transition-colors" />
          <Bell className="w-5 h-5 text-gray-300 cursor-pointer hover:text-white transition-colors hidden sm:block" />
          
          <div className="relative">
            <button 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity focus:outline-none"
            >
              <div className="w-9 h-9 rounded-md bg-gradient-to-br from-blue-500 to-purple-600 p-[2px]">
                <div className="w-full h-full bg-[#111] rounded-[4px] flex justify-center items-center">
                  <User className="w-5 h-5 text-white" />
                </div>
              </div>
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-3 w-48 bg-[#1a172c] border border-white/10 rounded-xl shadow-2xl overflow-hidden py-1 transform origin-top-right transition-all">
                <div className="px-4 py-3 border-b border-white/10">
                  <p className="text-sm text-white font-medium">{user?.name || 'Guest'}</p>
                  <p className="text-xs text-gray-400 truncate">{user?.email || 'Guest Session'}</p>
                </div>
                <Link to="/profile" className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-300 hover:bg-white/5 hover:text-white transition-colors" onClick={() => setIsDropdownOpen(false)}>
                  <User className="w-4 h-4" /> Profile
                </Link>
                <Link to="/favorites" className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-300 hover:bg-white/5 hover:text-white transition-colors" onClick={() => setIsDropdownOpen(false)}>
                  <Heart className="w-4 h-4" /> My List
                </Link>
                <div className="border-t border-white/10 my-1"></div>
                <button onClick={handleLogout} className="flex items-center gap-2 w-full text-left px-4 py-2.5 text-sm tracking-wide text-red-400 hover:bg-white/5 hover:text-red-300 transition-colors">
                  <LogOut className="w-4 h-4" /> Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
