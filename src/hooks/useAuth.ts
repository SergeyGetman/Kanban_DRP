import { useAppSelector } from '@/hooks/redux';

const UseAuth = () => {
  const { email, token, id } = useAppSelector(state => state.authUser);
  return {
    isAuth: !!email,
    token,
    id,
  };
};

export default UseAuth;
