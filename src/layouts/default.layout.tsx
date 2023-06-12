import { styled } from "styled-components"
import Header from "../components/Header/Header"
import BarOptions from "../components/BarOptions/BarOptions"
import SideBar from "../components/SideBar/SideBar"
import { TypesSelectedProps } from "../@types/typesSelected"

interface LayoutProps {
  children: React.ReactNode
  onSearchData: (search: string) => void
  onSelectedType: (type: TypesSelectedProps['types']) => void
  onUpdateServices: () => void
  idSelected: number
}

export default function DefaultLayout({ children, onSearchData, onSelectedType, onUpdateServices, idSelected }: LayoutProps) {
  return <Wrapper>
    <Header />
    <BarOptions
      onSearchData={onSearchData}
      onUpdateServices={onUpdateServices}
      idSelected={idSelected}
    />

    <Main>
      <SideBar onSelectedType={onSelectedType} />

      <div>
        {children}
      </div>
    </Main>
  </Wrapper>
}

const Wrapper = styled.div`
  
`

const Main = styled.main`
  min-height: calc(100vh - 120px);
  display: grid;
  grid-template-columns: 300px auto;
`