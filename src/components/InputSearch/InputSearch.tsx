import { styled } from "styled-components"
import { CgSearch } from 'react-icons/cg'
import { FormEvent } from "react"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  name: string
}

export default function InputSearch({ label, name, ...props }: InputProps) {

  const handleSubmitSearch = (e: FormEvent) => {
    e.preventDefault();
  }

  return <Wrapper>
    <input
      type="text"
      name={name}
      placeholder={label}
      {...props}
    />
    <button onClick={handleSubmitSearch}>
      <CgSearch
        size={20}
        color="#fff"
      />
    </button>
  </Wrapper>
}

const Wrapper = styled.form`
  width: 100%;
  height: 40px;
  position: relative;

  & input {
    width: 100%;
    height: 100%;
    border-radius: 5px;
    background-color: var(--color-bg2);
    border: none;
    outline: none;
    padding-left: 10px;
    padding-right: 50px;
    color: #fff;
  }

  & button {
    width: 40px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 5px;
    position: absolute;
    right: 0;
    top: 0;
    transition: all 0.3s;

    &:hover {
      background-color: #0099FF;
    }

    &:active {
      scale: 0.9;
    }
  }
`