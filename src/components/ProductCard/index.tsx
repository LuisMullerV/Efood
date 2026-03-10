import { Card, Title, Description, AddButton } from './styles'

type Props = {
  produto: any
  restaurante?: any
  onOpenModal: () => void 
}

const ProductCard = ({ produto, onOpenModal }: Props) => {
  
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
        {/* Ao clicar, ele avisa a lista para abrir o modal */}
        <AddButton onClick={onOpenModal}>
          Adicionar ao carrinho
        </AddButton>
      </div>
    </Card>
  )
}

export default ProductCard