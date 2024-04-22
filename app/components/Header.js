"use client";
import Link from "next/link";
import { UserButton, useUser } from "@clerk/nextjs";
import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/solid";
import { useSelector } from "react-redux";
import { selectItems } from "@/lib/slices/basketSlice";

function Header() {
  const { user, isLoaded } = useUser();
  const items = useSelector(selectItems);

  return (
    <div className="flex flex-col md:flex-row items-center p-5 bg-[#e11d48]">
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-br from-pink-400 to-[#0055D1] rounded-md filter blur-3xl opacity-60 -z-50" />
      {/* Logo */}
      <Link href="/">
        <div className="flex flex-col text-white p-2 pl-5 font-bold">
          <h1>BCIS</h1>
          <h2>Ecommerce Website</h2>
        </div>
      </Link>

      {/* Search Bar */}
      <div className="flex items-center space-x-5 flex-1 justify-end w-full">
        <form className="flex items-center space-x-5 bg-white rounded-md p-2 ml-2 shadow-md flex-initial md:flex-1">
          <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="flex-1 outline-none p-2"
          />
          <button hidden type="submit">
            Search
          </button>
        </form>

        {/* Account & List + Authentication */}
        {isLoaded && user ? (
          <>
            <div className="cursor-pointer text-white text-xs hover:underline">
              <p>Hello, {user.firstName}</p>
              <p className="font-extrabold md:text-sm">Account & Lists</p>
            </div>
            <UserButton afterSignOutUrl="/" />
          </>
        ) : (
          <Link href="/sign-up">
            <div className="cursor-pointer text-white text-xs hover:underline">
              <p>Hello, Sign In</p>
              <p className="font-extrabold md:text-sm">Account & Lists</p>
            </div>
          </Link>
        )}

        {/* Cart */}
        {isLoaded && user && (
          <Link href="/checkout">
            <div className="relative flex items-center">
              <span className="absolute top-0 right-0 h-4 w-4 bg-pink-400 text-center rounded-full text-xs font-bold text-white">
                {items.length}
              </span>
              <ShoppingCartIcon className="h-10 w-10 text-white pr-2" />
            </div>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Header;
