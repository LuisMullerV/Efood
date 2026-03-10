import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { add, open } from '../../store/cartSlice'
import ProductCard from '../ProductCard'
import ProductModal from '../ProductModal'
import { Container, List } from './styles'

export type Props = {
  produtos: any[]
  restaurante: any 
}

const ProductList = ({ produtos, restaurante }: Props) => {
  const dispatch = useDispatch()
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<any>(null)

  // Função para abrir o modal com o produto certo
  const openModal = (produto: any) => {
    setSelectedProduct(produto)
    setModalIsOpen(true)
  }

  // Função para fechar o modal
  const closeModal = () => {
    setModalIsOpen(false)
    setSelectedProduct(null)
  }

  // Função que será enviada para o botão "onAdd" dentro do Modal
  const addToCart = () => {
    if (selectedProduct) {
      dispatch(add({
        id: selectedProduct.id,
        nome: selectedProduct.nome,
        price: selectedProduct.preco, 
        foto: selectedProduct.foto,
        porcao: selectedProduct.porcao 
      }))
      dispatch(open()) // Abre o carrinho lateral
      closeModal() // Fecha o modal do produto no meio da tela
    }
  }

  return (
    <Container>
      <List>
        {produtos.map((produto) => (
          <ProductCard 
            key={produto.id} 
            produto={produto} 
            restaurante={restaurante}
            onOpenModal={() => openModal(produto)} 
          />
        ))}
      </List>
      
      {/* Aqui passamos todas as props que o seu modal exige */}
      <ProductModal 
        isOpen={modalIsOpen} 
        onClose={closeModal} 
        product={selectedProduct} 
        onAdd={addToCart} 
      />
    </Container>
  )
}

export default ProductList