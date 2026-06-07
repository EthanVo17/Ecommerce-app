import React from 'react';

import { InputFieldTypes } from 'types/';

function InputField({
  label,
  id,
  type,
  name,
  placeholder,
  autoFocus = false,
  error,
  value,
  onChange,
}: InputFieldTypes) {
  const inputRef = React.useRef<HTMLInputElement>(null);
  React.useEffect(() => {
    if (autoFocus && inputRef.current) inputRef.current.focus();
  }, [autoFocus]);

  return (
    <div>
      <label
        className="block text-sm font-medium text-gray-300 mb-1"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        id={id}
        autoFocus={autoFocus}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition ${error ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'}`}
        placeholder={placeholder}
        ref={inputRef}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}

export default InputField;
