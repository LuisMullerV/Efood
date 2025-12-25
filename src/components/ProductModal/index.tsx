import { useEffect } from 'react'
import fecharIcon from '../../assets/fechar.png'
import * as S from './styles'

type Product = {
    id: number
    nome: string
    descricao: string
    foto: string
    preco: number
    serve: string
}

type Props = {
    isOpen: boolean
    onClose: () => void
    product: Product | null
    onAdd: () => void
}

export default function ProductModal({ isOpen, onClose, product, onAdd }: Props) {
    useEffect(() => {
        function onKey(e: KeyboardEvent) {
            if (e.key === 'Escape') onClose()
        }
        if (isOpen) window.addEventListener('keydown', onKey)
        return () => window.removeEventListener('keydown', onKey)
    }, [isOpen, onClose])

    if (!isOpen || !product) return null

    return (
        <S.Overlay role="dialog" aria-modal="true" onClick={onClose}>
            <S.Modal onClick={(e) => e.stopPropagation()}>
                <S.Close type="button" onClick={onClose} aria-label="Fechar">
                    <img src={fecharIcon} alt="Fechar" />
                </S.Close>

                <S.Content>
<S.ImageWrap>
  <S.Image src={product.foto} alt={product.nome} />
</S.ImageWrap>


                    <S.Info>
                        <S.Title>{product.nome}</S.Title>
                        <S.Description>{product.descricao}</S.Description>
                        <S.Portion>Serve: {product.serve}</S.Portion>

                        <S.AddButton type="button" onClick={onAdd}>
                            Adicionar ao carrinho - R$ {product.preco.toFixed(2).replace('.', ',')}
                        </S.AddButton>
                    </S.Info>
                </S.Content>
            </S.Modal>
        </S.Overlay>
    )
}
