"use client";

import { useRef } from "react";
import Link from "next/link";
import { PRODUCTS } from "../data/products";
import { formatTRY } from "../utils/formatCurrency";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function SmoothProductSlider() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scrollToItem = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;
    const cardWidth = container.firstElementChild?.clientWidth || 300;

    container.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative w-full bg-gradient-to-b from-[#fffdfb] to-[#f8f5f2] py-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800 text-center tracking-tight">
        Yeni Sezon Ürünler
      </h2>

      <button
        onClick={() => scrollToItem("left")}
        className="
          absolute left-2 top-1/2 -translate-y-1/2 z-10 
          bg-white shadow-lg rounded-full p-2
          hover:bg-gray-100 transition
          hidden sm:flex
        "
      >
        <ChevronLeft size={28} className="text-gray-700" />
      </button>

      <button
        onClick={() => scrollToItem("right")}
        className="
          absolute right-2 top-1/2 -translate-y-1/2 z-10 
          bg-white shadow-lg rounded-full p-2
          hover:bg-gray-100 transition
          hidden sm:flex
        "
      >
        <ChevronRight size={28} className="text-gray-700" />
      </button>

      <div
        ref={scrollRef}
        className="
          flex gap-6 px-6 overflow-x-auto scroll-smooth no-scrollbar
          snap-x snap-mandatory
        "
      >
        {PRODUCTS.slice(0, 30).map((p, idx) => (
          <Link
            key={idx}
            href={`/urun/${p.slug}`}
            className="
              bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl 
              transition-shadow duration-300 group cursor-pointer
              flex-shrink-0 
              snap-center 
              
              w-[70%]            /* mobil */
              sm:w-[40%]         /* tablet */
              md:w-[28%]         /* 3 kart */
              lg:w-[20%]         /* 5 kart */
              xl:w-[16%]         /* max 6 kart */
            "
          >
            <div className="relative w-full h-[420px] overflow-hidden">
              <img
                src={p.images[0]}
                alt={p.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            <div className="p-5">
              <h3 className="font-semibold text-gray-800 mb-2 text-lg tracking-tight">
                {p.name}
              </h3>
              <div className="flex justify-between items-center">
                <span className="text-[#B39B4C] font-bold text-lg">
                  {formatTRY(p.price)}
                </span>
                <button
                  className="bg-[#B39B4C] text-white px-5 py-2 rounded-full font-medium text-sm shadow 
                  hover:bg-[#a18850] transition-colors duration-300"
                  onClick={(e) => e.preventDefault()}
                >
                  Sepete Ekle
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex justify-between px-6 mt-6 sm:hidden">
        <button
          onClick={() => scrollToItem("left")}
          className="bg-white shadow-md rounded-full p-2"
        >
          <ChevronLeft size={22} className="text-gray-700" />
        </button>

        <button
          onClick={() => scrollToItem("right")}
          className="bg-white shadow-md rounded-full p-2"
        >
          <ChevronRight size={22} className="text-gray-700" />
        </button>
      </div>
    </section>
  );
}
