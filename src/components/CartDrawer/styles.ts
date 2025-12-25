import styled from 'styled-components'

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  display: flex;
  justify-content: flex-end;
  z-index: 50;
`

export const Panel = styled.aside`
  width: min(520px, 92vw);
  height: 100%;
  background: #f3a0a0;
  border-left: 4px solid #e66767;
  padding: 18px;
  overflow: auto;
`

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;
`

export const StepPill = styled.div`
  font-weight: 800;
  padding: 6px 10px;
  border: 2px solid #1b1b1b;
  background: rgba(255, 255, 255, 0.35);
`

export const Close = styled.button`
  width: 44px;
  height: 44px;
  border: 0;
  background: transparent;
  cursor: pointer;
  padding: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 20px;
    height: 20px;
    object-fit: contain;
  }

  &:hover {
    opacity: 0.8;
  }
`


