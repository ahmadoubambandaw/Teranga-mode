import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { getProduct, PRODUCTS } from '../data/products'
import { useStore } from '../context/StoreContext'
import { CATEGORY_LABELS, formatPrice } from '../types'

export default function ProductDetail() {
  const { id } = useParams()
  const product = id ? getProduct(id) : undefined
  const { addToCart, toggleWishlist, wishlist } = useStore()
  const [size, setSize] = useState<string | undefined>(product?.sizes?.[0])
  const [added, setAdded] = useState(false)

  if (!product) {
    return (
      <div className="text-center py-24">
        <p className="text-6xl mb-4">😢</p>
        <h1 className="text-2xl font-bold">Produit introuvable</h1>
        <Link to="/boutique" className="text-brand font-semibold hover:underline mt-2 inline-block">
          ← Retour à la boutique
        </Link>
      </div>
    )
  }

  const inWishlist = wishlist.includes(product.id)
  const similaires = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id,
  ).slice(0, 4)

  function handleAdd() {
    if (!product) return
    addToCart(product, size)
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <nav className="text-xs text-gray-500 mb-4">
        <Link to="/" className="hover:text-brand">Accueil</Link>
        {' / '}
        <Link to={`/boutique?categorie=${product.category}`} className="hover:text-brand">
          {CATEGORY_LABELS[product.category]}
        </Link>
        {' / '}
        <span className="text-ink">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          className={`aspect-[3/4] max-h-[560px] rounded-xl bg-gradient-to-br ${product.gradient} flex items-center justify-center text-[10rem] shadow`}
        >
          <span className="drop-shadow-xl">{product.emoji}</span>
        </div>

        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold">{product.name}</h1>
          <div className="text-sm text-gray-500 mt-2">
            ⭐ {product.rating.toFixed(1)} · {product.reviews} avis clients
          </div>

          <div className="mt-4 flex items-end gap-3">
            <span className="text-3xl font-extrabold text-brand">{formatPrice(product.price)}</span>
            {product.oldPrice != null && (
              <span className="text-lg text-gray-400 line-through">
                {formatPrice(product.oldPrice)}
              </span>
            )}
          </div>

          <p className="mt-5 text-gray-600 leading-relaxed">{product.description}</p>

          {product.sizes && (
            <div className="mt-6">
              <h3 className="text-sm font-bold uppercase tracking-wide mb-2">Taille</h3>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSize(s)}
                    className={`min-w-[44px] px-3 py-2 rounded-full border text-sm font-semibold transition-colors ${
                      size === s ? 'bg-ink text-white border-ink' : 'bg-white border-gray-300 hover:border-ink'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="mt-7 flex gap-3">
            <button
              onClick={handleAdd}
              className={`flex-1 rounded-full py-3 font-bold text-white transition-colors ${
                added ? 'bg-emerald-500' : 'bg-ink hover:bg-brand'
              }`}
            >
              {added ? '✓ Ajouté au panier' : '🛒 Ajouter au panier'}
            </button>
            <button
              onClick={() => toggleWishlist(product.id)}
              aria-label="Favoris"
              className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-xl hover:border-brand"
            >
              {inWishlist ? '❤️' : '🤍'}
            </button>
          </div>

          <ul className="mt-7 space-y-2 text-sm text-gray-600">
            <li>🚚 Livraison à Dakar en 24-48 h — gratuite dès 25 000 FCFA</li>
            <li>💳 Wave, Orange Money, carte bancaire ou paiement à la livraison</li>
            <li>↩️ Retour ou échange sous 7 jours</li>
          </ul>
        </div>
      </div>

      {similaires.length > 0 && (
        <section className="mt-14">
          <h2 className="text-xl font-extrabold uppercase tracking-wide mb-4">
            Vous aimerez aussi
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {similaires.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
