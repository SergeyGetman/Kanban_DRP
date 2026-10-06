import React from 'react';
import { Todo, usePosts } from '@/hooks/usePosts';
import { usePostById } from '@/hooks/usePostById';

const isAuth = true;

const Todos: React.FC = () => {
  const { data, isPending, error } = usePosts(isAuth);
  const { post, isLoading } = usePostById(1);

  if (isPending) return <span>Loading...</span>;
  if (error) return React.createElement('span', null, 'Oops!');

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
      <div>{isLoading ? 'Loading...' : (post?.title ?? 'No post')}</div>
    </>
  );
};

export default Todos;
