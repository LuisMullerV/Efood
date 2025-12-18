export type Produto = {
  id: number
  nome: string
  descricao: string
  serve: string
  preco: number
  foto: string
}

export type Restaurante = {
  id: number
  nome: string
  tipo: string
  nota: number
  destaque?: boolean
  descricao: string
  imagem: string
  produtos: Produto[]
}

export const restaurantes: Restaurante[] = [
  {
    id: 1,
    nome: 'La Dolce Vita Trattoria',
    tipo: 'Italiana',
    nota: 4.6,
    descricao: 'O clássico que nunca falha. Bora pedir?',
    imagem:
      'https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&w=1600&q=60',
    produtos: [
      {
        id: 101,
        nome: 'Pizza Margherita',
        descricao: 'Tomate, mussarela e manjericão. Simples e perfeita.',
        serve: '2 a 3 pessoas',
        preco: 60.9,
        foto:
          'https://images.unsplash.com/photo-1598023696416-0193a0bcd302?q=80&w=1200&auto=format&fit=crop'
      },
      {
        id: 102,
        nome: 'Penne ao Sugo',
        descricao: 'Massa al dente com molho de tomate artesanal.',
        serve: '1 pessoa',
        preco: 42.5,
        foto:
          'https://images.unsplash.com/photo-1546549032-9571cd6b27df?q=80&w=1200&auto=format&fit=crop'
      }
    ]
  },
  {
    id: 2,
    nome: 'Hioki Sushi',
    tipo: 'Japonesa',
    nota: 4.8,
    descricao: 'Sushi do jeito certo: bonito, rápido e viciante.',
    imagem:
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1600&auto=format&fit=crop',
    produtos: [
      {
        id: 201,
        nome: 'Combo Sushi',
        descricao: 'Um combo completo com peças variadas.',
        serve: '1 a 2 pessoas',
        preco: 79.9,
        foto:
          'https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=1400&q=60'
      },
      {
        id: 202,
        nome: 'Temaki Salmão',
        descricao: 'Salmão fresco com creme cheese e cebolinha.',
        serve: '1 pessoa',
        preco: 29.9,
        foto:
          'https://images.unsplash.com/photo-1583623025817-d180a2221d0a?q=80&w=1200&auto=format&fit=crop'
      }
    ]
  },
  {
    id: 3,
    nome: 'Burger House',
    tipo: 'Hamburgueria',
    nota: 4.5,
    descricao: 'Hambúrguer que dá vontade de pedir “só mais um”.',
    imagem:
      'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1600&q=60',
    produtos: [
      {
        id: 301,
        nome: 'Burger da Casa',
        descricao: 'Carne suculenta, queijo e molho especial.',
        serve: '1 pessoa',
        preco: 38.9,
        foto:
          'https://images.unsplash.com/photo-1550317138-10000687a72b?auto=format&fit=crop&w=1400&q=60'
      },
      {
        id: 302,
        nome: 'Batata com Cheddar',
        descricao: 'Batata frita com cheddar cremoso e bacon.',
        serve: '1 pessoa',
        preco: 22.0,
        foto:
          'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=1400&q=60'
      }
    ]
  }
]
