"use client"

import { useState } from "react"
import Navbar from "../components/Navbar"
import { useCartContext } from "../../context/CartContext"

export default function Button({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      className="mt-4 border border-gray-800 text-gray-800 font-semibold py-2 px-6 rounded-lg hover:bg-gray-800 hover:text-white transition duration-300 block mx-auto"
    >
      {children}
    </button>
  )
}
