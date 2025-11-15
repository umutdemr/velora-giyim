"use client";

import { use, useMemo } from "react";

type Product = {
  id: number;
  name: string;
  price: string;
  image: string;
};

export default function CollectionPage({ params }: { params: Promise<{ slug: string }> }) {
  // ✅ Next.js 15 gereği params bir Promise, use() ile çözüyoruz
  const { slug } = use(params);

  const productsData: Record<string, Product[]> = {
    fall: [
      { id: 1, name: "Karamel Renk Triko Kazak", price: "₺749", image: "/images/5.png" },
      { id: 2, name: "Yüksek Bel Kadife Pantolon", price: "₺899", image: "/images/6.png" },
      { id: 3, name: "Oversize Hırka", price: "₺999", image: "/images/7.png" },
    ],
    // ustgiyim: [
    //   { id: 1, name: "Klasik Beyaz Gömlek", price: "₺799", image: "/images/ust1.png" },
    //   { id: 2, name: "Siyah Blazer Ceket", price: "₺1299", image: "/images/ust2.png" },
    //   { id: 3, name: "Crop Triko Kazak", price: "₺649", image: "/images/ust3.png" },
    // ],
    // abiye: [
    //   { id: 1, name: "Dantel Detaylı Abiye", price: "₺1499", image: "/images/abiye1.png" },
    //   { id: 2, name: "Saten Uzun Abiye", price: "₺1699", image: "/images/abiye2.png" },
    // ],
  };

  const titles: Record<string, string> = {
    fall: "Sonbahar Favorileri 🍂",
    ustgiyim: "Üst Giyim Koleksiyonu 👚",
    abiye: "Abiye Koleksiyonu ✨",
  };

  const descriptions: Record<string, string> = {
    fall:
      "Mevsimin sıcak tonlarını ve rahat dokularını bir araya getiren Sonbahar Koleksiyonumuzla stiline zarafet kat.",
    ustgiyim:
      "Şıklığı ve rahatlığı bir araya getiren üst giyim koleksiyonumuzla tarzını ön plana çıkar.",
    abiye:
      "Her özel gecede parlaman için tasarlanan zarif abiye koleksiyonumuzu keşfet.",
  };

  const products = useMemo(() => productsData[slug] || [], [slug]);
  const title = titles[slug] || "Koleksiyon";
  const description = descriptions[slug] || "";

  return (
    <main className="pt-28 px-8 min-h-screen bg-[#fefcfb] text-gray-900">
      <section className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-semibold mb-4 text-center text-[#B39B4C] tracking-wide">
          {title}
        </h1>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">{description}</p>

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
            Bu koleksiyonda şu anda ürün bulunmamaktadır.
          </p>
        )}
      </section>
    </main>
  );
}
