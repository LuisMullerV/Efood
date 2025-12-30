import RestaurantCard from '../../components/RestaurantCard'
import { useEffect, useState } from 'react'
import { getRestaurantes } from '../../services/api'
import * as S from './styles'
import logo from '../../assets/logo.png'

export default function Home() {
  const [restaurantes, setRestaurantes] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let isMounted = true

    getRestaurantes()
      .then((data) => {
        if (isMounted) setRestaurantes(Array.isArray(data) ? data : [])
      })
      .catch(() => {
        if (isMounted) setError('Não foi possível carregar os restaurantes.')
      })
      .finally(() => {
        if (isMounted) setLoading(false)
      })

    return () => {
      isMounted = false
    }
  }, [])

  return (
    <S.Page>
      <S.Hero>
        <S.Logo src={logo} alt="efood" />

        <S.HeroTitle>
          Viva experiências gastronômicas no conforto da sua casa
        </S.HeroTitle>

      </S.Hero>

      <S.Container>
        {loading && <p>Carregando...</p>}
        {!loading && error && <p>{error}</p>}

        {!loading && !error && (
          <S.Grid>
            {restaurantes.map((r) => (
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
        )}
      </S.Container>
    </S.Page>
  )
}
