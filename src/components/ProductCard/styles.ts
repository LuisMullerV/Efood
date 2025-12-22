import styled from 'styled-components'

export const Card = styled.div`
  border: 2px solid #e66767;
  background: #2f2f2f;
  color: #fff;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`

export const Img = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`


export const Body = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const TitleRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
`

export const Title = styled.h3`
  margin: 0;
  font-size: 22px;
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
  margin: 6px 0 10px;
  font-size: 14px;
  line-height: 22px;
  opacity: 0.9;
`

export const Footer = styled.div`
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`


export const Price = styled.span`
  font-weight: 700;
  font-size: 18px;
`

export const Button = styled.button`
  border: 0;
  background: #ffebd9;
  color: #e66767;
  font-weight: 800;
  padding: 10px 16px;
  cursor: pointer;
  border-radius: 10px;

  &:hover {
    filter: brightness(0.98);
  }
`
