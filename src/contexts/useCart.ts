import { useContext } from 'react'
import { CartContext } from './CartContext'

export const useCart = () => {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart precisa estar dentro do CartProvider')
  return ctx
}
