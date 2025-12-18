import styled from 'styled-components'

export const Bar = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
  background: #f3a0a0;
  border-bottom: 1px solid #eee;
`

export const Inner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 14px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Brand = styled.a`
  text-decoration: none;
  font-size: 26px;
  font-weight: 700;
  letter-spacing: 0.5px;
`

export const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

export const NavLink = styled.a`
  text-decoration: none;
  font-weight: 700;
  padding: 8px 10px;
  border-radius: 8px;
  &:hover { background: #f6f6f6; }
`

export const CartBtn = styled.button`
  border: 1px solid #ddd;
  background: #f7f7f7;
  padding: 10px 12px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 700;
  &:hover { background: #efefef; }
`
