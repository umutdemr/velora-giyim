import Hero from "./components/Hero";
import CollectionsSlider from "./components/CollectionsSlider";
import ProductGrid from "./components/ProductGrid";
import InspirationGallery from "./components/InspirationGallery";
import Footer from "./components/Footer";
import { COLLECTIONS } from "./data/collections";

export default function HomePage() {
  return (
    <div className="bg-[#fefcfb] text-gray-900">
      <Hero />
      <CollectionsSlider data={COLLECTIONS} />
      <ProductGrid />
      <InspirationGallery />
      <Footer />
    </div>
  );
}
