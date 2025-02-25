import { getServerSession } from "next-auth/next"
import { NextResponse } from "next/server"
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"

// Define the auth options directly here (same as in [...nextauth]/route.js)
const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (
          credentials.username === "user@example.com" &&
          credentials.password === "password123"
        ) {
          return {
            id: "1",
            name: "Test User",
            email: "user@example.com",
          }
        }
        return null
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async session({ session, token }) {
      session.user.id = token.sub // Google user ID
      return session
    },
  },
}

// In-memory store for demo (replace with your database)
const users = []

export async function POST(request) {
  const session = await getServerSession(authOptions)

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const { email, name, id } = session.user

  // Check if user already exists
  const existingUser = users.find((u) => u.email === email)
  if (existingUser) {
    return NextResponse.json(
      { message: "Account already exists", user: existingUser },
      { status: 200 }
    )
  }

  // Create new account
  const newUser = {
    id: String(users.length + 1), // Custom app-specific ID
    name: name || "Unnamed User",
    email,
    googleId: id, // Store Google ID
    createdAt: new Date().toISOString(),
  }
  users.push(newUser)

  return NextResponse.json(
    { message: "Account created successfully", user: newUser },
    { status: 201 }
  )
}
