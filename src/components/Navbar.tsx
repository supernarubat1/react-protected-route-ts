import { Link, useNavigate } from 'react-router-dom';
import { Role, useUserStore } from '../store/userStore';

const Navbar = () => {
  const navigate = useNavigate();
  const user = useUserStore((state) => state.user);
  const logout = useUserStore((state) => state.logout);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className='fixed top-0 w-full flex justify-between bg-black text-white p-4'>
      <ul className='flex gap-6'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        {user.role !== Role.unknown && user.role === Role.user && <PrivateUser />}
        {user.role !== Role.unknown && user.role === Role.admin && <PrivateAdmin />}
      </ul>
      <ul className='flex gap-6'>
        <li>{user.role === Role.unknown ? <Link to='/login'>Login</Link> : <button onClick={handleLogout}>Logout</button>}</li>
      </ul>
    </nav>
  );
};

export default Navbar;

const PrivateUser = () => {
  return (
    <>
      <li>
        <Link to='/privateUser'>Private User</Link>
      </li>
    </>
  );
};

const PrivateAdmin = () => {
  return (
    <>
      <PrivateUser />
      <li>
        <Link to='/privateAdmin'>Private Admin</Link>
      </li>
    </>
  );
};
