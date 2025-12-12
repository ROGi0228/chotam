import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import posterImage from 'figma:asset/0b2480df9bd8cffc0dbc196dae3e9ee7e330cfc0.png';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 py-12 sm:py-20 overflow-hidden">
      {/* Anime-style background elements */}
      <div className="absolute inset-0">
        {/* Large Japanese characters in background */}
        <div className="absolute top-10 sm:top-20 left-4 sm:left-10 text-[8rem] sm:text-9xl md:text-[20rem] opacity-[0.02] select-none pointer-events-none">
          笑
        </div>
        <div className="absolute bottom-10 sm:bottom-20 right-4 sm:right-10 text-[8rem] sm:text-9xl md:text-[20rem] opacity-[0.02] select-none pointer-events-none">
          楽
        </div>
        
        {/* Manga-style speed lines */}
        <div className="absolute top-0 right-0 w-full h-full opacity-5">
          <div className="absolute top-1/4 right-0 w-48 sm:w-96 h-px bg-white rotate-12"></div>
          <div className="absolute top-1/3 right-0 w-40 sm:w-80 h-px bg-white rotate-12"></div>
          <div className="absolute top-[40%] right-0 w-32 sm:w-72 h-px bg-white rotate-12"></div>
        </div>
        
        {/* Geometric shapes */}
        <div className="absolute top-1/4 right-1/4 w-16 sm:w-32 h-16 sm:h-32 border border-purple-500/10 rotate-45"></div>
        <div className="absolute bottom-1/3 left-1/4 w-12 sm:w-24 h-12 sm:h-24 border border-pink-500/10 rotate-12"></div>
        
        {/* Gradient accent */}
        <div className="absolute top-0 right-0 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-gradient-radial from-purple-900/20 to-transparent blur-3xl"></div>
      </div>

      <div className="max-w-7xl w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-20 items-center">
          {/* Left: Text content */}
          <div>
            {/* Year badge */}
            <div className="mb-8 sm:mb-12">
              <span className="text-xs sm:text-sm tracking-widest text-zinc-500 uppercase">
                Стендап-тур 2025
              </span>
            </div>

            {/* Main title */}
            <h1 className="mb-6 sm:mb-8 leading-none">
              <div className="text-5xl sm:text-6xl md:text-8xl mb-3 sm:mb-4 text-white uppercase tracking-tighter">
                ЧОТАМ?
              </div>
              <div className="text-3xl sm:text-4xl md:text-6xl text-zinc-400 uppercase tracking-tight">
                АНИМЕ ТУР?
              </div>
            </h1>

            {/* Divider with accent */}
            <div className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-12">
              <div className="w-16 sm:w-24 h-px bg-zinc-700"></div>
              <div className="w-2 h-2 bg-purple-500"></div>
            </div>

            {/* Description */}
            <div className="max-w-2xl mb-8 sm:mb-12">
              <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
                Шесть городов Центральной Азии и России. Январь 2026.
              </p>
            </div>

            {/* CTA */}
            <a
              href="#dates"
              className="inline-block w-full sm:w-auto text-center px-6 sm:px-8 py-3 sm:py-4 border border-white text-white hover:bg-white hover:text-black transition-colors duration-300 uppercase tracking-wider text-xs sm:text-sm"
            >
              Купить билеты
            </a>
          </div>

          {/* Right: Main poster */}
          <div className="flex justify-center lg:justify-end order-first lg:order-last">
            <div className="relative w-full max-w-[280px] sm:max-w-sm">
              {/* Decorative corner brackets */}
              <div className="absolute -top-1 sm:-top-2 -left-1 sm:-left-2 w-4 sm:w-6 h-4 sm:h-6 border-t-2 border-l-2 border-purple-500/50"></div>
              <div className="absolute -top-1 sm:-top-2 -right-1 sm:-right-2 w-4 sm:w-6 h-4 sm:h-6 border-t-2 border-r-2 border-purple-500/50"></div>
              <div className="absolute -bottom-1 sm:-bottom-2 -left-1 sm:-left-2 w-4 sm:w-6 h-4 sm:h-6 border-b-2 border-l-2 border-purple-500/50"></div>
              <div className="absolute -bottom-1 sm:-bottom-2 -right-1 sm:-right-2 w-4 sm:w-6 h-4 sm:h-6 border-b-2 border-r-2 border-purple-500/50"></div>
              
              {/* Poster */}
              <div className="relative aspect-[3/4] rounded-lg sm:rounded-xl overflow-hidden border border-zinc-800 shadow-2xl">
                <img
                  src={posterImage}
                  alt="ЧОТАМ? АНИМЕ ТУР? - Общая афиша"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}