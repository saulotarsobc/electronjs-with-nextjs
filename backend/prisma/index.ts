import { PrismaClient } from "./client";
import { databaseUrl } from "../utils";

// const MIGRATIONS_FOLDER =
//   isStart || isDev
//     ? join(__dirname, "..", "prisma", "migrations")
//     : join(__dirname, "..", "..", "..", "resources", "prisma", "migrations");

export const prisma = new PrismaClient({
  datasources: {
    db: { url: databaseUrl },
  },
});

export const prepareDataBase = async () => {
  await prisma.$queryRaw`-- CreateTable
  CREATE TABLE "users" (
      "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
      "firstName" TEXT NOT NULL,
      "lastName" TEXT,
      "age" REAL DEFAULT 0,
      "born" DATETIME,
      "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      "updatedAt" DATETIME NOT NULL
  );
  `.catch((e: Error) => console.log({ e: e.message }));
};
