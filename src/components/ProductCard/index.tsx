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

const ProductCard = ({ id, nome, descricao, serve, preco, foto }: Props) => {
  const { addItem, openCart } = useCart()

  return (
    <S.Card>
      <S.Img src={foto} alt={nome} />

      <S.Body>
        <S.TitleRow>
          <S.Title>{nome}</S.Title>
          <S.Badge>{serve}</S.Badge>
        </S.TitleRow>

        <S.Desc>{descricao}</S.Desc>

        <S.Footer>
          <S.Price>R$ {preco.toFixed(2).replace('.', ',')}</S.Price>
          <S.Button
            type="button"
            onClick={() => {
              addItem({ id, name: nome, price: preco, image: foto })
              openCart()
            }}
          >
            Adicionar
          </S.Button>
        </S.Footer>
      </S.Body>
    </S.Card>
  )
}

export default ProductCard
