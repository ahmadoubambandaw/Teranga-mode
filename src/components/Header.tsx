import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useStore } from '../context/StoreContext'
import { CATEGORY_LABELS } from '../types'
import type { Category } from '../types'

const CATEGORIES = Object.keys(CATEGORY_LABELS) as Category[]

export default function Header() {
  const { cartCount, wishlist } = useStore()
  const [menuOpen, setMenuOpen] = useState(false)
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  function submitSearch(e: React.FormEvent) {
    e.preventDefault()
    const q = query.trim()
    navigate(q ? `/boutique?q=${encodeURIComponent(q)}` : '/boutique')
    setMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="bg-ink text-white text-center text-xs sm:text-sm py-1.5 px-2">
        🚚 Livraison gratuite à Dakar dès 25 000 FCFA — Paiement Wave & Orange Money
      </div>

      <div className="max-w-7xl mx-auto flex items-center gap-3 px-4 py-3">
        <button
          className="lg:hidden text-2xl"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Ouvrir le menu"
        >
          ☰
        </button>

        <Link to="/" className="text-2xl font-extrabold tracking-tight shrink-0">
          Teranga<span className="text-brand">Mode</span>
        </Link>

        <form onSubmit={submitSearch} className="hidden md:flex flex-1 max-w-xl mx-auto">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rechercher un article, une catégorie…"
            className="w-full border-2 border-ink rounded-l-full px-4 py-1.5 text-sm focus:outline-none focus:border-brand"
          />
          <button
            type="submit"
            className="bg-ink text-white rounded-r-full px-5 text-sm font-semibold hover:bg-brand transition-colors"
          >
            🔍
          </button>
        </form>

        <nav className="ml-auto flex items-center gap-4 text-2xl">
          <Link to="/favoris" className="relative" aria-label="Favoris">
            ❤️
            {wishlist.length > 0 && (
              <span className="absolute -top-1.5 -right-2 bg-brand text-white text-[10px] font-bold rounded-full min-w-[18px] h-[18px] flex items-center justify-center px-1">
                {wishlist.length}
              </span>
            )}
          </Link>
          <Link to="/panier" className="relative" aria-label="Panier">
            🛒
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-2 bg-brand text-white text-[10px] font-bold rounded-full min-w-[18px] h-[18px] flex items-center justify-center px-1">
                {cartCount}
              </span>
            )}
          </Link>
        </nav>
      </div>

      <form onSubmit={submitSearch} className="md:hidden flex px-4 pb-3">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Rechercher…"
          className="w-full border-2 border-ink rounded-l-full px-4 py-1.5 text-sm focus:outline-none focus:border-brand"
        />
        <button type="submit" className="bg-ink text-white rounded-r-full px-4 text-sm">
          🔍
        </button>
      </form>

      <nav
        className={`${menuOpen ? 'block' : 'hidden'} lg:block border-t border-gray-100 bg-white`}
      >
        <ul className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:justify-center gap-1 lg:gap-8 px-4 py-2 text-sm font-semibold uppercase tracking-wide">
          {CATEGORIES.map((cat) => (
            <li key={cat}>
              <NavLink
                to={`/boutique?categorie=${cat}`}
                onClick={() => setMenuOpen(false)}
                className="block py-1.5 hover:text-brand transition-colors"
              >
                {CATEGORY_LABELS[cat]}
              </NavLink>
            </li>
          ))}
          <li>
            <NavLink
              to="/boutique?promo=1"
              onClick={() => setMenuOpen(false)}
              className="block py-1.5 text-brand"
            >
              🔥 Promos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
