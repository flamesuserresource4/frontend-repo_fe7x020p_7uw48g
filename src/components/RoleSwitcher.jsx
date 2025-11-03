import React from 'react';
import { ShoppingCart, Store, Shield } from 'lucide-react';

const tabs = [
  { key: 'Customer', icon: ShoppingCart },
  { key: 'Seller', icon: Store },
  { key: 'Admin', icon: Shield },
];

export default function RoleSwitcher({ role, onChange }) {
  return (
    <div className="w-full">
      <div className="inline-flex rounded-xl border border-neutral-200 bg-white p-1 shadow-sm">
        {tabs.map(({ key, icon: Icon }) => {
          const active = role === key;
          return (
            <button
              key={key}
              onClick={() => onChange(key)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition focus:outline-none ${
                active ? 'bg-neutral-900 text-white shadow' : 'text-neutral-600 hover:bg-neutral-50'
              }`}
              aria-pressed={active}
            >
              <Icon className="h-4 w-4" />
              {key}
            </button>
          );
        })}
      </div>
    </div>
  );
}
