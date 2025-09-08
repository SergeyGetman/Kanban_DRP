import { useAppSelector } from '@/hooks/redux';

const UseAuth = () => {
  const { email, token, id } = useAppSelector(state => state.user);
  return {
    isAuth: !!email,
    token,
    id,
  };
};

export default UseAuth;
