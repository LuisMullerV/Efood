import RestaurantCard from '../../components/RestaurantCard'
import { restaurantes } from '../../data/restaurantes'
import * as S from './styles'
import logo from '../../assets/logo.png'

export default function Home() {
  return (
    <S.Page>
      <S.Hero>
        <S.Logo src={logo} alt="efood" />

        <S.HeroTitle>
          Viva experiências gastronômicas no conforto da sua casa
        </S.HeroTitle>

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
              destaque={r.destaque}
              descricao={r.descricao}
              imagem={r.imagem}
            />
          ))}
        </S.Grid>
      </S.Container>
    </S.Page>
  )
}
