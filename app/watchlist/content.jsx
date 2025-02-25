"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import { formatNumberWithCommas } from "../../helpers/formatters";

export default function Watchlist() {
  const [price, setPrice] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchPrice = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://api.coincap.io/v2/assets");
      const data = await res.json();
      setPrice(data);
    } catch (error) {
      console.error("Error fetching price:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-pink-100 min-h-screen w-full">
      {/* Applied bg-gray-100 */}
      <Navbar />
      <div className="mt-40 ml-96 text-center text-large">
        <h1>Watchlist</h1>
        <button
          className="border p-2 text-sm hover:bg-black hover:text-white "
          onClick={fetchPrice}
          disabled={loading}
        >
          {loading ? "Loading..." : "Click Me"}
        </button>
        <div className="mt-20 mb-20 ml-96 absolute">
          <table className="border-collapse">
            <thead>
              <tr>
                <th className="border p-2 text-center bg-gray-300">Name</th>
                <th className="border p-2 text-center bg-gray-300">
                  Market Capital
                </th>
                <th className="border p-2 text-center bg-gray-300">Price</th>
              </tr>
            </thead>
            <tbody>
              {price?.data &&
                price.data.map((item, i) => (
                  <tr key={i}>
                    <td className="border p-2 text-wrap bg-gray-200">
                      {item.name}
                    </td>
                    <td className="border p-2 text-wrap bg-gray-200">
                      {formatNumberWithCommas(item.marketCapUsd)}
                    </td>
                    <td className="border p-2 text-wrap bg-gray-200">
                      {formatNumberWithCommas(item.priceUsd)}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
