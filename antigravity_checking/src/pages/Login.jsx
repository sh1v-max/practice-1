import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login, loginAsGuest } from '../store/slices/authSlice';
import { useNavigate } from 'react-router-dom';
import { Film } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if(email) {
      dispatch(login({ name: email.split('@')[0], email, isGuest: false }));
      navigate('/');
    }
  };

  const handleGuest = () => {
    dispatch(loginAsGuest());
    navigate('/');
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black selection:bg-purple-500/30">
      {/* Cinematic Background */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40 scale-105"
        style={{ backgroundImage: `url('https://image.tmdb.org/t/p/original/mBaXZ95R2OxueZhvQbcEWy2DqyO.jpg')` }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#070514] via-[#070514]/80 to-[#070514]/30" />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#070514] via-transparent to-[#070514]" />

      <div className="relative z-10 w-full max-w-md px-6 py-12">
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-2">
            <Film className="w-10 h-10 text-blue-500" />
            <span className="text-3xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
              Antigravity
            </span>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl p-8 sm:p-10">
          <h2 className="text-3xl font-bold text-white mb-6">Sign In</h2>
          
          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <input 
                type="email" 
                placeholder="Email address"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium"
              />
            </div>
            <div>
              <input 
                type="password" 
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium"
              />
            </div>
            <button 
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-xl transition-colors mt-2"
            >
              Sign In
            </button>
          </form>

          <div className="mt-6 text-center">
            <span className="text-gray-400 text-sm">OR</span>
          </div>

          <button 
            onClick={handleGuest}
            className="w-full mt-6 bg-white/10 hover:bg-white/20 border border-white/10 text-white font-bold py-4 rounded-xl transition-colors backdrop-blur-sm flex justify-center items-center gap-2"
          >
            Sign In as Guest
          </button>
          
          <p className="mt-8 text-gray-400 text-sm text-center">
            New to Antigravity? <span className="text-white hover:underline cursor-pointer">Sign up now.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
