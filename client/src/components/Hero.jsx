import React from 'react';
import heroImg from '../assets/hero.png';


export default function Hero() {
  return (
    <section className="max-w-full mx-auto min-h-[520px] bg-[#f5f5f5] dark:bg-app-dark shadow-soft overflow-hidden">
      
        {/* Thin top bar */}
        <div className="bg-black text-[10px] sm:text-xs text-white px-6 py-2 flex flex-wrap gap-4 justify-center sm:justify-between tracking-[0.15em] uppercase">
          <span>Free delivery in Asia from ₱5670</span>
          <span className="hidden sm:inline">New arrivals · Limited edition pieces</span>
        </div>

        {/* Main hero content */}
        <div className="px-6 sm:px-10 lg:px-14 py-10 sm:py-12 lg:py-14 grid gap-10 lg:grid-cols-2 items-center">
          {/* Left: text */}
          <div>
            <p className="text-[11px] tracking-[0.3em] uppercase text-gray-500 mb-5">
              Shoply
            </p>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.4rem] leading-tight text-gray-900">
              Find your Taste
              <br />
              in Timeless Elegance
            </h1>

            <p className="mt-6 text-sm sm:text-base text-gray-600 max-w-xl">
              Step into a world where fashion meets art. Experience unparalleled luxury and
              sophisticated style with our exclusive collections. Discover the perfect blend of
              timeless elegance and contemporary flair.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button className="px-6 py-3 text-sm font-medium bg-black text-white rounded-none border border-black hover:bg-gray-900 transition-colors">
                Shop the Collection
              </button>
              <button className="px-6 py-3 text-sm font-medium border border-gray-400 text-gray-800 bg-transparent hover:bg-gray-100 transition-colors">
                Discover More
              </button>
            </div>
          </div>

          {/* Right: model image, aligned at bottom-right */}
          <div className="flex items-end justify-center lg:justify-end">
            <div className="h-80 sm:h-96 lg:h-[520px]">
              <img
                src={heroImg}
                alt="Timeless fashion"
                className="h-full w-auto object-cover object-center"
              />
            </div>
          </div>
        
      </div>
    </section>
  );
}
