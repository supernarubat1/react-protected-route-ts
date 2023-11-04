import { useEffect } from 'react';
import { Role, useUserStore } from '../store/userStore';
import { Outlet, useNavigate } from 'react-router-dom';

const ProtectedUser = () => {
  const navigate = useNavigate();
  const user = useUserStore((state) => state.user);

  useEffect(() => {
    if (user.role === Role.unknown) {
      navigate('/login');
      return;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Outlet />;
};

export default ProtectedUser;
