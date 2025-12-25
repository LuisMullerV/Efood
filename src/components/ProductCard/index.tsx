import * as S from './styles'



type Props = {
  id: number
  nome: string
  descricao: string
  serve: string
  preco: number
  foto: string
  onOpenDetails?: () => void
}

const ProductCard = ({
  id,
  nome,
  descricao,
  serve,
  preco,
  foto,
  onOpenDetails
}: Props) => {

  return (
    <S.Card>
      <S.ImageWrap>
        <S.Img src={foto} alt={nome} />
      </S.ImageWrap>

      <S.Body>
        <S.Title>{nome}</S.Title>
        <S.Desc>{descricao}</S.Desc>

        <S.Actions>


          <S.AddButton type="button" onClick={() => onOpenDetails?.()}>
            Mais detalhes
          </S.AddButton>
        </S.Actions>
      </S.Body>
    </S.Card>
  )
}

export default ProductCard
