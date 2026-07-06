import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { PRODUCTS } from '../data/products'
import { CATEGORY_LABELS } from '../types'
import type { Category } from '../types'

const CATEGORY_TILES: { cat: Category; emoji: string; gradient: string }[] = [
  { cat: 'femme', emoji: '👗', gradient: 'from-pink-400 to-fuchsia-600' },
  { cat: 'homme', emoji: '👔', gradient: 'from-sky-500 to-indigo-600' },
  { cat: 'enfant', emoji: '🧒', gradient: 'from-emerald-400 to-teal-600' },
  { cat: 'accessoires', emoji: '👜', gradient: 'from-amber-500 to-orange-700' },
  { cat: 'beaute', emoji: '🧴', gradient: 'from-lime-400 to-green-600' },
  { cat: 'maison', emoji: '🧺', gradient: 'from-orange-300 to-amber-600' },
]

export default function Home() {
  const promos = PRODUCTS.filter((p) => p.oldPrice != null).slice(0, 8)
  const nouveautes = PRODUCTS.filter((p) => p.badge === 'Nouveau')
  const topVentes = PRODUCTS.filter((p) => p.badge === 'Top vente')

  return (
    <div>
      <section className="bg-gradient-to-r from-brand to-fuchsia-700 text-white">
        <div className="max-w-7xl mx-auto px-4 py-14 sm:py-20 text-center">
          <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight">
            La mode tendance,
            <br className="sm:hidden" /> au meilleur prix 🇸🇳
          </h1>
          <p className="mt-4 text-sm sm:text-lg text-white/90 max-w-2xl mx-auto">
            Des milliers d'articles pour toute la famille, livrés partout au Sénégal. Payez en
            Wave, Orange Money ou à la livraison.
          </p>
          <Link
            to="/boutique"
            className="inline-block mt-7 bg-white text-brand font-bold rounded-full px-8 py-3 hover:scale-105 transition-transform"
          >
            Découvrir la boutique →
          </Link>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 mt-10">
        <h2 className="text-xl sm:text-2xl font-extrabold uppercase tracking-wide mb-4">
          Nos catégories
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
          {CATEGORY_TILES.map(({ cat, emoji, gradient }) => (
            <Link
              key={cat}
              to={`/boutique?categorie=${cat}`}
              className="group text-center"
            >
              <div
                className={`aspect-square rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center text-3xl sm:text-4xl shadow group-hover:scale-105 transition-transform`}
              >
                {emoji}
              </div>
              <span className="block mt-2 text-xs sm:text-sm font-semibold">
                {CATEGORY_LABELS[cat]}
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 mt-12">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl sm:text-2xl font-extrabold uppercase tracking-wide">
            🔥 Ventes flash
          </h2>
          <Link to="/boutique?promo=1" className="text-sm font-semibold text-brand hover:underline">
            Tout voir →
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {promos.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 mt-12">
        <h2 className="text-xl sm:text-2xl font-extrabold uppercase tracking-wide mb-4">
          ✨ Nouveautés
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {nouveautes.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 mt-12">
        <h2 className="text-xl sm:text-2xl font-extrabold uppercase tracking-wide mb-4">
          🏆 Meilleures ventes
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {topVentes.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 mt-14">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          {[
            { emoji: '🚚', title: 'Livraison rapide', text: 'À Dakar en 24-48 h, partout au Sénégal sous 5 jours.' },
            { emoji: '🔒', title: 'Paiement sécurisé', text: 'Wave, Orange Money, carte bancaire ou à la livraison.' },
            { emoji: '↩️', title: 'Retours faciles', text: '7 jours pour changer d’avis, échange sans frais.' },
          ].map((f) => (
            <div key={f.title} className="bg-white rounded-lg shadow-sm p-6">
              <div className="text-4xl mb-2">{f.emoji}</div>
              <h3 className="font-bold">{f.title}</h3>
              <p className="text-sm text-gray-500 mt-1">{f.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
