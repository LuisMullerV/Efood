import { useMemo } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ProductCard from '../../components/ProductCard'
import { restaurantes } from '../../data/restaurantes'
import * as S from './styles'

export default function Restaurante() {
  const navigate = useNavigate()
  const params = useParams()
  const id = Number(params.id)

  const restaurante = useMemo(() => restaurantes.find(r => r.id === id), [id])

  
  if (!restaurante) {
    return (
      <S.Container>
        <p>Restaurante não encontrado.</p>
        <button onClick={() => navigate('/')}>Voltar</button>
      </S.Container>
    )
  }
  

  return (
    <>
      <S.Banner style={{ backgroundImage: `url(${restaurante.imagem})` }}>
        <S.BannerOverlay>
          <S.TopBar>
            <S.BackButton type="button" onClick={() => navigate(-1)}>
              ← Voltar
            </S.BackButton>
          </S.TopBar>

          <S.Small>{restaurante.tipo}</S.Small>
          <S.Title>{restaurante.nome}</S.Title>
        </S.BannerOverlay>
      </S.Banner>

      <S.Container>
        <S.ProductsTitle>Cardápio</S.ProductsTitle>
        <S.ProductsGrid>
          {restaurante.produtos.map(p => (
            <ProductCard
              key={p.id}
              id={p.id}
              nome={p.nome}
              descricao={p.descricao}
              serve={p.serve}
              preco={p.preco}
              foto={p.foto}
            />
          ))}
        </S.ProductsGrid>
      </S.Container>
    </>
  )
}

