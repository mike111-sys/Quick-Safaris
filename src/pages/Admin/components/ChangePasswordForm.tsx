import React, { useState } from 'react';
import { Lock, Eye, EyeOff } from 'lucide-react';

type Props = {
  changePw: { oldPassword: string; newPassword: string };
  setChangePw: React.Dispatch<React.SetStateAction<{ oldPassword: string; newPassword: string }>>;
  handleChangePassword: (e: React.FormEvent) => void;
};

const ChangePasswordForm: React.FC<Props> = ({ changePw, setChangePw, handleChangePassword }) => {
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  return (
    <div className="w-full max-w-md mx-auto p-8 bg-white rounded-2xl shadow-2xl border border-yellow-100">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full mb-4 shadow-lg">
          <Lock className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-yellow-900 mb-2">Change Password</h3>
        <p className="text-yellow-600 text-sm">Update your password to keep your account secure</p>
      </div>

      {/* Form */}
      <div className="space-y-6">
        {/* Old Password Field */}
        <div className="relative">
          <label className="block text-sm font-medium text-yellow-900 mb-2">
            Current Password
          </label>
          <div className="relative">
            <input
              type={showOldPassword ? "text" : "password"}
              placeholder="Enter your current password"
              value={changePw.oldPassword}
              onChange={e => setChangePw({ ...changePw, oldPassword: e.target.value })}
              onFocus={() => setFocusedField('oldPassword')}
              onBlur={() => setFocusedField(null)}
              required
              className={`w-full px-4 py-3 pr-12 bg-white border-2 rounded-xl text-yellow-900 placeholder-yellow-400 transition-all duration-300 focus:outline-none ${
                focusedField === 'oldPassword'
                  ? 'border-yellow-500 shadow-lg shadow-yellow-200/50 bg-yellow-50/30'
                  : 'border-yellow-200 hover:border-yellow-300'
              }`}
            />
            <button
              type="button"
              onClick={() => setShowOldPassword(!showOldPassword)}
              className="absolute cursor-pointer right-3 top-1/2 transform -translate-y-1/2 text-yellow-400 hover:text-yellow-600 transition-colors duration-200"
            >
              {showOldPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* New Password Field */}
        <div className="relative">
          <label className="block text-sm font-medium text-yellow-900 mb-2">
            New Password
          </label>
          <div className="relative">
            <input
              type={showNewPassword ? "text" : "password"}
              placeholder="Enter your new password"
              value={changePw.newPassword}
              onChange={e => setChangePw({ ...changePw, newPassword: e.target.value })}
              onFocus={() => setFocusedField('newPassword')}
              onBlur={() => setFocusedField(null)}
              required
              className={`w-full px-4 py-3 pr-12 bg-white border-2 rounded-xl text-yellow-900 placeholder-yellow-400 transition-all duration-300 focus:outline-none ${
                focusedField === 'newPassword'
                  ? 'border-yellow-500 shadow-lg shadow-yellow-200/50 bg-yellow-50/30'
                  : 'border-yellow-200 hover:border-yellow-300'
              }`}
            />
            <button
              type="button"
              onClick={() => setShowNewPassword(!showNewPassword)}
              className="absolute cursor-pointer right-3 top-1/2 transform -translate-y-1/2 text-yellow-400 hover:text-yellow-600 transition-colors duration-200"
            >
              {showNewPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="button"
          onClick={handleChangePassword}
          className="w-full bg-gradient-to-r cursor-pointer from-yellow-500 to-yellow-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-yellow-600 hover:to-yellow-700 focus:from-yellow-600 focus:to-yellow-700 focus:outline-none focus:ring-4 focus:ring-yellow-200 transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          Update Password
        </button>

        {/* Security Note */}
        <div className="text-center">
          <p className="text-xs text-yellow-500 bg-yellow-50 px-4 py-2 rounded-lg">
            🔒 Your password will be encrypted and stored securely
          </p>
        </div>
        </div>
    </div>
  );
};


export default ChangePasswordForm;