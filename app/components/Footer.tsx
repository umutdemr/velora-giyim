"use client";
import { Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-[#f8f3ef] via-[#f4e9da] to-[#e8dbc6] text-gray-800 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-12 text-center border-b border-white/40">
        <h2 className="text-3xl font-semibold text-gray-900 mb-3 tracking-wide">
          Velora Butik
        </h2>
        <p className="text-gray-700 max-w-xl mx-auto mb-6 leading-relaxed">
          Yeni sezon koleksiyonlarından ilk sen haberdar ol. Fırsatları kaçırma!
          💌
        </p>
        <div className="flex justify-center max-w-md mx-auto">
          <input
            type="email"
            placeholder="E-posta adresini gir"
            className="flex-1 px-4 py-3 rounded-l-full border border-gray-300 focus:outline-none focus:border-[#b89b5e] placeholder-gray-500"
          />
          <button className="bg-[#b89b5e] hover:bg-[#a48647] text-white px-6 py-3 rounded-r-full font-medium transition-colors duration-300">
            Abone Ol
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4 tracking-wide border-l-4 border-[#b89b5e] pl-3">
            Hakkımızda
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Velora Butik, zarafet ve modern tarzın birleştiği özel
            koleksiyonlarıyla modayı yeniden tanımlar. Her parça, özgün bir
            hikaye anlatır.
          </p>

        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4 tracking-wide border-l-4 border-[#b89b5e] pl-3">
            Yardım
          </h3>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>
              <a href="#" className="hover:text-[#b89b5e] transition-colors">
                S.S.S
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#b89b5e] transition-colors">
                Kargo & Teslimat
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#b89b5e] transition-colors">
                İade Politikası
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#b89b5e] transition-colors">
                Gizlilik Politikası
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4 tracking-wide border-l-4 border-[#b89b5e] pl-3">
            İletişim
          </h3>
          <ul className="space-y-2 text-gray-700 text-sm mb-6">
            <li>info@velorabutik.com</li>
            <li>+90 555 123 45 67</li>
            <li>İstanbul, Türkiye</li>
          </ul>

          <div className="flex space-x-6">
            <a
              href="#"
              className="text-gray-700 hover:text-[#b89b5e] transition-transform transform hover:scale-110"
            >
              <Instagram size={22} />
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-[#b89b5e] transition-transform transform hover:scale-110"
            >
              <Facebook size={22} />
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-[#b89b5e] transition-transform transform hover:scale-110"
            >
              <Twitter size={22} />
            </a>
          </div>
        </div>
      </div>

      <div className="bg-[#e8dbc6]/60 py-6 text-center text-sm text-gray-700 border-t border-white/30">
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold text-gray-900">Velora Butik</span> —
        Zarafetin Yeni Adı.
      </div>
    </footer>
  );
}
