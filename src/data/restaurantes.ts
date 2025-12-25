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
        nome: 'Pizza Marguerita',
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
      },
      {
        id: 103,
        nome: 'Pizza Pepperoni',
        descricao: 'Molho de tomate, mussarela, pepperoni fatiado e orégano.',
        serve: '3 pessoa',
        preco: 62.5,
        foto: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=1200&auto=format&fit=crop'
      },
      {
        id: 104,
        nome: 'Pizza Quatro Queijos',
        descricao: 'Mussarela, parmesão, gorgonzola, provolone e molho de tomate.',
        serve: '3 pessoa',
        preco: 61.5,
        foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRgBrRAyjk8gDSjAZz6vYqkFAPPUcFSPYNOg&s'
      },
      {
        id: 105,
        nome: 'Pizza Calabresa',
        descricao: 'Molho de tomate, mussarela, calabresa fatiada, cebola e orégano.',
        serve: '3 pessoa',
        preco: 60.0,
        foto: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=1200&auto=format&fit=crop'
      },
      {
        id: 106,
        nome: 'Pizza Vegetariana',
        descricao: 'Molho de tomate, mussarela, abobrinha, berinjela, pimentão, cebola roxa e azeitonas.',
        serve: '3 pessoa',
        preco: 59.5,
        foto: 'https://images.unsplash.com/photo-1594007654729-407eedc4be65?q=80&w=1200&auto=format&fit=crop'
      },
    ]
  },
  {
    id: 2,
    nome: 'Hioki Sushi',
    tipo: 'Japonesa',
    nota: 4.8,
    destaque: true,
    descricao: 'Sushi do jeito certo: bonito, rápido e viciante.',
    imagem:
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1600&auto=format&fit=crop',
    produtos:
      [
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
        },
        {
          id: 203,
          nome: 'Hot Roll',
          descricao: 'Sushi empanado e frito, recheado com salmão, cream cheese e arroz japonês.',
          serve: '1 pessoa',
          preco: 29.9,
          foto:
            'https://images.unsplash.com/photo-1611143669185-af224c5e3252?q=80&w=1200&auto=format&fit=crop'
        },
        {
          id: 204,
          nome: 'Poke de Salmão',
          descricao: 'Cubos de salmão grelhado ou cru, arroz, pepino, milho, tomate, cebola roxa e gergelim.',
          serve: '1 pessoa',
          preco: 29.9,
          foto:
            'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1200&auto=format&fit=crop'
        },
        {
          id: 205,
          nome: 'Sashimi de Salmão',
          descricao: 'Fatias grossas de salmão fresco, servidas puras para destacar sabor e textura, acompanhadas de shoyu e wasabi.',
          serve: '1 pessoa',
          preco: 29.9,
          foto:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzGFK8FTbLvWxuX-RTdXwj9BAyrEkl4Rqonw&s'
        }, {
          id: 206,
          nome: 'Yakisoba Tradicional',
          descricao: 'Macarrão oriental salteado com legumes (cenoura, brócolis e repolho), molho shoyu e tiras de carne ou frango.',
          serve: '1 pessoa',
          preco: 29.9,
          foto:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfV6lSgwWciPCDLZy8BPaH_X0xoghU1eeK4Q&s'
        }
      ]
  },
  {
    id: 3,
    nome: 'Burger House',
    tipo: 'Hamburgueria',
    nota: 4.6,
    descricao: 'Hambúrguer que dá vontade de pedir “só mais um”.',
    imagem:
      'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1600&q=60',
    produtos:
      [
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
        },
        {
          id: 303,
          nome: 'Cheeseburger Clássico',
          descricao: 'Hambúrguer de carne bovina suculenta, queijo cheddar derretido, pão brioche macio, alface, tomate e maionese da casa.',
          serve: '1 pessoa',
          preco: 30.90,
          foto:
            'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1200&q=80'
        },
        {
          id: 304,
          nome: 'Bacon Burger',
          descricao: 'Hambúrguer artesanal de carne bovina, fatias generosas de bacon crocante, queijo cheddar, cebola caramelizada e molho barbecue.',
          serve: '1 pessoa',
          preco: 36.90,
          foto:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB_DaSvsU_teFvKb4-cuy9HvMYevYMFhcQVw&s'
        },
        {
          id: 305,
          nome: 'Onion Rings',
          descricao: 'Anéis de cebola empanados e fritos, crocantes por fora e macios por dentro, acompanhados de molho especial da casa.',
          serve: '1 pessoa',
          preco: 19.90,
          foto:
            'https://images.unsplash.com/photo-1639024471283-03518883512d?auto=format&fit=crop&w=800&q=80'
        },
        {
          id: 306,
          nome: 'Chicken Burger Crispy',
          descricao: 'Filé de frango empanado e crocante, queijo prato, alface americana, tomate e molho especial no pão brioche.',
          serve: '1 pessoa',
          preco: 34.90,
          foto:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxQcciWUD4q4_PnOCtl1E-31pCcA3QnnqrrA&s'
        }
      ]
  },
  {
    id: 4,
    nome: 'Hot Dog',
    tipo: 'Cachorro-Quente',
    nota: 4.3,
    descricao: 'O Abraço Perfeito entre o Pão Macio e o Recheio Cremoso.',
    imagem:
      'https://www.sadia.com.br/assets/images/_/recipes/350174331c8a3e631411e244bcef8eded60d5fc8.webp',
    produtos: [
      {
        id: 401,
        nome: 'Hot Dog Tradicional',
        descricao: 'Pão macio, salsicha bovina, purê de batata, molho de tomate, milho, ervilha e batata palha.',
        serve: '1 pessoa',
        preco: 14.90,
        foto:
          'https://static.itdg.com.br/images/1200-630/535cc599b45272dd1f4f02f339711e37/cachorro-quente-aprovadissimo.jpg'
      },
      {
        id: 402,
        nome: 'Hot Dog Duplo',
        descricao: 'Pão especial, duas salsichas, purê de batata, cheddar cremoso, milho e batata palha.',
        serve: '1 pessoa',
        preco: 19.90,
        foto:
          'https://media-cdn.tripadvisor.com/media/photo-s/1a/71/96/80/nosso-hot-dog-duplo-uma.jpg'
      },
      {
        id: 403,
        nome: 'Hot Dog com Cheddar e Bacon',
        descricao: 'Salsicha grelhada, cheddar cremoso, bacon crocante, purê de batata e batata palha.',
        serve: '1 pessoa',
        preco: 22.90,
        foto:
          'https://www.sadia.com.br/assets/images/_/recipes/b174e3cb9de119cedc0dd2d788ec998df19bc6d7.webp?1765893323033'
      },
      {
        id: 404,
        nome: 'Hot Dog Paulista',
        descricao: 'Salsicha, purê de batata, vinagrete, milho, ervilha, ketchup, mostarda e batata palha.',
        serve: '1 pessoa',
        preco: 17.90,
        foto:
          'https://preview.redd.it/como-%C3%A9-o-hot-dog-perfeito-pra-voc%C3%AA-como-%C3%A9-o-normal-da-sua-v0-psy9g0rk8bsc1.jpeg?width=640&crop=smart&auto=webp&s=7a382fbca170d5fd7faf708cb19ea0449c5de1df'
      },
      {
        id: 405,
        nome: 'Hot Dog Artesanal',
        descricao: 'Salsicha artesanal grelhada, pão brioche, cebola caramelizada, queijo prato e molho da casa.',
        serve: '1 pessoa',
        preco: 26.90,
        foto:
          'https://www.baressp.com.br/barreporter/imgs3/quebradadog1.jpg'
      },
      {
        id: 406,
        nome: 'Combo Hot Dog (Família)',
        descricao: 'Dois hot dogs tradicionais, batata frita média e refrigerante 600ml.',
        serve: '2 pessoa',
        preco: 39.90,
        foto:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXKrV_BJ_VAgkVupBF46QnUpMLKoUG8FMWTg&s'
      }
    ]

  },
  {
    id: 5,
    nome: 'El Camino Mexicano',
    tipo: 'Mexicana',
    nota: 4.9,
    descricao: 'Sabores intensos da culinária mexicana, com pratos bem temperados, porções generosas e aquele toque apimentado irresistível”.',
    imagem:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSic6jkdk57rh18JWG2X4VaAf2loSLN8XyoMQ&s',
    produtos: [
      {
        id: 501,
        nome: 'Tacos de Carne',
        descricao: 'Tortilhas de milho recheadas com carne bovina temperada, cebola roxa, coentro e molho especial da casa.',
        serve: '1 pessoa',
        preco: 29.9,
        foto:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSic6jkdk57rh18JWG2X4VaAf2loSLN8XyoMQ&s'
      },
      {
        id: 502,
        nome: 'Burrito Tradicional',
        descricao: 'Burrito recheado com arroz, feijão, carne desfiada, queijo derretido e molho picante.',
        serve: '1 pessoa',
        preco: 32.0,
        foto:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKfvDsFz-HgSV6Y-TccSoOiPqTsopRjXKSVw&s'
      },
      {
        id: 503,
        nome: 'Quesadilla de Frango',
        descricao: 'Tortilha de trigo grelhada, recheada com frango temperado e queijo muçarela derretido.',
        serve: '1 pessoa',
        preco: 27.90,
        foto:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ9AYPce2fYcBcKz30oTc0y3vZDQj97iPPbA&s'
      },
      {
        id: 504,
        nome: 'Nachos com Guacamole',
        descricao: 'Nachos crocantes cobertos com queijo derretido, guacamole fresco e pico de gallo.',
        serve: '1 a 2 pessoa',
        preco: 32.0,
        foto:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3wMQmMFLBJjMp3wVImfmM31OMPbOz55Ns9A&s'
      },
      {
        id: 505,
        nome: 'Chili com Carne',
        descricao: 'Ensopado mexicano apimentado com carne bovina, feijão vermelho e especiarias.',
        serve: '1 pessoa',
        preco: 44.90,
        foto:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzL6mduHJhz9zgxFq9ydTaWwtGq9MtcjD_1Q&s'
      },
      {
        id: 506,
        nome: 'Combo Tacos + Nachos',
        descricao: 'Dois tacos de carne acompanhados de uma porção de nachos crocantes.',
        serve: '2 pessoa',
        preco: 44.90,
        foto:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj8qg01nQ47YL9XTMWVWRSU6XQcPjK-jmoxg&s'
      }
    ]

  },
  {
    id: 6,
    nome: 'Dragão Dourado',
    tipo: 'Chinesa',
    nota: 4.7,
    descricao: 'Clássicos da culinária chinesa preparados com ingredientes frescos, molhos marcantes e muito sabor oriental”.',
    imagem:
      'https://instadelivery-public.nyc3.cdn.digitaloceanspaces.com/stores/logo/1717057460665837b42c027_medium.jpeg',
    produtos: [
      {
        id: 601,
        nome: 'Yakisoba Tradicional',
        descricao: 'Macarrão oriental salteado com legumes (brócolis, cenoura, repolho) e molho shoyu.',
        serve: '1 pessoa',
        preco: 34.9,
        foto:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTczOr32DIJoMV0BtWu-e34LoxIwJ2PGdXhTg&s'
      },
      {
        id: 602,
        nome: 'Yakisoba de Frango',
        descricao: 'Macarrão oriental com frango em tiras, legumes frescos e molho shoyu.',
        serve: '1 pessoa',
        preco: 36.90,
        foto:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqCN89sFC3g8W7hyaHyPcBDnPCHN3UkNeH1A&s'
      },
      {
        id: 603,
        nome: 'Frango Xadrez',
        descricao: 'Cubos de frango salteados com pimentões, cebola, amendoim e molho agridoce.',
        serve: '1 a 2 pessoa',
        preco: 38.90,
        foto:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK4kP5UyGVpp8OaHOMvQhmG1IG99epvykoXQ&s'
      },
      {
        id: 604,
        nome: 'Rolinho Primavera',
        descricao: 'Massa crocante recheada com legumes temperados, acompanhada de molho agridoce.',
        serve: '1 pessoa',
        preco: 18.90,
        foto:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL9QwwEo3ipWm5R19INYArnflY-UxH3aJCDw&s'
      },
      {
        id: 605,
        nome: 'Carne com Brócolis',
        descricao: 'Fatias de carne bovina macias com brócolis e molho shoyu encorpado.',
        serve: '1 a 2 pessoa',
        preco: 42.0,
        foto:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2ia46lTi8N8qDP8NkwVMRul-og2C4Uy1J-Q&s'
      },
      {
        id: 606,
        nome: 'Arroz Chop Suey',
        descricao: 'Arroz frito com legumes, ovo, carne e temperos orientais.',
        serve: '1 pessoa',
        preco: 29.90,
        foto:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrCnG5gFd8M9IB4aUBivkGldBaf33viCavLg&s'
      }
    ]

  }


]
