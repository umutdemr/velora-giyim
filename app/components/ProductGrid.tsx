"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { PRODUCTS } from "../data/products";
import { formatTRY } from "../utils/formatCurrency";
import Link from "next/link";

export default function SmoothProductSlider() {
  const baseX = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const speed = useRef(40);
  const smoothSpeed = useMotionValue(speed.current);

  useEffect(() => {
    let frame: number;
    let prevTime = performance.now();

    const loop = (time: number) => {
      const dt = (time - prevTime) / 1000;
      prevTime = time;
      const current = baseX.get();

      baseX.set((current - smoothSpeed.get() * dt) % (window.innerWidth * 2));
      frame = requestAnimationFrame(loop);
    };
    frame = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    const target = isHovered ? 0 : speed.current;
    animate(smoothSpeed, target, {
      duration: 1.5,
      ease: "easeInOut",
    });
  }, [isHovered]);

  const x = useTransform(baseX, (v) => `${v}px`);

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#fffdfb] to-[#f8f5f2] py-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800 text-center tracking-tight">
        Yeni Sezon Ürünler
      </h2>

      <div
        className="overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div style={{ x }} className="flex gap-6">
          {[...PRODUCTS, ...PRODUCTS].map((p, idx) => (
            <Link
              key={idx}
              href={`/urun/${p.slug}`}
              className="flex-shrink-0 w-[30%] bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
            >
              <div className="relative w-full h-[520px] overflow-hidden">
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
        </motion.div>
      </div>
    </section>
  );
}
