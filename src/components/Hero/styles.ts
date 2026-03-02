import styled from 'styled-components'

export const Banner = styled.div`
  width: 100%;
  height: 280px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Escurece a imagem para o texto ler-se melhor */
  }
`

export const Container = styled.div`
  position: relative;
  z-index: 1; /* Fica acima da camada escura */
  max-width: 1024px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 32px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 1024px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`

export const Type = styled.p`
  font-size: 32px;
  color: #fff;
  font-weight: 100;
`

export const Title = styled.h2`
  font-size: 32px;
  color: #fff;
  font-weight: 900;
`