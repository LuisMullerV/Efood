import { useDispatch, useSelector } from 'react-redux'
import { close } from '../../store/cartSlice'
import { RootState } from '../../store'

import CartStep from './steps/CartStep'
import DeliveryStep from './steps/DeliveryStep'
import PaymentStep from './steps/PaymentStep'
import ConfirmationStep from './steps/ConfirmationStep'
import * as S from './styles'

export default function CartDrawer() {
  const dispatch = useDispatch()
  const { isOpen, currentStep } = useSelector((state: RootState) => state.cart)

  const closeCart = () => {
    dispatch(close())
  }

  // Se o carrinho estiver fechado, não renderiza nada (evita processamento desnecessário)
  if (!isOpen) return null

  return (
    <S.Overlay onClick={closeCart}>
      <S.Panel onClick={(e: React.MouseEvent) => e.stopPropagation()}>
        {currentStep === 'cart' && <CartStep />}
        {currentStep === 'delivery' && <DeliveryStep />}
        {currentStep === 'payment' && <PaymentStep />}
        {currentStep === 'confirmation' && <ConfirmationStep />}
      </S.Panel>
    </S.Overlay>
  )
}