"use client";

import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { formatNumberWithCommas } from "../../helpers/formatters";
import { fetchFromDatoAPI } from "../../helpers/cms";

export default function Cars({ allBlogPosts }) {
  const post = allBlogPosts[0];

  return (
    <div className="bg-pink-100 min-h-screen w-full">
      {/* Applied bg-gray-100 */}
      <Navbar />

      <button className="mt-40 ml-96 text-center text-large  hover:bg-sky-300 hover:text-white">
        Click me
      </button>
      <div className="mt-40 grid lg:grid-cols-3 md:grid-cols-2 gap-x-8 gap-y-20">
        {post.images.map((image) => {
          return (
            <img
              key={image.id}
              className="object-cover size-full"
              src={image.url}
              alt="Car"
            />
          );
        })}
      </div>
    </div>
  );
}
