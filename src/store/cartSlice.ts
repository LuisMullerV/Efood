import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type CartItem = {
  id: number
  name: string
  price: number
  image: string
  qty: number
}

export type DeliveryData = {
  receiver: string
  address: string
  city: string
  cep: string
  number: string
  complement?: string
}

export type PaymentData = {
  cardName: string
  cardNumber: string
  cvv: string
  expMonth: string
  expYear: string
}

export type CartStep = 'cart' | 'delivery' | 'payment' | 'confirmation'

type CartState = {
  items: CartItem[]
  isOpen: boolean
  step: CartStep
  delivery: DeliveryData
  payment: PaymentData
  orderId?: string
}

const initialState: CartState = {
  items: [],
  isOpen: false,
  step: 'cart',
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
  orderId: undefined
}

type AddPayload = Omit<CartItem, 'qty'> & { qty?: number }

function findIndex(items: CartItem[], id: number) {
  return items.findIndex((i) => i.id === id)
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    openCart(state) {
      state.isOpen = true
    },
    closeCart(state) {
      state.isOpen = false
    },
    toggleCart(state) {
      state.isOpen = !state.isOpen
    },

    setStep(state, action: PayloadAction<CartStep>) {
      state.step = action.payload
    },
    resetFlow(state) {
      state.step = 'cart'
      state.orderId = undefined
    },

    addItem(state, action: PayloadAction<AddPayload>) {
      const qtyToAdd = action.payload.qty ?? 1
      const idx = findIndex(state.items, action.payload.id)

      if (idx >= 0) {
        state.items[idx].qty += qtyToAdd
      } else {
        state.items.push({
          ...action.payload,
          qty: qtyToAdd
        })
      }
    },
    removeItem(state, action: PayloadAction<number>) {
      state.items = state.items.filter((i) => i.id !== action.payload)
    },
    clearCart(state) {
      state.items = []
    },

    setDelivery(state, action: PayloadAction<DeliveryData>) {
      state.delivery = action.payload
    },
    setPayment(state, action: PayloadAction<PaymentData>) {
      state.payment = action.payload
    },
    setOrderId(state, action: PayloadAction<string>) {
      state.orderId = action.payload
    }
  }
})

export const {
  openCart,
  closeCart,
  toggleCart,
  setStep,
  resetFlow,
  addItem,
  removeItem,
  clearCart,
  setDelivery,
  setPayment,
  setOrderId
} = cartSlice.actions

export default cartSlice.reducer
