import RestaurantCard from '../../components/RestaurantCard'
import { restaurantes } from '../../data/restaurantes'
import * as S from './styles'

export default function Home() {
  return (
    <>
      <S.Hero>
        <S.HeroOverlay>
          <S.H1>Viva experiências gastronômicas no conforto da sua casa</S.H1>
          <S.H2>Escolha um restaurante e peça agora</S.H2>
        </S.HeroOverlay>
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
    </>
  )
}
