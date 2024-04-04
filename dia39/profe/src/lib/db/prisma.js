import { PrismaClient } from '@prisma/client';
const globalForPrisma = global;

// versión simple, pero crea múltiples PrismaClients...
//export const prisma = new PrismaClient();

export const prisma =
   globalForPrisma.prisma ||
   new PrismaClient({
      log: ["query"],
   });

// creo que si estoy en development, lo añado al scope global para que pueda ser reutilizado
// en producción no se suele poner datos en el scope global por tema de eficiencia y seguridad
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;