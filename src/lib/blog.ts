import { prisma } from "./prisma";


export async function obtenerEntradasBlog() {
  return await prisma.blog.findMany({
    orderBy: { fecha: 'desc' },
  });
}