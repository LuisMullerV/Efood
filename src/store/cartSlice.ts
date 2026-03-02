import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type CartItem = {
  id: number
  price: number
  nome: string
  foto: string
  porcao: string
}

type DeliveryState = {
  receiver: string
  address: string
  city: string
  cep: string
  number: string
  complement?: string
}

type CartState = {
  items: CartItem[]
  isOpen: boolean
  delivery: DeliveryState | null
  currentStep: 'cart' | 'delivery' | 'payment' | 'confirmation'
}

const initialState: CartState = {
  items: [],
  isOpen: false,
  delivery: null,
  currentStep: 'cart'
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<CartItem>) => {
      const foundItem = state.items.find((item) => item.id === action.payload.id)
      if (!foundItem) {
        state.items.push(action.payload)
      }
      state.isOpen = true
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    addDeliveryDetails: (state, action: PayloadAction<DeliveryState>) => {
      state.delivery = action.payload
    },
    nextStep: (state) => {
      if (state.currentStep === 'cart') state.currentStep = 'delivery'
      else if (state.currentStep === 'delivery') state.currentStep = 'payment'
      else if (state.currentStep === 'payment') state.currentStep = 'confirmation'
    },
    prevStep: (state) => {
      if (state.currentStep === 'payment') state.currentStep = 'delivery'
      else if (state.currentStep === 'delivery') state.currentStep = 'cart'
    },
    goToCart: (state) => {
      state.currentStep = 'cart'
    },
    clearCart: (state) => {
      state.items = []
      state.delivery = null
      state.currentStep = 'confirmation'
    },
    resetCheckout: (state) => {
      state.currentStep = 'cart'
      state.isOpen = false
    }
  }
})

export const { 
  add, 
  remove, 
  open, 
  close, 
  addDeliveryDetails, 
  nextStep, 
  prevStep, 
  goToCart, 
  clearCart, 
  resetCheckout 
} = cartSlice.actions

export default cartSlice.reducer