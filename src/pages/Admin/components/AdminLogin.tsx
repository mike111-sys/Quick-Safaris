import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, User, Lock, Eye, EyeOff, AlertCircle, CheckCircle } from 'lucide-react';
import { FiArrowLeft } from 'react-icons/fi';

// Define prop types explicitly
interface AdminLoginProps {
  loginData: { username: string; password: string };
  setLoginData: React.Dispatch<React.SetStateAction<{ username: string; password: string }>>;
  handleLogin: (e: React.FormEvent) => Promise<void> | void;
  message: string;
}

// Error Boundary Component
class AdminLoginErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error: Error | null }
> {
  state: { hasError: boolean; error: Error | null } = { hasError: false, error: null };

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-4 bg-red-50 border border-red-300 text-red-800 rounded-lg flex items-center">
          <AlertCircle className="w-5 h-5 mr-2" />
          <span>Something went wrong: {this.state.error?.message || 'Unknown error'}</span>
        </div>
      );
    }
    return this.props.children;
  }
}

const AdminLogin: React.FC<AdminLoginProps> = ({ loginData, setLoginData, handleLogin, message }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      await handleLogin(e);
      console.log('Login attempt completed');
    } catch (err) {
      console.error('Error in handleSubmit:', err);
      setError('Failed to sign in. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isError = message && (message.toLowerCase().includes('error') || message.toLowerCase().includes('invalid') || message.toLowerCase().includes('failed'));
  const isSuccess = message && (message.toLowerCase().includes('success') || message.toLowerCase().includes('welcome'));

  return (
    <AdminLoginErrorBoundary>
      <section className="min-h-screen flex items-center justify-center  py-12">
        <div className="w-full max-w-md mx-auto space-y-6">
          {/* Back Button */}
          <button
            type="button"
            onClick={() => navigate("/")}
            className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-lg font-semibold bg-gradient-to-r from-yellow-600 to-yellow-700 text-white hover:from-yellow-700 hover:to-yellow-800 transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-yellow-300"
          >
            <FiArrowLeft size={20} />
            Back to Home
          </button>

          {/* Login Card */}
          <div className="p-8 bg-white rounded-2xl shadow-lg border border-gray-200">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-500 rounded-full mb-4 shadow-md">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-extrabold text-gray-900">Admin Login</h2>
              <p className="mt-2 text-sm text-gray-600">Access the administrative dashboard</p>
            </div>

            {/* Form */}
            <div className="space-y-6">
              {/* Username Field */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Username
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                    <User className="w-5 h-5 text-yellow-500" />
                  </div>
                  <input
                    type="text"
                    placeholder="Enter your username"
                    value={loginData.username}
                    onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
                    onFocus={() => setFocusedField('username')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className={`w-full pl-12 pr-4 py-3 bg-gray-50 border rounded-lg text-gray-900 placeholder-gray-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 ${
                      focusedField === 'username'
                        ? 'border-yellow-500 bg-yellow-50/50 shadow-sm'
                        : 'border-gray-300 hover:border-yellow-400'
                    }`}
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                    <Lock className="w-5 h-5 text-yellow-500" />
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                    value={loginData.password}
                    onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                    onFocus={() => setFocusedField('password')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className={`w-full pl-12 pr-12 py-3 bg-gray-50 border rounded-lg text-gray-900 placeholder-gray-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 ${
                      focusedField === 'password'
                        ? 'border-yellow-500 bg-yellow-50/50 shadow-sm'
                        : 'border-gray-300 hover:border-yellow-400'
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-yellow-500 hover:text-yellow-700 transition-colors duration-200"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting || !loginData.username || !loginData.password}
                className={`w-full py-3 cursor-pointer px-6 rounded-lg font-semibold text-white transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-yellow-300 ${
                  isSubmitting || !loginData.username || !loginData.password
                    ? 'bg-yellow-500 cursor-not-allowed'
                    : 'bg-gradient-to-r from-yellow-600 to-yellow-700 hover:from-yellow-700 hover:to-yellow-800 hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg'
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Signing In...</span>
                  </div>
                ) : (
                  'Sign In'
                )}
              </button>

              {/* Error Display */}
              {error && (
                <div className="flex items-center space-x-2 p-3 rounded-lg bg-red-50 border border-red-300 text-red-800">
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm font-medium">{error}</span>
                </div>
              )}

              {/* Message Display */}
              {message && (
                <div className={`flex items-center space-x-2 p-3 rounded-lg border ${
                  isError
                    ? 'bg-red-50 border-red-300 text-red-800'
                    : isSuccess
                    ? 'bg-green-50 border-green-300 text-green-800'
                    : 'bg-gray-50 border-gray-300 text-gray-800'
                }`}>
                  {isError ? (
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  ) : isSuccess ? (
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  ) : (
                    <Shield className="w-5 h-5 flex-shrink-0" />
                  )}
                  <span className="text-sm font-medium">{message}</span>
                </div>
              )}

              {/* Security Note */}
              <div className="text-center">
                <p className="text-xs text-yellow-600 bg-yellow-50 px-4 py-2 rounded-lg">
                  🔒 Your credentials are encrypted and secure
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AdminLoginErrorBoundary>
  );
};

export default AdminLogin;