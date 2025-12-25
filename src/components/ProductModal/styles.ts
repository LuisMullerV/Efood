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


  @media (max-width: 1060px) {
    width: min(1024px, 96vw);
    height: auto;
  }
`

export const Close = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;

  width: 36px;
  height: 36px;
  border: 0;
  background: transparent;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 18px;
    height: 18px;
  }

  &:hover {
    opacity: 0.85;
  }
`

export const Content = styled.div`
  display: grid;

  grid-template-columns: 320px 1fr;

  height: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`


export const Image = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;
  margin-left: 32px;
  margin-right: 24px;
`



export const Info = styled.div`
  padding: 22px 24px;
  color: #fff;

  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const Title = styled.h3`
  margin: 0;
  font-size: 24px;
  font-weight: 800;
`

export const Description = styled.p`
  margin: 16;
  font-size: 18px;
  line-height: 1.6;
  opacity: 0.95;


  max-width: 620px;
`

export const Portion = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: 700;
`

export const AddButton = styled.button`
  width: fit-content;

  border: 0;
  background: #fff;
  color: #e66767;

  font-weight: 800;
  font-size: 14px;

  padding: 10px 14px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`
export const ImageWrap = styled.div`
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`
