import styled from 'styled-components'

export const Banner = styled.section`
  width: 100%;
  height: 280px;

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin-bottom: 56px;
`

export const BannerOverlay = styled.div`
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 24px 0;
`

export const BannerContent = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 16px;
  width: 100%;
`

export const Small = styled.span`
  display: block;

  font-family: 'Roboto', sans-serif;
  font-size: 32px;
  font-weight: 100;
  line-height: 1;
  font-style: thin;
  color: #fff;

  margin-bottom: 8px;
  text-transform: capitalize;
`

export const Title = styled.h2`
  color: #fff;
  font-size: 32px;
  font-weight: 900;
  line-height: 1.1;
  margin-top: 140px;
  font-family: 'Roboto', sans-serif;
`

export const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 16px 80px;
`

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin-top: 56px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`
