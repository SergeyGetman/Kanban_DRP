/* eslint-disable prettier/prettier */
import React, { useCallback, useEffect, useState } from 'react';
import { QueryTableWrapper } from '@/components/StyledComponent/QueryList.style';
import { useQuery } from '@tanstack/react-query';

import Users from './Users';
const URL = 'https://jsonplaceholder.typicode.com/todos';
const fetchUsers = () => fetch(URL).then(res => res.json);

export type IArrTestConf = {
  link: string;
  url: string;
};

const arrTestConfig: IArrTestConf[] = [
  {
    link: 'ENUM_link',
    url: 'www.google.com',
  },
  {
    link: 'ENUM_link',
    url: 'www.facebook.com',
  },
  {
    link: 'ENUM_link',
    url: 'www.apple.com',
  },
];

function QueryListComponent() {
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
      <div style={{ backgroundColor: 'grey', height: '100%' }}>
        {arrTestConfig.map((el, idx) => (
          <ul key={idx}>
            <li>
              {el.link}: 
              {el.url}
            </li>
          </ul>
        ))}
      </div>
    </>
  );
};

const QueryList = () => {
  const [status, setStatus] = useState(false);
  const [mobileView, setMobileView] = useState(false);
  window.addEventListener('resize', () => {
    if (window.innerWidth < 600) {
      setMobileView(true);
    } else {
      setMobileView(false);
    }
  });

  const checkedFn = useCallback(() => {
    setStatus(true);
  }, [status]);

  useEffect(() => {
    setTimeout(() => {
      checkedFn();
    }, 3000);
  });
  return (
    <>
      <QueryTableWrapper mobileView={mobileView}>
        <Users />
      </QueryTableWrapper>
      <QueryTableWrapper mobileView={mobileView}>
        <QueryListComponent />
        <GetQueryListEnumLinks />
      </QueryTableWrapper>
    </>
  );
};

export default QueryList;
