interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  type?: string;
  placeholder?: string;
}

function InputField({
  label,
  id,
  type = 'text',
  placeholder,
  ...props
}: InputFieldProps) {
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
        type={type}
        {...props}
        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
        placeholder={placeholder}
      />
    </div>
  );
}

export default InputField;
