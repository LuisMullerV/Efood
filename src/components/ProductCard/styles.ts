import styled from 'styled-components'

export const Card = styled.div`
  background: #e66767;
  border: 2px solid #e66767;
`

export const ImageWrap = styled.div`
  padding: 10px;
  background: #e66767;
`

export const Img = styled.img`
  width: 100%;
  height: 170px;
  object-fit: cover;
  display: block;
`

export const Body = styled.div`
  padding: 14px;
  color: #fff;
`

export const Title = styled.h3`
  margin: 0;
  font-size: 16px;
  font-weight: 900;
  line-height: 100%;
  letter-spacing:100%;
`

export const Desc = styled.p`
  margin: 10px 0 14px;
  font-size: 12px;
  line-height: 1.6;
  opacity: 0.9;
`

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  margin-top: 8px;
`




export const AddButton = styled.button`
  width: 304px;   
  height: 24px;          

  border: 0;
  background: #ffebd9;
  color: #e66767;
  font-weight: 800;
  font-size: 12px;

  padding: 0;
  margin: 8px 0; 

  cursor: pointer;
`
