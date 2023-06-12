import { styled } from "styled-components"
import Button from "../Button/Button"
import { FormEvent, useEffect, useState } from "react";
import useFetch from "../../hook/useFecth";

interface FormProps {
  type: 'edit' | 'create'
  idService?: number
  onClickClose: () => void
}

export default function Form({ type, idService, onClickClose }: FormProps) {

  const { fetchData } = useFetch(`/service/${idService}`, 'GET');

  /* const [formData, setFormData] = useState({
    name: data.s_name || '',

  }) */
  useEffect(() => {
    console.log('data')
  })

  function handleSubmit(e: FormEvent, type: 'edit' | 'create') {
    e.preventDefault();
    console.log('a', type);

  }
  return <Wrapper onSubmit={(e) => handleSubmit(e, type)}>
    <Input>
      <label htmlFor="name">Name:</label>
      <input type="text" name="name" placeholder="Name service..." />
    </Input>
    <Input>
      <label htmlFor="username">Username:</label>
      <input type="text" name="username" placeholder="Username service..." />
    </Input>
    <Input>
      <label htmlFor="password">Password:</label>
      <input type="text" name="password" placeholder="Password service..." />
    </Input>
    <Input>
      <label htmlFor="host">Host:</label>
      <input type="text" name="host" placeholder="Host service..." />
    </Input>
    <Input>
      <label htmlFor="type">Type:</label>
      <select name="type">
        <option value="" selected disabled>Select type...</option>
        <option value="Controle">Controle</option>
        <option value="Database">Database</option>
        <option value="Page">Page</option>
        <option value="Wp Admin">Wp Admin</option>
        <option value="Outro">Outro</option>
      </select>
    </Input>

    {
      type === 'edit' &&
      <Input>
        <label htmlFor="modified">Modified:</label>
        <input type="text" name="modified" value={'21/06/2022'} disabled />
      </Input>
    }

    <div style={{ gridColumn: '1 / span 2', display: 'flex', justifyContent: 'space-around', marginTop: '30px' }}>
      <Button label='Cancel' type="button" variant='danger' onClick={onClickClose} />
      <Button label='Edit' type="submit" variant='primary' />
    </div>
  </Wrapper>
}

const Wrapper = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`

const Input = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  & label {
    font-size: 14px;
  }

  & input, & select, & textarea {
    width: 100%;
    height: 30px;
    outline: none;
    border: none;
    border-radius: 5px;
    background-color: var(--color-bg2);
    box-shadow: 0 0 2px 2px var(--color-bg1);
    padding: 0 10px;
    color: var(--color-txt);
  }
`