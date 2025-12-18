import styled from 'styled-components'

export const Card = styled.div`
  border: 2px solid #e66767;
  background: #2f2f2f;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
`

export const Image = styled.img`
  width: 100%;
  height: 210px;
  object-fit: cover;
  display: block;
`

export const Content = styled.div`
  padding: 12px;
  color: #fff;
`

export const TopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`

export const Name = styled.h3`
  margin: 0;
  font-size: 18px;
`

export const Rate = styled.span`
  font-size: 18px;
  font-weight: 700;
`

export const Tag = styled.span`
  display: inline-block;
  margin-top: 8px;
  padding: 4px 8px;
  background: #e66767;
  color: #1b1b1b;
  font-size: 12px;
  font-weight: 700;
`

export const Description = styled.p`
  margin: 12px 0;
  font-size: 14px;
  line-height: 22px;
  opacity: 0.9;
`

export const Button = styled.a`
  display: block;
  width: 100%;
  text-align: center;
  padding: 10px 12px;
  background: #ffebd9;
  color: #e66767;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;

  &:hover { filter: brightness(0.98); }
  
`
export const ProductCard = styled.div`
  display: flex;
  gap: 16px;
  padding: 16px;
  background: #2f2f2f;
  border: 2px solid #e66767;
  align-items: center;
`
export const ProductImage = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 4px;
  flex-shrink: 0;
`

