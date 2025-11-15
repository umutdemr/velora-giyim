"use client";

import { useMemo } from "react";

type Product = {
  id: number;
  name: string;
  price: string;
  image: string;
};

export default function TakimPage({ params }: { params: { slug: string } }) {
  // 🔸 Ürün verileri (slug’a göre)
  const productsData: Record<string, Product[]> = {
    pantolon: [
      { id: 1, name: "Yüksek Bel Kumaş Pantolon", price: "₺899", image: "/images/alt1.png" },
      { id: 2, name: "Geniş Paça Palazzo Pantolon", price: "₺999", image: "/images/alt2.png" },
    ],
    etek: [
      { id: 1, name: "Midi Deri Etek", price: "₺749", image: "/images/alt3.png" },
      { id: 2, name: "Pileli Mini Etek", price: "₺699", image: "/images/alt4.png" },
    ],
    jeans: [
      { id: 1, name: "Mom Fit Jean", price: "₺849", image: "/images/alt5.png" },
      { id: 2, name: "Straight Fit Jean", price: "₺899", image: "/images/alt6.png" },
    ],
    tayt: [
      { id: 1, name: "Yüksek Bel Spor Tayt", price: "₺549", image: "/images/alt7.png" },
      { id: 2, name: "Parlak Siyah Tayt", price: "₺599", image: "/images/alt8.png" },
    ],
    short: [
      { id: 1, name: "Kot Şort", price: "₺499", image: "/images/alt9.png" },
      { id: 2, name: "Keten Şort", price: "₺449", image: "/images/alt10.png" },
    ],
  };

  // 🔸 Başlıklar
  const titles: Record<string, string> = {
    pantolon: "Pantolon Koleksiyonu 👖",
    etek: "Etek Koleksiyonu 👗",
    jeans: "Jean Koleksiyonu 👖",
    tayt: "Tayt Koleksiyonu 🧘‍♀️",
    short: "Şort Koleksiyonu 🩳",
  };

  // 🔸 Açıklamalar
  const descriptions: Record<string, string> = {
    pantolon: "Ofis şıklığından günlük stile uzanan pantolon koleksiyonumuzu keşfet.",
    etek: "Feminen ve zarif etek modelleriyle tarzına farklı bir dokunuş kat.",
    jeans: "Rahat ve modern jean koleksiyonumuzla her ana uygun kombinler oluştur.",
    tayt: "Spor ve günlük kullanım için konforlu tayt modelleriyle tanış.",
    short: "Sıcak günlerde özgürlüğü hissetmek için şort koleksiyonumuzu incele.",
  };

  const products = useMemo(() => productsData[params.slug] || [], [params.slug]);
  const title = titles[params.slug] || "Alt Giyim Koleksiyonu 👖";
  const description = descriptions[params.slug] || "";

  return (
    <main className="pt-28 px-8 min-h-screen bg-[#fefcfb] text-gray-900">
      <section className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-semibold mb-4 text-center text-[#B39B4C] tracking-wide">
          {title}
        </h1>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          {description}
        </p>

        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group cursor-pointer"
              >
                <div className="overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 text-center">
                  <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                  <p className="text-[#B39B4C] font-medium">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 mt-10">
            Bu kategoriye ait ürün bulunmamaktadır.
          </p>
        )}
      </section>
    </main>
  );
}
