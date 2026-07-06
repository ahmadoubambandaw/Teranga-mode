import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { PRODUCTS } from '../data/products'
import { CATEGORY_LABELS } from '../types'
import type { Category } from '../types'

const CATEGORIES = Object.keys(CATEGORY_LABELS) as Category[]

type Sort = 'pertinence' | 'prix-asc' | 'prix-desc' | 'note'

export default function Catalog() {
  const [params, setParams] = useSearchParams()
  const [sort, setSort] = useState<Sort>('pertinence')

  const categorie = params.get('categorie') as Category | null
  const promoOnly = params.get('promo') === '1'
  const query = (params.get('q') ?? '').toLowerCase().trim()

  const results = useMemo(() => {
    let list = PRODUCTS.slice()
    if (categorie) list = list.filter((p) => p.category === categorie)
    if (promoOnly) list = list.filter((p) => p.oldPrice != null)
    if (query) {
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          CATEGORY_LABELS[p.category].toLowerCase().includes(query),
      )
    }
    switch (sort) {
      case 'prix-asc':
        list.sort((a, b) => a.price - b.price)
        break
      case 'prix-desc':
        list.sort((a, b) => b.price - a.price)
        break
      case 'note':
        list.sort((a, b) => b.rating - a.rating)
        break
    }
    return list
  }, [categorie, promoOnly, query, sort])

  const title = promoOnly
    ? '🔥 Promotions'
    : categorie
      ? CATEGORY_LABELS[categorie]
      : query
        ? `Résultats pour « ${params.get('q')} »`
        : 'Toute la boutique'

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-extrabold uppercase tracking-wide">{title}</h1>
      <p className="text-sm text-gray-500 mt-1">{results.length} article(s)</p>

      <div className="flex flex-wrap items-center gap-2 mt-4">
        <button
          onClick={() => setParams({})}
          className={`text-xs font-semibold rounded-full px-3 py-1.5 border transition-colors ${
            !categorie && !promoOnly ? 'bg-ink text-white border-ink' : 'bg-white border-gray-300 hover:border-ink'
          }`}
        >
          Tout
        </button>
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setParams({ categorie: cat })}
            className={`text-xs font-semibold rounded-full px-3 py-1.5 border transition-colors ${
              categorie === cat ? 'bg-ink text-white border-ink' : 'bg-white border-gray-300 hover:border-ink'
            }`}
          >
            {CATEGORY_LABELS[cat]}
          </button>
        ))}
        <button
          onClick={() => setParams({ promo: '1' })}
          className={`text-xs font-semibold rounded-full px-3 py-1.5 border transition-colors ${
            promoOnly ? 'bg-brand text-white border-brand' : 'bg-white border-gray-300 text-brand hover:border-brand'
          }`}
        >
          🔥 Promos
        </button>

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value as Sort)}
          className="ml-auto text-xs font-semibold border border-gray-300 rounded-full px-3 py-1.5 bg-white"
        >
          <option value="pertinence">Trier : pertinence</option>
          <option value="prix-asc">Prix croissant</option>
          <option value="prix-desc">Prix décroissant</option>
          <option value="note">Meilleures notes</option>
        </select>
      </div>

      {results.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-6xl mb-4">🔎</p>
          <p className="font-semibold">Aucun article ne correspond à votre recherche.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 mt-6">
          {results.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  )
}
