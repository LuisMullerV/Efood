import styled from 'styled-components'
import vector from '../../assets/Vector.png' // Certifica-te que esta imagem existe na pasta assets

export const Page = styled.div`
  background-color: #FFF8F2;
  min-height: 100vh;
`

export const Hero = styled.header`
  background-image: url(${vector});
  background-size: cover;
  background-repeat: no-repeat;
  height: 384px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 40px 0;
  
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    justify-content: space-between;
  }
`

export const Logo = styled.img`
  width: 125px;
`

export const HeroTitle = styled.h1`
  font-size: 36px;
  font-weight: 900;
  line-height: 42px;
  text-align: center;
  color: #E66767;
  max-width: 540px;
`

export const Container = styled.section`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  padding-top: 80px;
  padding-bottom: 120px;

  @media (max-width: 1024px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  row-gap: 48px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`