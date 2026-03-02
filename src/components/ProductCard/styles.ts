import styled from 'styled-components'

export const Card = styled.div`
  background-color: #E66767;
  color: #FFEBD9;
  padding: 8px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  height: 100%;

  img {
    width: 100%;
    height: 167px;
    object-fit: cover;
    border-radius: 8px;
  }
`

export const Title = styled.h3`
  font-weight: 900;
  font-size: 16px;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 8px;
`

export const AddButton = styled.button`
  background-color: #FFEBD9;
  color: #E66767;
  border: none;
  width: 100%;
  padding: 4px;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  margin-top: auto; /* Empurra o botão para o final do card */
`