type PrismaClientLike = {
  [key: string]: unknown;
};

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClientLike | undefined;
}

export const prisma: PrismaClientLike | null = global.prisma ?? null;

if (process.env.NODE_ENV !== "production" && !global.prisma) {
  global.prisma = prisma ?? undefined;
}
