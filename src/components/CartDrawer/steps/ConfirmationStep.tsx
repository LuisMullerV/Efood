import { useCart } from '../../../contexts/useCart'
import * as S from './styles'

export default function ConfirmationStep() {
  const { state, clearCart, closeCart } = useCart()

  return (
    <>
      <S.Title>Pedido confirmado 🎉</S.Title>
      <p>
        Seu pedido foi recebido. Código do pedido: <strong>{state.orderId}</strong>
      </p>
      <p>Agora é só esperar. (E não esquecer onde você mora… o formulário já cuidou disso.)</p>

      <S.Actions>
        <S.ButtonSecondary
          type="button"
          onClick={() => {
            clearCart()
            closeCart()
          }}
        >
          Fechar
        </S.ButtonSecondary>
        <S.ButtonPrimary
          type="button"
          onClick={() => {
            clearCart()
            closeCart()
          }}
        >
          Novo pedido
        </S.ButtonPrimary>
      </S.Actions>
    </>
  )
}
