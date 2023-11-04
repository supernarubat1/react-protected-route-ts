import { useEffect } from 'react';
import { Role, useUserStore } from '../store/userStore';
import { Outlet, useNavigate } from 'react-router-dom';

const ProtectedAdmin = () => {
  const navigate = useNavigate();
  const user = useUserStore((state) => state.user);
  const logout = useUserStore((state) => state.logout);

  useEffect(() => {
    if (user.role !== Role.admin) {
      logout();
      navigate('/login');
      return;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Outlet />;
};

export default ProtectedAdmin;
