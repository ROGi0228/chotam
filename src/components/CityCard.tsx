import React, { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Show {
  time: string;
  name: string;
  ticketLink: string;
}

interface CityCardProps {
  city: string;
  country: string;
  date: string;
  day: string;
  venue: string;
  shows: Show[];
  posterUrl: string;
  index: number;
}

export function CityCard({ city, country, date, day, venue, shows, posterUrl, index }: CityCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border border-zinc-800 hover:border-zinc-700 transition-all duration-300 bg-zinc-950/50">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full group hover:bg-zinc-900/50 transition-colors duration-300"
      >
        <div className="py-6 sm:py-10 px-4 sm:px-8 grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 items-center">
          {/* Number */}
          <div className="md:col-span-1 hidden md:block">
            <div className="flex items-center gap-4">
              <span className="text-base sm:text-lg text-zinc-600 font-mono tracking-wider">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="w-px h-8 bg-zinc-800"></div>
            </div>
          </div>

          {/* City */}
          <div className="md:col-span-4 text-left">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-sm sm:text-base text-zinc-600 font-mono tracking-wider md:hidden">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl group-hover:text-zinc-300 transition-colors uppercase tracking-tight">
                {city}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-zinc-500 uppercase tracking-widest">
              {country}
            </p>
          </div>

          {/* Date */}
          <div className="md:col-span-3 text-left">
            <div className="text-lg sm:text-xl text-zinc-300 font-mono mb-1">{date}</div>
            <p className="text-xs sm:text-sm text-zinc-600 uppercase tracking-wider">{day}</p>
          </div>

          {/* Actions */}
          <div className="md:col-span-4 md:text-right flex items-center justify-start md:justify-end gap-4 sm:gap-6">
            <span className="text-xs sm:text-sm text-zinc-500 uppercase tracking-widest">
              {isExpanded ? 'Скрыть' : 'Подробнее'}
            </span>
            <div className="flex items-center gap-2">
              <div className={`w-6 sm:w-8 h-px bg-zinc-700 transition-all duration-300 ${isExpanded ? 'w-3 sm:w-4' : ''}`}></div>
              <span className={`text-zinc-500 transition-transform duration-300 text-lg sm:text-xl ${isExpanded ? 'rotate-180' : ''}`}>
                ↓
              </span>
            </div>
          </div>
        </div>
      </button>

      {/* Expanded content with poster and ticket button */}
      <div
        className={`overflow-hidden transition-all duration-500 ${
          isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="border-t border-zinc-800 bg-zinc-900/30">
          <div className="p-4 sm:p-8 md:p-12">
            {/* Venue and Date info at the top */}
            <div className="grid grid-cols-1 gap-6 sm:gap-8 mb-8 sm:mb-12">
              {/* Venue */}
              <div>
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="w-8 sm:w-12 h-px bg-zinc-700"></div>
                  <div className="text-xs text-zinc-600 uppercase tracking-widest">Место</div>
                </div>
                <div className="text-base sm:text-lg md:text-xl text-zinc-300 uppercase tracking-wide break-words">{venue}</div>
              </div>
              
              {/* Date */}
              <div>
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="w-8 sm:w-12 h-px bg-zinc-700"></div>
                  <div className="text-xs text-zinc-600 uppercase tracking-widest">Дата</div>
                </div>
                <div className="text-xl sm:text-2xl font-mono text-zinc-300">{date}</div>
                <div className="text-zinc-500 uppercase tracking-wider text-xs sm:text-sm mt-2">{day}</div>
              </div>
            </div>

            {/* Poster and Shows on same level */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 sm:gap-12 items-start">
              {/* Poster */}
              <div className="md:col-span-2">
                <div className="relative max-w-[280px] mx-auto md:mx-0">
                  {/* Decorative corner brackets */}
                  <div className="absolute -top-1 sm:-top-2 -left-1 sm:-left-2 w-3 sm:w-4 h-3 sm:h-4 border-t border-l border-purple-500/50"></div>
                  <div className="absolute -top-1 sm:-top-2 -right-1 sm:-right-2 w-3 sm:w-4 h-3 sm:h-4 border-t border-r border-purple-500/50"></div>
                  <div className="absolute -bottom-1 sm:-bottom-2 -left-1 sm:-left-2 w-3 sm:w-4 h-3 sm:h-4 border-b border-l border-purple-500/50"></div>
                  <div className="absolute -bottom-1 sm:-bottom-2 -right-1 sm:-right-2 w-3 sm:w-4 h-3 sm:h-4 border-b border-r border-purple-500/50"></div>
                  
                  <div className="relative aspect-[3/4] bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
                    <ImageWithFallback
                      src={posterUrl}
                      alt={`${city} - Афиша`}
                      className="w-full h-full object-cover"
                    />
                    {/* Placeholder text */}
                    {!posterUrl && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center text-zinc-600 px-4">
                          <div className="text-xs sm:text-sm uppercase tracking-widest mb-2">Афиша {city}</div>
                          <div className="text-xs text-zinc-700">Изображение будет добавлено</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Shows with ticket buttons */}
              <div className="md:col-span-3">
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="w-8 sm:w-12 h-px bg-zinc-700"></div>
                  <div className="text-xs text-zinc-600 uppercase tracking-widest">Программа</div>
                </div>
                
                <div className="space-y-4 sm:space-y-6">
                  {shows.map((show, idx) => (
                    <div key={idx} className="border border-zinc-800 p-4 sm:p-6 bg-zinc-900/50">
                      <div className="flex flex-col gap-3 sm:gap-4 mb-4">
                        <div className="flex flex-col xs:flex-row xs:items-baseline gap-2 xs:gap-4">
                          <div className="text-xl sm:text-2xl font-mono text-zinc-300">{show.time}</div>
                          <div className="w-6 xs:w-8 h-px bg-zinc-700"></div>
                          <div className="text-lg sm:text-xl text-white uppercase tracking-tight break-words">{show.name}</div>
                        </div>
                      </div>
                      <a
                        href={show.ticketLink}
                        className="inline-block w-full px-6 sm:px-8 py-3 sm:py-4 border border-white text-white hover:bg-white hover:text-black transition-colors duration-300 text-center uppercase tracking-widest text-xs sm:text-sm"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Купить билет
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}