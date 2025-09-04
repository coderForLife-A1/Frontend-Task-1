import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-auth-bg">
      <div className="text-center max-w-md mx-auto p-8 animate-fade-in">
        <div className="flex justify-center mb-8">
          <div className="w-20 h-20 bg-gradient-primary rounded-3xl flex items-center justify-center shadow-button animate-float">
            <span className="text-4xl text-primary-foreground">✚</span>
          </div>
        </div>
        <h1 className="text-5xl font-bold mb-6 text-foreground animate-fade-in" style={{ animationDelay: '0.2s' }}>
          StarPills
        </h1>
        <p className="text-xl text-muted-foreground mb-10 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          Welcome to your health journey
        </p>
        
        <div className="space-y-4">
          <Link to="/signin" className="block animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button className="w-full bg-gradient-button hover:bg-gradient-button-hover text-primary-foreground rounded-xl py-4 text-lg font-semibold shadow-button hover:shadow-button-hover transition-all duration-300 transform hover:scale-[1.02]">
              Sign In
            </Button>
          </Link>
          
          <Link to="/signup" className="block animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <Button variant="outline" className="w-full rounded-xl py-4 text-lg font-semibold border-2 border-border hover:bg-muted transition-all duration-300 transform hover:scale-[1.02]">
              Create Account
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
