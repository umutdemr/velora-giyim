"use client";

import Link from "next/link";
import { use } from "react";
import { PRODUCTS } from "@/app/data/products";

export default function AltGiyimPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const filteredProducts = PRODUCTS.filter((p) => p.category === slug);

  const titles: Record<string, string> = {
    pantolon: "Pantolon Koleksiyonu 👖",
    etek: "Etek Koleksiyonu 👗",
    jeans: "Jean Koleksiyonu 👖",
    tayt: "Tayt Koleksiyonu 🧘‍♀️",
    sort: "Şort Koleksiyonu 🩳",
    tulum: "Tulum Koleksiyonu 🌟",
  };

  const descriptions: Record<string, string> = {
    pantolon:
      "Ofis şıklığından günlük stile uzanan pantolon koleksiyonumuzu keşfet.",
    etek: "Feminen ve zarif etek modelleriyle tarzına farklı bir dokunuş kat.",
    jeans:
      "Rahat ve modern jean koleksiyonumuzla her ana uygun kombinler oluştur.",
    tayt: "Spor ve günlük kullanım için konforlu tayt modelleriyle tanış.",
    sort: "Sıcak günlerde özgürlüğü hissetmek için şort koleksiyonumuzu incele.",
    tulum:
      "Şık, modern ve tek parça rahatlığı sunan tulum modellerimizle tanış.",
  };

  const title = titles[slug] || "Alt Giyim Koleksiyonu 👖";
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

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Link key={product.id} href={`/urun/${product.slug}`}>
                <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group cursor-pointer">
                  <div className="overflow-hidden">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5 text-center">
                    <h3 className="text-lg font-semibold mb-2">
                      {product.name}
                    </h3>
                    <p className="text-[#B39B4C] font-medium">
                      ₺{product.price}
                    </p>
                  </div>
                </div>
              </Link>
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
