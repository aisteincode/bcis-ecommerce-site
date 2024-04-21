"use client";
import products from "@/products";
import Image from "next/image";
import { useState } from "react";
import { StarIcon } from "@heroicons/react/24/solid";

const MAX_RATING = 5;
const MIN_RATING = 1;

function ProductFeed() {
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );

  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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

          <div className="flex">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <StarIcon key={id} className="h-5 text-yellow-500" />
              ))}
          </div>

          <p className="text-xs my-2 line-clamp-2">{description}</p>

          <div className="mb-5">
            <p>{price}</p>
          </div>

          <button className="py-2 mt-auto border-2 font-medium border-gray-800 bg-transparent text-gray-800 active:bg-gray-200/20 focus:outline-none">
            Add to Basket
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductFeed;
