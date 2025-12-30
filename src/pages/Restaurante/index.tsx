import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ProductCard from '../../components/ProductCard'
import ProductModal from '../../components/ProductModal'
import { getRestauranteById } from '../../services/api'
import { useCart } from '../../contexts/useCart'
import * as S from './styles'

type Produto = {
  id: number
  nome: string
  descricao: string
  serve: string
  preco: number
  foto: string
}

type RestauranteType = {
  id: number
  nome: string
  tipo: string
  imagem: string
  produtos: Produto[]
}

export default function Restaurante() {
  const navigate = useNavigate()
  const params = useParams()
  const id = Number(params.id)

  const [restaurante, setRestaurante] = useState<RestauranteType | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const [selectedProduct, setSelectedProduct] = useState<Produto | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const { addItem, openCart } = useCart()

  useEffect(() => {
    let isMounted = true
    setLoading(true)
    setError('')

    getRestauranteById(id)
      .then((data) => {
        if (!isMounted) return
        setRestaurante((data as RestauranteType) ?? null)
        if (!data) setError('Restaurante não encontrado.')
      })
      .catch(() => {
        if (isMounted) setError('Não foi possível carregar o restaurante.')
      })
      .finally(() => {
        if (isMounted) setLoading(false)
      })

    return () => {
      isMounted = false
    }
  }, [id])

  function openDetails(product: Produto) {
    setSelectedProduct(product)
    setIsModalOpen(true)
  }

  function closeDetails() {
    setIsModalOpen(false)
    setSelectedProduct(null)
  }

  if (loading) {
    return (
      <S.Container>
        <p>Carregando...</p>
      </S.Container>
    )
  }

  if (!restaurante || error) {
    return (
      <S.Container>
        <p>{error || 'Restaurante não encontrado.'}</p>
        <button onClick={() => navigate('/')}>Voltar</button>
      </S.Container>
    )
  }

  return (
    <>
      {/* BANNER */}
      <S.Banner style={{ backgroundImage: `url(${restaurante.imagem})` }}>
        <S.BannerOverlay>
          <S.BannerContent>
            <S.Small>{restaurante.tipo}</S.Small>
          </S.BannerContent>

          <S.BannerContent>
            <S.Title>{restaurante.nome}</S.Title>
          </S.BannerContent>
        </S.BannerOverlay>
      </S.Banner>

      {/* LISTA DE PRODUTOS */}
      <S.Container>
        <S.ProductsTitle>Cardápio</S.ProductsTitle>

        <S.ProductsGrid>
          {restaurante.produtos.map((p) => (
            <ProductCard
              key={p.id}
              id={p.id}
              nome={p.nome}
              descricao={p.descricao}
              serve={p.serve}
              preco={p.preco}
              foto={p.foto}
              onOpenDetails={() => openDetails(p)}
            />
          ))}
        </S.ProductsGrid>
      </S.Container>

      {/* MODAL DE MAIS DETALHES */}
      <ProductModal
        isOpen={isModalOpen}
        onClose={closeDetails}
        product={selectedProduct}
        onAdd={() => {
          if (!selectedProduct) return

          addItem({
            id: selectedProduct.id,
            name: selectedProduct.nome,
            price: selectedProduct.preco,
            image: selectedProduct.foto
          })
          closeDetails()
          openCart()
        }}
      />
    </>
  )
}
