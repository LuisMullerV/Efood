import { Link } from 'react-router-dom'
import * as S from './styles'
import styled from 'styled-components'

type Props = {
  id: number
  nome: string
  tipo: string
  nota: number
  descricao: string
  imagem: string
}
export const Image = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  display: block;
`


export default function RestaurantCard({ id, nome, tipo, nota, descricao, imagem }: Props) {
  return (
    <S.Card>
      <S.Image src={imagem} alt={nome} />
      <S.Content>
        <S.TopRow>
          <S.Name>{nome}</S.Name>
          <S.Rate>{nota.toFixed(1)}</S.Rate>
        </S.TopRow>

        <S.Tag>{tipo}</S.Tag>
        <S.Description>{descricao}</S.Description>

        <S.Button as={Link} to={`/restaurante/${id}`}>
          Mais detalhes
        </S.Button>
      </S.Content>
    </S.Card>
  )
}
