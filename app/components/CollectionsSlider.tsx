"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

type Collection = {
  title: string;
  image: string;
};

export default function CollectionsSlider({ data }: { data: Collection[] }) {
  const ref = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!ref.current) return;
    const amount = dir === "left" ? -300 : 300;
    ref.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section id="collections" className="max-w-7xl mx-auto px-6 py-16">
      {/* Başlık ve butonlar */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-800 dark:text-gray-100">
          Koleksiyonlar
        </h2>
        <div className="flex gap-3">
          <button
            onClick={() => scroll("left")}
            className="p-2 rounded-full bg-white dark:bg-gray-800 shadow hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          >
            <ChevronLeft className="w-5 h-5 text-gray-800 dark:text-gray-200" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-2 rounded-full bg-white dark:bg-gray-800 shadow hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          >
            <ChevronRight className="w-5 h-5 text-gray-800 dark:text-gray-200" />
          </button>
        </div>
      </div>

      {/* Slider */}
      <div
        ref={ref}
        className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth"
      >
        {data.map((c) => (
          <div
            key={c.title}
            className="min-w-[220px] sm:min-w-[260px] md:min-w-[280px] h-72 relative rounded-2xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-xl transition-shadow"
          >
            <img
              src={c.image}
              alt={c.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
              <p className="text-white text-lg md:text-xl font-semibold">
                {c.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
