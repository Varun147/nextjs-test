import Image from "next/image"
import Link from "next/link"
import Navbar from "./components/Navbar"
import Content from "./content"

export default function Home() {
  return (
    <div className="grid items-center justify-items-center min-h-screen p-8">
      <Navbar />
      <Content />
      <h1>Welcome to the Home Page</h1>
      <p>This is the content of the Home Page.</p>
    </div>
  )
}
