import * as S from './styles'
import starIcon from '../../assets/star.png' // Verifique se o caminho da estrela está correto

export type Props = {
  id: number
  titulo: string
  destacado?: boolean
  tipo: string
  nota: number
  descricao: string
  capa: string
}

const RestaurantCard = ({ id, titulo, destacado, tipo, nota, descricao, capa }: Props) => {
  // Função para não deixar a descrição gigantesca quebrar o design do card
  const getDescription = (desc: string) => {
    if (desc.length > 250) {
      return desc.slice(0, 247) + '...'
    }
    return desc
  }

  return (
    <S.Card>
      <S.CardImage src={capa} alt={titulo} />
      
      <S.TagsContainer>
        {destacado && <S.Tag>Destaque da semana</S.Tag>}
        <S.Tag>{tipo}</S.Tag>
      </S.TagsContainer>
      
      <S.Content>
        <S.Header>
          <S.Title>{titulo}</S.Title>
          <S.RatingContainer>
            <span>{nota}</span>
            <img src={starIcon} alt="Estrela de avaliação" />
          </S.RatingContainer>
        </S.Header>
        
        <S.Description>{getDescription(descricao)}</S.Description>
        
        <S.ButtonLink to={`/restaurante/${id}`}>Saiba mais</S.ButtonLink>
      </S.Content>
    </S.Card>
  )
}

export default RestaurantCard