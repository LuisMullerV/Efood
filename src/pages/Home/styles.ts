import styled from 'styled-components'

export const Hero = styled.section`
  height: 260px;
  background-image: linear-gradient(rgba(0,0,0,.62), rgba(0,0,0,.62)),
    url('https://images.unsplash.com/photo-1529692236671-f1dc7c0ac7a5?auto=format&fit=crop&w=1800&q=60');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: flex-end;
`

export const HeroOverlay = styled.div`
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  padding: 34px 16px;
  color: #fff;
`

export const H1 = styled.h1`
  margin: 0;
  font-size: 44px;
  letter-spacing: 0.2px;

  @media (max-width: 700px) {
    font-size: 30px;
  }
`

export const H2 = styled.p`
  margin: 8px 0 0;
  font-size: 16px;
  opacity: 0.9;
`

export const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 26px 16px;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`
