import ProductCard from '../ProductCard'
import { Container, List } from './styles'

export type Props = {
  produtos: any[]
  restaurante: any // Passamos o restaurante para o card saber o contexto se necessário
}

const ProductList = ({ produtos, restaurante }: Props) => {
  return (
    <Container>
      <List>
        {produtos.map((produto) => (
          <ProductCard 
            key={produto.id} 
            produto={produto} 
            restaurante={restaurante}
          />
        ))}
      </List>
    </Container>
  )
}

export default ProductList