import Header from '../../components/Header'
import RestaurantCard from '../../components/RestaurantCard'
import { useGetRestaurantesQuery } from '../../services/api'
import * as S from './styles'

const Home = () => {
  const { data: restaurantes, isLoading } = useGetRestaurantesQuery()

  if (isLoading) {
    return <p style={{ textAlign: 'center', marginTop: '40px' }}>Carregando restaurantes...</p>
  }

  return (
    <S.Page>
      {/* O Header completo que criamos agora é chamado aqui */}
      <Header />
      
      <S.Container>
        <S.Grid>
          {restaurantes?.map((r: any) => (
            <RestaurantCard
              key={r.id}
              id={r.id}
              titulo={r.titulo}
              destacado={r.destacado}
              tipo={r.tipo}
              nota={r.avaliacao}
              descricao={r.descricao}
              capa={r.capa}
            />
          ))}
        </S.Grid>
      </S.Container>
    </S.Page>
  )
}

export default Home