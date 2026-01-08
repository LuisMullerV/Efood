import styled from 'styled-components'

export const Card = styled.div`
  border: 1px solid #e66767;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100%;
`

export const ImageWrapper = styled.div`
  position: relative;
`

export const Image = styled.img`
  width: 100%;
  height: 217px;
  object-fit: cover;
  display: block;
`

export const Tags = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 8px;
`

export const Tag = styled.span<{ $variant?: 'highlight' | 'category' }>`
  display: inline-block;
  padding: 4px 6px;
  background: #e66767;
  color: #fff;
  font-size: 12px;

  font-weight: ${(props) => (props.$variant === 'highlight' ? 600 : 400)};
`

export const Content = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  flex: 1; 
`

export const TopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`

export const Name = styled.h3`
  margin: 0;
  font-family: Roboto, sans-serif;
  font-size: 18px;
  font-weight: 700;
  color: #e66767;
`

export const Rate = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;

  font-family: Roboto, sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 100%;
  color: #e66767;

  img {
    width: 21px;
    height: 20px;
    display: block;
  }
`

export const Description = styled.p`
  margin: 8px 0 16px;
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: #e66767;

  height: 88px;
  overflow: hidden;

  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`

export const Button = styled.a`
  width: 82px;
  height: 24px;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  background: #e66767;
  color: #ffebd9;
  text-decoration: none;

  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: 12px;

  margin-top: auto; 
`
