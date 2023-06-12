import { styled } from "styled-components"
import { IoMdCloseCircle } from 'react-icons/io'
import { useState, useEffect } from "react"

interface PopupProps {
  title: string
  actived: boolean
  children: React.ReactNode
}

export default function Popup({ actived, title, children }: PopupProps) {

  const [isActived, setIsActived] = useState<boolean>(actived);

  function handleClosePopup(e?: any) {
    const active = e?.target.classList.contains('Popup');
    if (active) closePopup();
  }

  function closePopup() {
    setIsActived(false);
  }

  useEffect(() => {
    setIsActived(actived)
  }, [actived])

  return <Wrapper
    actived={isActived.toString()}
    className="Popup"
    onClick={(e) => handleClosePopup(e)}
  >
    <Content>
      <Title>{title}</Title>

      {
        children
      }

      <Close onClick={closePopup}>
        <IoMdCloseCircle size={25} color='#000' />
      </Close>
    </Content>
  </Wrapper>
}

const Wrapper = styled.div<{
  actived: string
}>`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
  display: flex;
  align-items: start;
  justify-content: center;
  background-color: #00000070;
  transition: all 0.4s;

  ${p => p.actived === 'false' && `
    opacity: 0;
    visibility: collapse;
    z-index: -999;  
  `}
`

const Content = styled.div`
  width: 90%;
  max-width: 600px;
  height: auto;
  padding: 20px;
  border-radius: 10px;
  background-color: var(--color-bg2);
  margin-top: 100px;
  box-shadow: 0 0 5px var(--color-bg2);
  position: relative;
`

const Close = styled.button`
  border: none;
  outline: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-txt);
  position: absolute;
  top: -15px;
  right: -15px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    transform: rotate(180deg);
  }

  &:active {
    scale: 0.8;
  }
`

const Title = styled.h2`
  font-size: 18px;
  text-align: center;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  position: relative;

  &::before {
    content: '';
    width: 200px;
    height: 4px;
    border-radius: 10px;
    background-color: var(--color-bg1);
    position: absolute;
    bottom: -10px;
  }
`