'use client';

import { useState } from 'react';

export default function Rusty() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-8 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center">
              <span className="text-black font-bold text-xl">R</span>
            </div>
            <h1 className="text-2xl font-semibold tracking-tighter">Rusty</h1>
          </div>

          <div className="flex items-center gap-8 text-sm">
            <a href="#" className="hover:text-white/70 transition">Features</a>
            <a href="#" className="hover:text-white/70 transition">Markets</a>
            <a href="#" className="hover:text-white/70 transition">Learn</a>
            
            {isLoggedIn ? (
              <button 
                onClick={() => setIsLoggedIn(false)}
                className="px-6 py-2.5 rounded-full border border-white/30 hover:bg-white/5 transition"
              >
                Account
              </button>
            ) : (
              <button 
                onClick={() => setIsLoggedIn(true)}
                className="px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-white/90 transition"
              >
                Sign In
              </button>
            )}
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h1 className="text-7xl md:text-8xl font-semibold tracking-tighter leading-none">
            Trade crypto.<br />The Apple way.
          </h1>

          <p className="mt-8 text-2xl text-zinc-400 max-w-xl mx-auto">
            Zero risk. Real market feel.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setIsLoggedIn(true)}
              className="px-10 py-4 text-lg bg-white text-black rounded-3xl font-medium hover:scale-[1.02] transition-all active:scale-95"
            >
              Start Trading Free
            </button>
            
            <button 
              onClick={() => setIsLoggedIn(true)}
              className="px-10 py-4 text-lg border border-white/30 rounded-3xl font-medium hover:bg-white/5 transition-all"
            >
              Watch Demo
            </button>
          </div>

          <p className="mt-6 text-sm text-zinc-500">No credit card required • Paper trading only</p>
        </div>
      </main>
    </div>
  );
}