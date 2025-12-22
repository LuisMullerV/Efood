import styled from 'styled-components'

export const Page = styled.main`
  background: #fff;
`

// Faixa clara do topo (igual o layout final)
export const Hero = styled.section`
  background: #ffebd9;
  padding: 56px 16px 40px;
`

export const HeroContent = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  text-align: center;
`

export const HeroTitle = styled.h2`
  margin: 0;
  font-size: 30px;
  line-height: 1.2;
  font-weight: 800;
  color: #e66767;

  @media (min-width: 768px) {
    font-size: 42px;
  }
`

export const HeroSubtitle = styled.p`
  margin: 10px 0 0;
  font-size: 14px;
  line-height: 1.6;
  color: #e66767;
  opacity: 0.9;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`

export const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 24px 16px 60px;
`

// Grid de restaurantes igual ao layout final (2 colunas no desktop)
export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 22px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`
