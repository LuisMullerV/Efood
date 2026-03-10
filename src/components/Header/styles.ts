import styled from 'styled-components'

export const HeaderBar = styled.header`
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;
  height: 384px;
`

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1024px) {
    padding-left: 20px;
    padding-right: 20px;
  }

  &.home {
    justify-content: center;
  }
`

export const Logo = styled.img`
  width: 125px;
`

export const Title = styled.h1`
  font-size: 36px;
  font-weight: 900;
  line-height: 42px;
  text-align: center;
  color: #E66767;
  max-width: 540px;
  margin-top: 130px;

  @media (max-width: 768px) {
    font-size: 28px;
    margin-top: 80px;
  }
`

export const Links = styled.div`
  a {
    font-size: 18px;
    font-weight: 900;
    color: #E66767;
    text-decoration: none;
  }
`

export const CartButton = styled.a`
  font-size: 18px;
  font-weight: 900;
  color: #E66767;
  cursor: pointer;
  text-decoration: none;
`