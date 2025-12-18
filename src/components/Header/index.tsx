import { Link, useLocation } from 'react-router-dom'
import { useCart } from '../../contexts/useCart'
import * as S from './styles'

export default function Header() {
  const { state, openCart } = useCart()
  const location = useLocation()

  const qty = state.items.reduce((acc, i) => acc + i.quantity, 0)

  return (
    <S.Bar>
      <S.Inner>
        <S.Brand as={Link} to="/">
          efood
        </S.Brand>

        <S.Right>
          {location.pathname !== '/' && (
            <S.NavLink as={Link} to="/">
              Home
            </S.NavLink>
          )}

          <S.CartBtn type="button" onClick={openCart}>
            Carrinho ({qty})
          </S.CartBtn>
        </S.Right>
      </S.Inner>
    </S.Bar>
  )
}
