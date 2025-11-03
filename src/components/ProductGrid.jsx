import React from 'react';
import { Star, Plus, Edit, Package, Users } from 'lucide-react';

const sampleProducts = [
  {
    id: 1,
    name: 'Nimbus Headphones',
    price: 129,
    rating: 4.7,
    img: 'https://images.unsplash.com/photo-1518443759967-6d1d87a2e3d1?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Aurora Lamp',
    price: 89,
    rating: 4.5,
    img: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Pulse Watch',
    price: 199,
    rating: 4.8,
    img: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'Zen Speaker',
    price: 149,
    rating: 4.6,
    img: 'https://images.unsplash.com/photo-1519677100203-a0e668c92439?q=80&w=1200&auto=format&fit=crop',
  },
];

export default function ProductGrid({ role, onAddToCart }) {
  if (role === 'Admin') {
    return (
      <section className="grid md:grid-cols-3 gap-6">
        <div className="rounded-2xl border border-neutral-200 p-6 bg-white">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">Sales</h3>
            <Package className="h-4 w-4 text-neutral-500" />
          </div>
          <p className="mt-4 text-3xl font-bold tracking-tight">$24,320</p>
          <p className="text-sm text-green-600 mt-1">+12% vs last week</p>
        </div>
        <div className="rounded-2xl border border-neutral-200 p-6 bg-white">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">Active Users</h3>
            <Users className="h-4 w-4 text-neutral-500" />
          </div>
          <p className="mt-4 text-3xl font-bold tracking-tight">1,284</p>
          <p className="text-sm text-green-600 mt-1">+5% this month</p>
        </div>
        <div className="rounded-2xl border border-neutral-200 p-6 bg-white">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">Orders</h3>
            <Package className="h-4 w-4 text-neutral-500" />
          </div>
          <p className="mt-4 text-3xl font-bold tracking-tight">312</p>
          <p className="text-sm text-green-600 mt-1">+3% today</p>
        </div>
      </section>
    );
  }

  if (role === 'Seller') {
    return (
      <section className="grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-neutral-200 bg-white overflow-hidden">
          <div className="p-6 border-b border-neutral-200 flex items-center justify-between">
            <h3 className="font-semibold">Your Inventory</h3>
            <button className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-neutral-900 text-white text-sm hover:bg-neutral-800">
              <Plus className="h-4 w-4" /> New Product
            </button>
          </div>
          <div className="p-6 grid sm:grid-cols-2 gap-4">
            {sampleProducts.map(p => (
              <div key={p.id} className="flex items-center gap-4">
                <img src={p.img} alt={p.name} className="h-16 w-16 rounded-lg object-cover" />
                <div className="flex-1">
                  <p className="font-medium leading-tight">{p.name}</p>
                  <p className="text-sm text-neutral-500">${p.price}</p>
                </div>
                <button className="inline-flex items-center gap-1 text-sm text-neutral-700 hover:text-neutral-900">
                  <Edit className="h-4 w-4" /> Edit
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-neutral-200 bg-white p-6">
          <h3 className="font-semibold">Recent Orders</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex justify-between border-b border-neutral-100 pb-3"><span>#1042 • Nimbus Headphones</span><span className="text-neutral-500">$129</span></li>
            <li className="flex justify-between border-b border-neutral-100 pb-3"><span>#1041 • Aurora Lamp</span><span className="text-neutral-500">$89</span></li>
            <li className="flex justify-between"><span>#1040 • Pulse Watch</span><span className="text-neutral-500">$199</span></li>
          </ul>
        </div>
      </section>
    );
  }

  return (
    <section id="catalog" className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {sampleProducts.map((p) => (
        <div key={p.id} className="group rounded-2xl border border-neutral-200 bg-white overflow-hidden hover:shadow-md transition-shadow">
          <div className="aspect-[4/3] overflow-hidden">
            <img src={p.img} alt={p.name} className="h-full w-full object-cover group-hover:scale-[1.03] transition-transform duration-300" />
          </div>
          <div className="p-4">
            <p className="font-medium leading-tight truncate" title={p.name}>{p.name}</p>
            <div className="mt-1 flex items-center justify-between">
              <span className="text-neutral-900 font-semibold">${p.price}</span>
              <span className="inline-flex items-center gap-1 text-xs text-amber-600">
                <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                {p.rating}
              </span>
            </div>
            <button
              onClick={() => onAddToCart(p)}
              className="mt-3 w-full inline-flex items-center justify-center gap-2 rounded-lg bg-neutral-900 text-white px-3 py-2 text-sm hover:bg-neutral-800"
            >
              <Plus className="h-4 w-4" /> Add to cart
            </button>
          </div>
        </div>
      ))}
    </section>
  );
}
