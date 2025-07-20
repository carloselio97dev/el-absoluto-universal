// src/app/intranet/blog/new/page.tsx
export const metadata = { title: 'Nuevo Post' }; // opcional

export default function NewPostPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-pink-700">Crear nuevo post</h1>
      <p className="text-sm text-gray-600 mt-2">
        (Próximamente: formulario de creación)
      </p>
    </div>
  );
}