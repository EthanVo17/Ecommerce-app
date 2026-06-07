interface SubmitTypes {
  isLoading: any;
  children: any;
}

function SubmitButton({ isLoading, children }: SubmitTypes) {
  return (
    <button
      disabled={isLoading}
      type="submit"
      className={`w-full py-2 px-4 text-white font-semibold rounded-md transition-colors cursor-pointer ${
        isLoading
          ? 'bg-blue-400 cursor-not-allowed'
          : 'bg-blue-600 hover:bg-blue-700'
      }`}
    >
      {children}
    </button>
  );
}

export default SubmitButton;
