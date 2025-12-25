import styled from 'styled-components'

export const Banner = styled.section`
  height: 280px;
  background-size: cover;
  background-position: center;
  position: relative;
`

export const BannerOverlay = styled.div`
  height: 100%;
  background: rgba(0, 0, 0, 0.25);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  color: #fff;
  font-size: 18px;
  font-weight: 100;
  opacity: 0.95;
`

export const Title = styled.h2`
  color: #fff;
  font-size: 32px;
  font-weight: 900;
  margin: 0;
  line-height: 1.1;
`

export const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 32px 16px 80px;
`

export const ProductsTitle = styled.h2`
  margin: 0 0 22px;
  font-size: 32px;
  font-weight: 900;
  color: #111;
`

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`
