"use client";

import { use, useState } from "react";
import { PRODUCTS } from "../../data/products";
import { BsHeart } from "react-icons/bs";

export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="pt-40 text-center text-xl font-semibold">
        Ürün bulunamadı.
      </div>
    );
  }

  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [selectedSize, setSelectedSize] = useState("");

  return (
    <main className="product-detail-page px-4 lg:px-20 pt-32 pb-20 max-w-[1300px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="w-full">
          <img
            src={selectedImage}
            className="w-full aspect-[3/4] rounded-xl object-cover border border-neutral-200 shadow-sm"
          />

          <div className="flex mt-6 gap-4 overflow-x-auto">
            {product.images.map((img, i) => (
              <img
                key={i}
                src={img}
                onClick={() => setSelectedImage(img)}
                className={`
                  w-24 h-28 object-cover rounded-lg cursor-pointer transition
                  ${
                    selectedImage === img
                      ? "border-2 border-black shadow"
                      : "border border-neutral-300 hover:border-black"
                  }
                `}
              />
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-4xl font-semibold tracking-tight">
            {product.name}
          </h1>

          <p className="text-sm text-neutral-500 mt-2">
            Ürün Kodu: {product.code}
          </p>

          <p className="text-[32px] font-semibold mt-5">{product.price} TL</p>

          <p className="text-neutral-500 text-sm mt-1">{product.installment}</p>
          <div className="mt-8 text-[15px] text-neutral-700 space-y-3 leading-relaxed">
            <p>
              <span className="font-medium">Ürün İçeriği:</span>{" "}
              {product.content}
            </p>
            <p>
              <span className="font-medium">Manken Ölçüleri:</span>{" "}
              {product.modelInfo}
            </p>
            <p>
              <span className="font-medium">Ürün Ölçüleri:</span>{" "}
              {product.productSize}
            </p>
          </div>
          <div className="mt-10">
            <p className="text-sm font-medium mb-3">Beden:</p>

            <div className="flex gap-3 flex-wrap">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`size-btn ${selectedSize === size ? "selected" : ""}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4 mt-10">
            <button className="white-outline-btn flex-1">SEPETE EKLE</button>
            <button className="favorite-btn">
              <BsHeart size={22} />
            </button>
          </div>
          <Accordion title="YIKAMA TALİMATI">
            <p>30° hassas yıkama önerilir. Ağartıcı kullanmayınız.</p>
          </Accordion>

          <Accordion title="KARGO & İADE">
            <p>
              2–4 iş günü teslimat. 14 gün içinde ücretsiz iade hakkı vardır.
            </p>
          </Accordion>
        </div>
      </div>
    </main>
  );
}

function Accordion({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-6 border-t">
      <button
        onClick={() => setOpen(!open)}
        className={`accordion-header ${open ? "open" : ""}`}
      >
        {title}
        <span className="text-xl">{open ? "−" : "+"}</span>
      </button>

      {open && <div className="accordion-content">{children}</div>}
    </div>
  );
}
