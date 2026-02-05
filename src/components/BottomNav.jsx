import { Link, useLocation } from 'react-router-dom';

const BottomNav = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', icon: 'fa-home', label: 'Home' },
    { path: '/courses', icon: 'fa-graduation-cap', label: 'Courses' },
    { path: '/community', icon: 'fa-users', label: 'Community' },
    { path: '/profile', icon: 'fa-user', label: 'Profile' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-dark-card border-t border-gray-200 dark:border-dark-border z-50 safe-area-pb">
      <div className="flex justify-around items-center h-16 max-w-screen-lg mx-auto">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center justify-center tap-target flex-1 transition-colors ${
                isActive
                  ? 'text-primary-500 dark:text-primary-400'
                  : 'text-gray-500 dark:text-gray-400'
              }`}
            >
              <i className={`fas ${item.icon} text-xl mb-1`}></i>
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
