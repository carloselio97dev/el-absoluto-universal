'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function BlogForm() {
  const router = useRouter();
  const [titulo, setTitulo] = useState('');
  const [resumen, setResumen] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [imagen, setImagen] = useState<File | null>(null);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);

    const formData = new FormData();
    formData.append('titulo', titulo);
    formData.append('resumen', resumen);
    formData.append('descripcion', descripcion);
    if (imagen) formData.append('imagen', imagen);

    const res = await fetch('/api/blog', {
      method: 'POST',
      body: formData,
    });

    if (res.ok) {
      router.push('/blog');
    } else {
      let payload;
      try {
        payload = await res.json();
      } catch (err) {
        payload = { error: 'Respuesta no válida del servidor' };
        console.log(err);
      }
      console.error('Error al crear noticia:', payload);
      setSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-lg rounded-2xl p-6 md:p-8 space-y-6 max-w-xl mx-auto"
      encType="multipart/form-data"
    >
      {/* Título y Resumen */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-1">
        <div className="flex flex-col">
          <label htmlFor="titulo" className="text-sm font-semibold mb-2">
            Título
          </label>
          <input
            id="titulo"
            name="titulo"
            type="text"
            value={titulo}
            onChange={e => setTitulo(e.target.value)}
            required
            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="resumen" className="text-sm font-semibold mb-2">
            Resumen
          </label>
          <textarea
            id="resumen"
            name="resumen"
            value={resumen}
            onChange={e => setResumen(e.target.value)}
            required
            className="border border-gray-300 rounded-lg px-3 py-2 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>
      </div>

      {/* Descripción */}
      <div className="flex flex-col">
        <label htmlFor="descripcion" className="text-sm font-semibold mb-2">
          Descripción
        </label>
        <textarea
          id="descripcion"
          name="descripcion"
          value={descripcion}
          onChange={e => setDescripcion(e.target.value)}
          required
          className="border border-gray-300 rounded-lg px-3 py-2 h-40 resize-none focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
      </div>

      {/* Imagen */}
      <div className="flex flex-col">
        <label htmlFor="imagen" className="text-sm font-semibold mb-2">
          Imagen de la entrada
        </label>
        <input
          id="imagen"
          name="imagen"
          type="file"
          accept="image/*"
          onChange={e => setImagen(e.target.files?.[0] || null)}
          className="hidden"
        />
        <label
          htmlFor="imagen"
          className="inline-block bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 cursor-pointer hover:bg-gray-200 text-sm font-medium"
        >
          {imagen ? 'Cambiar imagen' : 'Seleccionar imagen'}
        </label>
        {imagen && (
          <span className="mt-2 text-sm text-gray-600">
            {imagen.name}
          </span>
        )}
      </div>

      {/* Botón de envío */}
      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-pink-600 hover:bg-pink-700 transition-colors text-white font-semibold rounded-lg py-3 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {submitting ? 'Guardando...' : 'Crear entrada'}
      </button>
    </form>
  );
}