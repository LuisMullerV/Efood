import { useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ProductCard from '../../components/ProductCard'
import ProductModal from '../../components/ProductModal'
import { restaurantes } from '../../data/restaurantes'
import { useCart } from '../../contexts/useCart'
import * as S from './styles'

export default function Restaurante() {
  const navigate = useNavigate()
  const params = useParams()
  const id = Number(params.id)

  const restaurante = useMemo(
    () => restaurantes.find(r => r.id === id),
    [id]
  )

  const [selectedProduct, setSelectedProduct] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const { addItem, openCart } = useCart()


  function openDetails(product: any) {
    setSelectedProduct(product)
    setIsModalOpen(true)
  }

  function closeDetails() {
    setIsModalOpen(false)
    setSelectedProduct(null)
  }

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
      {/* BANNER */}
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

      {/* LISTA DE PRODUTOS */}
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
