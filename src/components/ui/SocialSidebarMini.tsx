// src/components/ui/SocialSidebarMini.tsx

import React from 'react'
import Link from 'next/link'

export default function SocialSidebarMini() {
  return (
    <div className="bg-white rounded-xl shadow p-4 space-y-4">
      <h4 className="font-medium text-center">Sígueme en</h4>
      <div className="grid grid-cols-2 gap-2">
        <Link
          href="https://youtube.com/..."
          className="flex items-center justify-center bg-red-600 text-white py-2 rounded text-sm"
        >
          YouTube
        </Link>
        <Link
          href="https://tiktok.com/..."
          className="flex items-center justify-center bg-black text-white py-2 rounded text-sm"
        >
          TikTok
        </Link>
        <Link
          href="https://instagram.com/..."
          className="flex items-center justify-center bg-gradient-to-r from-pink-500 to-yellow-400 text-white py-2 rounded text-sm"
        >
          Instagram
        </Link>
        <Link
          href="https://facebook.com/..."
          className="flex items-center justify-center bg-blue-600 text-white py-2 rounded text-sm"
        >
          Facebook
        </Link>
        <Link
          href="https://twitter.com/..."
          className="flex items-center justify-center bg-blue-400 text-white py-2 rounded text-sm col-span-2"
        >
          Twitter
        </Link>
      </div>
    </div>
)
}
