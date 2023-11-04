import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';
import { useUserStore } from './store/userStore';

const App = () => {
  const user = useUserStore((state) => state.user);
  console.log(user);

  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default App;
