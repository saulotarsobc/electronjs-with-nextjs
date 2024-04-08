import { PrismaClient } from "./client";
import { databaseUrl } from "../utils";

export const prisma = new PrismaClient({
  datasources: {
    db: { url: databaseUrl },
  },
});
