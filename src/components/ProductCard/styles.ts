import styled from 'styled-components'

export const Card = styled.div`
  background: #e66767;
  border: 2px solid #e66767;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`

export const ImageWrap = styled.div`
  padding: 8px;
`

export const Img = styled.img`
  width: 100%;
  height: 167px;
  object-fit: cover;
  display: block;
`

export const Body = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  flex: 1;
`

export const Title = styled.h3`
  margin: 0;
  font-family: Roboto, sans-serif;
  font-weight: 900;
  font-size: 16px;
  line-height: 100%;
  color: #ffebd9;

  text-transform: capitalize;
`

export const Desc = styled.p`
  margin: 8px 0 0;
  font-family: Roboto, sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #ffebd9;

  height: 88px;           
  overflow: hidden;

  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`

export const Actions = styled.div`
  margin-top: auto;
  padding-top: 8px;
`

export const AddButton = styled.button`
  width: 100%;
  height: 24px;

  border: 0;
  background: #ffebd9;
  color: #e66767;

  font-family: Roboto, sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 12px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`
