"use client";

import { useMemo } from "react";

type Product = {
  id: number;
  name: string;
  price: string;
  image: string;
};

export default function DisGiyimPage({ params }: { params: { slug: string } }) {
  // 🔸 Ürün verilerini slug’a göre dinamik tanımlıyoruz
  const productsData: Record<string, Product[]> = {
    ceket: [
      { id: 1, name: "Siyah Blazer Ceket", price: "₺1299", image: "/images/ust2.png" },
      { id: 2, name: "Krem Renk Oversize Ceket", price: "₺1199", image: "/images/ust1.png" },
    ],
    kazak: [
      { id: 1, name: "Crop Triko Kazak", price: "₺649", image: "/images/ust3.png" },
      { id: 2, name: "Boğazlı Yün Kazak", price: "₺799", image: "/images/5.png" },
    ],
    gomlek: [
      { id: 1, name: "Klasik Beyaz Gömlek", price: "₺799", image: "/images/ust1.png" },
      { id: 2, name: "Saten Düğmeli Gömlek", price: "₺899", image: "/images/6.png" },
    ],
  };

  const titles: Record<string, string> = {
    ceket: "Ceket Koleksiyonu 🧥",
    kazak: "Kazak Koleksiyonu 🧶",
    gomlek: "Gömlek Koleksiyonu 👚",
  };

  const descriptions: Record<string, string> = {
    ceket: "Zarif ve güçlü duruşun için özel olarak tasarlanan ceket modellerimizi keşfet.",
    kazak: "Soğuk günlerde sıcak tutan ve stilini tamamlayan kazak seçenekleri burada.",
    gomlek: "Klasik ve modern çizgilerle öne çıkan gömlek koleksiyonumuzla tarzını yansıt.",
  };

  const products = useMemo(() => productsData[params.slug] || [], [params.slug]);
  const title = titles[params.slug] || "Üst Giyim Koleksiyonu 👕";
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
