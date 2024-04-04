import {PrismaClient} from "@prisma/client";

const globalForPrisma = global;

// version mas simple
//export const prisma = new PrismaClient();

export const prisma = globalForPrisma.prisma ||
 new PrismaClient({
    log: ["query"]
 })

 if(process.env.NODE_ENV !== "production") globalForPrisma.prisma=prisma;