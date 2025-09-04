import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import AuthLayout from "@/components/auth/AuthLayout";
import SocialButtons from "@/components/auth/SocialButtons";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle sign in logic here
    console.log("Sign in:", { email, password });
  };

  return (
    <AuthLayout>
      <div className="grid lg:grid-cols-3 gap-0 rounded-3xl overflow-hidden shadow-auth animate-fade-in">
        {/* Sign In Form */}
        <Card className="border-0 rounded-none lg:rounded-l-3xl bg-gradient-card backdrop-blur-sm animate-scale-in">
          <CardHeader className="text-center pt-8 pb-6">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-button animate-float">
                <span className="text-3xl text-primary-foreground">✚</span>
              </div>
            </div>
            <h1 className="text-2xl font-bold text-foreground">Sign in to StarPills</h1>
            <SocialButtons />
          </CardHeader>
          
          <CardContent className="px-8 pb-8">
            <div className="text-center mb-6">
              <span className="text-sm text-muted-foreground">or use your email account:</span>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <Label htmlFor="email" className="text-sm font-semibold">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded-xl border-2 border-border bg-input/50 backdrop-blur-sm focus:border-primary transition-all duration-300 hover:border-primary/50"
                  placeholder="Enter your email"
                  required
                />
              </div>
              
              <div className="space-y-2 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <Label htmlFor="password" className="text-sm font-semibold">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="rounded-xl border-2 border-border bg-input/50 backdrop-blur-sm focus:border-primary transition-all duration-300 hover:border-primary/50"
                  placeholder="Enter your password"
                  required
                />
              </div>
              
              <Button
                type="submit"
                className="w-full bg-gradient-button hover:bg-gradient-button-hover text-primary-foreground rounded-xl font-semibold py-3 shadow-button hover:shadow-button-hover transition-all duration-300 transform hover:scale-[1.02] animate-fade-in"
                style={{ animationDelay: '0.4s' }}
              >
                Sign In
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Welcome Section */}
        <div className="hidden lg:flex bg-gradient-welcome items-center justify-center text-center text-auth-welcome-foreground p-8 relative overflow-hidden animate-scale-in" style={{ animationDelay: '0.2s' }}>
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>Welcome Back!</h2>
            <p className="mb-8 text-xl opacity-90 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              Don't have an account?
            </p>
            <Link to="/signup">
              <Button
                variant="outline"
                className="border-2 border-auth-welcome-foreground text-auth-welcome-foreground hover:bg-auth-welcome-foreground hover:text-auth-welcome rounded-xl px-10 py-3 font-semibold transition-all duration-300 transform hover:scale-105 animate-fade-in"
                style={{ animationDelay: '0.6s' }}
              >
                Sign Up
              </Button>
            </Link>
          </div>
          {/* Enhanced Background pattern */}
          <div className="absolute inset-0">
            <div className="w-full h-full opacity-20" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='white' fill-opacity='0.1'%3E%3Ccircle cx='20' cy='20' r='3'/%3E%3Ccircle cx='0' cy='20' r='3'/%3E%3Ccircle cx='40' cy='20' r='3'/%3E%3Ccircle cx='20' cy='0' r='3'/%3E%3Ccircle cx='20' cy='40' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>
        </div>

        {/* Create Account Preview (Mobile) */}
        <div className="lg:hidden bg-gradient-card p-6 text-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <p className="text-sm text-muted-foreground mb-4">Don't have an account?</p>
          <Link to="/signup">
            <Button variant="outline" className="rounded-xl px-6 py-2 transition-all duration-300 hover:scale-105">
              Create Account
            </Button>
          </Link>
        </div>

        {/* Sign Up Preview (Desktop) */}
        <Card className="hidden lg:block border-0 rounded-none lg:rounded-r-3xl bg-gradient-card backdrop-blur-sm animate-scale-in" style={{ animationDelay: '0.4s' }}>
          <CardContent className="p-8 h-full flex flex-col justify-center">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-card animate-float" style={{ animationDelay: '1s' }}>
                  <span className="text-3xl text-primary-foreground">✚</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3">Create Account</h3>
              <p className="text-muted-foreground mb-8 text-lg">Start your journey with us</p>
              <Link to="/signup">
                <Button className="bg-gradient-button hover:bg-gradient-button-hover text-primary-foreground rounded-xl px-8 py-3 font-semibold shadow-button hover:shadow-button-hover transition-all duration-300 transform hover:scale-105">
                  Sign Up
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </AuthLayout>
  );
};

export default SignIn;