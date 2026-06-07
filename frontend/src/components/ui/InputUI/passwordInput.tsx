import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';

import { PasswordInputTypes } from '@/src/types';
import { PasswordValidate } from 'auth/';

function PasswordInput({ value, error, onChange }: PasswordInputTypes) {
  const [showPassword, setShowPassword] = React.useState(false);
  const [capsLockOn, setCapsLockON] = React.useState(false);

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    setCapsLockON(e.getModifierState('CapsLock'));
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const strength = PasswordValidate(value);

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
        Mật khẩu
      </label>

      <input
        type={showPassword ? 'text' : 'password'}
        value={value}
        onChange={onChange}
        onKeyUp={handleKeyUp}
        name="password"
        className={`mt-1 w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 ${
          error ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
        }`}
      />

      {capsLockOn && (
        <p className="text-xs mt-1 font-medium text-red-500">
          CapsLock đang bật
        </p>
      )}

      {value && (
        <div className={`mt-2 flex items-center gap-2`}>
          <div className="h-2 flex-1 flex gap-1 rounded overflow-hidden bg-gray-200 dark:bg-gray-600">
            <div
              className={`h-full w-1/3 ${strength.color.split(' ')[0]}`}
            ></div>
            <div
              className={`h-full w-1/3 ${strength.text !== 'Yếu' ? strength.color.split(' ')[0] : 'bg-transparent'}`}
            ></div>
            <div
              className={`h-full w-1/3 ${strength.text === 'Mạnh' ? strength.color.split(' ')[0] : 'bg-transparent'}`}
            ></div>
          </div>
          <span
            className={`text-xs font-semibold ${strength.color.split(' ')[1]}`}
          >
            {strength.text}
          </span>

          <button>
            <FontAwesomeIcon
              icon={showPassword ? faEyeSlash : faEye}
              className={`text-gray-500 hover:text-gray-700 transition ${showPassword ? 'text-blue-500' : ''}`}
              onClick={togglePasswordVisibility}
            />
          </button>
        </div>
      )}
    </div>
  );
}

export default PasswordInput;
