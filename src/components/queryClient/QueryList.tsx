import React, { useCallback, useEffect, useState } from 'react';
import {
  QueryListStyle,
  QueryListWrapper,
} from '@/components/StyledComponent/QueryList.style';
import { useQuery } from '@tanstack/react-query';
import Todos from './ToDos';

const URL = 'https://jsonplaceholder.typicode.com/todos';
const fetchUsers = () => fetch(URL).then(res => res.json);

const arrTestConfig = [
  {
  link: "ENUM_link",
  url: "www.google.com"
},
  {
  link: "ENUM_link",
  url: "www.facebook.com"
},
  {
  link: "ENUM_link",
  url: "www.apple.com"
}
]

function MyComponent() {
  const { data, isLoading } = useQuery({
    queryKey: ['todos'],
    queryFn: fetchUsers,
  });

  console.log('data:', data, typeof data);
  if (isLoading) return <div>Загрузка...</div>;
  return <div>{JSON.stringify(data)}</div>;
}


export const GetQueryListEnumLinks = () => {
  return (
    <>
      {arrTestConfig.map((el, idx) => {
      <>
          <ul>
            <li key={idx}>
              {el.link}
              {el.url}
            </li>
          </ul>
      </>
      })}
    </>
  )
}

const QueryList = () => {
  const [status, setStatus] = useState(false);
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

        <GetQueryListEnumLinks />
    </QueryListStyle>
  );
};

export default QueryList;
