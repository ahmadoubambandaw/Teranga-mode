import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { PRODUCTS } from '../data/products'
import { useStore } from '../context/StoreContext'

export default function Wishlist() {
  const { wishlist } = useStore()
  const products = PRODUCTS.filter((p) => wishlist.includes(p.id))

  if (products.length === 0) {
    return (
      <div className="text-center py-24 px-4">
        <p className="text-6xl mb-4">🤍</p>
        <h1 className="text-2xl font-bold">Aucun favori pour le moment</h1>
        <p className="text-gray-500 mt-2">
          Touchez le petit cœur sur un article pour le retrouver ici.
        </p>
        <Link
          to="/boutique"
          className="inline-block mt-6 bg-ink text-white font-bold rounded-full px-8 py-3 hover:bg-brand transition-colors"
        >
          Voir la boutique
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-extrabold uppercase tracking-wide mb-6">
        ❤️ Mes favoris ({products.length})
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  )
}
