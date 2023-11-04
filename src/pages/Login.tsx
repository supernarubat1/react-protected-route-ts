import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Role, UserType, useUserStore } from '../store/userStore';

const Login = () => {
  const navigate = useNavigate();
  const fakeUser: UserType = { username: 'user', password: '1234', role: Role.user };
  const fakeAdmin: UserType = { username: 'admin', password: '1234', role: Role.admin };
  const [data, setData] = useState({ username: '', password: '' });
  const setUser = useUserStore((state) => state.setUser);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setData({ ...data, [id]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { username, password } = data;
    if (username === fakeUser.username && password === fakeUser.password) {
      setUser(fakeUser);
      navigate('/');
    } else if (username === fakeAdmin.username && password === fakeAdmin.password) {
      setUser(fakeAdmin);
      navigate('/');
    } else {
      console.log('username or password is wrong');
    }
  };

  return (
    <div className='h-screen flex justify-center items-center'>
      <form onSubmit={handleSubmit} className='border p-4 max-w-sm w-full shadow'>
        <h1 className='text-2xl font-bold mb-4'>Login</h1>
        <div className='flex flex-col mb-2'>
          <label htmlFor='username'>Username:</label>
          <input type='text' name='username' id='username' className='border p-1 mt-1' onChange={handleChange} />
        </div>
        <div className='flex flex-col mb-2'>
          <label htmlFor='password'>Password:</label>
          <input type='password' name='password' id='password' className='border p-1 mt-1' onChange={handleChange} />
        </div>
        <div className='flex flex-col my-4'>
          <button type='submit' className='bg-black text-white p-1.5'>
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
