import { styled } from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
`

export const Title = styled.h5`
  padding: 10px 0;
  font-size: 0.9rem;
  text-align: center;
  background-color: var(--color-bg);
`

export const Head = styled.thead`
  & tr {
    background-color: var(--color-bg2);
    transition: all 0.5s;

    & th {
      padding: 10px;
      font-size: 0.875rem;
      &:not(:first-child) {
        text-align: start;
      }

      &:first-child {
        width: 50px;
      }
      
      &:last-child {
        text-align: end;
      }
    }
  }
`

export const Body = styled.tbody`
  & tr {
    transition: all 0.3s;
    cursor: pointer;

    &.--selected {
      background: #53311d!important;
    }
      
    &:hover {
      background-color: #414141;
    }

    & td {
      padding: 5px 10px;
      font-size: 14px;
      font-weight: 500;

      &:first-child {
        text-align: center;
      }

      &:last-child {
        text-align: end;
      }

      &.--copy {
        position: relative;
        padding-right: 15px;

        &:hover {
          & span {
            visibility: visible;
            opacity: 1;
          }
        }

        & span {
          position: absolute;
          right: 0;
          transition: all 0.3s;
          visibility: collapse;
          opacity: 0;
        }
      }
    }
  }
`

export const Table = styled.table`
  width: 100%;
  overflow: hidden;
  border-collapse: collapse;
  transition: all 0.3s;

  &:hover {
    box-shadow: 0 0 20px #111;
    & ${Head} {
      & tr {
        background-color: #1a1a1a;
      }
    }
  }
`