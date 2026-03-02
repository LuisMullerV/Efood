import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Card = styled.div`
  background-color: #ffffff;
  border: 1px solid #E66767;
  position: relative;
  text-decoration: none;
  display: block;
`

export const CardImage = styled.img`
  width: 100%;
  height: 217px;
  object-fit: cover;
  display: block;
`

export const TagsContainer = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 8px;
`

export const Tag = styled.div`
  background-color: #E66767;
  color: #FFEBD9;
  font-size: 12px;
  font-weight: 700;
  padding: 6px 10px;
  display: inline-block;
`

export const Content = styled.div`
  padding: 8px;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: #E66767;
  margin: 0;
`

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  span {
    font-size: 18px;
    font-weight: 700;
    color: #E66767;
  }

  img {
    width: 21px;
    height: 21px;
  }
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  color: #E66767;
  margin-bottom: 16px;
  display: block;
`

export const ButtonLink = styled(Link)`
  background-color: #E66767;
  color: #FFEBD9;
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  padding: 4px 6px;
  display: inline-block;
`