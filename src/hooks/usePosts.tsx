import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useEffect } from 'react';

export type Todo = {
  userId: number;
  id: number;
  title: string;
  completed?: boolean;
  body: string;
};

const initialData: Todo[] = [
  {
    id: 222,
    body: 'Initial Body',
    title: 'TIile initial data',
    userId: 333,
  },
];

export const usePosts = (isEnabled: boolean) => {
  const getData = async (): Promise<Todo[]> => {
    const response = await axios.get<Todo[]>(
      'https://jsonplaceholder.typicode.com/todos'
    );
    return response.data;
  };
  const { data, isPending, error, isSuccess, isError } = useQuery<Todo[]>({
    queryKey: ['todos'],
    queryFn: getData,
    select: data => data.slice(0, 20),
    enabled: isEnabled,
    initialData,
  });

  useEffect(() => {
    if (isSuccess) console.log('Data is completed success');
  }, [isSuccess]);

  useEffect(() => {
    if (isError) console.log('Data is failed ');
  }, [isError]);

  return { data, isPending, error, isSuccess, isError };
};
