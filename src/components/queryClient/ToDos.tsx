import React from 'react';
import { Todo, usePosts } from '@/hooks/usePosts';
import { usePostById } from '@/hooks/usePostById';
import { useQueryClient } from '@tanstack/react-query';

const isAuth = true;

const Todos: React.FC = () => {
  const queryClient = useQueryClient();
  const { data, isPending, error } = usePosts(isAuth);
  const { post, isLoading } = usePostById(1);

  if (isPending) return <span>Loading...</span>;
  if (error) return React.createElement('span', null, 'Oops!');

  return (
    <>
      <button
        onClick={() =>
          queryClient.invalidateQueries({ queryKey: ['post'] })
        }
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
    </>
  );
};

export default Todos;
