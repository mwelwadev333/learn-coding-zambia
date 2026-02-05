import { Outlet } from 'react-router-dom';
import BottomNav from './BottomNav';

const Layout = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-dark-bg pb-16">
      <main className="w-full">
        <Outlet />
      </main>
      <BottomNav />
    </div>
  );
};

export default Layout;
