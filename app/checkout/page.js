"use client";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import { selectItems } from "@/lib/slices/basketSlice";

function Checkout() {
  const items = useSelector(selectItems);

  return (
    <div>
      <Header />

      <main className="lg:flex max-w-screen-2xl mx-auto">
        {/* Shopping Basket Items */}
        <div className="flex flex-grow flex-col m-5 p-5 space-y-10 bg-white rounded-md">
          <h1 className="text-2xl font-medium border-b pb-4">
            {items.length === 0 ? "Your Basket is empty" : "Shopping Basket"}
          </h1>
        </div>

        {/* Checkout price */}
        <div></div>
      </main>
    </div>
  );
}

export default Checkout;
