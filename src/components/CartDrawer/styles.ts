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
  width: min(400px, 100vw);
  height: 100%;
  background: #e66767;

  display: flex;
  flex-direction: column;

  padding: 0; 
  box-sizing: border-box;

  overflow: hidden; 
`

export const Top = styled.div`
  display: none; 
`

export const StepPill = styled.div`
  display: none;
`

export const Close = styled.button`
  display: none;
`
