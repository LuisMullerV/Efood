import { useParams } from 'react-router-dom'

import Header from '../../components/Header' 
import Hero from '../../components/Hero'
import ProductList from '../../components/ProductList'

import { useGetRestauranteQuery } from '../../services/api'

type RestauranteParams = {
  id: string
}

const Restaurante = () => {
  const { id } = useParams() as RestauranteParams
  const { data: restaurante, isLoading } = useGetRestauranteQuery(id)

  if (isLoading) {
    return <h3 className="container">Carregando...</h3>
  }

  if (!restaurante) {
    return <h3 className="container">Restaurante não encontrado</h3>
  }

  return (
    <>
      <Header />
      <Hero 
        capa={restaurante.capa} 
        tipo={restaurante.tipo} 
        titulo={restaurante.titulo} 
      />
      
      <ProductList 
        produtos={restaurante.cardapio} 
        restaurante={restaurante}
      />
    </>
  )
}

export default Restaurante