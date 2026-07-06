import { Link } from 'react-router-dom'
import { useStore } from '../context/StoreContext'
import { formatPrice } from '../types'
import type { Product } from '../types'

const BADGE_STYLES: Record<NonNullable<Product['badge']>, string> = {
  Nouveau: 'bg-emerald-500',
  Promo: 'bg-brand',
  'Top vente': 'bg-amber-500',
}

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart, toggleWishlist, wishlist } = useStore()
  const inWishlist = wishlist.includes(product.id)
  const discount =
    product.oldPrice != null
      ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
      : null

  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow flex flex-col">
      <Link to={`/produit/${product.id}`} className="relative block">
        <div
          className={`aspect-[3/4] bg-gradient-to-br ${product.gradient} flex items-center justify-center text-7xl group-hover:scale-105 transition-transform duration-300`}
        >
          <span className="drop-shadow-lg">{product.emoji}</span>
        </div>
        {product.badge && (
          <span
            className={`absolute top-2 left-2 ${BADGE_STYLES[product.badge]} text-white text-[11px] font-bold px-2 py-0.5 rounded-full`}
          >
            {product.badge}
          </span>
        )}
        {discount != null && (
          <span className="absolute bottom-2 left-2 bg-ink/80 text-white text-[11px] font-bold px-2 py-0.5 rounded-full">
            -{discount}%
          </span>
        )}
        <button
          onClick={(e) => {
            e.preventDefault()
            toggleWishlist(product.id)
          }}
          aria-label={inWishlist ? 'Retirer des favoris' : 'Ajouter aux favoris'}
          className="absolute top-2 right-2 bg-white/90 rounded-full w-8 h-8 flex items-center justify-center text-sm shadow hover:scale-110 transition-transform"
        >
          {inWishlist ? '❤️' : '🤍'}
        </button>
      </Link>

      <div className="p-3 flex flex-col gap-1 flex-1">
        <Link
          to={`/produit/${product.id}`}
          className="text-sm font-medium leading-snug line-clamp-2 hover:text-brand"
        >
          {product.name}
        </Link>
        <div className="text-xs text-gray-500">
          ⭐ {product.rating.toFixed(1)} ({product.reviews})
        </div>
        <div className="mt-auto flex items-center justify-between gap-2 pt-1">
          <div>
            <span className="text-brand font-bold">{formatPrice(product.price)}</span>
            {product.oldPrice != null && (
              <span className="block text-xs text-gray-400 line-through">
                {formatPrice(product.oldPrice)}
              </span>
            )}
          </div>
          <button
            onClick={() => addToCart(product, product.sizes?.[0])}
            className="bg-ink text-white text-xs font-semibold rounded-full px-3 py-1.5 hover:bg-brand transition-colors"
          >
            + Panier
          </button>
        </div>
      </div>
    </div>
  )
}
