"use client"

import { useState } from "react"
import Navbar from "../components/Navbar"
import { useCartContext } from "../../context/CartContext"
import Button from "../components/Button"
import Link from "next/link"

export default function Products({ allCards }) {
  console.log(allCards)

  const { cart, handleAddToCart, handleRemoveFromCart, openCart, closeCart } =
    useCartContext()
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cartCount, setCartCount] = useState(0)

  const handleAddToCartAndShow = (prod) => {
    handleAddToCart(prod)
    openCart()
    setCartCount(cartCount + 1)
  }

  return (
    <div>
      <Navbar />
      <h1 className="mt-40 text-center text-3xl font-bold">
        Welcome to the Products Page
      </h1>
      <div className="mt-20 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 px-10">
        {allCards.map((product) => (
          <div key={product.title} className="w-full">
            <h2 className="text-2xl font-bold mb-6 text-center">
              <Link href={`/products/${product.slug}`}>{product.title}</Link>
            </h2>
            <div className="grid gap-6">
              {product.images.map((prod) => (
                <div
                  key={prod.id}
                  className="bg-white shadow-lg shadow-gray-600 rounded-lg overflow-hidden p-4"
                >
                  <img
                    className="w-full h-60 object-contain rounded-lg"
                    src={prod.url}
                    alt={prod.title}
                  />
                  <Button onClick={() => handleAddToCartAndShow(prod)}>
                    Add to Cart
                  </Button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Side Cart Drawer */}
    </div>
  )
}
