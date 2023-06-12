import Table from "../components/Table/Table"
import DefaultLayout from "../layouts/default.layout"
import useFetch from "../hook/useFecth"
import { useEffect, useState } from "react"
import { ServicesProps } from "../@types/services";
import { TypesSelectedProps } from "../@types/typesSelected";

export default function HomePage() {

  const [services, setServices] = useState<ServicesProps[]>([]);
  const [dataSearch, setDataSearch] = useState('');
  const [typeSelected, setTypeSelected] = useState<TypesSelectedProps['types']>('All Items');
  const [errorFetch, setErrorFetch] = useState('');
  const [idServiceSelected, setIdServiceSelected] = useState(0);

  const { data, error, fetchData } = useFetch('/services', 'GET');

  useEffect(() => {
    if (data) {
      setServices(data);
    }
    if (error)
      setErrorFetch(error);
    else
      setErrorFetch('');
  }, [data, error]);

  const handleSearchData = (search: string) => {
    setDataSearch(search);
  };

  const handleSelectedType = (type: TypesSelectedProps['types']) => {
    setTypeSelected(type);
  }

  const handleIdSelected = (id: number) => {
    setIdServiceSelected(id);
  }

  return <DefaultLayout
    onSearchData={handleSearchData}
    onSelectedType={handleSelectedType}
    onUpdateServices={() => fetchData()}
    idSelected={idServiceSelected}
  >
    <Table
      title={typeSelected}
      data={services}
      error={errorFetch}
      search={dataSearch}
      type={typeSelected}
      idSelected={handleIdSelected}
    />
  </DefaultLayout>
}