import { useEffect } from 'react'
import { useCart } from '../../contexts/useCart'
import CartStep from './steps/CartStep'
import DeliveryStep from './steps/DeliveryStep'
import PaymentStep from './steps/PaymentStep'
import ConfirmationStep from './steps/ConfirmationStep'
import * as S from './styles'
import fecharIcon from '../../assets/fechar.png'


export default function CartDrawer() {
  const { state, closeCart } = useCart()

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') closeCart()
    }
    if (state.isOpen) window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [state.isOpen, closeCart])

  if (!state.isOpen) return null

  return (
    <S.Overlay role="dialog" aria-modal="true" onClick={closeCart}>
      <S.Panel onClick={e => e.stopPropagation()}>
        <S.Top>
          <S.StepPill>{label(state.step)}</S.StepPill>
          <S.Close type="button" onClick={closeCart} aria-label="Fechar">
            <img src={fecharIcon} alt="Fechar carrinho" />
          </S.Close>

        </S.Top>

        {state.step === 'cart' && <CartStep />}
        {state.step === 'delivery' && <DeliveryStep />}
        {state.step === 'payment' && <PaymentStep />}
        {state.step === 'confirmation' && <ConfirmationStep />}
      </S.Panel>
    </S.Overlay>
  )
}

function label(step: string) {
  if (step === 'cart') return 'Carrinho'
  if (step === 'delivery') return 'Entrega'
  if (step === 'payment') return 'Pagamento'
  return 'Confirmação'
}
