const Community = () => {
  const communities = [
    {
      name: 'FreeCodeCamp',
      description: 'Learn to code for free with millions of learners worldwide',
      icon: 'fa-free-code-camp',
      url: 'https://www.freecodecamp.org',
      color: 'bg-green-500',
    },
    {
      name: 'Dev.to',
      description: 'A community of software developers getting together to help one another',
      icon: 'fa-dev',
      url: 'https://dev.to',
      color: 'bg-gray-900',
    },
    {
      name: 'Stack Overflow',
      description: 'The largest online community for programmers to learn and share knowledge',
      icon: 'fa-stack-overflow',
      url: 'https://stackoverflow.com',
      color: 'bg-orange-500',
    },
    {
      name: 'LinkedIn',
      description: 'Connect with tech professionals and showcase your coding journey',
      icon: 'fa-linkedin',
      url: 'https://www.linkedin.com',
      color: 'bg-blue-600',
    },
    {
      name: 'Reddit',
      description: 'Join programming communities like r/learnprogramming and r/coding',
      icon: 'fa-reddit',
      url: 'https://www.reddit.com/r/learnprogramming',
      color: 'bg-orange-600',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-bg">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Join the Community
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Connect with developers worldwide and accelerate your learning
          </p>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4 mb-6">
          <div className="flex items-start gap-3">
            <i className="fas fa-info-circle text-blue-500 text-xl mt-1"></i>
            <div>
              <h3 className="font-semibold text-blue-900 dark:text-blue-200 mb-1">
                Local Community Coming Soon
              </h3>
              <p className="text-sm text-blue-700 dark:text-blue-300">
                We're building a dedicated community for Zambian developers. In the meantime,
                join these amazing global communities to connect with fellow coders.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {communities.map((community, index) => (
            <a
              key={index}
              href={community.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white dark:bg-dark-card rounded-2xl shadow-md p-6 transition-all hover:shadow-xl active:scale-98"
            >
              <div className="flex items-start gap-4">
                <div className={`w-14 h-14 ${community.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <i className={`fab ${community.icon} text-2xl text-white`}></i>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      {community.name}
                    </h3>
                    <i className="fas fa-external-link-alt text-gray-400 dark:text-gray-500"></i>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {community.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-8 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl shadow-xl p-6 text-white">
          <h3 className="text-xl font-bold mb-3">Share Your Progress</h3>
          <p className="opacity-90 mb-4">
            Let the world know you're learning to code! Share your achievements on social media
            and inspire others to start their coding journey.
          </p>
          <div className="flex gap-3">
            <button className="tap-target px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg font-medium transition-colors">
              <i className="fab fa-twitter mr-2"></i>
              Tweet
            </button>
            <button className="tap-target px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg font-medium transition-colors">
              <i className="fab fa-facebook mr-2"></i>
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
