'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { BlogIcon, CalendarIcon, SettingsIcon, MenuIcon } from './icons';
import { useState } from 'react';

const nav = [
  { label: 'Dashboard', href: '/intranet', icon: <MenuIcon className="h-5 w-5" /> },
  { label: 'Blog', href: '/intranet/blog', icon: <BlogIcon className="h-5 w-5" /> },
  { label: 'Citas & Pagos', href: '#', icon: <CalendarIcon className="h-5 w-5" />, disabled: true },
  { label: 'Configuración', href: '#', icon: <SettingsIcon className="h-5 w-5" />, disabled: true },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside className={clsx(
      'h-full flex flex-col border-r border-pink-200/40 bg-white/80 backdrop-blur transition-all duration-300',
      collapsed ? 'w-16' : 'w-60'
    )}>
      <div className="flex items-center gap-2 px-3 py-4">
        <button
          onClick={() => setCollapsed(c => !c)}
          className="h-9 w-9 flex items-center justify-center rounded-xl text-pink-600 hover:bg-pink-50 focus:outline-none focus:ring-2 focus:ring-pink-400"
        >
          <MenuIcon className="h-5 w-5" />
        </button>
        {!collapsed && <span className="font-bold text-sm text-pink-600">INTRANET</span>}
      </div>

      <nav className="flex-1 px-2 space-y-1">
        {nav.map(item => {
          const active = pathname === item.href;
            const base =
              'flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition';
            const inner = (
              <>
                <span className="h-6 w-6 grid place-items-center">{item.icon}</span>
                {!collapsed && <span className="truncate">{item.label}</span>}
              </>
            );
            if (item.disabled) {
              return (
                <div key={item.label} className={clsx(base, 'opacity-40 cursor-not-allowed',
                  active ? 'bg-pink-600 text-white' : 'text-gray-500')}>
                  {inner}
                </div>
              );
            }
            return (
              <Link
                key={item.label}
                href={item.href}
                className={clsx(base,
                  active
                    ? 'bg-pink-600 text-white shadow'
                    : 'text-gray-700 hover:bg-pink-50 hover:text-pink-600')}
              >
                {inner}
              </Link>
            );
        })}
      </nav>

      <div className="p-3">
        <form action="/intranet/login/logout" method="post">
          <button
            className={clsx(
              'w-full rounded-xl bg-pink-600 text-white text-xs font-semibold py-2 hover:bg-pink-700 transition',
              collapsed && 'px-0'
            )}
          >
            {collapsed ? '⏻' : 'Salir'}
          </button>
        </form>
      </div>
    </aside>
  );
}
