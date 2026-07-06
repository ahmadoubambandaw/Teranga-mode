import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useStore } from '../context/StoreContext'
import { formatPrice } from '../types'

const PAYMENT_METHODS = [
  { id: 'wave', label: 'Wave', emoji: '💙' },
  { id: 'orange-money', label: 'Orange Money', emoji: '🧡' },
  { id: 'carte', label: 'Carte bancaire', emoji: '💳' },
  { id: 'livraison', label: 'Paiement à la livraison', emoji: '💵' },
]

export default function Checkout() {
  const { cart, cartTotal, clearCart } = useStore()
  const [payment, setPayment] = useState('wave')
  const [orderPlaced, setOrderPlaced] = useState(false)
  const [form, setForm] = useState({ nom: '', telephone: '', ville: 'Dakar', adresse: '' })

  const shipping = cartTotal >= 25000 ? 0 : 2000

  if (orderPlaced) {
    return (
      <div className="text-center py-24 px-4">
        <p className="text-6xl mb-4">🎉</p>
        <h1 className="text-2xl font-extrabold">Commande confirmée !</h1>
        <p className="text-gray-500 mt-3 max-w-md mx-auto">
          Merci pour votre confiance. Notre équipe vous contactera très vite au{' '}
          <strong>{form.telephone}</strong> pour organiser la livraison.
        </p>
        <Link
          to="/boutique"
          className="inline-block mt-6 bg-ink text-white font-bold rounded-full px-8 py-3 hover:bg-brand transition-colors"
        >
          Retour à la boutique
        </Link>
      </div>
    )
  }

  if (cart.length === 0) {
    return (
      <div className="text-center py-24 px-4">
        <p className="text-6xl mb-4">🛒</p>
        <h1 className="text-2xl font-bold">Votre panier est vide</h1>
        <Link
          to="/boutique"
          className="inline-block mt-6 bg-ink text-white font-bold rounded-full px-8 py-3 hover:bg-brand transition-colors"
        >
          Voir la boutique
        </Link>
      </div>
    )
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setOrderPlaced(true)
    clearCart()
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-extrabold uppercase tracking-wide mb-6">Finaliser ma commande</h1>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-5 gap-6">
        <div className="md:col-span-3 space-y-5">
          <div className="bg-white rounded-lg shadow-sm p-5">
            <h2 className="font-bold mb-4">📦 Informations de livraison</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="block text-sm">
                <span className="font-semibold">Nom complet</span>
                <input
                  required
                  value={form.nom}
                  onChange={(e) => setForm({ ...form, nom: e.target.value })}
                  className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-brand"
                  placeholder="Ex : Awa Ndiaye"
                />
              </label>
              <label className="block text-sm">
                <span className="font-semibold">Téléphone</span>
                <input
                  required
                  type="tel"
                  value={form.telephone}
                  onChange={(e) => setForm({ ...form, telephone: e.target.value })}
                  className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-brand"
                  placeholder="Ex : 77 123 45 67"
                />
              </label>
              <label className="block text-sm">
                <span className="font-semibold">Ville</span>
                <select
                  value={form.ville}
                  onChange={(e) => setForm({ ...form, ville: e.target.value })}
                  className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 bg-white focus:outline-none focus:border-brand"
                >
                  {['Dakar', 'Thiès', 'Saint-Louis', 'Touba', 'Mbour', 'Ziguinchor', 'Kaolack', 'Autre'].map(
                    (v) => (
                      <option key={v}>{v}</option>
                    ),
                  )}
                </select>
              </label>
              <label className="block text-sm sm:col-span-2">
                <span className="font-semibold">Adresse / quartier</span>
                <input
                  required
                  value={form.adresse}
                  onChange={(e) => setForm({ ...form, adresse: e.target.value })}
                  className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-brand"
                  placeholder="Ex : Sacré-Cœur 3, villa n° 123"
                />
              </label>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-5">
            <h2 className="font-bold mb-4">💳 Mode de paiement</h2>
            <div className="space-y-2">
              {PAYMENT_METHODS.map((m) => (
                <label
                  key={m.id}
                  className={`flex items-center gap-3 border rounded-lg px-4 py-3 cursor-pointer transition-colors ${
                    payment === m.id ? 'border-brand bg-pink-50' : 'border-gray-200 hover:border-gray-400'
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    value={m.id}
                    checked={payment === m.id}
                    onChange={() => setPayment(m.id)}
                    className="accent-brand"
                  />
                  <span className="text-xl">{m.emoji}</span>
                  <span className="font-semibold text-sm">{m.label}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="md:col-span-2">
          <div className="bg-white rounded-lg shadow-sm p-5 text-sm sticky top-40">
            <h2 className="font-bold mb-4">🧾 Récapitulatif</h2>
            <ul className="space-y-2 max-h-56 overflow-y-auto pr-1">
              {cart.map((item) => (
                <li key={`${item.product.id}-${item.size ?? ''}`} className="flex justify-between gap-2">
                  <span className="truncate">
                    {item.product.emoji} {item.product.name} × {item.quantity}
                  </span>
                  <span className="font-semibold shrink-0">
                    {formatPrice(item.product.price * item.quantity)}
                  </span>
                </li>
              ))}
            </ul>
            <div className="border-t mt-3 pt-3 space-y-1">
              <div className="flex justify-between">
                <span>Sous-total</span>
                <span className="font-semibold">{formatPrice(cartTotal)}</span>
              </div>
              <div className="flex justify-between">
                <span>Livraison</span>
                <span className="font-semibold">
                  {shipping === 0 ? 'Gratuite 🎉' : formatPrice(shipping)}
                </span>
              </div>
              <div className="flex justify-between text-base font-extrabold pt-1">
                <span>Total</span>
                <span className="text-brand">{formatPrice(cartTotal + shipping)}</span>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-brand text-white font-bold rounded-full py-3 mt-4 hover:bg-brand-dark transition-colors"
            >
              Confirmer la commande ✓
            </button>
            <p className="text-[11px] text-gray-400 mt-3 text-center">
              Démo : aucune transaction réelle n'est effectuée.
            </p>
          </div>
        </div>
      </form>
    </div>
  )
}
