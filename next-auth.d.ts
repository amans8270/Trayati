import type { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: DefaultSession["user"] & {
      id: string;
      role: "GUEST" | "ADMIN";
    };
  }

  interface User {
    role?: "GUEST" | "ADMIN";
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role?: "GUEST" | "ADMIN";
  }
}
