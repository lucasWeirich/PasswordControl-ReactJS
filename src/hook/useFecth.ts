import { useState, useEffect } from 'react';

export default function useFetch(endpoint: string, method: 'POST' | 'PUT' | 'GET' | 'DELETE', body?: object) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    const request = await fetch(`http://127.0.0.1:2222${endpoint}`, {
      method: method,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        /* 'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1X2lkIjoxLCJ1X25hbWUiOiJsdWNhcyIsInVfdXNlcm5hbWUiOiJsdWNhc190ZXN0ZSIsInVfZGF0ZV9jcmVhdGUiOiIyMDIyLTExLTI4VDE2OjI5OjUxLjAwMFoiLCJpYXQiOjE2ODUwMTI4ODUsImV4cCI6MTY4NTAyNzI4NX0.FoontTXAzfz84K-kh5lN7YSRjBWTmzJvwuLonoHA-oo`, */
        'Authorization': `Bearer ${sessionStorage.getItem('token')}`,
      },
      mode: 'cors',
      body: JSON.stringify(body),
    });

    const response = await request.json();

    setData(response);

    if (!request.status) setError(response.error)

  };

  useEffect(() => {
    if (method !== 'GET') return;
    fetchData();
  }, []);

  return { data, error, fetchData };
}