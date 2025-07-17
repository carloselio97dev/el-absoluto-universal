import { NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import slugify from 'slugify';
import { prisma } from '@/lib/prisma';

/**
 * POST /api/blog
 * Recibe y guarda datos del formulario, incluyendo imágenes y entradas Prisma.
 */
export async function POST(req: Request) {
  try {
    console.log('🔔 /api/blog POST invoked');

    // Leer formData
    const formData = await req.formData();
    console.log('📝 formData keys:', Array.from(formData.keys()));

    // Extraer campos
    const titulo = formData.get('titulo');
    const resumen = formData.get('resumen');
    const descripcion = formData.get('descripcion');
    const imagenFile = formData.get('imagen');
    console.log({ titulo, resumen, descripcion, imagenFile });

    // Validar
    if (
      typeof titulo !== 'string' ||
      typeof resumen !== 'string' ||
      typeof descripcion !== 'string' ||
      !(imagenFile instanceof File)
    ) {
      console.warn('❌ Validation failed, missing or invalid types');
      return NextResponse.json({ error: 'Faltan campos o tipo incorrecto' }, { status: 400 });
    }

    // Guardar imagen
    const buffer = Buffer.from(await imagenFile.arrayBuffer());
    const ext = path.extname(imagenFile.name);
    const filename = `${uuidv4()}${ext}`;
    const uploadDir = path.join(process.cwd(), 'public', 'uploads');
    const filePath = path.join(uploadDir, filename);
    console.log('💾 Writing file to:', filePath);
    await writeFile(filePath, buffer);

    // Generar slug
    const slug = slugify(titulo, { lower: true, strict: true });
    console.log('🏷️ Generated slug:', slug);

    // Crear entrada en DB
    const nuevaEntrada = await prisma.blog.create({
      data: { slug, titulo, resumen, descripcion, imagen: `/uploads/${filename}` },
    });
    console.log('✅ New entry created:', nuevaEntrada);

    return NextResponse.json({ mensaje: 'Entrada creada', entrada: nuevaEntrada }, { status: 201 });
  } catch (error) {
    console.error('🚨 Error in /api/blog:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}
