"use client"

import Image from "next/image"
import Link from "next/link"
import Navbar from "./components/Navbar"
import { useSession, signOut } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function Content() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [accountStatus, setAccountStatus] = useState(null) // Track account creation status
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (status === "unauthenticated") router.push("/signin")
  }, [router, status])

  if (status === "loading") {
    return (
      <div className="grid items-center justify-items-center min-h-screen p-8">
        <p>Loading...</p>
      </div>
    )
  }

  if (!session) {
    return null
  }

  const handleCreateAccount = async () => {
    setLoading(true)
    try {
      const response = await fetch("/api/create-account", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      })
      const data = await response.json()
      setAccountStatus(data)
    } catch (error) {
      console.error("Error creating account:", error)
      setAccountStatus({ error: "Failed to create account" })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="grid items-center justify-items-center min-h-screen p-8">
      <Navbar />
      <h1>Welcome to the Home Page</h1>
      <p>This is the content of the Home Page.</p>
      <p>
        Welcome {session.user.name} ({session.user.email})
      </p>

      {/* Account Creation UI */}
      {accountStatus ? (
        accountStatus.error ? (
          <p className="text-red-500">{accountStatus.error}</p>
        ) : (
          <div>
            <p className="text-green-500">{accountStatus.message}</p>
            <p>Account ID: {accountStatus.user.id}</p>
          </div>
        )
      ) : (
        <button
          onClick={handleCreateAccount}
          disabled={loading}
          className={`mt-4 px-4 py-2 ${
            loading ? "bg-gray-500" : "bg-blue-500"
          } text-white rounded`}
        >
          {loading ? "Creating..." : "Create Account"}
        </button>
      )}

      <button
        onClick={() => signOut({ callbackUrl: "/signin" })}
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
      >
        Sign Out
      </button>
    </div>
  )
}
