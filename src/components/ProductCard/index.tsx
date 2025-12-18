import * as S from './styles'
import { useCart } from '../../contexts/useCart'

type Props = {
  id: number
  nome: string
  descricao: string
  serve: string
  preco: number
  foto: string
}

export default function ProductCard({ id, nome, descricao, serve, preco, foto }: Props) {
  const { addItem } = useCart()

  return (
    <S.Card>
      <S.Img src={foto} alt={nome} />
      <S.Body>
        <S.TitleRow>
          <S.Title>{nome}</S.Title>
          <S.Badge>{serve}</S.Badge>
        </S.TitleRow>
        <S.Desc>{descricao}</S.Desc>

        <S.Actions>
          <S.Price>R$ {preco.toFixed(2).replace('.', ',')}</S.Price>
          <S.BuyBtn
            type="button"
            onClick={() => addItem({ id, name: nome, price: preco, image: foto })}
          >
            Adicionar
          </S.BuyBtn>
        </S.Actions>
      </S.Body>
    </S.Card>
  )
}
