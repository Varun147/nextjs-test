"use client"
import "./globals.css" // Import global styles if needed

import Navbar from "./components/Navbar" // Import the Navbar component
import { CartProvider } from "../context/CartContext"
import { SessionProvider } from "next-auth/react"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <SessionProvider>
          <CartProvider>
            <Navbar /> {/* Navbar is included here */}
            <main>{children}</main>
            {/* Render child pages here// Footer */}
          </CartProvider>
        </SessionProvider>
      </body>
    </html>
  )
}
