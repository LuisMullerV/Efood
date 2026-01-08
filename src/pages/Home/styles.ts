import styled from 'styled-components'
import Vector from '../../assets/Vector.svg'

export const Page = styled.main`
  background-color: #fff8f2;
`

export const Hero = styled.section`
  position: relative;
  width: 100%;
  height: 384px;
  background-color: #ffebd9;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 64px;
  box-sizing: border-box;

  &::before {
    content: '';
    position: absolute;
    inset: 0;

    background-image: url(${Vector});
    background-repeat: repeat;

    background-size: 64px 64px;

    background-position: 0 -24px;

    opacity: 1;
    filter: opacity(0.12);

    pointer-events: none;
  }

  > * {
    position: relative;
    z-index: 1;
  }
`

export const Logo = styled.img`
  width: 125px;
  height: 57.5px;

  margin: 0 0 156px;
`

export const HeroTitle = styled.h2`
  max-width: 540px;
  margin: 0;
  text-align: center;

  font-size: 36px;
  line-height: 42px;
  font-weight: 800;
  color: #e66767;
`

export const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 80px 16px;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 472px 472px;

  column-gap: 80px;
  row-gap: 48px;

  justify-content: center;
`
