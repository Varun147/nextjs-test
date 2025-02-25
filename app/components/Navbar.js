"use client"

import cx from "classnames"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import cart_icon from "../images/cart_icon.png"
import { useCartContext } from "../../context/CartContext"
import Button from "../components/Button"

export default function Navbar() {
  const { cart, handleAddToCart, handleRemoveFromCart, openCart, closeCart } =
    useCartContext()
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <div className="fixed top-0 right-2 z-[49]">
        <Button onClick={() => openCart()}>
          <Image
            className="size-5 cursor-pointer"
            src={cart_icon}
            alt="cart_icon"
          />
        </Button>
      </div>

      <nav className="fixed top-0 left-0 w-full z-40 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Hamburger Button (visible on md and below) */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-sky-600 hover:text-sky-800 focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>

            {/* Desktop Menu (hidden on md and below) */}
            <ul className="hidden md:flex items-center gap-8 ml-auto mr-auto">
              <li className="text-lg font-bold hover:bg-sky-400 transition duration-300">
                <Link
                  href="/"
                  className="text-sky-600 hover:text-white px-3 py-2 block"
                >
                  Home
                </Link>
              </li>
              <li className="text-lg font-bold hover:bg-sky-400 transition duration-300">
                <Link
                  href="/products"
                  className="text-sky-600 hover:text-white px-3 py-2 block"
                >
                  Products
                </Link>
              </li>
              <li className="text-lg font-bold hover:bg-sky-400 transition duration-300">
                <Link
                  href="/myproducts"
                  className="text-sky-600 hover:text-white px-3 py-2 block"
                >
                  MyProducts
                </Link>
              </li>
              <li className="text-lg font-bold hover:bg-sky-400 transition duration-300">
                <Link
                  href="/mycart"
                  className="text-sky-600 hover:text-white px-3 py-2 block"
                >
                  MyCart
                </Link>
              </li>
              <li className="text-lg font-bold hover:bg-sky-400 transition duration-300">
                <Link
                  href="/about"
                  className="text-sky-600 hover:text-white px-3 py-2 block"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Mobile Menu (slides from left) */}
          <div
            className={cx(
              "md:hidden fixed top-16 left-0 w-64 bg-white shadow-lg transform transition-all duration-300",
              {
                "opacity-0 scale-95": !isMenuOpen,
              }
            )}
          >
            <ul className="flex flex-col p-4 space-y-2">
              <li className="text-lg font-bold hover:bg-sky-400 transition duration-300">
                <Link
                  href="/"
                  className="text-sky-600 hover:text-white px-3 py-2 block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li className="text-lg font-bold hover:bg-sky-400 transition duration-300">
                <Link
                  href="/products"
                  className="text-sky-600 hover:text-white px-3 py-2 block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Products
                </Link>
              </li>
              <li className="text-lg font-bold hover:bg-sky-400 transition duration-300">
                <Link
                  href="/myproducts"
                  className="text-sky-600 hover:text-white px-3 py-2 block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  MyProducts
                </Link>
              </li>
              <li className="text-lg font-bold hover:bg-sky-400 transition duration-300">
                <Link
                  href="/mycart"
                  className="text-sky-600 hover:text-white px-3 py-2 block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  MyCart
                </Link>
              </li>
              <li className="text-lg font-bold hover:bg-sky-400 transition duration-300">
                <Link
                  href="/about"
                  className="text-sky-600 hover:text-white px-3 py-2 block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
