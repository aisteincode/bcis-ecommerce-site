import Banner from "./components/Banner";
import Header from "./components/Header";
import ProductFeed from "./components/ProductFeed";

export default function Home() {
  return (
    <main className="bg-gray-400/10">
      {/* Header */}
      <Header />

      <div>
        {/* Banner */}
        <Banner />

        {/* ProductFeed */}
        <ProductFeed />
      </div>
    </main>
  );
}
