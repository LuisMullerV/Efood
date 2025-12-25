import { Link, useLocation } from 'react-router-dom'
import { useCart } from '../../contexts/useCart'
import * as S from './styles'

import logo from '../../assets/logo.png'

export default function Header() {
  const location = useLocation()
  const { state, openCart } = useCart()

  const isHome = location.pathname === '/'

  return (
    <S.Wrapper>
      <S.Inner>
        {/* ESQUERDA */}
        <S.Left>
          {isHome ? (
            <S.LeftText>Restaurantes</S.LeftText>
          ) : (
            <S.LeftLink as={Link} to="/">
              Restaurantes
            </S.LeftLink>
          )}
        </S.Left>

        {/* CENTRO */}
        <S.Center>
          <S.Logo as={Link} to="/" aria-label="Ir para a Home">
            <img src={logo} alt="efood" />
          </S.Logo>
        </S.Center>

        {/* DIREITA */}
        <S.Right>
          <S.CartInfo type="button" onClick={openCart}>
            {state.items.length} produto(s) no carrinho
          </S.CartInfo>
        </S.Right>
      </S.Inner>
    </S.Wrapper>
  )
}
