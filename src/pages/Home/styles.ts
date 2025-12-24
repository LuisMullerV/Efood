import styled from 'styled-components'
import pattern from '../../assets/Vector.png'

export const Page = styled.main`
  background: #fff8f2;
  min-height: 100vh;
`


export const Hero = styled.section`
  position: relative;

  height: 384px;
  background-color: #ffebd9;

  display: flex;
  flex-direction: column;
  align-items: center;
  
  justify-content: center;

`


export const Logo = styled.img`
  width: 125px;
  height: 57.5px;
`

export const HeroTitle = styled.h2`
  width: 565px;          
  margin: 64px 0 0;
  text-align: center;

  font-size: 36px;
  line-height: 42px;
  font-weight: 800;
  color: #e66767;

  @media (max-width: 600px) {
    width: 100%;
    padding: 0 16px;
  }
`

export const HeroSubtitle = styled.p`
  margin-top: 16px;

  font-size: 14px;
  line-height: 1.6;
  color: #e66767;
  opacity: 0.9;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`

export const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 40px 16px 80px;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  row-gap: 48px;
  column-gap: 88px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`
