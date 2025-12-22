import styled from 'styled-components'

export const Banner = styled.section`
  height: 240px;
  background-size: cover;
  background-position: center;
  position: relative;
`

export const BannerOverlay = styled.div`
  height: 100%;
  background: linear-gradient(rgba(0,0,0,.55), rgba(0,0,0,.55));
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 18px 16px 26px;
`

export const TopBar = styled.div`
  position: absolute;
  top: 12px;
  left: 16px;
`

export const BackButton = styled.button`
  border: 0;
  background: rgba(255, 255, 255, 0.25);
  color: #fff;
  padding: 10px 12px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 800;
  backdrop-filter: blur(6px);

  &:hover { background: rgba(255, 255, 255, 0.3); }
`

export const Small = styled.span`
  font-size: 14px;
  font-weight: 800;
  opacity: 0.95;
`

export const Title = styled.h1`
  margin: 4px 0 0;
  font-size: 44px;

  @media (max-width: 700px) {
    font-size: 32px;
  }
`

export const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 22px 16px;
`

export const ProductsTitle = styled.h2`
  margin: 0 0 14px;
  font-size: 22px;
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

