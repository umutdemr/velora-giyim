"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Search, User, ShoppingBag } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const categories = [
    {
      title: "Üst Giyim",
      items: [
        { name: "Abiye", path: "/ustgiyim/abiye" },
        { name: "Elbise", path: "/ustgiyim/elbiseler" },
        { name: "Bluz", path: "/ustgiyim/bluz" },
        { name: "Büstiyer", path: "/ustgiyim/bustiyer" },
        { name: "T-Shirt", path: "/ustgiyim/tshirt" },
        { name: "Crop Top", path: "/ustgiyim/croptop" },
        { name: "Gömlek", path: "/ustgiyim/gomlek" },
        { name: "İkili Takım", path: "/ustgiyim/takim" },
        { name: "Hırka", path: "/ustgiyim/hirka" },
        { name: "Kimono", path: "/ustgiyim/kimono" },
        { name: "Sweatshirt", path: "/ustgiyim/sweatshirt" },
        { name: "Triko", path: "/ustgiyim/triko" },
      ],
    },
    {
      title: "Alt Giyim",
      items: [
        { name: "Etek", path: "/altgiyim/etek" },
        { name: "Jeans Pantolon", path: "/altgiyim/jeans" },
        { name: "Pantolon", path: "/altgiyim/pantolon" },
        { name: "Eşofman Altı", path: "/altgiyim/esofman" },
        { name: "Şort & Kapri", path: "/altgiyim/short" },
        { name: "Pijama Altı", path: "/altgiyim/pijama" },
        { name: "Tayt", path: "/altgiyim/tayt" },
      ],
    },
    {
      title: "Dış Giyim",
      items: [
        { name: "Ceket", path: "/disgiyim/ceket" },
        { name: "Mont", path: "/disgiyim/mont" },
        { name: "Kaban", path: "/disgiyim/kaban" },
        { name: "Trençkot", path: "/disgiyim/trenckot" },
        { name: "Panço", path: "/disgiyim/panco" },
      ],
    },
    {
      title: "Kadın Takım",
      items: [
        { name: "İkili Takım", path: "/takim/ikili-takim" },
        { name: "Eşofman Takımı", path: "/takim/esofman-takimi" },
        { name: "İç Çamaşırı Takım", path: "/takim/ic-takim" },
        { name: "Pijama Takımı", path: "/takim/pijama-takimi" },
      ],
    },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-white z-50 shadow-sm">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 h-[68px] flex items-center justify-between">
          <button
            onClick={() => setOpen(true)}
            className="p-2 rounded-md hover:bg-gray-100"
          >
            <Menu className="w-6 h-6" />
          </button>
          <div className="flex-1 flex justify-center">
            <Link
              href="/"
              className="font-serif text-2xl sm:text-3xl tracking-widest"
            >
              VELORA
            </Link>
          </div>
          <div className="flex gap-4 items-center">
            <Search className="w-5 h-5" />
            <User className="w-5 h-5" />
            <Link href="/cart" className="relative">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] px-1 rounded-full">
                0
              </span>
            </Link>
          </div>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-[9999] flex">
          <div
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black/40"
          />

          <aside
            className="relative bg-white w-[85%] sm:w-[60%] md:w-[45%] h-full shadow-xl p-5 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-md mb-4"
            >
              <X className="w-6 h-6" />
            </button>

            {categories.map((cat) => (
              <div key={cat.title} className="mb-6">
                <h3 className="text-sm font-semibold tracking-widest mb-3">
                  {cat.title}
                </h3>

                <ul className="space-y-2">
                  {cat.items.map((sub) => (
                    <li key={sub.path}>
                      <Link
                        href={sub.path}
                        onClick={() => setOpen(false)}
                        className="block py-2 text-[15px] text-gray-800 hover:text-[#B39B4C]"
                      >
                        {sub.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </aside>
        </div>
      )}
    </>
  );
}
