import { useQuery } from '@tanstack/react-query';

const URL = 'https://jsonplaceholder.typicode.com/users';
const fetchUsers = () => fetch(URL).then(res => res.json());

function Users() {
  const { data, isLoading } = useQuery({
    queryKey: ['users'], // уникальный ключ для этого запроса
    queryFn: fetchUsers,
  });

  console.log('data:', data, typeof data);
  if (isLoading) return <div>Загрузка...</div>;

  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {data.map((user: { id: number; name: string }) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Users;
