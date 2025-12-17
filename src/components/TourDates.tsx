import React from 'react';
import { CityCard } from './CityCard';
import bishkekPoster from 'figma:asset/f310f3d0c12775120f246a7e219143c2d4c76d11.png';
import astanaPoster from 'figma:asset/2c7efa0802c2b885f0650d5b4eb9c5ec9a339f81.png';
import moscowPoster from '../assets/moscow.png';
import spbPoster from '../assets/piter.png';
import shymkentPoster from 'figma:asset/088fc2be615fd26eaac14ffd4950c2759f13c38b.png';
import tashkentPoster from 'figma:asset/06b9341adb86ebb618eb18239a3da03ea5ae8864.png';

const tourDates = [
  {
    city: 'Ташкент',
    country: 'Узбекистан',
    date: '09.01.2026',
    day: 'Четверг',
    venue: 'sahna standup club',
    shows: [
      { time: '19:00', name: 'Наруто', ticketLink: 'https://t.me/sahnastandup_bot?start=693fa671687a0_ru' },
      { time: '21:30', name: 'Атака титанов', ticketLink: 'https://t.me/sahnastandup_bot?start=694028539a85d_ru' },
    ],
    posterUrl: tashkentPoster,
  },
  {
    city: 'Шымкент',
    country: 'Казахстан',
    date: '10.01.2026',
    day: 'Пятница',
    venue: 'Бар КОО/KOO / Ташенова, 16',
    shows: [
      { time: '19:00', name: 'Наруто', ticketLink: 'https://sxodim.com/shymkent/event/komediynoe-shou-cho-tam-anime-tur-10-yanvarya' },
      { time: '21:30', name: 'Атака титанов', ticketLink: 'https://onvibe.me/event/607' },
    ],
    posterUrl: shymkentPoster,
  },
  {
    city: 'Бишкек',
    country: 'Кыргызстан',
    date: '11.01.2026',
    day: 'Суббота',
    venue: 'sod out bar / байтик баатыра, 32',
    shows: [
      { time: '20:00', name: 'Наруто', ticketLink: 'https://iticket.kg/events/concerts/chotam-naruto/698' },
      { time: '22:00', name: 'Атака титанов', ticketLink: 'https://iticket.kg/events/concerts/chotam-ataka-titanov/699' },
    ],
    posterUrl: bishkekPoster,
  },
  {
    city: 'Астана',
    country: 'Казахстан',
    date: '16.01.2026',
    day: 'Четверг',
    venue: 'Бар wien / кабанбай батыр, 2/1',
    shows: [
      { time: '19:00', name: 'Наруто', ticketLink: 'https://sxodim.com/astana/event/yumoristicheskoe-shou-cho-tam' },
      { time: '21:30', name: 'Атака титанов', ticketLink: 'https://sxodim.com/astana/event/yumoristicheskoe-shou-cho-tam' },
    ],
    posterUrl: astanaPoster,
  },
  {
    city: 'Москва',
    country: 'Россия',
    date: '17.01.2026',
    day: 'Пятница',
    venue: 'Still standup club / покровка, 17',
    shows: [
      { time: '19:00', name: 'атака титанов', ticketLink: 'https://stillstandup.com/afisha/tpost/eapg24dkf1-chotam-ataka-titanov' },
      { time: '21:30', name: 'магическая битва', ticketLink: 'https://stillstandup.com/afisha/tpost/3l1vbnjt91-chotam-magicheskaya-bitva' },
    ],
    posterUrl: moscowPoster,
  },
  {
    city: 'Санкт-Петербург',
    country: 'Россия',
    date: '18.01.2026',
    day: 'Суббота',
    venue: 'Ул. Марата, 86, ТРК"Планета нептун"',
    shows: [
      { time: '19:00', name: 'атака титанов', ticketLink: 'https://afisha.yandex.ru/saint-petersburg/standup/cho-tam' },
      { time: '22:00', name: 'магическая битва', ticketLink: 'https://afisha.yandex.ru/saint-petersburg/standup/cho-tam' },
    ],
    posterUrl: spbPoster,
  },
];

export function TourDates() {
  return (
    <section id="dates" className="relative px-4 sm:px-6 py-16 sm:py-32 overflow-hidden">
      {/* Background anime elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Japanese characters */}
        <div className="absolute top-20 sm:top-40 right-4 sm:right-20 text-[8rem] sm:text-[15rem] opacity-[0.02] select-none">
          旅
        </div>
        <div className="absolute bottom-10 sm:bottom-20 left-4 sm:left-20 text-[6rem] sm:text-[12rem] opacity-[0.02] select-none">
          都
        </div>
        
        {/* Geometric shapes */}
        <div className="absolute top-1/3 left-4 sm:left-10 w-12 sm:w-20 h-12 sm:h-20 border border-purple-500/10 rotate-45"></div>
        <div className="absolute bottom-1/4 right-1/4 w-10 sm:w-16 h-10 sm:h-16 border border-pink-500/10"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div className="mb-16 sm:mb-24">
          <div className="flex items-center gap-4 sm:gap-6 mb-4 sm:mb-6">
            <div className="w-1 h-12 sm:h-16 bg-gradient-to-b from-purple-500 to-transparent"></div>
            <h2 className="text-4xl sm:text-5xl md:text-7xl uppercase tracking-tight">Даты</h2>
          </div>
          <div className="flex items-center gap-3 sm:gap-4 pl-6 sm:pl-10">
            <div className="w-16 sm:w-24 h-px bg-zinc-700"></div>
            <div className="w-2 h-2 bg-purple-500"></div>
          </div>
        </div>

        {/* Tour dates list */}
        <div className="space-y-2">
          {tourDates.map((event, index) => (
            <CityCard key={index} {...event} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}