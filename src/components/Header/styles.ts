import styled from 'styled-components'
import Vector from '../../assets/Vector.png'

export const Wrapper = styled.header`
  width: 100%;
  height: 186px;
  background-color: #ffebd9;
  position: relative;
`

export const Inner = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 40px 16px 0;

  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;

  position: relative;  
  z-index: 1;          
`

export const Pattern = styled.div`
  position: absolute;
  inset: 0;
  background-image: url(${Vector});
  background-repeat: repeat;
  background-size: 72px 72px;
  background-position: center;
  opacity: 0.12;              
  pointer-events: none;
  z-index: 0;                  
`

export const Left = styled.div`
  text-align: left;
`

export const LeftText = styled.span`
  font-size: 18px;
  font-weight: 700;
  color: #e66767;
`

export const LeftLink = styled.a`
  font-size: 18px;
  font-weight: 700;
  color: #e66767;
  text-decoration: none;
`

export const Center = styled.div`
  display: flex;
  justify-content: center;
`

export const Logo = styled.div`
  display: inline-block;
`

export const Right = styled.div`
  text-align: right;
`

export const CartInfo = styled.button`
  background: none;
  border: none;
  font-size: 18px;
  font-weight: 700;
  color: #e66767;
  cursor: pointer;
`
