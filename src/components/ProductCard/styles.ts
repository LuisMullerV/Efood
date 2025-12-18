import styled from 'styled-components'

export const Card = styled.div`
  border: 2px solid #e66767;
  background: #2f2f2f;
  color: #fff;
  display: grid;
  grid-template-columns: 180px 1fr;
  gap: 0;
  overflow: hidden;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`

export const Img = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`

export const Body = styled.div`
  padding: 12px;
`

export const TitleRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
`

export const Title = styled.h3`
  margin: 0;
  font-size: 18px;
`

export const Badge = styled.span`
  font-size: 12px;
  font-weight: 700;
  background: #e66767;
  color: #1b1b1b;
  padding: 4px 8px;
  white-space: nowrap;
`

export const Desc = styled.p`
  margin: 10px 0 14px;
  font-size: 14px;
  line-height: 22px;
  opacity: 0.9;
`

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`

export const Price = styled.span`
  font-weight: 700;
`

export const BuyBtn = styled.button`
  border: 0;
  background: #ffebd9;
  color: #e66767;
  font-weight: 800;
  padding: 10px 12px;
  cursor: pointer;
  border-radius: 10px;
  &:hover { filter: brightness(0.98); }
`

export const Image = Img
export const Content = Body
export const TopRow = TitleRow
export const Tag = Badge
export const Description = Desc
export const Footer = Actions
export const Button = BuyBtn

export const ProductBtn = BuyBtn
export const ItemImg = Img
export const ItemName = Title
