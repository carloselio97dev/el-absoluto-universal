// src/components/ui/Pagination.tsx
import React from 'react'
import Link from 'next/link'

interface PaginationProps {
  currentPage: number
  totalPages: number
  basePath: string    // ejemplo "/psico-educacion"
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, basePath }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <nav className="flex justify-center items-center space-x-2 mt-8">
      {/* ← Anterior */}
      {currentPage > 1 ? (
        <Link
          href={`${basePath}?page=${currentPage - 1}`}
          className="px-3 py-1 rounded border hover:bg-gray-100"
          aria-label="Página anterior"
        >
          &laquo;
        </Link>
      ) : (
        <span className="px-3 py-1 rounded border text-gray-400 cursor-not-allowed">
          &laquo;
        </span>
      )}

      {/* Números */}
      {pages.map((p) => (
        <Link
          key={p}
          href={`${basePath}?page=${p}`}
          className={`
            px-3 py-1 rounded border
            ${p === currentPage ? 'bg-pink-600 text-white border-pink-600' : 'hover:bg-gray-100'}
          `}
          aria-current={p === currentPage ? 'page' : undefined}
        >
          {p}
        </Link>
      ))}

      {/* Siguiente → */}
      {currentPage < totalPages ? (
        <Link
          href={`${basePath}?page=${currentPage + 1}`}
          className="px-3 py-1 rounded border hover:bg-gray-100"
          aria-label="Página siguiente"
        >
          &raquo;
        </Link>
      ) : (
        <span className="px-3 py-1 rounded border text-gray-400 cursor-not-allowed">
          &raquo;
        </span>
      )}
    </nav>
  )
}

export default Pagination
