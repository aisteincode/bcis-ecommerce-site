import Banner from "./Banner";
import Header from "./Header";
import ProductFeed from "./ProductFeed";
import products from "@/products";

export default function Home() {
  return (
    <main className="bg-gray-400/10">
      {/* Header */}
      <Header />

      <div className="max-w-screen-xl mx-auto">
        {/* Banner */}
        <Banner />

        <ProductFeed />
      </div>
    </main>
  );
}
