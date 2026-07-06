import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import type { CartItem, Product } from '../types'

interface StoreState {
  cart: CartItem[]
  wishlist: string[]
  addToCart: (product: Product, size?: string) => void
  removeFromCart: (productId: string, size?: string) => void
  setQuantity: (productId: string, quantity: number, size?: string) => void
  clearCart: () => void
  toggleWishlist: (productId: string) => void
  cartCount: number
  cartTotal: number
}

const StoreContext = createContext<StoreState | null>(null)

function load<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key)
    return raw ? (JSON.parse(raw) as T) : fallback
  } catch {
    return fallback
  }
}

export function StoreProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>(() => load('tm-cart', []))
  const [wishlist, setWishlist] = useState<string[]>(() => load('tm-wishlist', []))

  useEffect(() => {
    localStorage.setItem('tm-cart', JSON.stringify(cart))
  }, [cart])

  useEffect(() => {
    localStorage.setItem('tm-wishlist', JSON.stringify(wishlist))
  }, [wishlist])

  const value = useMemo<StoreState>(() => {
    const sameLine = (item: CartItem, productId: string, size?: string) =>
      item.product.id === productId && item.size === size

    return {
      cart,
      wishlist,
      addToCart: (product, size) =>
        setCart((prev) => {
          const existing = prev.find((item) => sameLine(item, product.id, size))
          if (existing) {
            return prev.map((item) =>
              sameLine(item, product.id, size) ? { ...item, quantity: item.quantity + 1 } : item,
            )
          }
          return [...prev, { product, quantity: 1, size }]
        }),
      removeFromCart: (productId, size) =>
        setCart((prev) => prev.filter((item) => !sameLine(item, productId, size))),
      setQuantity: (productId, quantity, size) =>
        setCart((prev) =>
          quantity <= 0
            ? prev.filter((item) => !sameLine(item, productId, size))
            : prev.map((item) => (sameLine(item, productId, size) ? { ...item, quantity } : item)),
        ),
      clearCart: () => setCart([]),
      toggleWishlist: (productId) =>
        setWishlist((prev) =>
          prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId],
        ),
      cartCount: cart.reduce((sum, item) => sum + item.quantity, 0),
      cartTotal: cart.reduce((sum, item) => sum + item.quantity * item.product.price, 0),
    }
  }, [cart, wishlist])

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}

export function useStore(): StoreState {
  const ctx = useContext(StoreContext)
  if (!ctx) throw new Error('useStore doit être utilisé dans un StoreProvider')
  return ctx
}
