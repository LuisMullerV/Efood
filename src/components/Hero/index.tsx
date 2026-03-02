import { Banner, Container, Title, Type } from './styles'

export type HeroProps = {
  capa: string
  tipo: string
  titulo: string
}

const Hero = ({ capa, tipo, titulo }: HeroProps) => (
  <Banner style={{ backgroundImage: `url(${capa})` }}>
    <Container>
      <Type>{tipo}</Type>
      <Title>{titulo}</Title>
    </Container>
  </Banner>
)

export default Hero