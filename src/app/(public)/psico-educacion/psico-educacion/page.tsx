'use client';

import BlogForm from '@/components/intranet/blog/BlogForm';

export default function BlogNuevoPage() {
  return (
    <section className="py-12 px-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8 text-pink-700">
        Nueva Entrada
      </h1>
      <BlogForm />
    </section>
  );
}
