import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const PrismaToJSON = (data: any) =>
  JSON.parse(
    JSON.stringify(data, (key, value) =>
      typeof value === "bigint" ? Number(value.toString()) : value
    )
  );

export default prisma;
