import styled from 'styled-components'

export const Footer = styled.footer`
  background: #ffebd9;
  width: 100%;


  min-height: 298px;
  padding: 40px 16px;

  display: flex;
  flex-direction: column;
  align-items: center;
`

export const LogoBox = styled.div`
  padding: 8px 10px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`

export const LogoImage = styled.img`
  height: 57.5px;
  width: 125px;
  display: block;
`

export const Social = styled.div`
  margin-top: 24px;
  display: flex;
  gap: 8px;

  img {
    width: 24px;
    height: 24px;
    display: block;
  }
`

export const Text = styled.p`
  margin-top: auto;
  margin-bottom: 0;

  max-width: 480px;
  text-align: center;

  color: #e66767;
  font-family: Roboto, sans-serif;
  font-size: 10px;
  line-height: 16px;
`
