import RestaurantCard from '../../components/RestaurantCard'
import { restaurantes } from '../../data/restaurantes'
import * as S from './styles'

export default function Home() {
  return (
    <S.Page>
      <S.Hero>
        <S.HeroContent>
          <S.HeroTitle>
            Viva experiências gastronômicas no conforto da sua casa
          </S.HeroTitle>
          <S.HeroSubtitle>Escolha um restaurante e peça agora</S.HeroSubtitle>
        </S.HeroContent>
      </S.Hero>

      <S.Container>
        <S.Grid>
          {restaurantes.map(r => (
            <RestaurantCard
              key={r.id}
              id={r.id}
              nome={r.nome}
              tipo={r.tipo}
              nota={r.nota}
              descricao={r.descricao}
              imagem={r.imagem}
            />
          ))}
        </S.Grid>
      </S.Container>
    </S.Page>
  )
}
