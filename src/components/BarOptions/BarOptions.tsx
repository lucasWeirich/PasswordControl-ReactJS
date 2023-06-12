import useFetch from '../../hook/useFecth'
import Button from '../Button/Button'
import Form from '../Form/Form'
import InputSearch from '../InputSearch/InputSearch'
import Popup from '../Popup/Popup'
import * as BO from './BarOptions.styles'
import { useState, useEffect, useCallback } from 'react'

interface BarOptionsProps {
  onSearchData: (search: string) => void
  onUpdateServices: () => void
  idSelected: number
}

export default function BarOptions({ onSearchData, onUpdateServices, idSelected }: BarOptionsProps) {

  const [search, setSearch] = useState('');
  const [popupActived, setPopupActived] = useState(false);

  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }

  const handleSearchData = useCallback(() => {
    onSearchData(search);
  }, [onSearchData, search]);

  useEffect(() => {
    handleSearchData();
  }, [handleSearchData]);

  const { fetchData } = useFetch(`/services/${idSelected}`, 'DELETE');

  async function handleDeleteService() {
    if (idSelected <= 0) return;
    const confirmed = confirm(`Do you really confirm deleting service id: ${idSelected}`);
    if (!confirmed) return;

    await fetchData();

    onUpdateServices();
  }

  async function handleEditService() {
    /* const nome = prompt('Informe seu nome');

    console.log(nome) */

    setPopupActived(true)
  }

  return <BO.Wrapper>
    <div className="Container">
      <BO.Search>
        <InputSearch
          label='Search password'
          name='searchForUser'
          value={search}
          onChange={handleChangeSearch}
        />

      </BO.Search>

      <BO.Buttons>
        <Button
          label='Edit'
          variant='secondary'
          varianthover='primary'
          onClick={handleEditService}
          disabled={idSelected <= 0}
        />
        <Button
          label='Delete'
          variant='secondary'
          varianthover='danger'
          onClick={handleDeleteService}
          disabled={idSelected <= 0}
        />
      </BO.Buttons>
    </div>

    <Popup actived={popupActived} title="Edit">
      <Form
        type='edit'
        idService={idSelected}
        onClickClose={() => setPopupActived(false)}
      />
    </Popup>
  </BO.Wrapper>
}