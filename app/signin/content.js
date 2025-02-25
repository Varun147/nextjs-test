"use client"

import { signIn, useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function SignIn() {
  const { data: session } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (session) {
      router.push("/")
    }
  }, [session, router])

  const handleCredentialSubmit = async (e) => {
    e.preventDefault()
    const username = e.target.username.value
    const password = e.target.password.value

    await signIn("credentials", {
      username,
      password,
      redirect: true,
      callbackUrl: "/",
    })
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Sign In</h1>

      {/* Credentials Form */}
      <form onSubmit={handleCredentialSubmit}>
        <div>
          <input
            name="username"
            type="text"
            placeholder="Username"
            style={{ margin: "10px 0" }}
          />
        </div>
        <div>
          <input
            name="password"
            type="password"
            placeholder="Password"
            style={{ margin: "10px 0" }}
          />
        </div>
        <button type="submit">Sign in with Credentials</button>
      </form>

      {/* Google Button */}
      <div style={{ marginTop: "20px" }}>
        <button onClick={() => signIn("google", { callbackUrl: "/" })}>
          Sign in with Google
        </button>
      </div>
    </div>
  )
}
