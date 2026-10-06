import React from 'react';
import { Todo, usePosts } from '@/hooks/usePosts';
import { usePostById } from '@/hooks/usePostById';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

const isAuth = true;

const Todos: React.FC = () => {
  const { mutate, isPending } = useMutation({
    mutationKey: ['add post'],
    mutationFn: async (newPost: Omit<Todo, 'id'>) =>
      axios.post('https://jsonplaceholder.typicode.com/posts', newPost),
  });

  const queryClient = useQueryClient();
  const { data, error } = usePosts(isAuth);
  const { post, isLoading } = usePostById(1);

  if (isPending) return <span>Loading...</span>;
  if (error) return React.createElement('span', null, 'Oops!');

  return (
    <>
      <button
        onClick={() => queryClient.invalidateQueries({ queryKey: ['post'] })}
      >
        Revalidate POST
      </button>
      <ul>
        {Array.isArray(data) &&
          data.map((t: Todo) => (
            <li key={t.id}>
              {t.id}: {t.title}
            </li>
          ))}
      </ul>
      <div>{isLoading ? 'Loading...' : (post?.title ?? 'No post')}</div>
      <button
        disabled={isPending}
        onClick={() => {
          mutate({
            body: 'Новое тело',
            title: 'Новое тelo',
            userId: 1,
          });
        }}
      >
        Mutate
      </button>
    </>
  );
};

export default Todos;
