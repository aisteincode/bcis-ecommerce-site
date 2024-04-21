"use client";
import Link from "next/link";
import { React, useState } from "react";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useRouter } from "next/navigation";

function login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const signIn = (e) => {
    e.preventDefault();

    // firebase stuff
    signInWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        router.push("/");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const register = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        // Signed up
        console.log(auth);
        // redirects to home page if logged in
        if (auth) {
          router.push("/");
        }
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className="relative flex flex-col items-center h-lvh">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-rose-400 to-blue-600 filter blur-3xl opacity-60 -z-10" />

      <Link href="/">
        <div className="flex flex-col text-black p-5 m-10 items-center text-center border-2 border-gray-800">
          <h1 className="font-extrabold">BCIS</h1>
          <h2 className="font-bold">E-commerce Site</h2>
        </div>
      </Link>

      <div className="w-80 h-fit flex flex-col rounded-md border-2 border-600 p-5">
        <h1 className="text-2xl font-medium mb-5">Sign In</h1>

        <form className="space-y-5">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-8 mb-2 bg-transparent border-b w-5/6 rounded-sm focus:outline-none focus:border-purple-600 focus:border-b-2 transition-colors duration-500"
            placeholder="Email"
            type="text"
          />

          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="h-8 mb-2 bg-transparent border-b w-5/6 rounded-sm focus:outline-none focus:border-purple-600 focus:border-b-2 transition-colors duration-500"
            placeholder="Password"
            type="password"
          />

          <button
            type="submit"
            onClick={signIn}
            className="relative border-2 font-medium border-gray-800 bg-transparent py-2.5 px-5 mt-5 text-gray-800 active:bg-gray-200/20"
          >
            Sign In
          </button>
        </form>

        <p className="mt-3 text-xs text-gray-300">
          By signing-in you agree to the BCIS E-commerce platform's Conditions
          of Use & Sale. Please see our Privacy Notice, our Cookies Notiece and
          our Interest-Based Ads Notice.
        </p>

        <button
          onClick={register}
          type="submit"
          className="relative border-2 font-medium border-gray-800 bg-transparent py-2.5 px-5 mt-5 text-gray-800 active:bg-gray-200/20"
        >
          Create your account
        </button>
      </div>
    </div>
  );
}

export default login;
