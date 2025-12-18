import styled from 'styled-components'

export const Title = styled.h2`
  margin: 0 0 12px;
  font-size: 20px;
`

export const Row = styled.div`
  display: grid;
  grid-template-columns: 64px 1fr auto auto;
  gap: 10px;
  align-items: center;
  padding: 10px;
  background: rgba(255, 255, 255, 0.35);
  border: 1px solid rgba(0, 0, 0, 0.15);
  margin-bottom: 10px;
`

export const ItemImg = styled.img`
  width: 64px;
  height: 64px;
  object-fit: cover;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.2);
`

export const ItemName = styled.div`
  font-weight: 700;
`

export const ItemPrice = styled.div`
  font-weight: 800;
  white-space: nowrap;
`

export const RemoveBtn = styled.button`
  border: 0;
  background: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 12px;
`

export const Footer = styled.div`
  margin-top: 12px;
  padding-top: 12px;
  border-top: 2px solid rgba(0, 0, 0, 0.2);
`

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 800;
  margin-bottom: 12px;
`

export const ButtonPrimary = styled.button`
  width: 100%;
  border: 0;
  padding: 12px 14px;
  border-radius: 12px;
  cursor: pointer;
  background: #ffebd9;
  color: #e66767;
  font-weight: 900;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`

export const Form = styled.form`
  display: grid;
  gap: 10px;
`

export const Field = styled.div`
  display: grid;
  gap: 6px;
`

export const Label = styled.label`
  font-weight: 800;
  font-size: 12px;
`

export const Input = styled.input`
  padding: 10px 12px;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  outline: none;
`

export const TwoCols = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`

export const Actions = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-top: 10px;
`

export const ButtonSecondary = styled.button`
  width: 100%;
  border: 2px solid rgba(0, 0, 0, 0.35);
  padding: 12px 14px;
  border-radius: 12px;
  cursor: pointer;
  background: transparent;
  font-weight: 900;
`
