export type Category = 'femme' | 'homme' | 'enfant' | 'accessoires' | 'beaute' | 'maison'

export interface Product {
  id: string
  name: string
  category: Category
  price: number
  oldPrice?: number
  rating: number
  reviews: number
  emoji: string
  gradient: string
  badge?: 'Nouveau' | 'Promo' | 'Top vente'
  description: string
  sizes?: string[]
}

export interface CartItem {
  product: Product
  quantity: number
  size?: string
}

export const CATEGORY_LABELS: Record<Category, string> = {
  femme: 'Femme',
  homme: 'Homme',
  enfant: 'Enfant',
  accessoires: 'Accessoires',
  beaute: 'Beauté',
  maison: 'Maison',
}

export function formatPrice(value: number): string {
  return `${value.toLocaleString('fr-FR')} FCFA`
}
