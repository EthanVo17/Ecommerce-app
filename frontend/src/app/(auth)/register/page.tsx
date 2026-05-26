// file: src/app/(auth)/register/page.tsx
import { RegisterForm } from 'components/*';

export default function RegisterPage() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <RegisterForm />
    </div>
  );
}
