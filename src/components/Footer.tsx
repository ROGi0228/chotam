import React from 'react';

export function Footer() {
  return (
    <footer className="relative border-t border-zinc-800 px-4 sm:px-6 py-12 sm:py-16 overflow-hidden">
      {/* Background elements */}
      <div className="absolute bottom-0 left-0 text-[6rem] sm:text-[10rem] opacity-[0.02] select-none pointer-events-none">
        終
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 sm:gap-12">
          {/* Logo/Title */}
          <div>
            <div className="text-xl sm:text-2xl md:text-3xl mb-2 sm:mb-3 uppercase tracking-tight">
              ЧОТАМ? АНИМЕ ТУР?
            </div>
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-12 sm:w-16 h-px bg-zinc-700"></div>
              <p className="text-xs text-zinc-600 uppercase tracking-widest">© 2025</p>
            </div>
          </div>

          {/* Social links */}
          <div className="flex flex-col gap-3 sm:gap-4">
            <div className="text-xs text-zinc-600 uppercase tracking-widest mb-1 sm:mb-2">Социальные сети</div>
            <div className="flex flex-wrap gap-6 sm:gap-8">
              <a
                href="https://www.instagram.com/chotamshow?igsh=MXd0bHc3a3ZveTE1Mw=="
                className="text-xs sm:text-sm text-zinc-500 hover:text-white transition-colors uppercase tracking-widest border-b border-transparent hover:border-white pb-1"
              >
                Instagram
              </a>
              <a
                href="https://t.me/chotamshow"
                className="text-xs sm:text-sm text-zinc-500 hover:text-white transition-colors uppercase tracking-widest border-b border-transparent hover:border-white pb-1"
              >
                Telegram
              </a>
              <a
                href="https://youtube.com/@madiyarhakimov?si=TcFyJ3noE2hu_u9M"
                className="text-xs sm:text-sm text-zinc-500 hover:text-white transition-colors uppercase tracking-widest border-b border-transparent hover:border-white pb-1"
              >
                YouTube
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}