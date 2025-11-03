import React from 'react';
import { ShoppingCart, Store, Shield, User } from 'lucide-react';

const roles = [
  { key: 'Customer', icon: <ShoppingCart className="h-4 w-4" /> },
  { key: 'Seller', icon: <Store className="h-4 w-4" /> },
  { key: 'Admin', icon: <Shield className="h-4 w-4" /> },
];

export default function Navbar({ role, cartCount }) {
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500" />
          <span className="font-semibold tracking-tight text-neutral-900">VibeCommerce</span>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-600">
          <a href="#" className="hover:text-neutral-900 transition-colors">Home</a>
          <a href="#catalog" className="hover:text-neutral-900 transition-colors">Catalog</a>
          <a href="#features" className="hover:text-neutral-900 transition-colors">Features</a>
          <a href="#contact" className="hover:text-neutral-900 transition-colors">Contact</a>
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 text-xs text-neutral-600">
            {roles.map(r => (
              <div key={r.key} className={`flex items-center gap-1 px-2.5 py-1 rounded-full border ${role === r.key ? 'bg-neutral-900 text-white border-neutral-900' : 'border-neutral-200 bg-white text-neutral-700'}`}>
                {r.icon}
                <span className="hidden md:inline">{r.key}</span>
              </div>
            ))}
          </div>
          <button className="relative inline-flex items-center gap-2 rounded-md bg-neutral-900 text-white px-3 py-2 text-sm hover:bg-neutral-800 transition">
            <ShoppingCart className="h-4 w-4" />
            <span className="hidden sm:inline">Cart</span>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 h-5 min-w-[1.25rem] px-1 rounded-full bg-pink-500 text-white text-[10px] flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
          <button className="inline-flex items-center gap-2 rounded-md border border-neutral-200 px-3 py-2 text-sm hover:bg-neutral-50 transition">
            <User className="h-4 w-4" />
            <span className="hidden sm:inline">Sign in</span>
          </button>
        </div>
      </div>
    </header>
  );
}
