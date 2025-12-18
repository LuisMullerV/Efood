/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useMemo, useReducer } from 'react'

export type Step = 'cart' | 'delivery' | 'payment' | 'confirmation'

export type CartItem = {
  id: number
  name: string
  price: number
  image: string
  quantity: number
}

export type DeliveryInfo = {
  receiver: string
  address: string
  city: string
  cep: string
  number: string
  complement?: string
}

export type PaymentInfo = {
  cardName: string
  cardNumber: string
  cvv: string
  expMonth: string
  expYear: string
}

type State = {
  isOpen: boolean
  step: Step
  items: CartItem[]
  delivery: DeliveryInfo
  payment: PaymentInfo
  orderId: string
}

type Action =
  | { type: 'OPEN' }
  | { type: 'CLOSE' }
  | { type: 'GOTO'; payload: Step }
  | { type: 'ADD_ITEM'; payload: Omit<CartItem, 'quantity'> }
  | { type: 'REMOVE_ITEM'; payload: number }
  | { type: 'CLEAR' }
  | { type: 'SET_DELIVERY'; payload: DeliveryInfo }
  | { type: 'SET_PAYMENT'; payload: PaymentInfo }
  | { type: 'SET_ORDER' }

export type CartContextType = {
  state: State
  total: number
  openCart: () => void
  closeCart: () => void
  goToStep: (step: Step) => void
  addItem: (item: Omit<CartItem, 'quantity'>) => void
  removeItem: (id: number) => void
  clearCart: () => void
  setDelivery: (data: DeliveryInfo) => void
  setPayment: (data: PaymentInfo) => void
  setOrder: () => void
}

const initialState: State = {
  isOpen: false,
  step: 'cart',
  items: [],
  delivery: {
    receiver: '',
    address: '',
    city: '',
    cep: '',
    number: '',
    complement: ''
  },
  payment: {
    cardName: '',
    cardNumber: '',
    cvv: '',
    expMonth: '',
    expYear: ''
  },
  orderId: ''
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'OPEN':
      return { ...state, isOpen: true }
    case 'CLOSE':
      return { ...state, isOpen: false }
    case 'GOTO':
      return { ...state, step: action.payload }
    case 'ADD_ITEM': {
      const exists = state.items.find(i => i.id === action.payload.id)
      const items = exists
        ? state.items.map(i =>
            i.id === action.payload.id ? { ...i, quantity: i.quantity + 1 } : i
          )
        : [...state.items, { ...action.payload, quantity: 1 }]
      return { ...state, items, isOpen: true, step: 'cart' }
    }
    case 'REMOVE_ITEM': {
      const items = state.items
        .map(i => (i.id === action.payload ? { ...i, quantity: i.quantity - 1 } : i))
        .filter(i => i.quantity > 0)
      return { ...state, items }
    }
    case 'SET_DELIVERY':
      return { ...state, delivery: action.payload }
    case 'SET_PAYMENT':
      return { ...state, payment: action.payload }
    case 'SET_ORDER': {
      const orderId = Math.random().toString(36).slice(2, 10).toUpperCase()
      return { ...state, orderId, step: 'confirmation' }
    }
    case 'CLEAR':
      return { ...initialState }
    default:
      return state
  }
}

export const CartContext = createContext<CartContextType | null>(null)

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const total = useMemo(
    () => state.items.reduce((acc, item) => acc + item.price * item.quantity, 0),
    [state.items]
  )

  const value: CartContextType = {
    state,
    total,
    openCart: () => dispatch({ type: 'OPEN' }),
    closeCart: () => dispatch({ type: 'CLOSE' }),
    goToStep: step => dispatch({ type: 'GOTO', payload: step }),
    addItem: item => dispatch({ type: 'ADD_ITEM', payload: item }),
    removeItem: id => dispatch({ type: 'REMOVE_ITEM', payload: id }),
    clearCart: () => dispatch({ type: 'CLEAR' }),
    setDelivery: data => dispatch({ type: 'SET_DELIVERY', payload: data }),
    setPayment: data => dispatch({ type: 'SET_PAYMENT', payload: data }),
    setOrder: () => dispatch({ type: 'SET_ORDER' })
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
