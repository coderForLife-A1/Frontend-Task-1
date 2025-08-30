import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Star, Rocket } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Geometric pattern background */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'var(--gradient-pattern)',
          backgroundSize: '60px 60px',
          backgroundPosition: '0 0, 0 0, 30px 30px, 30px 30px'
        }}
      />
      
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-auth-pattern opacity-20 rotate-45 rounded-lg" />
      <div className="absolute top-1/3 right-32 w-24 h-24 bg-accent opacity-25 rotate-12 rounded-lg" />
      <div className="absolute bottom-32 left-1/3 w-20 h-20 bg-auth-secondary opacity-20 rotate-45 rounded-lg" />
      <div className="absolute bottom-20 right-1/4 w-28 h-28 bg-auth-pattern-light opacity-30 rotate-12 rounded-lg" />
      
      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div className="text-center max-w-2xl mx-auto">
          <div className="mb-8">
            <div className="mx-auto w-20 h-20 bg-gradient-to-br from-auth-secondary to-accent rounded-2xl flex items-center justify-center mb-6">
              <Star className="w-10 h-10 text-primary-foreground" />
            </div>
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-auth-secondary to-accent bg-clip-text text-transparent">
              Welcome to EntreeEcho
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Your journey starts here. Sign in to continue your adventure or create a new account to begin exploring.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signin">
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-gradient-to-r from-auth-secondary to-accent hover:from-accent hover:to-auth-secondary transition-all duration-300 font-semibold px-8"
              >
                <Star className="w-5 h-5 mr-2" />
                Sign In
              </Button>
            </Link>
            <Link to="/signup">
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full sm:w-auto border-auth-secondary text-auth-secondary hover:bg-auth-secondary hover:text-primary-foreground font-semibold px-8"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
