import { useCart } from '../../../contexts/useCart'
import * as S from './styles'

export default function CartStep() {
  const { state, total, removeItem, goToStep } = useCart()

  return (
    <S.CartLayout>
      {state.items.length === 0 ? (
        <S.Empty>Seu carrinho está vazio.</S.Empty>
      ) : (
        <S.ItemsScroll>
          {state.items.map((item) => (
            <S.Row key={item.id}>
              <S.ItemImg src={item.image} alt={item.name} />

              <S.ItemInfo>
                <S.ItemName title={item.name}>{item.name}</S.ItemName>

                <S.ItemPrice>
                  R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}
                </S.ItemPrice>
              </S.ItemInfo>

              <S.RemoveBtn
                type="button"
                aria-label="Remover item"
                onClick={() => removeItem(item.id)}
              />
            </S.Row>
          ))}
        </S.ItemsScroll>
      )}

      <S.Footer>
        <S.Divider />

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
    </S.CartLayout>
  )
}
