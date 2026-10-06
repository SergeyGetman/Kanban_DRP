import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export type ITodoId = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

// /posts/:id возвращает один объект, не массив
const getDataUserPost = async (id: number): Promise<ITodoId> => {
  const response = await axios.get<ITodoId>(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  return response.data;
};

export const usePostById = (id: number) => {
  const { data, isLoading } = useQuery({
    queryKey: ['post', id],
    queryFn: () => getDataUserPost(id),
    enabled: !!id,
  });

  return { post: data, isLoading };
};
