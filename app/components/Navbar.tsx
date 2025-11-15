"use client";

import { useState } from "react";
import Link from "next/link";
import { ShoppingBag, Menu, X } from "lucide-react";

type Props = {
  cartCount?: number;
};

export default function Navbar({ cartCount = 0 }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);

  const leftMenuItems = [
    {
      title: "Koleksiyonlar",
      sub: [
        { name: "Sonbahar Favorileri", path: "/collections/fall" },
        { name: "Yeni Sezon", path: "/collections/new" },
        { name: "Denim", path: "/collections/denim" },
        { name: "Trend Parçalar", path: "/collections/trends" },
        { name: "Ofis Giyim", path: "/collections/office" },
      ],
    },
    {
      title: "Üst Giyim",
      sub: [
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
      sub: [
        { name: "Etek", path: "/altgiyim/etek" },
        { name: "Jeans Pantolon", path: "/altgiyim/jeans" },
        { name: "Pantolon", path: "/altgiyim/pantolon" },
        { name: "Eşofman Altı", path: "/altgiyim/esofman" },
        { name: "Şort & Kapri", path: "/altgiyim/short" },
        { name: "Pijama Altı", path: "/altgiyim/pijama" },
        { name: "Tayt", path: "/altgiyim/tayt" },
      ],
    },
  ];

  const rightMenuItems = [
    {
      title: "Dış Giyim",
      sub: [
        { name: "Ceket", path: "/disgiyim/ceket" },
        { name: "Mont", path: "/disgiyim/mont" },
        { name: "Kaban", path: "/disgiyim/kaban" },
        { name: "Trençkot", path: "/disgiyim/trenckot" },
        { name: "Panço", path: "/disgiyim/panco" },
      ],
    },
    {
      title: "Kadın Takım",
      sub: [
        { name: "İkili Takım", path: "/takim/ikili-takim" },
        { name: "Eşofman Takımı", path: "/takim/esofman-takimi" },
        { name: "İç Çamaşırı Takım", path: "/takim/ic-takim" },
        { name: "Pijama Takımı", path: "/takim/pijama-takimi" },
      ],
    },
    {
      title: "Koleksiyonlar",
      sub: [
        { name: "Lüks Serisi", path: "/collections/lux" },
        { name: "Kapsül Koleksiyon", path: "/collections/kapsul" },
        { name: "Premium Line", path: "/collections/premium" },
      ],
    },
  ];

  return (
    <header className="w-full bg-white/70 dark:bg-[#0a0a0a]/70 backdrop-blur-md shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Left Menu */}
        <nav className="hidden md:flex gap-10 text-[15px] font-medium text-gray-800 dark:text-gray-200 uppercase tracking-wide">
          {leftMenuItems.map((item) => (
            <div key={item.title} className="relative group">
              <button
                className="relative pb-1 bg-transparent border-none outline-none text-inherit cursor-pointer hover:text-[#B39B4C] transition-all duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#B39B4C] group-hover:after:w-full after:transition-all after:duration-300"
                style={{ backgroundColor: "transparent", boxShadow: "none", color: "#000000" }}
              >
                {item.title}
              </button>

              {/* Dropdown */}
              <div className="absolute left-0 top-full mt-3 w-[220px] bg-white dark:bg-[#1a1a1a] rounded-xl shadow-lg border border-gray-200/30 dark:border-gray-700/30 opacity-0 translate-y-4 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300 ease-out">
                <ul className="flex flex-col py-3 px-2">
                  {item.sub.map((sub) => (
                    <li key={sub.name}>
                      <Link
                        href={sub.path}
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-[#B39B4C] transition-colors duration-200"
                      >
                        {sub.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </nav>

        {/* Logo */}
        <Link href="/" className="text-3xl font-extrabold text-[#B39B4C] tracking-widest">
          VELORA
        </Link>

        {/* Right Menu */}
        <nav className="hidden md:flex gap-10 text-[15px] font-medium text-gray-800 dark:text-gray-200 uppercase tracking-wide">
          {rightMenuItems.map((item) => (
            <div key={item.title} className="relative group">
              <button
                className="relative pb-1 bg-transparent border-none outline-none text-inherit cursor-pointer hover:text-[#B39B4C] transition-all duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#B39B4C] group-hover:after:w-full after:transition-all after:duration-300"
                style={{ backgroundColor: "transparent", boxShadow: "none", color: "#000000" }}
              >
                {item.title}
              </button>

              {/* Dropdown */}
              <div className="absolute right-0 top-full mt-3 w-[220px] bg-white dark:bg-[#1a1a1a] rounded-xl shadow-lg border border-gray-200/30 dark:border-gray-700/30 opacity-0 translate-y-4 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300 ease-out">
                <ul className="flex flex-col py-3 px-2">
                  {item.sub.map((sub) => (
                    <li key={sub.name}>
                      <Link
                        href={sub.path}
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-[#B39B4C] transition-colors duration-200"
                      >
                        {sub.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <button onClick={() => setMenuOpen(!menuOpen)} className="p-1 bg-transparent border-none">
            {menuOpen ? (
              <X className="w-6 h-6 text-gray-700 dark:text-gray-200" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700 dark:text-gray-200" />
            )}
          </button>
          <Link href="/cart" className="relative p-1 bg-transparent border-none">
            <ShoppingBag className="w-6 h-6 text-gray-700 dark:text-gray-200" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 text-[11px] bg-rose-600 text-white rounded-full px-2">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-[#0a0a0a] py-6 border-t border-gray-200 dark:border-gray-700 flex flex-col items-center gap-3">
          {[...leftMenuItems, ...rightMenuItems].map((item) => (
            <details key={item.title} className="w-full px-6">
              <summary className="uppercase text-gray-700 dark:text-gray-200 font-semibold cursor-pointer hover:text-[#B39B4C]">
                {item.title}
              </summary>
              <ul className="mt-2 pl-3 text-sm text-gray-600 dark:text-gray-400">
                {item.sub.map((sub) => (
                  <li key={sub.name}>
                    <Link href={sub.path} className="block py-1 hover:text-[#B39B4C]">
                      {sub.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
          ))}
        </div>
      )}
    </header>
  );
}
