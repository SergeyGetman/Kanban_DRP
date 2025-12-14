import React, { useCallback, useEffect, useState } from 'react';
import { QueryTableWrapper } from '@/components/StyledComponent/QueryList.style';
import { useQuery } from '@tanstack/react-query';

import Users from './Users';

const QueryList = () => {
  const [status, setStatus] = useState(false);
  const [hide, setHide] = useState(false);
  window.addEventListener('resize', () => {
    if (window.innerWidth < 600) {
      setHide(true);
    } else {
      setHide(false);
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
    <QueryTableWrapper $hideFirstColumn={hide}>
      <Users />
    </QueryTableWrapper>
  );
};

export default QueryList;
