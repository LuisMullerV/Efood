import { Link, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { open } from '../../store/cartSlice'
import { RootState } from '../../store'
import * as S from './styles'

import logo from '../../assets/logo.png'
import banner from '../../assets/Vector.png'

export default function Header() {
  const location = useLocation()
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootState) => state.cart)

  // Verifica se o usuário está na página inicial
  const isHome = location.pathname === '/'

  const openCart = () => {
    dispatch(open())
  }

  // Na Home o banner é maior, nas outras páginas é menor
  const headerStyle = isHome 
    ? { backgroundImage: `url(${banner})` } 
    : { backgroundImage: `url(${banner})`, height: '186px', padding: '40px 0' }

  return (
    <S.HeaderBar style={headerStyle}>
      <S.Container className={isHome ? 'home' : ''}>
        {!isHome && (
          <S.Links>
            <Link to="/">Restaurantes</Link>
          </S.Links>
        )}
        
        <Link to="/">
          <S.Logo src={logo} alt="efood" />
        </Link>

        {!isHome && (
          <S.CartButton onClick={openCart}>
            {items.length} produto(s) no carrinho
          </S.CartButton>
        )}
      </S.Container>
      
      {isHome && (
        <S.Title>
          Viva experiências gastronômicas <br /> no conforto da sua casa
        </S.Title>
      )}
    </S.HeaderBar>
  )
}