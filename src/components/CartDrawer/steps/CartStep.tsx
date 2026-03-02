import { useDispatch, useSelector } from 'react-redux'
import { remove, nextStep } from '../../../store/cartSlice'
import { RootState } from '../../../store'
import * as S from './styles'

export default function CartStep() {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootState) => state.cart)

  const total = items.reduce((acc, item) => acc + (item.price || 0), 0)

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price)
  }

  return (
    <S.CartLayout>
      {items.length === 0 ? (
        <S.Empty>Seu carrinho está vazio.</S.Empty>
      ) : (
        <S.ItemsScroll>
          {items.map((item) => (
            <S.Row key={item.id}>
              <S.ItemImg src={item.foto} alt={item.nome} />
              <S.ItemInfo>
                <S.ItemName>{item.nome}</S.ItemName>
                <S.ItemPrice>{formatPrice(item.price)}</S.ItemPrice>
              </S.ItemInfo>
              <button type="button" onClick={() => dispatch(remove(item.id))} />
            </S.Row>
          ))}
          <S.Footer>
            <S.Divider>
              <span>Valor total</span>
              <span>{formatPrice(total)}</span>
            </S.Divider>
            <S.ButtonSecondary onClick={() => dispatch(nextStep())}>
              Continuar com a entrega
            </S.ButtonSecondary>
          </S.Footer>
        </S.ItemsScroll>
      )}
    </S.CartLayout>
  )
}