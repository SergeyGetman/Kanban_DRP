import React, { useCallback, useEffect, useState } from 'react';
import {
  QueryListStyle,
  QueryListWrapper,
} from '@/components/StyledComponent/QueryList.style';
import { useQuery } from '@tanstack/react-query';
import Todos from './ToDos';

const URL = 'https://jsonplaceholder.typicode.com/todos';
const fetchUsers = () => fetch(URL).then(res => res.json);

const MyComponent: React.FC = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['todos'],
    queryFn: fetchUsers,
  });

  if (isLoading) return <div>Загрузка...</div>;
  return <div>{JSON.stringify(data)}</div>;
};

const QueryList: React.FC = () => {
  const [status, setStatus] = useState<boolean>(false);

  const checkedFn = useCallback(() => {
    setStatus(true);
  }, [status]);

  useEffect(() => {
    setTimeout(() => {
      checkedFn();
    }, 3000);
  });

  return (
    <QueryListStyle>
      <h1>Hello Query list </h1>
      {/* <MyComponent /> */}
      <QueryListWrapper checked={status}>
        <Todos />
      </QueryListWrapper>
    </QueryListStyle>
  );
};

export default QueryList;