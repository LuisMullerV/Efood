// Centralize o endpoint aqui para não espalhar URL pelo projeto
export const API_URL = 'https://fake-api-havokk.vercel.app/api/efood/restaurantes'

// Busca a lista de restaurantes (AJAX)
export async function getRestaurantes() {
  const res = await fetch(API_URL)
  if (!res.ok) {
    throw new Error(`Falha ao buscar restaurantes (status ${res.status})`)
  }
  const data = await res.json()

  // A API da EBAC costuma usar chaves como: titulo, avaliacao, capa, cardapio, porcao...
  // Aqui normalizamos para o formato que o seu projeto já usa (nome, nota, imagem, produtos, serve)
  return (Array.isArray(data) ? data : []).map((r: any) => {
    const produtosRaw = r.cardapio ?? r.produtos ?? []
    return {
      id: r.id,
      nome: r.nome ?? r.titulo,
      tipo: r.tipo,
      nota: r.nota ?? r.avaliacao,
      destaque: r.destacado,
      descricao: r.descricao,
      imagem: r.imagem ?? r.capa,
      produtos: (Array.isArray(produtosRaw) ? produtosRaw : []).map((p: any) => ({
        id: p.id,
        nome: p.nome,
        descricao: p.descricao,
        serve: p.serve ?? p.porcao,
        preco: p.preco,
        foto: p.foto
      }))
    }
  })
}

// Como nem toda API expõe /:id, buscamos a lista e filtramos pelo id.
export async function getRestauranteById(id: number) {
  const data = await getRestaurantes()
  return (Array.isArray(data) ? data : []).find((r: any) => Number(r.id) === id)
}
