import { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen bg-auth-bg flex items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;