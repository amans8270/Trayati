import { compareSync } from "bcryptjs";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

const providers = [];

if (process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET) {
  providers.push(
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  );
}

providers.push(
  CredentialsProvider({
    name: "Email",
    credentials: {
      email: { label: "Email", type: "email" },
      password: { label: "Password", type: "password" },
    },
    async authorize(credentials) {
      if (!credentials?.email || !credentials.password) {
        return null;
      }

      const mockUsers = [
        {
          id: "guest_demo",
          name: "Demo Guest",
          email: "guest@trayatistays.com",
          passwordHash: "$2b$10$u0ae2ixPq5M2L8upwu7yTeh3W/MI68tUh5dFUIQ4aGhNirMRHkRk2",
          role: "GUEST" as const,
        },
        {
          id: "admin_demo",
          name: "Trayati Admin",
          email: "admin@trayatistays.com",
          passwordHash: "$2b$10$u0ae2ixPq5M2L8upwu7yTeh3W/MI68tUh5dFUIQ4aGhNirMRHkRk2",
          role: "ADMIN" as const,
        },
      ];

      const user = mockUsers.find((item) => item.email === credentials.email);
      if (!user || !compareSync(credentials.password, user.passwordHash)) {
        return null;
      }

      return user;
    },
  }),
);

export const authOptions: NextAuthOptions = {
  providers,
  pages: {
    signIn: "/reviews?login=1",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.sub ?? "";
        session.user.role = (token.role as "GUEST" | "ADMIN") ?? "GUEST";
      }
      return session;
    },
  },
};
