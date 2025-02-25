"use client"

import { useCartContext } from "../../context/CartContext"
import { useState } from "react"

export default function SideCart({
  cart,
  handleAddToCart,
  handleRemoveFromCart,
  isCartOpen,
  setIsCartOpen,
}) {
  const [cartCount, setCartCount] = useState(0)

  const handleAddToCartAndShow = (prod) => {
    handleAddToCart(prod)
    setIsCartOpen(true) // Open the cart after adding an item
    setCartCount(cartCount + 1)
  }

  return (
    <div>
      {isCartOpen && (
        <div className="fixed z-50 overflow-y-auto top-0 right-0 w-96 h-full bg-white shadow-xl p-6 transition-transform transform translate-x-0">
          <button
            className="absolute top-4 right-4 text-xl"
            onClick={() => setIsCartOpen(false)}
          >
            ✖
          </button>
          <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
          {cart.length > 0 ? (
            cart.map((item, index) => (
              <div key={index} className="border-b p-2">
                <img className="object-contain rounded-none" src={item.url} />
                <p className="text-gray-600 mt-10">
                  Qty: {item.quantity}
                  <button
                    className="w-8 h-8 ml-16 border-2 border-slate-600 rounded-full 
                 text-slate-700 font-bold hover:bg-slate-100 
                   focus:ring-slate-400"
                    onClick={() => handleAddToCartAndShow(item)}
                  >
                    +
                  </button>
                  <button
                    className="w-8 h-8 ml-16 border-2 border-slate-600 rounded-full 
                 text-slate-700 font-bold hover:bg-slate-100 
                 focus:outline-none focus:ring-2 focus:ring-slate-400"
                    onClick={() => handleRemoveFromCart(item)}
                  >
                    -
                  </button>
                </p>
              </div>
            ))
          ) : (
            <p className="text-gray-500">Your cart is empty.</p>
          )}
        </div>
      )}
    </div>
  )
}
