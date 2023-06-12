import { TypesSelectedProps } from '../../@types/typesSelected'
import * as SB from './SideBar.styles'

interface SideBarProps {
  onSelectedType: (type: TypesSelectedProps['types']) => void
}

export default function SideBar({ onSelectedType }: SideBarProps) {

  const handleTypeSelected = (type: TypesSelectedProps['types']) => {
    onSelectedType(type)
  }

  return <SB.Wrapper>
    <details open>
      <summary>Items</summary>

      <div className="Options">
        <button onClick={() => handleTypeSelected('All Items')}>All Items</button>
        <button onClick={() => handleTypeSelected('Favorites')}>Favorites</button>
      </div>
    </details>
    <details open>
      <summary>Filter by Type</summary>

      <div className="Options">
        <button onClick={() => handleTypeSelected('Controle')}>Controle</button>
        <button onClick={() => handleTypeSelected('Database')}>Database</button>
        <button onClick={() => handleTypeSelected('Page')}>Page</button>
        <button onClick={() => handleTypeSelected('Wp Admin')}>Wp Admin</button>
        <button onClick={() => handleTypeSelected('Outro')}>Outro</button>
      </div>
    </details>
  </SB.Wrapper>
}