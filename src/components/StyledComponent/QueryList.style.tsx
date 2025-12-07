// src/components/QueryListStyle.tsx (пример)

import { Box, styled } from '@mui/material';
import { boolean } from 'yup';

export const QueryListStyle = styled(Box)(() => ({
  height: '100%',
  backgroundColor: 'grey',

  // ИСПРАВЛЕНИЕ: Убираем '&'. Теперь селектор ищет ПЕРВЫЙ дочерний элемент
  // ВНУТРИ QueryListStyle.
  ':first-of-type': {
    marginBottom: '8px',
    backgroundColor: 'red',
  },
}));

export const QueryListWrapper = styled(Box)(({ checked }: boolean) => ({
  height: '100%',
  backgroundColor: checked ? '#4f1fffff' : '#00ff2aff',
  color: 'white',

  span: {
    marginBottom: '8px',
    backgroundColor: 'red',
  },
  div: {
    backgroundColor: 'green',
  },
}));
