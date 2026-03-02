import { useDispatch } from 'react-redux'
import { add, open } from '../../store/cartSlice'
import { Card, Title, Description, AddButton } from './styles'

type Props = {
  produto: any
  restaurante?: any
}

const ProductCard = ({ produto }: Props) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add({
      id: produto.id,
      nome: produto.nome,
      price: produto.preco, // Mapeando 'preco' da API para 'price' do Redux
      foto: produto.foto,
      porcao: produto.porcao
    }))
    dispatch(open())
  }

  const getDescricao = (desc: string) => {
    if (desc.length > 130) {
        return desc.slice(0, 130) + '...'
    }
    return desc
  }

  return (
    <Card>
      <img src={produto.foto} alt={produto.nome} />
      <div>
        <Title>{produto.nome}</Title>
        <Description>{getDescricao(produto.descricao)}</Description>
        <AddButton onClick={addToCart}>
          Adicionar ao carrinho
        </AddButton>
      </div>
    </Card>
  )
}

export default ProductCard