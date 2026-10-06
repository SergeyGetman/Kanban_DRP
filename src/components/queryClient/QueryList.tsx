import React, { useCallback, useEffect, useState } from 'react';
import {
  QueryListStyle,
  QueryListWrapper,
} from '@/components/StyledComponent/QueryList.style';
import { useQuery } from '@tanstack/react-query';
import Todos from './ToDos';

const URL = 'https://jsonplaceholder.typicode.com/todos';
const URL_ALBUMS = 'https://jsonplaceholder.typicode.com/albums';

const fetchTodos = () => fetch(URL).then(res => res.json());
const fetchAlbums = () => fetch(URL_ALBUMS).then(res => res.json());

const MyComponent: React.FC = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['todos-and-albums'],
    queryFn: async () => {
      const [todos, albums] = await Promise.all([fetchTodos(), fetchAlbums()]);
      return { todos, albums };
    },
  });

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  return (
    <>
      <h2 style={{ backgroundColor: 'grey', textAlign: 'center' }}>Todos</h2>
      <ul>
        {Array.isArray(data?.todos) &&
          data.todos.map((el: { id: number; title: string }) => (
            <li key={el.id}>{el.title}</li>
          ))}
      </ul>

      <h2 style={{ backgroundColor: 'grey', textAlign: 'center' }}>Albums</h2>
      <ul>
        {Array.isArray(data?.albums) &&
          data.albums.map((el: { id: number; title: string }) => (
            <li key={el.id}>{el.title}</li>
          ))}
      </ul>
    </>
  );
};

const QueryList: React.FC = () => {
  const [status, setStatus] = useState<boolean>(false);

  const checkedFn = useCallback(() => {
    setStatus(true);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      checkedFn();
    }, 3000);
  });

  return (
    <QueryListStyle>
      <h1>Hello Query list </h1>
      <MyComponent />
      <QueryListWrapper checked={status}>
        <Todos />
      </QueryListWrapper>
    </QueryListStyle>
  );
};

export default QueryList;
