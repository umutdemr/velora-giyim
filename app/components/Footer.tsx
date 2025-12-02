"use client";
import { Instagram, Mail, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-[#f8f3ef] via-[#f4e9da] to-[#e8dbc6] text-gray-800 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-12 text-center border-b border-white/40">
        <h2 className="text-3xl font-semibold text-gray-900 mb-3 tracking-wide">
          Velora Butik
        </h2>
        <p className="text-gray-700 max-w-xl mx-auto mb-6 leading-relaxed">
          Yeni sezon koleksiyonlarından ilk sen haberdar ol. Fırsatları kaçırma! 💌
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

      <div className="
        max-w-7xl mx-auto px-6 py-16 
        grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12
        text-center sm:text-left
      ">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4 tracking-wide border-l-4 border-[#b89b5e] pl-3 inline-block">
            Hakkımızda
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Velora Butik, zarafet ve modern tarzın buluştuğu,
            özgün koleksiyonlarıyla modayı yeniden tanımlar.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4 tracking-wide border-l-4 border-[#b89b5e] pl-3 inline-block">
            Yardım
          </h3>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>
              <a href="#" className="hover:text-[#b89b5e] transition-colors">S.S.S</a>
            </li>
            <li>
              <a href="#" className="hover:text-[#b89b5e] transition-colors">Kargo & Teslimat</a>
            </li>
            <li>
              <a href="#" className="hover:text-[#b89b5e] transition-colors">İade Politikası</a>
            </li>
            <li>
              <a href="#" className="hover:text-[#b89b5e] transition-colors">Gizlilik Politikası</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4 tracking-wide border-l-4 border-[#b89b5e] pl-3 inline-block">
            İletişim
          </h3>
          <ul className="space-y-2 text-gray-700 text-sm mb-6">
            <li>velorakadingiyimm@gmail.com</li>
            <li>+90 542 713 97 14</li>
            <li>İstanbul, Türkiye</li>
          </ul>

          <div className="flex justify-center sm:justify-start space-x-6">
            <a
              href="https://www.instagram.com/velora__giyim/"
              target="_blank"
              className="text-gray-700 hover:text-[#b89b5e] transition-transform transform hover:scale-110"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://wa.me/905427139714?text=Merhaba%20Velora%20Butik%2C%20%C3%BCr%C3%BCn%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
              target="_blank"
              className="text-gray-700 hover:text-[#25D366] transition-transform transform hover:scale-110"
            >
              <MessageCircle size={24} />
            </a>
            <a
              href="mailto:velorakadingiyimm@gmail.com"
              className="text-gray-700 hover:text-red-500 transition-transform transform hover:scale-110"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="bg-[#e8dbc6]/60 py-6 text-center text-sm text-gray-700 border-t border-white/30">
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold text-gray-900">Velora Butik</span> — Zarafetin Yeni Adı.
      </div>
    </footer>
  );
}
