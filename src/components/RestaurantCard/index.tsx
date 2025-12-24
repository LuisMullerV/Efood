import { Link } from 'react-router-dom'
import * as S from './styles'

type Props = {
  id: number
  nome: string
  tipo: string
  nota: number
  destaque?: boolean
  descricao: string
  imagem: string
}

export default function RestaurantCard({ id, nome, tipo, nota, destaque, descricao, imagem }: Props) {
  return (
    <S.Card>
      <S.ImageWrapper>
        <S.Image src={imagem} alt={nome} />
        <S.Tags>
          {destaque && <S.Tag>Destaque da semana</S.Tag>}
          <S.Tag>{tipo}</S.Tag>
        </S.Tags>
      </S.ImageWrapper>
      <S.Content>
        <S.TopRow>
          <S.Name>{nome}</S.Name>
          <S.Rate>
            {nota.toFixed(1)}
            <S.Star aria-hidden>★</S.Star>
          </S.Rate>
        </S.TopRow>
        <S.Description>{descricao}</S.Description>

        <S.Button as={Link} to={`/restaurante/${id}`}>
          Saiba mais
        </S.Button>
      </S.Content>
    </S.Card>
  )
}
