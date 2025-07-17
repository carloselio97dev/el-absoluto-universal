// src/app/api/blog/route.ts
import { NextResponse } from 'next/server';
import { v2 as cloudinary, UploadApiResponse } from 'cloudinary';
import slugify from 'slugify';
import { prisma } from '@/lib/prisma';

cloudinary.config({ secure: true });

export async function POST(req: Request) {
  if (!process.env.CLOUDINARY_URL) {
    return NextResponse.json({ error: 'CLOUDINARY_URL no está definido' }, { status: 500 });
  }

  try {
    const formData    = await req.formData();
    const titulo      = formData.get('titulo');
    const resumen     = formData.get('resumen');
    const descripcion = formData.get('descripcion');
    const imagenFile  = formData.get('imagen');

    if (
      typeof titulo      !== 'string' ||
      typeof resumen     !== 'string' ||
      typeof descripcion !== 'string' ||
      !(imagenFile instanceof File)
    ) {
      return NextResponse.json({ error: 'Faltan campos o tipo incorrecto' }, { status: 400 });
    }

    const buffer = Buffer.from(await imagenFile.arrayBuffer());

    const uploadResult = await new Promise<UploadApiResponse>((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        { folder: 'institutouniversal', resource_type: 'auto' },
        (err, result) => {
          if (err) return reject(err);
          if (!result) return reject(new Error('No se recibió respuesta de Cloudinary'));
          resolve(result);
        }
      );
      stream.end(buffer);
    });

    const slug = slugify(titulo, { lower: true, strict: true });
    const nuevaEntrada = await prisma.blog.create({
      data: {
        slug,
        titulo,
        resumen,
        descripcion,
        fecha: new Date(),
        imagen: uploadResult.secure_url,
      },
    });

    return NextResponse.json({ mensaje: 'Entrada creada', entrada: nuevaEntrada }, { status: 201 });
  } catch (error) {
    console.error('🚨 /api/blog error:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}
