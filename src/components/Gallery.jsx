import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryData } from '../data/portfolioData';

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const rotation = window.setInterval(() => {
      setCurrentIndex((index) => (index + 1) % galleryData.length);
    }, 4500);

    return () => window.clearInterval(rotation);
  }, []);

  const showPrevious = () => {
    setCurrentIndex((index) => (index - 1 + galleryData.length) % galleryData.length);
  };

  const showNext = () => {
    setCurrentIndex((index) => (index + 1) % galleryData.length);
  };

  const currentImage = galleryData[currentIndex];

  return (
    <section id="gallery" className="px-4 py-[60px] md:px-6 md:py-[90px]">
      <div className="mx-auto grid max-w-5xl items-center gap-8 rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 sm:p-7 md:grid-cols-[0.8fr_1.2fr] md:gap-12 md:p-10">
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold tracking-tight text-[#fafafa] sm:text-4xl">
            Gallery<span className="text-blue-500">.</span>
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-[#a1a1aa] sm:text-base md:mx-0">
            Moments from volunteering teams, event work, and competitions that shaped my journey beyond the classroom.
          </p>

          <div className="mt-5 flex items-center justify-center gap-2 md:justify-start" aria-label="Choose gallery image">
            {galleryData.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setCurrentIndex(index)}
                aria-label={`Show ${item.title}`}
                aria-current={index === currentIndex ? 'true' : undefined}
                className={`h-1.5 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/60 ${
                  index === currentIndex ? 'w-6 bg-blue-500' : 'w-1.5 bg-zinc-600 hover:bg-zinc-400'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-xl border border-white/[0.08] bg-zinc-900 shadow-xl" aria-live="polite">
          <div className="aspect-[4/3] sm:aspect-[16/10]">
            <img
              key={currentImage.id}
              src={currentImage.image}
              alt={currentImage.alt}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/10" />

          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-3 sm:p-4">
            <div className="min-w-0">
              <p className="font-mono text-[9px] uppercase tracking-wider text-blue-300 sm:text-[10px]">
                {currentImage.category} • {currentImage.year}
              </p>
              <h3 className="mt-1 truncate text-sm font-semibold text-white sm:text-base">
                {currentImage.title}
              </h3>
              <p className="mt-0.5 truncate text-[10px] text-zinc-300 sm:text-xs">{currentImage.event}</p>
            </div>

            <div className="flex shrink-0 gap-1.5">
              <button
                type="button"
                onClick={showPrevious}
                aria-label="Previous gallery image"
                className="rounded-lg border border-white/10 bg-black/55 p-2 text-zinc-200 backdrop-blur-sm transition-colors hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/60"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={showNext}
                aria-label="Next gallery image"
                className="rounded-lg border border-white/10 bg-black/55 p-2 text-zinc-200 backdrop-blur-sm transition-colors hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/60"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
