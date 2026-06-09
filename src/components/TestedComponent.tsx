import React, { FC, useEffect, useState } from 'react';
import { tasksApi } from '@/api/taskApi';

export interface ITestedComponent {
  text: string;
}

const TestedComponent: FC<ITestedComponent> = ({ text }) => {
  const [count, setCount] = useState('');
  const [value, setValue] = useState('');

  useEffect(() => {
    tasksApi
      .getAll()
      .then(tasks => {
        console.log(' Данные успешно получены:', tasks);
      })
      .catch(err => {
        console.error(' Ошибка при получении данных:', err);
      });
  }, []);

  const onChanges = event => {
    setValue(event.target.value);
  };

  const handleClick = () => {
    setCount(count + 1);
    setCount(count + 1);
  };

  return (
    <>
      <button onClick={handleClick}>Count: {count}</button>;
    </>
  );
};

export default TestedComponent;
