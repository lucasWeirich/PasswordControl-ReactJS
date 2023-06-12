import { styled } from "styled-components";
import { transparentize } from "polished"

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--color-bg2);
  padding: 20px;
  box-shadow: 0 0 5px var(--color-bg);
  z-index: 1;

  & details {

    &:not(:last-child) {
      margin-bottom: 30px;
    }

    & summary {
      font-size: 16px;
      font-weight: 600;
      list-style: none !important;
      transition: all 0.3s;
      cursor: pointer;
      
      &:hover {
        color: #0099FF;
      }
    }

    & .Options {
      margin-top: 20px;
      display: flex;
      flex-direction: column;
      gap: 5px;

      & button {
        padding: 5px;
        border-radius: 5px;
        background-color: var(--color-bg1);
        color: #fff;
        border: none;
        outline: none;
        cursor: pointer;
        transition: all 0.3s;

        &:hover {
          background-color: ${transparentize(0.30, '#0099FF')};
        }

        &:active {
          scale: 0.9;
        }
      }
    }
  }
`