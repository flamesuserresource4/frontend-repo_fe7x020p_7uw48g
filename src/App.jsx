import React, { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import RoleSwitcher from './components/RoleSwitcher.jsx';
import ProductGrid from './components/ProductGrid.jsx';
import Footer from './components/Footer.jsx';

function App() {
  const [role, setRole] = useState('Customer');
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount((c) => c + 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-sky-50 to-rose-50 text-neutral-900">
      <Navbar role={role} cartCount={cartCount} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="mt-10">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-medium px-2.5 py-1.5 rounded-full bg-white border border-neutral-200 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Multi‑role demo
              </span>
              <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
                E‑commerce that adapts to your role
              </h1>
              <p className="mt-4 text-neutral-600 max-w-prose">
                Switch between Customer, Seller, and Admin to preview how the experience changes. This demo is frontend‑only and ready to connect to an API.
              </p>
              <div className="mt-6">
                <RoleSwitcher role={role} onChange={setRole} />
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 opacity-90" />
              <div className="absolute inset-0 p-4 sm:p-6">
                <div className="h-full w-full rounded-2xl bg-white/70 backdrop-blur border border-white/50" />
              </div>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">{role === 'Customer' ? 'Featured products' : role === 'Seller' ? 'Your commerce workspace' : 'Business overview'}</h2>
            <a href="#" className="text-sm text-neutral-600 hover:text-neutral-900">Explore all</a>
          </div>
          <ProductGrid role={role} onAddToCart={handleAddToCart} />
        </section>

        <section id="features" className="mt-16 grid md:grid-cols-3 gap-6">
          {[
            {
              title: 'Role‑aware UI',
              desc: 'Tailored layouts and actions for customers, sellers, and admins.',
            },
            {
              title: 'Modern stack',
              desc: 'Built with React and Tailwind for speed and great UX.',
            },
            {
              title: 'API‑ready',
              desc: 'Hook up your backend to persist carts, orders, and inventory.',
            },
          ].map((f) => (
            <div key={f.title} className="rounded-2xl border border-neutral-200 bg-white p-6">
              <h3 className="font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-neutral-600">{f.desc}</p>
            </div>
          ))}
        </section>

        <Footer />
      </main>
    </div>
  );
}

export default App;
