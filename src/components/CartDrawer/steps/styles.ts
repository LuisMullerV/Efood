import styled from 'styled-components'
import trashIcon from '../../../assets/lixeira.png'

export const CartLayout = styled.div`
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  max-width: 100%;
`

export const ItemsScroll = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px 8px 0 8px;
  gap: 16px;
  max-width: 100%;
  overflow-x: hidden;
`

export const Empty = styled.p`
  color: #FFEBD9;
  font-weight: 700;
  text-align: center;
  margin-top: 32px;
`

/* --- ALINHAMENTO IDÊNTICO AO FIGMA --- */
export const Row = styled.div`
  width: 100%;
  max-width: 344px;
  height: 100px;
  min-height: 100px;
  background-color: #FFEBD9;
  display: flex;
  align-items: center;
  padding: 8px;
  position: relative;
  box-sizing: border-box;
  border-radius: 0;

  > button {
    width: 16px;
    height: 16px;
    padding: 0;
    border: 0;
    background: transparent;
    cursor: pointer;
    position: absolute;
    right: 8px;
    bottom: 8px;
    background-image: url(${trashIcon});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    filter: opacity(0.6);
  }
`

export const ItemImg = styled.img`
  width: 80px;
  height: 80px;
  min-width: 80px;
  min-height: 80px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 8px;
  flex-shrink: 0;
`

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  /* Sem 'justify-content: center' para não empurrar o texto pro meio */
`

export const ItemName = styled.h3`
  font-family: Roboto, sans-serif;
  font-weight: 900;
  font-size: 18px;
  color: #E66767;
  margin: 0 0 16px 0;
`

export const ItemPrice = styled.span`
  font-family: Roboto, sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: #E66767;
  margin: 0;
`
/* ------------------------------------ */

export const Footer = styled.div`
  padding: 16px 8px 24px 8px;
  margin-top: 16px;
`

export const Divider = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  
  span {
    color: #FFEBD9;
    font-weight: 700;
    font-size: 14px;
  }
`

export const ButtonPrimary = styled.button`
  width: 100%;
  height: 32px;
  border: 0;
  background: #FFEBD9;
  font-family: Roboto, sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #E66767;
  cursor: pointer;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`

export const Title = styled.h3`
  font-size: 16px;
  font-weight: 700;
  color: #FFEBD9;
  margin-bottom: 16px;
`

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
  min-width: 0;
  max-width: 100%;

  label {
    font-size: 14px;
    font-weight: 700;
    color: #FFEBD9;
    margin-bottom: 8px;
  }

  input, span {
    max-width: 100%;
    box-sizing: border-box;
  }

  span {
    display: block;
    overflow: hidden;
  }

  input {
    background-color: #FFEBD9;
    border: 1px solid #FFEBD9;
    height: 32px;
    padding: 0 8px;
    font-weight: 700;
    font-size: 14px;
    width: 100%;
    color: #4B2995;

    &.error {
      border: 2px solid red;
    }
  }
`

export const InputGroupRow = styled.div`
  display: flex;
  column-gap: 16px;
  width: 100%;
  min-width: 0;
  
  .auto-width {
    flex: 1;
    min-width: 0;
  }

  input {
    max-width: 100%;
    box-sizing: border-box;
  }
`

export const Button = styled(ButtonPrimary)``

export const ButtonSecondary = styled(ButtonPrimary)`
  background-color: #FFEBD9;
  color: #E66767;
`

export const Actions = styled.div`
  margin-top: 24px;
`

export const FormWrapper = styled.div`
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
  box-sizing: border-box;

  form {
    width: 100%;
    max-width: 100%;
    overflow-x: hidden;
    box-sizing: border-box;
  }

  input {
    max-width: 100%;
  }
`