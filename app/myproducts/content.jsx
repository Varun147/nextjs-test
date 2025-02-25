"use client"

import { useState } from "react"
import Navbar from "../components/Navbar"

export default function MyProducts({ allProducts }) {
  const [isOpen, setIsOpen] = useState(false)
  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)

  const openCart = () => {
    setIsOpen(true)
  }

  console.log(isOpen)
  const closeCart = () => {
    setIsOpen(false)
  }

  const addToCart = (product) => {
    const phoneExists = cart.find((item) => item.id === product.id)
    if (phoneExists) {
      const updateCart = cart.map((item) => {
        if (item.id === product.id) {
          item.quantity += 1
        }
        return item
      })
      setCart(updateCart)
    } else {
      const productQuantity = {
        ...product,
        quantity: 1,
      }
      setCart([...cart, productQuantity])
    }
  }

  const addAndShow = (prod) => {
    addToCart(prod)
    openCart()
    setTotal(total + 1)
  }

  const removeFromCart = (product) => {
    const phoneExists = cart.find((item) => item.id === product.id)
    if (phoneExists) {
      const updateCart = cart
        .map((item) => {
          if (item.id === product.id) {
            return { ...item, quantity: (item.quantity -= 1) }
          }
          return item
        })
        .filter((item) => item.quantity > 0)
      setCart(updateCart)
    }
  }

  return (
    <div>
      <Navbar />
      <p className="mt-28 text-center">My Products page</p>

      <div>
        {allProducts.map((category) => (
          <div key={category.title}>
            <p>{category.title}</p>
            <div>
              {category.images.map((prod) => (
                <div key={prod.id}>
                  <img src={prod.url} alt={prod.title} />
                  <button onClick={() => addAndShow(prod)}>Add To Cart</button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {isOpen && (
        <div className="fixed z-50 bg-white right-0 top-0 h-full overflow-y-auto ">
          <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
          {cart.length > 0 ? (
            cart.map((item, index) => (
              <div key={index} className="border-b p-2">
                <img className="object-contain rounded-none" src={item.url} />
                <p className="text-gray-600">
                  Qty: {item.quantity}
                  <button
                    className="ml-28 border border-x-slate-700 border-y-slate-500"
                    onClick={() => addToCart(item)}
                  >
                    +
                  </button>
                  <button
                    className="ml-10 border border-x-slate-700 border-y-slate-500"
                    onClick={() => removeFromCart(item)}
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
