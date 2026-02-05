import { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const Home = () => {
  const { theme, toggleTheme } = useTheme();
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    alert('Newsletter subscription coming soon!');
    setEmail('');
  };

  const techQuotes = [
    { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { quote: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs" },
    { quote: "Your most unhappy customers are your greatest source of learning.", author: "Bill Gates" },
    { quote: "Success is a lousy teacher. It seduces smart people into thinking they can't lose.", author: "Bill Gates" },
  ];

  const programmingTopics = [
    {
      icon: 'fa-code',
      title: 'What is Programming?',
      description: 'Programming is writing instructions for computers to follow. It\'s like teaching a robot to do tasks by giving it step-by-step directions in a language it understands.'
    },
    {
      icon: 'fa-database',
      title: 'Data Types',
      description: 'Data types define what kind of information you can store - numbers for calculations, text for names, true/false for decisions, and more.'
    },
    {
      icon: 'fa-box',
      title: 'Variables',
      description: 'Variables are containers that store data. Think of them as labeled boxes where you keep information you want to use later in your program.'
    },
    {
      icon: 'fa-function',
      title: 'Functions',
      description: 'Functions are reusable blocks of code that perform specific tasks. They help you organize code and avoid repetition.'
    },
    {
      icon: 'fa-code-branch',
      title: 'Control Structures',
      description: 'Control structures like if/else and loops determine how your program flows and makes decisions based on conditions.'
    },
    {
      icon: 'fa-terminal',
      title: 'Input/Output',
      description: 'I/O operations let your program communicate with users - receiving input and displaying output.'
    },
    {
      icon: 'fa-sitemap',
      title: 'Algorithms',
      description: 'Algorithms are step-by-step procedures for solving problems. They\'re the logic behind how programs work.'
    },
    {
      icon: 'fa-object-group',
      title: 'Object-Oriented Programming',
      description: 'OOP organizes code into objects that contain both data and functions, making complex programs easier to manage.'
    },
    {
      icon: 'fa-git-alt',
      title: 'Version Control with Git',
      description: 'Git helps you track changes in your code, collaborate with others, and never lose your work.'
    },
    {
      icon: 'fa-project-diagram',
      title: 'Software Development Lifecycle',
      description: 'SDLC is the process of planning, creating, testing, and deploying software from idea to production.'
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-dark-bg dark:via-dark-card dark:to-dark-bg">
        <div className="absolute top-4 right-4 z-10">
          <button
            onClick={toggleTheme}
            className="tap-target p-3 rounded-full bg-white dark:bg-dark-card shadow-lg transition-transform active:scale-95"
            aria-label="Toggle theme"
          >
            <i className={`fas ${theme === 'dark' ? 'fa-sun' : 'fa-moon'} text-xl text-primary-500`}></i>
          </button>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="text-center animate-slide-up">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Learn Code <span className="gradient-text">Zambia</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Master JavaScript, Python, SQL, and Golang right from your smartphone.
              No laptop needed!
            </p>

            <div className="mb-8 p-6 bg-white dark:bg-dark-card rounded-2xl shadow-lg max-w-xl mx-auto">
              <i className="fas fa-rocket text-4xl text-primary-500 mb-3 animate-float"></i>
              <p className="text-gray-700 dark:text-gray-300 italic mb-2">
                "{techQuotes[0].quote}"
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                - {techQuotes[0].author}
              </p>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              The History of Programming
            </h2>
            <div className="bg-white dark:bg-dark-card rounded-2xl shadow-lg p-6 mb-8">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Programming began in the 1800s with Ada Lovelace, who wrote the first algorithm for Charles Babbage's Analytical Engine.
                The field exploded in the 1940s with the first electronic computers like ENIAC.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                In the 1950s-70s, languages like FORTRAN, COBOL, C, and BASIC made programming more accessible.
                The 1980s-90s brought personal computers, the internet, and languages like C++, Java, and Python.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Today, programming powers everything from smartphones to artificial intelligence,
                making it one of the most valuable skills in the modern world.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Programming Fundamentals
            </h2>
            <div className="grid gap-4">
              {programmingTopics.map((topic, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-dark-card rounded-xl shadow-md p-5 transition-all hover:shadow-lg active:scale-98"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 flex-shrink-0 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                      <i className={`fas ${topic.icon} text-xl text-primary-500`}></i>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {topic.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        {topic.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl shadow-xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4 text-center">Stay Updated</h2>
            <p className="text-center mb-6 opacity-90">
              Get the latest tech news and coding tips delivered to your inbox
            </p>
            <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto">
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button
                  type="submit"
                  className="tap-target px-6 py-3 bg-white text-primary-600 rounded-lg font-semibold transition-transform active:scale-95"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
