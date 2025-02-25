import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PRIVATE_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXT_PRIVATE_GOOGLE_CLIENT_SECRET,
    }),
    // CredentialsProvider({
    //   name: "Credentials",
    //   credentials: {
    //     username: { label: "Username", type: "text" },
    //     password: { label: "Password", type: "password" },
    //   },
    //   async authorize(credentials) {
    //     // Replace with your actual auth logic
    //     if (
    //       credentials.username === "user@example.com" &&
    //       credentials.password === "password123"
    //     ) {
    //       return {
    //         id: "1",
    //         name: "Test User",
    //         email: "user@example.com",
    //       }
    //     }
    //     return null
    //   },
    // }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async session({ session, token }) {
      // Optionally add token data to session if needed
      session.user.id = token.sub // Google user ID
      return session
    },
  },
})

export { handler as GET, handler as POST }
