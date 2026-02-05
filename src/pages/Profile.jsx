import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { supabase } from '../supabaseClient';

const Profile = () => {
  const { user, profile, signOut } = useAuth();
  const navigate = useNavigate();
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <i className="fas fa-user-circle text-6xl text-gray-300 dark:text-gray-600 mb-4"></i>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Sign in to view profile
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

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  const handleDeleteAccount = async () => {
    try {
      await supabase.from('profiles').delete().eq('id', user.id);
      await signOut();
      navigate('/');
    } catch (error) {
      console.error('Error deleting account:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-bg">
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <div className="bg-white dark:bg-dark-card rounded-2xl shadow-lg p-6 mb-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center">
              <span className="text-3xl font-bold text-white">
                {profile?.username?.charAt(0).toUpperCase() || 'U'}
              </span>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {profile?.username || 'User'}
              </h2>
              <p className="text-gray-600 dark:text-gray-400">{user.email}</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="text-center p-4 bg-gray-50 dark:bg-dark-bg rounded-xl">
              <div className="text-2xl font-bold text-primary-500">
                {profile?.xp_points || 0}
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">XP Points</div>
            </div>
            <div className="text-center p-4 bg-gray-50 dark:bg-dark-bg rounded-xl">
              <div className="text-2xl font-bold text-primary-500">--</div>
              <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">Rank</div>
            </div>
            <div className="text-center p-4 bg-gray-50 dark:bg-dark-bg rounded-xl">
              <div className="text-2xl font-bold text-primary-500">0%</div>
              <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">Progress</div>
            </div>
          </div>

          <div className="border-t border-gray-200 dark:border-dark-border pt-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Study Goal
            </h3>
            <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-dark-bg rounded-xl">
              <div className="flex items-center gap-3">
                <i className="fas fa-clock text-2xl text-primary-500"></i>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {profile?.study_goal_minutes || 30} minutes/day
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Daily coding goal
                  </div>
                </div>
              </div>
              <button className="tap-target px-4 py-2 text-primary-500 font-medium">
                Edit
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-dark-card rounded-2xl shadow-lg p-6 mb-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Subscription Status
          </h3>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <i className={`fas fa-${profile?.is_subscribed ? 'check-circle' : 'times-circle'} text-2xl ${
                profile?.is_subscribed ? 'text-green-500' : 'text-gray-400'
              }`}></i>
              <div>
                <div className="font-semibold text-gray-900 dark:text-white">
                  {profile?.is_subscribed ? 'Premium Member' : 'Free Member'}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {profile?.is_subscribed ? 'All features unlocked' : 'Upgrade for full access'}
                </div>
              </div>
            </div>
            {!profile?.is_subscribed && (
              <button className="tap-target px-4 py-2 bg-primary-500 text-white rounded-lg font-medium transition-transform active:scale-95">
                Upgrade
              </button>
            )}
          </div>
        </div>

        <div className="bg-white dark:bg-dark-card rounded-2xl shadow-lg p-6 mb-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Zambian Leaderboard
          </h3>
          <div className="text-center py-8">
            <i className="fas fa-trophy text-5xl text-yellow-500 mb-3"></i>
            <p className="text-gray-600 dark:text-gray-400">
              Complete courses to climb the leaderboard and compete with other Zambian coders!
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <button
            onClick={handleSignOut}
            className="w-full tap-target p-4 bg-white dark:bg-dark-card rounded-xl shadow-md text-gray-700 dark:text-gray-300 font-medium transition-all hover:shadow-lg active:scale-98"
          >
            <i className="fas fa-sign-out-alt mr-2"></i>
            Sign Out
          </button>

          <button
            onClick={() => setShowDeleteConfirm(true)}
            className="w-full tap-target p-4 bg-red-50 dark:bg-red-900/20 rounded-xl text-red-600 dark:text-red-400 font-medium transition-all hover:bg-red-100 dark:hover:bg-red-900/30 active:scale-98"
          >
            <i className="fas fa-trash mr-2"></i>
            Delete Account
          </button>
        </div>

        {showDeleteConfirm && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white dark:bg-dark-card rounded-2xl p-6 max-w-sm w-full">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Delete Account?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                This action cannot be undone. All your progress and data will be permanently deleted.
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowDeleteConfirm(false)}
                  className="flex-1 tap-target px-4 py-3 bg-gray-200 dark:bg-dark-border text-gray-700 dark:text-gray-300 rounded-lg font-medium transition-transform active:scale-95"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDeleteAccount}
                  className="flex-1 tap-target px-4 py-3 bg-red-500 text-white rounded-lg font-medium transition-transform active:scale-95"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
