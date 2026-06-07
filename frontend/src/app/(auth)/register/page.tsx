// file: src/app/(auth)/register/page.tsx
import { RegisterForm } from 'components/*';

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center dark:bg-gray-900 bg-gray-50">
      <div className="max-w-md w-full p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <RegisterForm />
      </div>
    </div>
  );
}
