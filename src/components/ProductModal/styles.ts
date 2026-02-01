import styled from 'styled-components'

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);

  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 60;
  padding: 16px;
`

export const Modal = styled.div`
  position: relative;

  width: 1024px;
  height: 344px;

  background: #e66767;
  border: 2px solid rgba(0, 0, 0, 0.25);
  overflow: hidden;

  padding: 32px;
  box-sizing: border-box;

  @media (max-width: 1060px) {
    width: min(1024px, 96vw);
    height: auto;
    padding: 24px;
  }
`

export const Close = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;

  width: 16px;
  height: 16px;
  border: 0;
  background: transparent;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 16px;
    height: 16px;
  }

  &:hover {
    opacity: 0.85;
  }
`

export const Content = styled.div`
  display: grid;

  grid-template-columns: 280px 1fr;
  column-gap: 24px;

  align-items: start;
  height: 100%;
  align-items: start; 

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    row-gap: 16px;
  }
`

export const ImageWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`

export const Image = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;
  display: block;

  margin: 0;
`

export const Info = styled.div`
  color: #fff;

  position: relative;      
  height: 100%; 
  min-height: 280px; 
  display: flex;
  flex-direction: column;
  gap: 16px;

  padding-bottom: 80px;

  max-width: 656px;
`

export const Title = styled.h3`
  margin: 0;

  font-size: 18px;     
  font-weight: 900;     
  line-height: 18px;    
`

export const Description = styled.p`
  margin: 0;            
  font-size: 14px;     
  line-height: 22px;   
  font-weight: 400;
  opacity: 0.95;
`

export const Portion = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: 400;
`

export const AddButton = styled.button`
  width: fit-content;

  border: 0;
  bottom: 25px;
  background: #ffebd9;
  color: #e66767;
  position: absolute;
  left: 0;

  font-weight: 700;
  font-size: 14px;
  line-height: 16px;

  padding: 4px 6px;

  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`
