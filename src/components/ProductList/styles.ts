import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 56px 0;
  
  @media (max-width: 1024px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  list-style: none;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`