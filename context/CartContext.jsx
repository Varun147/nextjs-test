"use client"
import { createContext, use, useState } from "react"
import SideCart from "../app/components/SideCart"

export const CartContext = createContext(undefined)

export const CartProvider = ({ children }) => {
  // Stores the products array in the cart state
  const [cart, setCart] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const openCart = () => {
    setIsCartOpen(true)
  }

  const closeCart = () => {
    setIsCartOpen(false)
  }

  // Adds to the cart by appending the product to the end of the cart array
  const handleAddToCart = (product) => {
    // Find the product in the existing cart array
    const productExists = cart.find((item) => item.id === product.id)
    if (productExists) {
      // If the product exists, do not add a new one, just update the quantity property
      const updatedCart = cart.map((item) => {
        if (item.id === product.id) {
          item.quantity += 1 //same as item.quantity = item.quantity + 1
        }
        return item
      })
      setCart(updatedCart)
    } else {
      // If the product does not exist, add a new entry with quantity initialised to 1
      const productWithQuantity = {
        ...product,
        quantity: 1,
      }
      setCart([...cart, productWithQuantity])
    }
  }

  // Removes a product from the cart by filtering it out of the cart array
  // const handleRemoveFromCart = (product) => {
  // setCart(cart.filter((item) => item.id !== product.id));
  // };

  const handleRemoveFromCart = (product) => {
    const productExists = cart.find((item) => item.id === product.id)

    if (productExists) {
      // If the product exists, do not add a new one, just update the quantity property
      const updatedCart = cart
        .map((item) => {
          if (item.id === product.id) {
            return { ...item, quantity: (item.quantity -= 1) } //decrease the quantity -1
          }
          return item
        })
        .filter((item) => item.quantity > 0) // Remove item if quantity is 0

      setCart(updatedCart)
    }
    // If the product does not exist, add a new entry with quantity initialised to 1
    // const productWithQuantity = {
    // ...product,
    // quantity: 1,
    // };
    // setCart([...cart, productWithQuantity]);
  }

  return (
    <CartContext.Provider
      value={{
        // Passes the cart state and the add and remove functions to the context,
        // so it can be accessed in any component
        cart,
        handleAddToCart,
        handleRemoveFromCart,
        openCart,
        closeCart,
      }}
    >
      <SideCart
        cart={cart}
        handleAddToCart={handleAddToCart}
        handleRemoveFromCart={handleRemoveFromCart}
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
      />
      {children}
      {/* "children" items passed down from parent */}
    </CartContext.Provider>
  )
}

export const useCartContext = () => {
  const context = use(CartContext)
  if (!context)
    throw new Error("useCartContext must be used within a CartProvider")
  return context
}
