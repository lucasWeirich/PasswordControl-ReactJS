import * as T from './Table.styles'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { BsFillBookmarkStarFill } from 'react-icons/bs';
import { TbCopy } from 'react-icons/tb';
import { ServicesProps } from '../../@types/services';
import { TypesSelectedProps } from '../../@types/typesSelected';
import copy from 'clipboard-copy';
import { useEffect, useState } from 'react';

export interface TableProps {
  title: string
  data: ServicesProps[]
  error: string
  search: string
  type: TypesSelectedProps['types']
  idSelected: (id: number) => void
}

export default function Table({ title, data, error, search, type, idSelected }: TableProps) {

  const [serviceSelected, setServiceSelected] = useState(0);
  const [serviceFavorites, setServiceFavorites] = useState(JSON.parse(localStorage.getItem('allFavorite-services') || '[]'));

  const handleSelectService = (id: number) => {
    setServiceSelected(prev => {
      const newId = prev === id ? 0 : id;
      return newId;
    })
  }

  useEffect(() => {
    idSelected(serviceSelected);
  }, [serviceSelected]);

  const handleClickFavorite = async (id: number) => {
    setServiceFavorites(JSON.parse(localStorage.getItem('allFavorite-services') || '[]'));
    let newFavoritesSave = [];

    if (!serviceFavorites.includes(id)) {
      newFavoritesSave = serviceFavorites;
      newFavoritesSave.push(id);
    } else {
      newFavoritesSave = serviceFavorites.filter((service: number) => service !== id);
    }

    setServiceFavorites(newFavoritesSave);
    localStorage.setItem('allFavorite-services', JSON.stringify(newFavoritesSave));
  }

  return <T.Wrapper>
    <T.Title>{title}</T.Title>
    <T.Table>
      <T.Head>
        <tr>
          <th>
            <BsFillBookmarkStarFill />
          </th>
          <th>Name</th>
          <th>Username</th>
          <th>Password</th>
          <th>Host</th>
          <th>Type</th>
          <th>Modified</th>
        </tr>
      </T.Head>

      <T.Body>
        {
          data[0] &&
          data.map(service => {
            const dateModified = service.s_modified.substring(0, 10);
            if (service.s_name.toLocaleLowerCase().includes(search.toLocaleLowerCase())) {
              const typeCondition =
                type === 'All Items' || (type === 'Favorites' && serviceFavorites.includes(service.s_id));

              if (typeCondition || service.s_type === type) {
                return (
                  <tr
                    key={service.s_id}
                    onClick={() => handleSelectService(service.s_id)}
                    className={serviceSelected === service.s_id ? '--selected' : ''}
                  >
                    <td onClick={() => handleClickFavorite(service.s_id)}>
                      {serviceFavorites.includes(service.s_id) ? <AiFillStar /> : <AiOutlineStar />}
                    </td>
                    <td>{service.s_name}</td>
                    <td>{service.s_username}</td>
                    <td className="--copy" onClick={() => copy(service.s_password)}>
                      {service.s_password}
                      <span>
                        <TbCopy color={'green'} />
                      </span>
                    </td>
                    <td>{service.s_host}</td>
                    <td>{service.s_type}</td>
                    <td>{dateModified}</td>
                  </tr>
                );
              }
            }
          })
        }
      </T.Body>
    </T.Table>

    <span style={{
      display: 'flex',
      alignItems: 'center',
      padding: '40px',
      textAlign: 'center',
      color: '#e64e4e'
    }}>{error}</span>
  </T.Wrapper>
}