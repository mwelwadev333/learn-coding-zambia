import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';

const Courses = () => {
  const { user } = useAuth();

  const courses = [
    {
      id: 'js',
      name: 'JavaScript',
      icon: 'fa-js',
      color: 'bg-yellow-400',
      description: 'Master logic and AI decision-making with JavaScript',
      modules: 12,
      locked: false,
    },
    {
      id: 'python',
      name: 'Python',
      icon: 'fa-python',
      color: 'bg-blue-500',
      description: 'Learn data structures and neural network basics',
      modules: 15,
      locked: true,
    },
    {
      id: 'sql',
      name: 'SQL',
      icon: 'fa-database',
      color: 'bg-orange-500',
      description: 'Manage data for your applications',
      modules: 10,
      locked: true,
    },
    {
      id: 'go',
      name: 'Golang',
      icon: 'fa-code',
      color: 'bg-cyan-500',
      description: 'Build efficient backend systems',
      modules: 14,
      locked: true,
    },
  ];

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <i className="fas fa-lock text-6xl text-gray-300 dark:text-gray-600 mb-4"></i>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Sign in to access courses
          </h2>
          <Link
            to="/login"
            className="inline-block tap-target px-6 py-3 bg-primary-500 text-white rounded-lg font-semibold transition-transform active:scale-95"
          >
            Sign In
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-bg">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Your Learning Path
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Complete each course to unlock the next one
          </p>
        </div>

        <div className="space-y-4">
          {courses.map((course, index) => (
            <div
              key={course.id}
              className={`bg-white dark:bg-dark-card rounded-2xl shadow-lg p-6 transition-all ${
                course.locked ? 'opacity-60' : 'hover:shadow-xl'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className={`w-16 h-16 ${course.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <i className={`fab ${course.icon} text-3xl text-white`}></i>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {course.name}
                    </h3>
                    {course.locked && (
                      <i className="fas fa-lock text-gray-400 dark:text-gray-500"></i>
                    )}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-3">
                    {course.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {course.modules} modules
                    </span>
                    {!course.locked ? (
                      <button className="tap-target px-4 py-2 bg-primary-500 text-white rounded-lg font-medium transition-transform active:scale-95">
                        Start Learning
                        <i className="fas fa-arrow-right ml-2"></i>
                      </button>
                    ) : (
                      <span className="text-sm text-gray-400 dark:text-gray-500">
                        Complete previous course
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {!course.locked && (
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-dark-border">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Progress</span>
                    <span className="text-sm font-semibold text-primary-500">0%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 dark:bg-dark-border rounded-full overflow-hidden">
                    <div className="h-full bg-primary-500 rounded-full" style={{ width: '0%' }}></div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl shadow-xl p-6 text-white">
          <div className="flex items-start gap-4">
            <i className="fas fa-robot text-4xl"></i>
            <div>
              <h3 className="text-xl font-bold mb-2">Meet Dev Mentor</h3>
              <p className="opacity-90">
                Your AI-powered coding assistant is here to help you understand difficult concepts,
                debug code, and accelerate your learning journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
