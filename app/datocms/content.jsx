"use client";

import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { formatNumberWithCommas } from "../../helpers/formatters";
import { fetchFromDatoAPI } from "../../helpers/cms";
import { homepageQuery } from "../../graphql/queries.js";

export default function Watchlist({ homepage }) {
  return (
    <div className="bg-pink-100 min-h-screen w-full">
      {/* Applied bg-gray-100 */}
      <Navbar />
      <div className="mt-40 ml-96 text-center text-large">
        <h1>{homepage.title}</h1>
      </div>
    </div>
  );
}
