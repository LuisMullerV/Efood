import styled from 'styled-components'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1;
  overflow: hidden;
`

export const Panel = styled.aside`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  right: 0;
  width: 360px;
  height: 100%;
  background-color: #E66767;
  z-index: 1;
  padding: 32px 8px;
  overflow-x: hidden;
  overflow-y: auto;
  box-sizing: border-box;
`

export const Title = styled.h2`
  color: #FFEBD9;
  margin-bottom: 16px;
`