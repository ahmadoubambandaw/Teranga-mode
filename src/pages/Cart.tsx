import { Link } from 'react-router-dom'
import { useStore } from '../context/StoreContext'
import { formatPrice } from '../types'

const FREE_SHIPPING_THRESHOLD = 25000
const SHIPPING_FEE = 2000

export default function Cart() {
  const { cart, setQuantity, removeFromCart, cartTotal } = useStore()

  if (cart.length === 0) {
    return (
      <div className="text-center py-24 px-4">
        <p className="text-6xl mb-4">🛒</p>
        <h1 className="text-2xl font-bold">Votre panier est vide</h1>
        <p className="text-gray-500 mt-2">Découvrez nos articles tendance et craquez !</p>
        <Link
          to="/boutique"
          className="inline-block mt-6 bg-ink text-white font-bold rounded-full px-8 py-3 hover:bg-brand transition-colors"
        >
          Voir la boutique
        </Link>
      </div>
    )
  }

  const shipping = cartTotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_FEE
  const remaining = FREE_SHIPPING_THRESHOLD - cartTotal

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-extrabold uppercase tracking-wide mb-6">Mon panier</h1>

      {remaining > 0 && (
        <div className="bg-amber-50 border border-amber-200 text-amber-800 text-sm rounded-lg px-4 py-3 mb-6">
          🚚 Plus que <strong>{formatPrice(remaining)}</strong> d'achats pour profiter de la
          livraison gratuite à Dakar !
        </div>
      )}

      <div className="space-y-3">
        {cart.map((item) => (
          <div
            key={`${item.product.id}-${item.size ?? ''}`}
            className="bg-white rounded-lg shadow-sm p-3 flex gap-3 items-center"
          >
            <Link
              to={`/produit/${item.product.id}`}
              className={`w-20 h-24 shrink-0 rounded-md bg-gradient-to-br ${item.product.gradient} flex items-center justify-center text-4xl`}
            >
              {item.product.emoji}
            </Link>
            <div className="flex-1 min-w-0">
              <Link
                to={`/produit/${item.product.id}`}
                className="font-semibold text-sm hover:text-brand line-clamp-2"
              >
                {item.product.name}
              </Link>
              {item.size && <div className="text-xs text-gray-500 mt-0.5">Taille : {item.size}</div>}
              <div className="text-brand font-bold mt-1">{formatPrice(item.product.price)}</div>
            </div>
            <div className="flex flex-col items-end gap-2">
              <div className="flex items-center border border-gray-300 rounded-full">
                <button
                  onClick={() => setQuantity(item.product.id, item.quantity - 1, item.size)}
                  className="w-8 h-8 font-bold hover:text-brand"
                  aria-label="Diminuer"
                >
                  −
                </button>
                <span className="w-6 text-center text-sm font-semibold">{item.quantity}</span>
                <button
                  onClick={() => setQuantity(item.product.id, item.quantity + 1, item.size)}
                  className="w-8 h-8 font-bold hover:text-brand"
                  aria-label="Augmenter"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => removeFromCart(item.product.id, item.size)}
                className="text-xs text-gray-400 hover:text-red-500"
              >
                🗑️ Retirer
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow-sm p-5 mt-6 text-sm">
        <div className="flex justify-between py-1">
          <span>Sous-total</span>
          <span className="font-semibold">{formatPrice(cartTotal)}</span>
        </div>
        <div className="flex justify-between py-1">
          <span>Livraison (Dakar)</span>
          <span className="font-semibold">
            {shipping === 0 ? <span className="text-emerald-600">Gratuite 🎉</span> : formatPrice(shipping)}
          </span>
        </div>
        <div className="flex justify-between border-t mt-2 pt-3 text-base font-extrabold">
          <span>Total</span>
          <span className="text-brand">{formatPrice(cartTotal + shipping)}</span>
        </div>
        <Link
          to="/commande"
          className="block text-center bg-brand text-white font-bold rounded-full py-3 mt-4 hover:bg-brand-dark transition-colors"
        >
          Passer la commande →
        </Link>
        <Link to="/boutique" className="block text-center text-gray-500 mt-3 hover:text-brand">
          ← Continuer mes achats
        </Link>
      </div>
    </div>
  )
}
