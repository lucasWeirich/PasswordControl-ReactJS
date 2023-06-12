import { styled } from "styled-components";

export const Wrapper = styled.header`
  width: 100%;
  background-color: var(--color-bg);
  box-shadow: 0 0 4px #000;
  position: sticky;
  top: 0;

  & .Container {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

`

export const Logo = styled.h4`
  font-size: 18px;
  font-weight: 600;
`