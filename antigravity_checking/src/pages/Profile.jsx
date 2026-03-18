import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/slices/authSlice';
import { User, Mail, ShieldCheck, Heart, LogOut } from 'lucide-react';

const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  const { items } = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  return (
    <main className="min-h-screen pt-32 pb-20 px-6 sm:px-12 xl:px-20 max-w-4xl mx-auto">
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Account Overview</h1>
      </header>

      <div className="bg-white/5 border border-white/10 rounded-3xl backdrop-blur-xl p-8 sm:p-12 shadow-2xl overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        
        <div className="flex flex-col md:flex-row gap-10 items-center md:items-start relative z-10">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1 shadow-2xl flex-shrink-0">
            <div className="w-full h-full bg-[#111] rounded-full flex justify-center items-center border-[6px] border-[#070514]">
              <User className="w-16 h-16 text-white" />
            </div>
          </div>

          <div className="flex-1 text-center md:text-left space-y-4">
            <div>
              <h2 className="text-3xl font-bold text-white mb-1">{user?.name}</h2>
              <div className="flex items-center justify-center md:justify-start gap-2 text-gray-400">
                <Mail className="w-4 h-4" />
                <p>{user?.email}</p>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-green-500/10 border border-green-500/20 text-green-400 rounded-full text-sm font-semibold">
              <ShieldCheck className="w-4 h-4" />
              {user?.isGuest ? 'Guest Tier' : 'Premium Tier'} Active
            </div>

            <hr className="border-white/10 my-6" />

            <div className="grid grid-cols-2 gap-6 pt-2">
              <div className="bg-black/40 border border-white/5 rounded-2xl p-6 text-center shadow-inner">
                <Heart className="w-6 h-6 text-red-500 mx-auto mb-3" />
                <p className="text-3xl font-black text-white">{items.length}</p>
                <p className="text-sm text-gray-400 font-medium">Saved Items</p>
              </div>
              <div className="bg-black/40 border border-white/5 rounded-2xl p-6 text-center shadow-inner">
                <ShieldCheck className="w-6 h-6 text-blue-500 mx-auto mb-3" />
                <p className="text-3xl font-black text-white">4K</p>
                <p className="text-sm text-gray-400 font-medium">Resolution</p>
              </div>
            </div>
            
            <button 
              onClick={() => dispatch(logout())}
              className="mt-8 flex items-center justify-center gap-2 w-full md:w-auto bg-red-600/10 hover:bg-red-600 border border-red-600/20 text-red-500 hover:text-white px-8 py-3.5 rounded-xl font-bold transition-all"
            >
              <LogOut className="w-5 h-5" /> Sign Out
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Profile;
