"use client";

import { use, useMemo } from "react";

type Product = {
  id: number;
  name: string;
  price: string;
  image: string;
};

export default function DisGiyimPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);

  const productsData: Record<string, Product[]> = {
    kaban: [
      { id: 1, name: "Yün Kaban", price: "₺1599", image: "/images/4.png" },
      { id: 2, name: "Kaşe Kaban", price: "₺1799", image: "/images/5.png" },
    ],
    ceket: [
      {
        id: 1,
        name: "Siyah Blazer Ceket",
        price: "₺1299",
        image: "/images/6.png",
      },
      {
        id: 2,
        name: "Oversize Blazer",
        price: "₺1399",
        image: "/images/7.png",
      },
    ],
    trenckot: [
      {
        id: 1,
        name: "Klasik Bej Trençkot",
        price: "₺1499",
        image: "/images/5.png",
      },
      {
        id: 2,
        name: "Kemerli Trençkot",
        price: "₺1699",
        image: "/images/6.png",
      },
    ],
    mont: [
      { id: 1, name: "Şişme Mont", price: "₺1199", image: "/images/7.png" },
      { id: 2, name: "Kısa Peluş Mont", price: "₺999", image: "/images/8.png" },
    ],
  };

  const titles: Record<string, string> = {
    kaban: "Kaban Koleksiyonu 🧥",
    ceket: "Ceket Koleksiyonu 🧥",
    trenckot: "Trençkot Koleksiyonu 🧥",
    mont: "Mont Koleksiyonu 🧥",
  };

  const descriptions: Record<string, string> = {
    kaban:
      "Soğuk havalarda sıcak tutan ve şıklığını tamamlayan kaban modellerimiz senin için seçildi.",
    ceket:
      "Her stile uyum sağlayan modern ve şık ceket koleksiyonumuzla görünümünü güçlendir.",
    trenckot:
      "Zamansız tasarımlarla stilini öne çıkaran trençkot modellerimizi keşfet.",
    mont: "Rahat ve sıcak tutan mont modelleriyle kışa hazır ol.",
  };

  const products = useMemo(() => productsData[slug] || [], [slug]);
  const title = titles[slug] || "Dış Giyim Koleksiyonu 🧥";
  const description = descriptions[slug] || "";

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
