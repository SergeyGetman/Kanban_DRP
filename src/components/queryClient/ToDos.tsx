import { useQuery } from '@tanstack/react-query';

function Todos() {
  const { data, isPending, error } = useQuery({
    queryKey: ['todos'],
    queryFn: () =>
      fetch('https://jsonplaceholder.typicode.com/todos').then(r => r.json()),
  });

  if (isPending) return <span>Loading...</span>;
  if (error) return <span>Oops!</span>;

  return (
    <>
      <ul>
        {data.map((t: any) => (
          <li key={t.id}>{t.title}</li>
        ))}
      </ul>
      <span>This is span yo</span>
      <div>This is DIV!</div>
    </>
  );
}

export default Todos;
