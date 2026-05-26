// file: src/app/(auth)/login/page.tsx
import { LoginForm } from 'components/*';

export default function LoginPage() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <LoginForm />
    </div>
  );
}
