import styled from 'styled-components'

export const Wrapper = styled.header`
  background: #ffebd9;
  padding: 24px 16px;
`

export const Inner = styled.div`
  max-width: 1024px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
`

export const Left = styled.div`
  justify-self: start;
`

export const Center = styled.div`
  justify-self: center;
`

export const Right = styled.div`
  justify-self: end;
`

export const LeftText = styled.span`
  color: #e66767;
  font-weight: 900;
  font-size: 18px;
`

export const LeftLink = styled.a`
  color: #e66767;
  font-weight: 900;
  font-size: 18px;
  text-decoration: none;

  &:hover {
    opacity: 0.9;
  }
`

export const Logo = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  img {
    height: 34px; 
    display: block;
  }
`

export const CartInfo = styled.button`
  border: 0;
  background: transparent;
  cursor: pointer;

  color: #e66767;
  font-weight: 900;
  font-size: 16px;

  &:hover {
    opacity: 0.9;
  }
`
