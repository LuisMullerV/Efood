import { useDispatch } from 'react-redux'
import { resetCheckout } from '../../../store/cartSlice'
import * as S from './styles'

export default function ConfirmationStep() {
  const dispatch = useDispatch()

  const handleFinish = () => {
    dispatch(resetCheckout())
  }

  return (
    <>
      <S.Title>Pedido confirmado!</S.Title>
      <S.InputGroup>
        <p style={{ color: '#FFEBD9', fontSize: '14px', lineHeight: '22px' }}>
          Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido.
        </p>
        <br />
        <p style={{ color: '#FFEBD9', fontSize: '14px', lineHeight: '22px' }}>
          Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras. 
        </p>
        <br />
        <p style={{ color: '#FFEBD9', fontSize: '14px', lineHeight: '22px' }}>
          Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar durante a refeição.
        </p>
        <br />
        <p style={{ color: '#FFEBD9', fontSize: '14px', lineHeight: '22px' }}>
          Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!
        </p>
      </S.InputGroup>
      
      <S.ButtonPrimary onClick={handleFinish}>Concluir</S.ButtonPrimary>
    </>
  )
}