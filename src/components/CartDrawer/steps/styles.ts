import styled from 'styled-components'
import trashIcon from '../../../assets/lixeira.png'

export const CartLayout = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;

  overflow-x: hidden;
`

export const ItemsScroll = styled.div`
  padding: 32px 24px 0;

  display: flex;
  flex-direction: column;
  gap: 16px;

  overflow-y: auto;
  overflow-x: hidden;
`

export const Empty = styled.p`
  padding: 32px 24px 0;
  color: #ffffff;
  font-weight: 700;
`

export const Row = styled.div`
  width: 344px;
  height: 100px;
  background: #ffebd9;
  border-radius: 0%;

  display: flex;
  align-items: center;
  gap: 12px;

  padding: 10px 14px;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
`

export const ItemImg = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
  flex: 0 0 auto;
`

export const ItemInfo = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;

  padding-right: 24px;
`

export const ItemName = styled.h3`
  margin: 0;
  font-family: Roboto, sans-serif;
  font-weight: 900;
  font-size: 18px;
  line-height: 21px;
  color: #e66767;
  letter-spacing: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const ItemPrice = styled.p`
  margin: 0;
  font-family: Roboto, sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  color: #e66767;
`

export const RemoveBtn = styled.button`
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
  background-size: 16px 16px;

  opacity: 0.9;

  &:hover {
    opacity: 1;
  }
`

export const Footer = styled.div`
  flex-shrink: 0;
  padding: 0 24px 24px;
`

export const Divider = styled.div`
  height: 1px;
  background: rgba(0, 0, 0, 0.2);

  margin: 24px 0 20px;
`

export const Total = styled.div`
  width: 344px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  color: #ffffff;
  font-family: Roboto, sans-serif;
  font-weight: 700;
  font-size: 18px;
`

export const ButtonPrimary = styled.button`
  width: 344px;
  height: 32px;
  margin-top: 12px;

  border: 0;
  border-radius: 8px;
  background: #ffebd9;

  font-family: Roboto, sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #e66767;

  cursor: pointer;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`

export const Title = styled.h2``

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const ButtonSecondary = styled.button`
  background: transparent;
  border: none;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const Field = styled.input``

export const Label = styled.label``

export const Input = styled.input`
  width: 100%;
  height: 32px;
  border-radius: 8px;
  border: none;
  padding: 8px;
  box-sizing: border-box;
`

export const TwoCols = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
`
