import React from 'react';
import { useQuery } from '@tanstack/react-query';

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const Todos: React.FC = () => {
  const { data, isPending, error } = useQuery<Todo[]>({
    queryKey: ['todos'],
    queryFn: () =>
      fetch('https://jsonplaceholder.typicode.com/todos').then(r => r.json()),
  });

  if (isPending) return <span>Loading...</span>;
  if (error) return <span>Oops!</span>;

  return (
    <>
      <ul>
        {Array.isArray(data) &&
          data.map((t: Todo) => (
            <li key={t.id}>
              {t.id}: {t.title}
            </li>
          ))}
      </ul>
    </>
  );
};

export default Todos;
