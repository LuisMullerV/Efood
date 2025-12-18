import { useCart } from '../../../contexts/useCart'
import * as S from './styles'

export default function CartStep() {
  const { state, total, removeItem, goToStep } = useCart()

  return (
    <>
      <S.Title>Carrinho</S.Title>

      {state.items.length === 0 && <p>Seu carrinho está vazio. (triste, porém elegante)</p>}

      {state.items.map(item => (
        <S.Row key={item.id}>
          <S.ItemImg src={item.image} alt={item.name} />
          <S.ItemName>
            {item.name} (x{item.quantity})
          </S.ItemName>
          <S.ItemPrice>
            R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}
          </S.ItemPrice>
          <S.RemoveBtn type="button" onClick={() => removeItem(item.id)}>
            🗑
          </S.RemoveBtn>
        </S.Row>
      ))}

      <S.Footer>
        <S.Total>
          <span>Valor total</span>
          <span>R$ {total.toFixed(2).replace('.', ',')}</span>
        </S.Total>

        <S.ButtonPrimary
          type="button"
          onClick={() => goToStep('delivery')}
          disabled={state.items.length === 0}
        >
          Continuar com a entrega
        </S.ButtonPrimary>
      </S.Footer>
    </>
  )
}
