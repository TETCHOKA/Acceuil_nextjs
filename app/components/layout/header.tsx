'use client';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <a href="/" className="text-2xl font-bold" style={{ color: '#F5560D' }}>
            AfriPay
          </a>

          {/*barre de navigation */}
          <nav className="hidden md:flex space-x-6">
            <a href="/" className="text-gray-700 hover:text-orange-500">Accueil</a>
            <a href="/solutions" className="text-gray-700 hover:text-orange-500">Solutions de Paiements</a>
            <a href="/financement" className="text-gray-700 hover:text-orange-500">Financement</a>
            <a href="/fidelite" className="text-gray-700 hover:text-orange-500">Programmes de Fidélité</a>
            <a href="/payouts" className="text-gray-700 hover:text-orange-500">Payouts & Incentives</a>
            <a href="/support" className="text-gray-700 hover:text-orange-500">Support</a>
            <a href="/contact" className="text-gray-700 hover:text-orange-500">Contactez-nous</a>
          </nav>

          {/* Bouton */}
          <button className="hidden md:block  text-white px-6 py-2 rounded-lg hover:bg-orange-600" style={{ backgroundColor: '#F5560D' }}>
            Commencer
          </button>

          {/* Menu burger */}
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-700"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Menu Mobile Ouvert */}
        {menuOpen && (
          <nav className="md:hidden pb-4">
            <a href="/" className="block py-2 text-gray-700 hover:text-orange-500">Accueil</a>
            <a href="/solutions" className="block py-2 text-gray-700 hover:text-orange-500">Solutions de Paiements</a>
            <a href="/financement" className="block py-2 text-gray-700 hover:text-orange-500">Financement</a>
            <a href="/financement" className="block py-2 text-gray-700 hover:text-orange-500">Programmes de Fidélité</a>
            <a href="/financement" className="block py-2 text-gray-700 hover:text-orange-500">Payouts & Incentives</a>
            <a href="/financement" className="block py-2 text-gray-700 hover:text-orange-500">Support</a>
            <a href="/contact" className="block py-2 text-gray-700 hover:text-orange-500">Contactez-nous</a>
            <button className="w-full bg-orange-500 text-white px-6 py-2 rounded-lg mt-2">
              Commencer
            </button>
          </nav>
        )}
      </div>
    </header>

    
  );
}