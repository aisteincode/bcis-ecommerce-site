"use client";
import products from "@/products";
import Image from "next/image";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToBasket } from "@/lib/slices/basketSlice";

function ProductFeed() {
  const dispatch = useDispatch();

  const addItemToBasket = () => {
    const product = products.map(product);

    // Sending the product as an actino to the redux store... (basket)
    dispatch(addToBasket(product));
  };

  return (
    <div className="max-w-screen-xl mx-auto grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map(({ id, title, price, description, category, image }) => (
        // Each individual product component here...
        <div
          key={id}
          className="relative flex flex-col m-5 bg-white z-30 p-10 rounded-md shadow-lg"
        >
          <p className="absolute top-2 right-2 text-xs italic text-gray-400">
            {category}
          </p>

          <Image
            className="object-contain"
            src={image}
            alt="Picture of the product"
            height={200}
            width={200}
          />

          <h4 className="my-3">{title}</h4>

          <p className="text-xs my-2 line-clamp-2">{description}</p>

          <div className="mb-5">
            <p>{price}</p>
          </div>

          <button
            onClick={addItemToBasket}
            className="py-2 mt-auto border-2 font-medium border-gray-800 bg-transparent text-gray-800 active:bg-gray-200/20 focus:outline-none"
          >
            Add to Basket
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductFeed;
