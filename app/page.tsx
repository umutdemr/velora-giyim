import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";
import InspirationGallery from "./components/InspirationGallery";

export default function HomePage() {
  return (
    <div className="bg-[#fefcfb] text-gray-900">
      <Hero />
      <ProductGrid />
      <InspirationGallery />
    </div>
  );
}
