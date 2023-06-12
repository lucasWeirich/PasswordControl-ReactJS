import { styled } from "styled-components";

export const Wrapper = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  background: var(--color-bg1);
  box-shadow: 0 0 10px var(--color-bg);
  position: sticky;
  top: 60px;
  z-index: 2;

  & .Container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px 50px;
  }
`

export const Search = styled.div`
  min-width: 300px;
  width: 40%;
  max-width: 500px;
`

export const Buttons = styled.div`
  display: flex;
  gap: 12px;
`