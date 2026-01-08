import { Link } from 'react-router-dom'
import * as S from './styles'
import star from '../../assets/star.png'

type Props = {
  id: number
  nome: string
  tipo: string
  nota: number
  destaque?: boolean
  descricao: string
  imagem: string
}

function capitalizeFirst(text: string) {
  if (!text) return text
  return text.charAt(0).toUpperCase() + text.slice(1)
}

export default function RestaurantCard({
  id,
  nome,
  tipo,
  nota,
  destaque,
  descricao,
  imagem
}: Props) {
  return (
    <S.Card>
      <S.ImageWrapper>
        <S.Image src={imagem} alt={nome} />
        <S.Tags>
          {destaque && <S.Tag $variant="highlight">Destaque da semana</S.Tag>}
          <S.Tag $variant="category">{capitalizeFirst(tipo)}</S.Tag>
        </S.Tags>

      </S.ImageWrapper>

      <S.Content>
        <S.TopRow>
          <S.Name>{capitalizeFirst(nome)}</S.Name>

          <S.Rate>
            <span>{nota.toFixed(1)}</span>
            <img src={star} alt="Avaliação" />
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
