"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const inspirations = [
  {
    id: 1,
    title: "Kış Stili ❄️",
    desc: "Sıcak tonlar, yumuşak dokular ve zarif detaylar.",
    img: "/images/5.png",
  },
  {
    id: 2,
    title: "Şehir Şıklığı 🌆",
    desc: "Modern, özgüvenli ve sofistike bir görünüm.",
    img: "/images/6.png",
  },
  {
    id: 3,
    title: "Hafta Sonu Kombini ☕",
    desc: "Rahat ama bir o kadar da etkileyici bir tarz.",
    img: "/images/7.png",
  },
  {
    id: 4,
    title: "Gece Işıltısı ✨",
    desc: "Işıltılı detaylarla fark yarat.",
    img: "/images/8.png",
  },
];

export default function InspirationGallery() {
  return (
    <section className="w-full py-24 bg-gradient-to-b from-[#fffaf9] to-[#f8f4f2]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4"
        >
          Velora’dan İlham Al 💫
        </motion.h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-16 leading-relaxed">
          Yeni sezonun en göz alıcı kombinlerini keşfet. Modanın zarif
          dokunuşlarıyla kendi tarzını yarat.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {inspirations.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: item.id * 0.1 }}
              className="relative group overflow-hidden rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] bg-white"
            >
              <div className="relative w-full h-[480px]">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-5 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <h3 className="text-2xl font-semibold mb-2 drop-shadow-md">
                  {item.title}
                </h3>
                <p className="text-base mb-4 drop-shadow-md">{item.desc}</p>
                <button className="px-5 py-2.5 bg-white text-gray-900 rounded-full font-semibold shadow-md hover:bg-gray-100 transition">
                  Bu Kombini Keşfet
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
