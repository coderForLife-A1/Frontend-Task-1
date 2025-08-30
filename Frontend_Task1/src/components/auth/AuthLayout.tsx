import { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Geometric pattern background */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'var(--gradient-pattern)',
          backgroundSize: '40px 40px',
          backgroundPosition: '0 0, 0 0, 20px 20px, 20px 20px'
        }}
      />
      
      {/* Floating geometric shapes */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-auth-pattern opacity-20 rotate-45 rounded-lg" />
      <div className="absolute top-1/4 right-20 w-16 h-16 bg-accent opacity-25 rotate-12 rounded-lg" />
      <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-auth-secondary opacity-20 rotate-45 rounded-lg" />
      <div className="absolute bottom-32 right-1/3 w-24 h-24 bg-auth-pattern-light opacity-30 rotate-12 rounded-lg" />
      
      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;